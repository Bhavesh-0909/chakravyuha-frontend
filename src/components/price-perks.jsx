import React from 'react';

const PricePerk = () => {
  return (
    <div className="w-full py-16 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/images/SoloBG.jpg)' }}>
      {/* Gradient overlay to blend with the background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-semibold text-white mb-12 font-bebas">Prizes & Perks</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Internship Opportunities</h3>
            <p className="text-gray-300">Top performers will receive internship opportunities, gaining valuable experience in the cybersecurity field.</p>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-3xl font-semibold text-blue-400 mb-4">Exclusive Certificates</h3>
            <p className="text-gray-300">All participants will receive exclusive certificates. Winners will earn special recognition for their exceptional skills.</p>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-3xl font-semibold text-pink-400 mb-4">Networking with Experts</h3>
            <p className="text-gray-300">Join a community of cybersecurity professionals and network with experts in the field. A great opportunity to grow your career.</p>
          </div>
        </div>
      </div>

      {/* Section for Why Join */}
      <div className="max-w-7xl mx-auto text-center mt-16 relative z-10">
        <h2 className="text-4xl font-semibold text-teal-300 mb-8">Why Join?</h2>
        <p className="text-xl text-gray-100 mb-4">This CTF competition is an excellent way to challenge yourself and gain hands-on experience in:</p>
        <ul className="list-disc list-inside text-left text-gray-100 mx-auto max-w-3xl">
          <li>Web Exploitation</li>
          <li>Cryptography</li>
          <li>Forensics</li>
          <li>Networking Security</li>
          <li>Reverse Engineering</li>
        </ul>
      </div>
    </div>
  );
}

export default PricePerk;
