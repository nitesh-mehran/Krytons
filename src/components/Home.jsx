import React from 'react';
import './Home.css'; // Custom CSS for video height

const Home = () => {
  return (
    <>
      {/* Hero Section with Video */}
      <div className="relative w-full overflow-hidden">

        {/* Background Video */}
        <video
          src="/home.mp4"
          className="custom-video absolute top-0 left-0 w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay (optional for contrast) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />

        {/* Content over video */}
        <div className="relative z-10 flex items-start justify-start px-4 sm:px-10 pt-20 
                        h-[50vh] min-[800px]:h-[100vh]">
          <div className="text-white w-full max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Linking <span className="text-blue-500">People</span> and{' '}
              <span className="text-blue-500">Business</span> with{' '}
              <span className="text-blue-500">Technology</span>
              <br />
              <span className="block mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold italic">
                (You Think, We Design)
              </span>
            </h1>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Home;
