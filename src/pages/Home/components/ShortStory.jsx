import { useState } from "react";

const ShortStory = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // When you have a video, add video play logic here
  };

  return (
    <section className="w-full bg-white">
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-[IvyPresto_Headline] text-[#293037] mb-6">
          A Short Story
        </h2>
        <p className="text-lg md:text-xl text-center text-[#293037] max-w-4xl mx-auto leading-relaxed font-[Montserrat]">
          At Arbella, every thread tells a story — of dedication, craftsmanship,
          and innovation. From humble beginnings to becoming a trusted global
          textile manufacturer, our journey has been driven by a passion for
          quality and a commitment to excellence.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-[400px] md:h-[683px]">
        {!isPlaying ? (
          <>
            {/* Video Overlay Background */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 44, 66, 0.22) 0%, rgba(0, 44, 66, 0.22) 100%), url('/assets/images/home/VideoOverlay.jpg')`,
              }}
            />

            {/* Play Button */}
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer group"
              aria-label="Play video"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                <img
                  src="/assets/icons/PlayButton.svg"
                  alt="Play"
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
                />
              </div>
            </button>
          </>
        ) : (
          // Video Player (placeholder for now)
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              // src="/path/to/your/video.mp4" // Add your video source here
            >
              {/* When you have a video, uncomment and set the src above */}
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShortStory;
