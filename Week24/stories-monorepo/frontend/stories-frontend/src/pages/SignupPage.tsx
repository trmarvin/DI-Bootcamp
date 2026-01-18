import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { register } from "../features/auth/authSlice";

export default function SignupPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user, status, error } = useAppSelector((s) => s.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/dashboard"); // or "/"
    }
  }, [user, navigate]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(register({ username, email, password }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center">Create an account</h1>

          {error && (
            <div className="alert alert-error mt-4">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                className="input input-bordered w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <label className="label">
                <span className="label-text-alt opacity-70">
                  Use 6+ characters
                </span>
              </label>
            </div>

            <button
              type="submit"
              className={`btn btn-primary w-full ${
                status === "loading" ? "loading" : ""
              }`}
              disabled={status === "loading"}
            >
              Sign up
            </button>
          </form>

          <p className="text-center text-sm mt-4 opacity-80">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
