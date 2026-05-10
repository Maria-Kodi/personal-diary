import { Feather } from "lucide-react";
import AddEntryButton from "./AddEntryButton";

export default function Header({ onOpenModal }) {
  return (
    <header className="navbar bg-[#F1F7ED] shadow-md px-4 md:px-6 py-3 md:py-4">
      
      <div className="flex-1 flex items-center gap-2 md:gap-3">
        <Feather
          size={22}
          strokeWidth={1.2}
          className="text-[#5A825C] -rotate-12 opacity-90"/>

        <h1 className="text-lg sm:text-xl md:text-2xl font-bold italic tracking-tight text-[#106e52]">
          Personal Diary
        </h1>
      </div>

      <div className="flex-none">
      <AddEntryButton onClick={onOpenModal}/>
      </div>
    </header>
  );
}