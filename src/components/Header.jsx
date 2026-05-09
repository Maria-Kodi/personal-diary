import { Feather } from "lucide-react";

export default function Header({ onOpenModal }) {
  return (
    <div className="navbar bg-[#F1F7ED] shadow-md px-6 py-4">
      
      <div className="flex-1 flex items-center gap-3">
        <Feather
          size={24}
          strokeWidth={1.2}
          className="text-[#5A825C] rotate-[-15deg]"
        />

        <h1 className="text-2xl font-bold italic tracking-tight text-[#106e52]">
          Personal Diary
        </h1>
      </div>

      <div className="flex-none">
        <button
          className="btn bg-[#477e49] text-white border-none hover:bg-[#436047] transition-all"
          onClick={onOpenModal}
        >
          + Add Entry
        </button>
      </div>

    </div>
  );
}