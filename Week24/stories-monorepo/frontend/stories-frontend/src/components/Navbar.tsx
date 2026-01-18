import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../features/auth/authSlice";

export default function NavBar() {
  const { user } = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100 border-b">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Stories
          </Link>
        </div>

        <div className="flex-none gap-2">
          {user ? (
            <>
              <span className="text-sm opacity-80">
                Hi, {user.username ?? user.email}
              </span>
              <Link className="btn btn-ghost" to="/dashboard">
                Dashboard
              </Link>
              <button
                className="btn btn-outline"
                onClick={() => {
                  dispatch(logout());
                  navigate("/login");
                }}
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">
                Log in
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
