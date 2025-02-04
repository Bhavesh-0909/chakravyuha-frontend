
function Page() {
  return (
        <div
        className="h-screen w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('https://i.ytimg.com/vi/X-XZx1o_w-A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJAQ9n0xReA2UghZBuQzN2BzcXXA')" }} // Add your image in the public folder
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                CSESA x PODS TECHNOLOGY SOLUTIONS
            </h1>
            <h1 className="text-xl md:text-xl font-bold text-white drop-shadow-lg">
                42-hour Capture The Flag (CTF) Competition
            </h1>
            <h2 className="text-5xl md:text-7xl font-extrabold font-['CustomFont'] text-yellow-400 mt-4">
                CHAKRAVYUHA

            </h2>
            <p className="text-lg md:text-2xl text-white mt-6 max-w-3xl">
                21st - 23rd February 2025
            </p>
            </div>
    </div>
  )
}

export default Page