import React from 'react';

const Leaderboard = () => {
  // Sample leaderboard data (Replace with actual data)
  const players = [
    { rank: 1, name: "Shadow Monarch", score: 9500 },
    { rank: 2, name: "Beru", score: 9100 },
    { rank: 3, name: "Igris", score: 8800 },
    { rank: 4, name: "Iron", score: 8500 },
    { rank: 5, name: "Tusk", score: 8200 },
  ];

  return (
    <div 
      className="w-full min-h-screen flex flex-col items-center py-16 bg-cover bg-center bg-no-repeat relative" 
      style={{ backgroundImage: 'url(/images/SoloBG.jpg)' }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-purple-400 mb-12 font-bebas tracking-widest drop-shadow-lg">
          Leaderboard
        </h2>

        <div className="overflow-hidden shadow-xl rounded-lg border border-purple-600 bg-gray-900 bg-opacity-75 backdrop-blur-md">
          <table className="w-full text-left text-gray-200">
            <thead className="bg-purple-800 bg-opacity-30">
              <tr>
                <th className="px-6 py-4 text-lg font-bold">Rank</th>
                <th className="px-6 py-4 text-lg font-bold">Player</th>
                <th className="px-6 py-4 text-lg font-bold">Score</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-700 hover:bg-purple-900 hover:bg-opacity-40 transition-all duration-300 ${player.rank === 1 ? "text-yellow-400" : player.rank === 2 ? "text-blue-400" : player.rank === 3 ? "text-pink-400" : ""}`}
                >
                  <td className="px-6 py-4 text-xl font-bold">{player.rank}</td>
                  <td className="px-6 py-4 text-lg">{player.name}</td>
                  <td className="px-6 py-4 text-lg">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
