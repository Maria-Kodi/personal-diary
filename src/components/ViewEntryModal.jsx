export default function ViewEntryModal({ isOpen, onClose, entry, onDelete }) {
  if (!isOpen || !entry) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">

        <h2 className="text-xl font-bold mb-2">
          {entry.title}
        </h2>

        <p className="text-sm opacity-60 mb-4">
          {entry.date}
        </p>

        {entry.imageUrl && (
          <img
            src={entry.imageUrl}
            alt={entry.title}
            className="w-full h-48 object-cover rounded mb-4"
          />
        )}

        <p className="mb-6">
          {entry.content}
        </p>

        <div className="modal-action">
          <button className="btn btn-error btn-outline" onClick={() => {
            onDelete(entry.id);
            onClose();
          }}>
            Delete
          </button>

          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}