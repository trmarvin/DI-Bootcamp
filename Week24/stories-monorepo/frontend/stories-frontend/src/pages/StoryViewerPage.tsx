import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchStoryById,
  updateDraft,
  discardDraft,
  saveStory,
  deleteStory,
  createStory,
} from "../features/stories/storiesSlice";

export default function StoryViewerPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { selected, drafts, status, error } = useAppSelector((s) => s.stories);

  const draft = useMemo(() => {
    if (!id) return null;
    return drafts[id] ?? null;
  }, [drafts, id]);

  useEffect(() => {
    if (id) dispatch(fetchStoryById(id));
  }, [dispatch, id]);

  const [saving, setSaving] = useState(false);

  const canRender = Boolean(id && selected && selected.id === id);

  const onSave = async () => {
    if (!id || !draft) return;
    setSaving(true);
    try {
      await dispatch(saveStory({ id, story: draft })).unwrap();
      // optional: navigate("/dashboard") or show a toast later
    } finally {
      setSaving(false);
    }
  };

  const onReset = () => {
    if (!id) return;
    // discard local edits and re-fetch from backend
    dispatch(discardDraft(id));
    dispatch(fetchStoryById(id));
  };

  const [deleting, setDeleting] = useState(false);
  const [creating, setCreating] = useState(false);

  const onCreate = async () => {
    setCreating(true);
    try {
      const created = await dispatch(
        createStory({ title: "Untitled story", content: "" })
      ).unwrap();
      navigate(`/stories/${created.id}`);
    } finally {
      setCreating(false);
    }
  };

  const onDelete = async () => {
    if (!id) return;
    if (!confirm("Delete this story? This cannot be undone.")) return;

    setDeleting(true);
    try {
      await dispatch(deleteStory(id)).unwrap();
      navigate("/dashboard");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Link to="/dashboard" className="btn btn-ghost btn-sm">
              ← Back
            </Link>
            <h1 className="text-xl font-bold">Story</h1>
          </div>

          <div className="flex gap-2">
            <button className="btn btn-ghost btn-sm" onClick={onReset}>
              Reset
            </button>

            <button
              className={`btn btn-primary btn-sm ${saving ? "loading" : ""}`}
              onClick={onSave}
              disabled={!draft || saving}
            >
              Save
            </button>

            <div className="flex gap-2">
              <button
                className={`btn btn-outline btn-sm ${
                  creating ? "loading" : ""
                }`}
                onClick={onCreate}
                disabled={creating}
              >
                New
              </button>

              <button className="btn btn-ghost btn-sm" onClick={onReset}>
                Reset
              </button>

              <button
                className={`btn btn-primary btn-sm ${saving ? "loading" : ""}`}
                onClick={onSave}
                disabled={!draft || saving}
              >
                Save
              </button>

              <button
                className={`btn btn-error btn-sm ${deleting ? "loading" : ""}`}
                onClick={onDelete}
                disabled={!id || deleting}
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        {status === "loading" && (
          <div className="mt-6">
            <div className="loading loading-spinner loading-lg" />
          </div>
        )}

        {error && (
          <div className="mt-6 alert alert-error">
            <span>{error}</span>
          </div>
        )}

        {!canRender && status !== "loading" && !error && (
          <div className="mt-6 alert">
            <span>Story not found (or not loaded yet).</span>
          </div>
        )}

        {canRender && draft && (
          <div className="mt-6 grid gap-4">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Title</span>
                  </div>
                  <input
                    className="input input-bordered w-full"
                    value={draft.title ?? ""}
                    onChange={(e) =>
                      dispatch(
                        updateDraft({
                          id: id!,
                          changes: { title: e.target.value },
                        })
                      )
                    }
                  />
                </label>

                <label className="form-control w-full mt-4">
                  <div className="label">
                    <span className="label-text">Content</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered min-h-[220px]"
                    value={draft.content ?? ""}
                    onChange={(e) =>
                      dispatch(
                        updateDraft({
                          id: id!,
                          changes: { content: e.target.value },
                        })
                      )
                    }
                  />
                </label>

                <div className="mt-4 flex flex-wrap gap-2 opacity-80 text-sm">
                  <span className="badge badge-outline">
                    ID: {selected!.id}
                  </span>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">Contributors</h2>
                <p className="opacity-70">
                  (Coming next) Display contributors + comments.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
