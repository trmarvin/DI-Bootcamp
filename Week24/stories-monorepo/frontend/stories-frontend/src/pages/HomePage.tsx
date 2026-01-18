import { Link } from "react-router-dom";
import storyHero from "../assets/story-hero.png";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Simple top nav */}
      <div className="navbar bg-base-100 border-b">
        <div className="max-w-6xl mx-auto w-full px-6">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              Stories
            </Link>
          </div>
          <div className="flex-none gap-2">
            <Link to="/login" className="btn btn-ghost">
              Log in
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Write, remix, and collaborate on stories.
            </h1>

            <p className="mt-4 text-lg opacity-80 max-w-xl">
              A simple place to draft stories, invite contributors, and keep everything
              organized. Sign up to start writing.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link to="/signup" className="btn btn-primary">
                Get started
              </Link>
              <Link to="/login" className="btn btn-outline">
                I already have an account
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <div className="badge badge-outline">Dark mode</div>
              <div className="badge badge-outline">Collaboration</div>
              <div className="badge badge-outline">Versioned drafts</div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={storyHero}
              alt="Story collaboration"
              className="w-full max-w-md lg:max-w-lg rounded-xl object-contain"
            />
          </div>
        </div>

        {/* ✅ Secondary section stays inside container */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Draft locally</h2>
              <p className="opacity-70">Edit safely before saving.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Contributors</h2>
              <p className="opacity-70">Invite others to collaborate on your story.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Comments</h2>
              <p className="opacity-70">Discuss changes without losing context.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}