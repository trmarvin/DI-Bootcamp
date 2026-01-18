import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "../../models/user";
import { api } from "../../api/client";
import type { PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  user: User | null;
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  fieldErrors: Record<string, string> | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
  fieldErrors: null,
};

type LoginRequest = { emailOrUsername: string; password: string };
type LoginResponse = { user: User; token: string };

export const login = createAsyncThunk<LoginResponse, LoginRequest>(
  "auth/login",
  async (body) => {
    return api<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }
);

type RegisterRequest = { email: string; password: string; username: string };
type AuthResponse = { user: User; token: string };
type AuthError = { message: string; fieldErrors?: Record<string, string> };

export const register = createAsyncThunk<
  AuthResponse,
  RegisterRequest,
  { rejectValue: AuthError }
>("auth/register", async (body, { rejectWithValue }) => {
  try {
    return await api<AuthResponse>("/auth/register", {
      method: "POST",
      body: JSON.stringify(body),
    });
  } catch (err) {
    return rejectWithValue(err as AuthError);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
    },
    hydrate(
      state,
      action: PayloadAction<{ user: User | null; token: string | null }>
    ) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.fieldErrors = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Login failed";
      })
      .addCase(register.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.fieldErrors = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message ?? "Registration failed";
        state.fieldErrors = action.payload?.fieldErrors;
      });
  },
});

export const { setUser, logout, hydrate } = authSlice.actions;
export default authSlice.reducer;
