import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const { user } = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();

  return (
    <div className="navbar bg-base-100 border-b">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Storage App</a>
      </div>
      <div className="flex-none gap-2">
        {user ? (
          <>
            <span className="opacity-70 hidden sm:inline">{user.email}</span>
            <button className="btn btn-outline" onClick={() => dispatch(logout())}>
              Logout
            </button>
          </>
        ) : (
          <span className="opacity-70">Not signed in</span>
        )}
      </div>
    </div>
  );
}