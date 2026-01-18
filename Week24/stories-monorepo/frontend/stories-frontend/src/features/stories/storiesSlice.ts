import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Story } from "../../models/story";
import { api } from "../../api/client";
import type { PayloadAction } from "@reduxjs/toolkit";

/* ======================
   STATE
====================== */

type StoriesState = {
  items: Story[];
  selected: Story | null;

  // 3️⃣ draft editing state
  drafts: Record<string, Partial<Story>>;

  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: StoriesState = {
  items: [],
  selected: null,

  // 3️⃣ initial drafts
  drafts: {},

  status: "idle",
  error: null,
};

/* ======================
   ASYNC THUNKS
====================== */

export const fetchStories = createAsyncThunk<Story[]>(
  "stories/fetchStories",
  async () => api<Story[]>("/stories")
);

export const fetchStoryById = createAsyncThunk<Story, string>(
  "stories/fetchStoryById",
  async (id) => api<Story>(`/stories/${id}`)
);

// 4️⃣ SAVE STORY THUNK (sync with backend)
export const saveStory = createAsyncThunk<
  Story,
  { id: string; story: Partial<Story> }
>(
  "stories/saveStory",
  async ({ id, story }) =>
    api<Story>(`/stories/${id}`, {
      method: "PUT",
      body: JSON.stringify(story),
    })
);

/* ======================
   SLICE
====================== */

const storiesSlice = createSlice({
  name: "stories",
  initialState,

  /* --------
     3️⃣ SYNC REDUCERS
     (local editing, no backend)
  -------- */
  reducers: {
    clearSelected(state) {
      state.selected = null;
    },

    // start editing a story
    beginEdit(state, action: PayloadAction<string>) {
      const id = action.payload;
      const story =
        state.items.find((s) => s.id === id) ?? state.selected;

      if (!story) return;

      state.drafts[id] = { ...story };
    },

    // update draft fields
    updateDraft(
      state,
      action: PayloadAction<{
        id: string;
        changes: Partial<Story>;
      }>
    ) {
      const { id, changes } = action.payload;

      state.drafts[id] = {
        ...(state.drafts[id] ?? {}),
        ...changes,
      };
    },

    // discard local edits
    discardDraft(state, action: PayloadAction<string>) {
      delete state.drafts[action.payload];
    },
  },

  /* --------
     ASYNC RESULTS
  -------- */
  extraReducers(builder) {
    builder
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
      .addCase(fetchStoryById.fulfilled, (state, action) => {
        state.selected = action.payload;
      })

      // 4️⃣ COMMIT SAVED STORY FROM BACKEND
      .addCase(saveStory.fulfilled, (state, action) => {
        const saved = action.payload;

        state.selected = saved;

        const idx = state.items.findIndex(
          (s) => s.id === saved.id
        );

        if (idx !== -1) {
          state.items[idx] = saved;
        } else {
          state.items.unshift(saved);
        }

        // remove draft after successful save
        delete state.drafts[saved.id];
      });
  },
});

/* ======================
   EXPORTS
====================== */

export const {
  clearSelected,
  beginEdit,
  updateDraft,
  discardDraft,
} = storiesSlice.actions;

export default storiesSlice.reducer;