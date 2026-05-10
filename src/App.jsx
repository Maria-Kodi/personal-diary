import { useEffect, useState } from "react";

import Header from "./components/Header";
import EntryList from "./components/EntryList";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";
import Footer from "./components/Footer";

function App() {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("entries");
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  function addEntry(newEntry) {
    const exists = entries.some((entry) => entry.date === newEntry.date);

    if (exists) {
      alert("You already created an entry for this day!");
      return;
    }

    setEntries((prev) => [newEntry, ...prev]);
  }

  const handleView = (entry) => {
    setSelectedEntry(entry);
    setIsViewModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#dce9c8] to-[#eef5e6] flex flex-col">
      <Header onOpenModal={() => setIsAddModalOpen(true)}/>

      <div className="max-w-5xl mx-auto p-6 flex-grow">
        <EntryList entries={entries} onView={handleView}/>
      </div>

      <AddEntryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddEntry={addEntry}/>

      <ViewEntryModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        entry={selectedEntry}/>

      <Footer/>
    </div>
  );
}

export default App;