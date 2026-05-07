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
    <div>
      <h2>Create Entry</h2>

      <button onClick={onClose}>Close</button>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}