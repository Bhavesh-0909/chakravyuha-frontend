import { Timeline } from "../components/ui/timeline";

const data = [
  {
    title: "Day 1",
    content: (
      <div>
        <p>
          2-Hour Online CTF– Warm-up with beginner to intermediate-level challenges.
        </p>
      </div>
    ),
  },
  {
    title: "Day 2",
    content: (
      <div>
        <p>
          24-Hour Online CTF– Dive deep into advanced security exploits and puzzles.
        </p>
      </div>
    ),
  },
  {
    title: "Day 3",
    content: (
      <div>
        <p>
          6-Hour Offline CTF Finale – The top teams battle it out in an intense showdown at LTCE!
        </p>
      </div>
    ),
  },
];

function Page() {
  return (
    <div className="w-full h-fit text-white bg-cover bg-center bg-no-repeat relative py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-extrabold mb-12 font-bebas tracking-widest drop-shadow-lg">
          Event Structure
        </h1>
        <p className="text-xl">
          21 - 23 February
        </p>
      </div>
      <Timeline data={data} />
    </div>
  )
}

export default Page