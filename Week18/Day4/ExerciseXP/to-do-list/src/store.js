// src/store.js
import { createStore } from "redux";

// Action Types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

// Action Creators
export function addTodo(text) {
  return { type: ADD_TODO, payload: text };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, payload: index };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, payload: index };
}

// Initial State – IMPORTANT: array of OBJECTS, not strings
const initialState = {
  todos: []
};

// Reducer
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload, completed: false }
        ]
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload)
      };

    default:
      return state;
  }
}

export const store = createStore(todoReducer);