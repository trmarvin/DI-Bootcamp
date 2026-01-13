import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Story } from "../../models/story";
import { api } from "../../api/client";

type StoriesState = {
  items: Story[];
  selected: Story | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: StoriesState = {
  items: [],
  selected: null,
  status: "idle",
  error: null,
};

export const fetchStories = createAsyncThunk<Story[]>(
  "stories/fetchStories",
  async () => api<Story[]>("/stories")
);

export const fetchStoryById = createAsyncThunk<Story, string>(
  "stories/fetchStoryById",
  async (id) => api<Story>(`/stories/${id}`)
);

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    clearSelected(state) {
      state.selected = null;
    },
  },
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
      });
  },
});

export const { clearSelected } = storiesSlice.actions;
export default storiesSlice.reducer;