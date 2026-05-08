import EntryCard from "./EntryCard";

export default function EntryList({ entries = [], onView }) {

  if (entries.length === 0) {
    return (
      <div className="text-center opacity-60 mt-10">
        <p className="text-lg font-medium">No entries yet</p>
        <p className="text-sm">Click "Add Entry" to create your first diary entry ✍️</p>
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