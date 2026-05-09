import { useEffect, useState } from "react";

import Header from "./components/Header";
import EntryList from "./components/EntryList";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";
import Footer from "./components/Footer";

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
    <div className="min-h-screen bg-[#E0EEC6] flex flex-col">

      {/* NAVBAR */}

      <Header onOpenModal={() => setIsAddModalOpen(true)} />

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto p-6 flex-grow">
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

     <Footer />

    </div>
  );
}

export default App;