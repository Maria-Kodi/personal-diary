import { useState } from "react";

export default function AddEntryModal({ isOpen, onClose, onAddEntry }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // FR010 - validation (simple)
    if (!title || !date || !imageUrl || !content) {
      alert("Please fill all fields");
      return;
    }

    const newEntry = {
      id: crypto.randomUUID(),
      title,
      date,
      imageUrl,
      content,
    };

    onAddEntry(newEntry);

    // reset form
    setTitle("");
    setDate("");
    setImageUrl("");
    setContent("");

    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
  
        <h3 className="font-bold text-lg mb-4">
          Create Entry
        </h3>
  
        <form onSubmit={handleSubmit} className="space-y-3">
  
          <input className="input input-bordered w-full"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
  
          <input className="input input-bordered w-full"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
  
          <input className="input input-bordered w-full"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
  
          <textarea className="textarea textarea-bordered w-full"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
  
          <div className="modal-action">
            <button className="btn" type="button" onClick={onClose}>
              Cancel
            </button>
  
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
  
        </form>
      </div>
    </div>
  );
}