import { useEffect, useState } from "react";

import EntryList from "./components/EntryList";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";

function App() {
  // load from localStorage
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("entries");
    return saved ? JSON.parse(saved) : [];
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  // add entry
  function addEntry(newEntry) {
    setEntries((prev) => [newEntry, ...prev]);
  }

  // open view modal
  function handleView(entry) {
    setSelectedEntry(entry);
    setIsViewModalOpen(true);
  }

  return (
    <div className="min-h-screen bg-base-200">

      {/* NAVBAR */}
      <div className="navbar bg-base-100 shadow-md px-6">
        <div className="flex-1">
          <a className="text-xl font-bold">Personal Diary</a>
        </div>

        <div className="flex-none">
          <button
            className="btn btn-primary"
            onClick={() => setIsAddModalOpen(true)}
          >
            + Add Entry
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto p-6">
        <EntryList entries={entries} onView={handleView} />
      </div>

      {/* ADD MODAL */}
      <AddEntryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddEntry={addEntry}
      />

      {/* VIEW MODAL */}
      <ViewEntryModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        entry={selectedEntry}
      />

    </div>
  );
}

export default App;