import Header from "./components/Header";
import EntryList from "./components/EntryList";
import { useState } from "react";
import AddEntryModal from "./components/AddEntryModal";

function App() {
  const [entries, setEntries] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  function addEntry(newEntry) {
    setEntries((prev) => [newEntry, ...prev]);
  }
  return (
    <>
      <h1>Personal Diary</h1>
      <EntryList/>
      <button onClick={() => setIsAddModalOpen(true)}> Add Entry</button>

     <AddEntryModal
       isOpen={isAddModalOpen}
       onClose={() => setIsAddModalOpen(false)}
       onAddEntry={addEntry}
     />
   </>
  );
}

export default App;