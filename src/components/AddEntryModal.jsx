import { useState } from "react";

export default function AddEntryModal({ isOpen, onClose, onAddEntry }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !content) {
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

    setTitle("");
    setDate("");
    setImageUrl("");
    setContent("");

    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box bg-[#F1F7ED]">
  
        <h3 className="font-bold text-lg mb-4 text-[#407948]">
          Create Entry
        </h3>
  
        <form onSubmit={handleSubmit} className="space-y-3">
  
          <input className="input input-bordered w-full"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
  
          <input className="input input-bordered w-full"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}/>
  
          <input className="input input-bordered w-full"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}/>
  
          <textarea className="textarea textarea-bordered w-full"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}/>
  
          <div className="modal-action">
            <button className="btn bg-[#E0EEC6] text-black border-none hover:bg-[#5A825C]" type="button" onClick={onClose}>
              Cancel
            </button>
  
            <button className="btn bg-[#5A825C] text-white border-none hover:bg-[#243E36]" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}