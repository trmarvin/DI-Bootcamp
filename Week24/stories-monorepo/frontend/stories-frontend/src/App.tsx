import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setUser } from "./features/user/userSlice";

export default function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth.user);

  return (
    <div className="p-4">
      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch(setUser({ id: "1", email: "tamar@example.com", name: "Tamar" }))
        }
      >
        Set user
      </button>

      <pre className="mt-4">{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}