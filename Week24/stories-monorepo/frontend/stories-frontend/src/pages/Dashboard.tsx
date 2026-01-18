import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchStories } from "../features/stories/storiesSlice";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((s) => s.stories);

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Your Stories</h1>

      {status === "loading" && (
        <div className="loading loading-spinner loading-lg" />
      )}
      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {items.map((s) => (
          <div key={s.id} className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">{s.title}</h2>
              <p className="opacity-70">
                Author: {s.author?.username ?? s.author?.email ?? "Unknown"}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Open</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
