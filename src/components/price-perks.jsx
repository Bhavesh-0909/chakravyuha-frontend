
import bgImage from '../assets/bgimage.jpg';

const PricePerk = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="w-full py-16 bg-cover bg-center bg-no-repeat relative"
    >
      {/* Gradient overlay to blend with the background while keeping it visible */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-purple-400 mb-12 font-bebas tracking-widest drop-shadow-lg">
          Prizes & Perks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 border border-purple-600">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4 tracking-wide">Internship Opportunities</h3>
            <p className="text-gray-300 text-lg">
              Top performers will receive internship opportunities, gaining valuable experience in the cybersecurity field.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 border border-blue-500">
            <h3 className="text-3xl font-bold text-blue-400 mb-4 tracking-wide">Exclusive Certificates</h3>
            <p className="text-gray-300 text-lg">
              All participants will receive exclusive certificates. Winners will earn special recognition for their exceptional skills.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 border border-pink-500">
            <h3 className="text-3xl font-bold text-pink-400 mb-4 tracking-wide">Networking with Experts</h3>
            <p className="text-gray-300 text-lg">
              Join a community of cybersecurity professionals and network with experts in the field. A great opportunity to grow your career.
            </p>
          </div>
        </div>
      </div>

      {/* Section for Why Join */}
      <div className="max-w-7xl mx-auto text-center mt-16 relative z-10">
        <h2 className="text-4xl font-extrabold text-teal-300 mb-8 tracking-widest drop-shadow-lg">
          Why Join?
        </h2>
        <p className="text-xl text-gray-200 mb-6 leading-relaxed">
          This CTF competition is an excellent way to challenge yourself and gain hands-on experience in:
        </p>
        <ul className="list-disc list-inside text-left text-gray-200 mx-auto max-w-3xl text-lg space-y-2">
          <li>🔹 Web Exploitation</li>
          <li>🔹 Cryptography</li>
          <li>🔹 Forensics</li>
          <li>🔹 Networking Security</li>
          <li>🔹 Reverse Engineering</li>
        </ul>
      </div>
    </div>
  );
}

export default PricePerk;
