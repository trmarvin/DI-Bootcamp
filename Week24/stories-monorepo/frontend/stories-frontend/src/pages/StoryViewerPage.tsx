import { useParams } from "react-router-dom";

export default function StoryViewerPage() {
  const { id } = useParams();
  return <div className="p-4">StoryViewerPage for: {id}</div>;
}