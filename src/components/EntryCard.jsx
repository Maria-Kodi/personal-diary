export default function EntryCard({ entry, onView }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">

      {entry.imageUrl && (
        <figure>
          <img
            src={entry.imageUrl}
            alt={entry.title}
            className="h-44 w-full object-cover"/>
        </figure>
      )}

      <div className="card-body">
        <h2 className="card-title text-lg">
          {entry.title}
        </h2>

        <p className="text-xs opacity-60">
          {entry.date}
        </p>

        <p className="text-sm opacity-80">
          {entry.content.length > 120
            ? entry.content.slice(0, 120) + "..."
            : entry.content}
        </p>

        <div className="card-actions justify-end">
          <button
            className="btn btn-sm btn-outline"
            onClick={() => onView(entry)}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}