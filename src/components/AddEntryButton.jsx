export default function AddEntryButton({ onClick }) {
  return (
    <button
      className="btn btn-xs sm:btn-sm md:btn-md text-xs sm:text-sm md:text-base text-white border-none bg-[#477e49] hover:bg-[#436047] transition duration-200"
      onClick={onClick}>
      + Add Entry
    </button>
  );
}