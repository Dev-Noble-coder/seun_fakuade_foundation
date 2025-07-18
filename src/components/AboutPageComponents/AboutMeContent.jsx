import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, X, Volume2 } from "lucide-react";

const videoItems = [
  {
    src: "https://res.cloudinary.com/drhfrgahv/video/upload/v1752844907/SnapInsta.to_AQOUjhd9mvWp7pqOgLD1BrP54tp8JKgNT3rj7zGotNAgzZxCGpBDvmwRc_LUcMJ5Q8rYtwzHrdRqROKGNab8MxnpIvmROc9q7lcLFVc_i2ooa0.mp4",
    orientation: "horizontal",
  },
  {
    src: "https://res.cloudinary.com/drhfrgahv/video/upload/v1752844877/SnapInsta.to_AQN2ZHLaC-XTLmtAo49F2FTIIHReuh1SaLnrDJS2Fld5QE_m2qd1GIbhQX3S-B044vqc_Vtpk3KwLZlblkX6ribDMb5nWvyYjQbPaY8_lyjubm.mp4",
    orientation: "vertical",
  },
  {
    src: "https://res.cloudinary.com/drhfrgahv/video/upload/v1752845034/SnapInsta.to_AQNRkIYEgNk5Pukqzs_CSpKAK1Lk56KjX_IMIgxEE0ulE3Rw90dLyfx0SZpwFui128AGQ_v1S0jESZYNhkEU6e4-uicIop4po9XyiTQ_gwxl9s.mp4",
    orientation: "vertical",
  },
  {
    src: "https://res.cloudinary.com/drhfrgahv/video/upload/v1752844910/SnapInsta.to_AQMp33QvR2MYoSrQv7UlWrWyUiGXhE2q0ZtCTiRuNbcQaiLpIWYkKZUnskKWwPRpUxDfaBwhiCWEsKMKvhZAr7qSq_dw9u0woU0arIU_llakex.mp4",
    orientation: "horizontal",
  },
];

const PlayButton = ({ onClick }) => (
  <div 
    onClick={onClick}
    className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer group"
  >
    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl transform transition-all duration-300 group-hover:scale-110 animate-shake">
      <Play className="w-6 h-6 text-gray-800 " fill="currentColor" />
    </div>
  </div>
);

const VideoPlayer = ({ src, orientation, onPlayClick, index }) => (
  <div className="relative overflow-hidden rounded-sm  shadow">
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className={` shadow-sm cursor-pointer object-cover w-full h-full ${
        orientation === "vertical" ? "aspect-[9/14]" : "aspect-[16/14]"
      }`}
    />
    <PlayButton onClick={() => onPlayClick(index)} />
  </div>
);

const VideoOverlay = ({ video, onClose }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
      setIsPlaying(true);
      
      const updateTime = () => setCurrentTime(videoElement.currentTime);
      const updateDuration = () => setDuration(videoElement.duration);
      
      videoElement.addEventListener('timeupdate', updateTime);
      videoElement.addEventListener('loadedmetadata', updateDuration);
      
      return () => {
        videoElement.removeEventListener('timeupdate', updateTime);
        videoElement.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, []);

  useEffect(() => {
    let timer;
    if (showControls) {
      timer = setTimeout(() => setShowControls(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [showControls]);

  const togglePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipForward = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.currentTime += 10;
    }
  };

  const skipBackward = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.currentTime -= 10;
    }
  };

  const handleSeek = (e) => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const clickX = e.nativeEvent.offsetX;
      const width = e.currentTarget.offsetWidth;
      const newTime = (clickX / width) * duration;
      videoElement.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-3xl flex items-center justify-center z-50 ">
      <div 
        className={`relative mx-4 ${
          video.orientation === 'vertical' 
            ? 'w-full max-w-sm h-[70vh] max-h-[600px] sm:w-full sm:h-[525px] md:w-full md:h-[600px]' 
            : 'w-full max-w-4xl h-[50vh] max-h-[450px] sm:h-[40vh] md:h-[450px] lg:w-[800px] lg:h-[450px]'
        }`}
        onMouseMove={() => setShowControls(true)}
      >
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover rounded-sm "
          onClick={togglePlayPause}
        />
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-200 z-20"
        >
          <X className="w-5 h-5  text-white cursor-pointer" />
        </button>

        {/* Controls */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 sm:p-4 rounded-b-lg transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          {/* Progress bar */}
          <div className="mb-2 sm:mb-4">
            <div 
              className="w-full h-1 sm:h-2 bg-gray-600 rounded-full cursor-pointer"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-white rounded-full transition-all duration-100"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-white text-xs sm:text-sm mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Control buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={skipBackward}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1.5 sm:p-2 transition-all duration-200"
              >
                <SkipBack className="w-4 h-4 cursor-pointer " />
              </button>
              
              <button
                onClick={togglePlayPause}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 sm:p-3 transition-all duration-200"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 cursor-pointer" />
                ) : (
                  <Play className="w-6 h-6 cursor-pointer" fill="currentColor" />
                )}
              </button>
              
              <button
                onClick={skipForward}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1.5 sm:p-2 transition-all duration-200"
              >
                <SkipForward className="w-4 h-4 cursor-pointer " />
              </button>
            </div>

            {/* Volume control */}
            <div className="flex items-center space-x-2">
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white cursor-pointer" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-12 sm:w-20 h-1 sm:h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};







function AboutMeContent() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlayClick = (index) => {
    setActiveVideo(videoItems[index]);
  };

  const handleCloseOverlay = () => {
    setActiveVideo(null);
  };

  return (
    <div className="bg-white text-[#1D1D1D] flex flex-col lg:flex-row gap-10 justify-between py-10 sm:py-20 mx-5 lg:mx-20">
      {/* Left + Right Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-3 flex-1">
        {/* Left column: 2 videos */}
        <div className="flex flex-col gap-3">
          <VideoPlayer 
            src={videoItems[0].src} 
            orientation="horizontal" 
            onPlayClick={handlePlayClick}
            index={0}
          />
          <VideoPlayer 
            src={videoItems[1].src} 
            orientation="vertical" 
            onPlayClick={handlePlayClick}
            index={1}
          />
        </div>
        
        {/* Right column: 2 videos */}
        <div className="flex flex-col gap-3">
          <VideoPlayer 
            src={videoItems[2].src} 
            orientation="vertical" 
            onPlayClick={handlePlayClick}
            index={2}
          />
          <VideoPlayer 
            src={videoItems[3].src} 
            orientation="horizontal" 
            onPlayClick={handlePlayClick}
            index={3}
          />
        </div>
      </div>
      
        <div className="flex-1">
          <h3 className="text-4xl font-semibold pb-3">His Work, Family and Life.</h3>
          <p className="pb-3">
            I am ‘Seun Fakuade — a purpose-driven public servant, innovation
            strategist, and impact communicator, committed to building inclusive
            digital economies, empowering young entrepreneurs, and transforming
            public institutions for a smarter, more prosperous Ekiti State. With
            a heart rooted in service and a mind shaped by innovation, I believe
            that true progress happens when technology, good governance, and
            community development intersect. My work focuses on crafting
            policies and solutions that not only address today’s challenges but
            also lay the foundation for long-term growth.
          </p>
          <p className="pb-3">
            Through collaborative leadership, I have championed initiatives that
            drive youth empowerment, digital skills acquisition, and
            institutional transparency — all in pursuit of a future where no one
            is left behind. Whether it's reimagining public service delivery,
            mentoring emerging leaders, or advocating for inclusive innovation,
            I am driven by the belief that we rise by lifting others.
          </p>
          <p className="pb-3">
            I am ‘Seun Fakuade — a purpose-driven public servant, innovation
            strategist, and impact communicator, committed to building inclusive
            digital economies, empowering young entrepreneurs, and transforming
            public institutions for a smarter, more prosperous Ekiti State. With
            a heart rooted in service and a mind shaped by innovation, I believe
            that true progress happens when technology, good governance, and
            community development intersect. My work focuses on crafting
            policies and solutions that not only address today’s challenges but
            also lay the foundation for long-term growth.
          </p>
          <p className="pb-3">
            Through collaborative leadership, I have championed initiatives that
            drive youth empowerment, digital skills acquisition, and
            institutional transparency — all in pursuit of a future where no one is left behind.
         </p>
        </div>

      {/* Video Overlay */}
      {activeVideo && (
        <VideoOverlay 
          video={activeVideo} 
          onClose={handleCloseOverlay}
        />
      )}
    </div>
  );
}

export default AboutMeContent;