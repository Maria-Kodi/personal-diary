import EntryCard from "./EntryCard";
import diaryImage from "../assets/diary-cover.jpg";
import diaryImage2 from "../assets/diary-cover2.jpg";

export default function EntryList({ entries = [], onView }) {
  if (entries.length === 0) {
    return (
      <div className="mt-8 md:mt-12 px-4 md:px-0 max-w-6xl mx-auto">

        <div className="text-center mt-16 mb-14">
          <h2 className="text-4xl md:text-5xl font-bold italic text-emerald-900 tracking-tight">
            Write your story
          </h2>

          <p className="mt-5 text-lg md:text-xl opacity-70 max-w-xl mx-auto leading-relaxed">
            A peaceful space to capture thoughts, memories, and moments that matter.
          </p>
        </div>

        <div className="max-w-2xl mx-auto p-6 md:p-10 rounded-3xl text-center 
        bg-white/40 backdrop-blur-md border border-white/30 shadow-lg
        hover:shadow-xl transition-all duration-300">
          
          <p className="text-xl md:text-2xl font-semibold text-emerald-900">
            No entries yet
          </p>

          <p className="text-base md:text-lg mt-3 opacity-80">
            Click "Add Entry" to create your first diary entry ✍️
          </p>

          <p className="text-sm italic opacity-60 mt-5">
            Your thoughts and memories start here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 mt-12 px-4">

          <div className="w-full bg-base-300 rounded-3xl shadow-md overflow-hidden 
          transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 
          hover:shadow-emerald-900/20 group">

            <div className="px-6 md:px-8 py-6 md:py-7">
              <p className="text-lg md:text-xl font-bold text-emerald-900 italic leading-snug 
              group-hover:tracking-wide transition-all duration-300">
                Hold on to every meaningful moment
              </p>
            </div>

            <div className="relative">
              <img
                src={diaryImage}
                alt="Diary inspiration"
                className="w-full h-56 sm:h-72 md:h-80 object-cover object-bottom"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>

          <div className="w-full bg-base-300 rounded-3xl shadow-md overflow-hidden 
          transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 
          hover:shadow-emerald-900/20 group">

            <div className="px-6 md:px-8 py-6 md:py-7">
              <p className="text-lg md:text-xl font-bold text-emerald-900 italic leading-snug 
              group-hover:tracking-wide transition-all duration-300">
                Begin your journey, one entry at a time
              </p>
            </div>

            <div className="relative">
              <img
                src={diaryImage2}
                alt="Diary journey"
                className="w-full h-56 sm:h-72 md:h-80 object-cover object-bottom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-0">
      {entries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          onView={onView}/>
      ))}
    </div>
  );
}