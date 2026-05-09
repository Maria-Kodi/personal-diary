import EntryCard from "./EntryCard";
import diaryImage from "../assets/diary-cover.jpg";
import { Feather } from "lucide-react";

export default function EntryList({ entries = [], onView }) {

  if (entries.length === 0) {
    return (
      <div className="text-center mt-10">

        <p className="text-lg font-medium">No entries yet</p>

        <p className="text-sm">
          Click "Add Entry" to create your first diary entry ✍️
        </p>

        <div className="mt-2">
          <p className="text-sm opacity-50 italic">
            Your thoughts and memories start here
          </p>

          <Feather
            size={14}
            className="mx-auto mt-1 text-[#5A825C] opacity-60"
          />
        </div>

        {/* IMAGE UNDER TEXT */}
        <div className="mt-6">
          <img
            src={diaryImage}
            alt="Diary"
            className="w-full h-72 object-cover object-bottom rounded-lg shadow-md"
          />
        </div>

      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          onView={onView}
        />
      ))}
    </div>
  );
}