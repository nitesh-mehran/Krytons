import React from 'react';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        src="/home.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative z-10 flex items-start justify-start h-full px-10 pt-28">
        <div className="text-white w-full max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Linking{' '}
            <span className="text-blue-500">People</span> and{' '}
            <span className="text-blue-500">Business</span> with{' '}
            <span className="text-blue-500">Technology</span>
            <br />
            <span className="block mt-4 text-4xl md:text-5xl font-semibold italic">
              (You Think, We Design)
            </span>
          </h1>
        </div>
      </div>

    </div>
  );
};

export default Home;
