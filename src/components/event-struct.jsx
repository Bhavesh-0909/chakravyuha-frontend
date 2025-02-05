import { Timeline } from "../components/ui/timeline";

const data = [
  {
    title: "⚔️ Day 1 - Awakening",
    content: (
      <div>
        <p className="text-gray-300">
          🕒 2-Hour Online CTF – Warm-up with beginner to intermediate-level challenges.
        </p>
      </div>
    ),
  },
  {
    title: "🔥 Day 2 - Dungeon Raid",
    content: (
      <div>
        <p className="text-gray-300">
          ⏳ 24-Hour Online CTF – Dive deep into advanced security exploits and puzzles.
        </p>
      </div>
    ),
  },
  {
    title: "👑 Day 3 - Final Battle",
    content: (
      <div>
        <p className="text-gray-300">
          🏆 6-Hour Offline CTF Finale – The top teams battle it out in an intense showdown at LTCE!
        </p>
      </div>
    ),
  },
];

function Page() {
  return (
    <div
      className="w-full h-fit text-white bg-cover bg-center bg-no-repeat relative py-12"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-extrabold mb-12 font-bebas tracking-widest drop-shadow-lg text-purple-400">
          ⚔️ Event Structure ⚔️
        </h1>
        <p className="text-2xl text-blue-300 font-semibold">
          📅 21 - 23 February
        </p>
      </div>
      <div className="relative z-10">
        <Timeline data={data} />
      </div>
    </div>
  );
}

export default Page;
