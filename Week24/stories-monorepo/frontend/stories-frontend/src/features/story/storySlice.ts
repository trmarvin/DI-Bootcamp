import type { Story } from "../../models/story";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


type StoryState = {
  stories: Story[];
  selectedStoryId: string | null;
};

const initialState: StoryState = {
  stories: [],
  selectedStoryId: null,
};

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    setStories(state, action: PayloadAction<Story[]>) {
      state.stories = action.payload;
    },
    addStory(state, action: PayloadAction<Story>) {
      state.stories.unshift(action.payload);
    },
    updateStory(state, action: PayloadAction<Story>) {
      const idx = state.stories.findIndex((s) => s.id === action.payload.id);
      if (idx !== -1) state.stories[idx] = action.payload;
    },
    removeStory(state, action: PayloadAction<string>) {
      state.stories = state.stories.filter((s) => s.id !== action.payload);
    },
    selectStory(state, action: PayloadAction<string | null>) {
      state.selectedStoryId = action.payload;
    },
  },
});

export const { setStories, addStory, updateStory, removeStory, selectStory } =
  storySlice.actions;
export default storySlice.reducer;