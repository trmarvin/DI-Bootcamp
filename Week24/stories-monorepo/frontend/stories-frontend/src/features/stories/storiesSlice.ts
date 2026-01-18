import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Story } from "../../models/story";
import { api } from "../../api/client";

/* ======================
   STATE
====================== */

type StoriesState = {
  items: Story[];
  selected: Story | null;

  // Draft editing state (local unsaved changes)
  drafts: Record<string, Partial<Story>>;

  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: StoriesState = {
  items: [],
  selected: null,
  drafts: {},
  status: "idle",
  error: null,
};

/* ======================
   ASYNC THUNKS
====================== */

// READ: list
export const fetchStories = createAsyncThunk<Story[]>(
  "stories/fetchStories",
  async () => api<Story[]>("/stories")
);

// READ: one
export const fetchStoryById = createAsyncThunk<Story, string>(
  "stories/fetchStoryById",
  async (id) => api<Story>(`/stories/${id}`)
);

// UPDATE: save existing story
export const saveStory = createAsyncThunk<
  Story,
  { id: string; story: Partial<Story> }
>("stories/saveStory", async ({ id, story }) =>
  api<Story>(`/stories/${id}`, {
    method: "PUT", // change to PATCH if your backend uses PATCH
    body: JSON.stringify(story),
  })
);

// CREATE: new story
export const createStory = createAsyncThunk<
  Story,
  { title: string; content: string }
>("stories/createStory", async (body) =>
  api<Story>("/stories", {
    method: "POST",
    body: JSON.stringify(body),
  })
);

// DELETE: story
export const deleteStory = createAsyncThunk<{ id: string }, string>(
  "stories/deleteStory",
  async (id) =>
    api<{ id: string }>(`/stories/${id}`, {
      method: "DELETE",
    })
);

/* ======================
   SLICE
====================== */

const storiesSlice = createSlice({
  name: "stories",
  initialState,

  reducers: {
    clearSelected(state) {
      state.selected = null;
    },

    // Optional: start editing explicitly (not required if we seed drafts on fetchStoryById.fulfilled)
    beginEdit(state, action: PayloadAction<string>) {
      const id = action.payload;
      const story = state.items.find((s) => s.id === id) ?? state.selected;
      if (!story) return;
      state.drafts[id] = { ...story };
    },

    // Update draft fields
    updateDraft(
      state,
      action: PayloadAction<{ id: string; changes: Partial<Story> }>
    ) {
      const { id, changes } = action.payload;
      state.drafts[id] = {
        ...(state.drafts[id] ?? {}),
        ...changes,
      };
    },

    // Discard local edits
    discardDraft(state, action: PayloadAction<string>) {
      delete state.drafts[action.payload];
    },
  },

  extraReducers(builder) {
    builder
      // fetchStories
      .addCase(fetchStories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchStories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to load stories";
      })

      // fetchStoryById (ONLY ONE fulfilled handler — fixes your crash)
      .addCase(fetchStoryById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchStoryById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selected = action.payload;

        // Seed draft so viewer inputs show values immediately
        state.drafts[action.payload.id] = {
          title: action.payload.title,
          content: action.payload.content,
        };
      })
      .addCase(fetchStoryById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to load story";
      })

      // createStory
      .addCase(createStory.fulfilled, (state, action) => {
        const created = action.payload;
        state.items.unshift(created);
        state.selected = created;

        state.drafts[created.id] = {
          title: created.title,
          content: created.content,
        };
      })

      // deleteStory
      .addCase(deleteStory.fulfilled, (state, action) => {
        const { id } = action.payload;
        state.items = state.items.filter((s) => s.id !== id);
        if (state.selected?.id === id) state.selected = null;
        delete state.drafts[id];
      })

      // saveStory (update)
      .addCase(saveStory.fulfilled, (state, action) => {
        const saved = action.payload;

        state.selected = saved;

        const idx = state.items.findIndex((s) => s.id === saved.id);
        if (idx !== -1) state.items[idx] = saved;
        else state.items.unshift(saved);

        // remove draft after successful save
        delete state.drafts[saved.id];
      });
  },
});

export const { clearSelected, beginEdit, updateDraft, discardDraft } =
  storiesSlice.actions;

export default storiesSlice.reducer;
