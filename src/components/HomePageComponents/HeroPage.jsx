import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function HeroPage() {
  const [isVideoError, setIsVideoError] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [showVideoDialog, setShowVideoDialog] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const heroRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const overlayRef = useRef(null);
  const particlesRef = useRef(null);

  // Video fallback image
  const fallbackImage = "https://res.cloudinary.com/drhfrgahv/image/upload/v1752913797/IMG-20250718-WA0091_p22rk1.jpg";
  
  // Video source (using a sample video - replace with your actual video)
  const videoSource = "https://firebasestorage.googleapis.com/v0/b/chumwallet.appspot.com/o/video.mp4?alt=media&token=52460b59-57da-4189-87eb-519421a380cb";
  
  // Alternative video sources for fallback
  const alternativeVideos = [
    "https://firebasestorage.googleapis.com/v0/b/chumwallet.appspot.com/o/video.mp4?alt=media&token=52460b59-57da-4189-87eb-519421a380cb",
    "https://firebasestorage.googleapis.com/v0/b/chumwallet.appspot.com/o/video.mp4?alt=media&token=52460b59-57da-4189-87eb-519421a380cb"
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/initiatives.pdf';
    link.download = 'initiatives.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleVideoError = () => {
    setIsVideoError(true);
    setIsVideoLoading(false);
    console.log('Video failed to load, using fallback image');
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
    setIsPlaying(true); // Video starts playing automatically
    console.log('Video loaded successfully');
  };

  const handleWatchStory = () => {
    setShowVideoDialog(true);
  };

  const closeVideoDialog = () => {
    setShowVideoDialog(false);
    setShowVideo(false);
    setIsVideoError(false);
    setIsVideoLoading(true);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // GSAP animations
  useGSAP(() => {
    // Initial curtain opening animation
    const tl = gsap.timeline();
    
    // Curtain opening effect
    tl.set([leftCurtainRef.current, rightCurtainRef.current], { 
      x: 0,
      scaleX: 1 
    })
    .set(overlayRef.current, { 
      opacity: 1 
    })
    .set([titleRef.current, subtitleRef.current, buttonsRef.current], { 
      opacity: 0, 
      y: 50 
    })
    
    // Open curtains from left and right
    .to(leftCurtainRef.current, {
      x: "-100%",
      scaleX: 0,
      duration: 1.2,
      ease: "power2.inOut"
    }, 0)
    .to(rightCurtainRef.current, {
      x: "100%",
      scaleX: 0,
      duration: 1.2,
      ease: "power2.inOut"
    }, 0)
    
    // Fade out overlay
    .to(overlayRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, 0.4)
    
    // Animate text elements
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, 1.2)
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, 1.4)
    .to(buttonsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, 1.6);

    // Text reveal animation for the title
    const titleText = titleRef.current;
    if (titleText) {
      const words = titleText.querySelectorAll('.animate-word');
      gsap.fromTo(words, 
        { 
          y: 100, 
          opacity: 0,
          rotationX: -90
        },
        { 
          y: 0, 
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power2.out",
          delay: 2
        }
      );
    }

    // Floating animation for buttons
    gsap.to(buttonsRef.current, {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2.5
    });

    // Particle animation
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('.particle');
      gsap.to(particles, {
        y: -100,
        opacity: 0,
        duration: 3,
        stagger: 0.1,
        ease: "power2.out",
        repeat: -1,
        delay: 3
      });
    }

  }, []);

  return (
    <>
      <style>
        {`
          .curtain {
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
          }
          
          .animate-word {
            display: inline-block;
            transform-style: preserve-3d;
          }
          
          .button-glow {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
          }
          
          .button-glow:hover {
            box-shadow: 0 0 30px rgba(249, 115, 22, 0.5);
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
          
          .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(249, 115, 22, 0.6);
            border-radius: 50%;
            pointer-events: none;
          }
          
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
              line-height: 1.2;
            }
            .hero-subtitle {
              font-size: 1.125rem;
              line-height: 1.6;
            }
          }
        `}
      </style>
      
      <section
        ref={heroRef}
        className="relative text-[#1D1D1D] min-h-screen flex flex-col justify-center items-center overflow-hidden"
      >
        {/* Curtain Opening Animation */}
        <div 
          ref={leftCurtainRef}
          className="curtain absolute top-0 left-0 w-1/2 h-full bg-white z-30 transform origin-left"
        />
        <div 
          ref={rightCurtainRef}
          className="curtain absolute top-0 right-0 w-1/2 h-full bg-white z-30 transform origin-right"
        />
        
        {/* Overlay */}
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-black z-20"
        />

        {/* Video Background */}
        <div className="absolute inset-0 z-10">
          {showVideo ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              volume="0"
              className="w-full h-full object-cover"
              poster={fallbackImage}
              onLoadStart={() => setIsVideoLoading(true)}
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
            >
              <source src={videoSource} type="video/mp4" />
              <img 
                src={fallbackImage} 
                alt="Hero Background" 
                className="w-full h-full object-cover"
              />
            </video>
          ) : (
            <img 
              src={fallbackImage} 
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
          )}
          
          {/* Loading indicator for video */}
          {showVideo && isVideoLoading && !isVideoError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F97316] mx-auto mb-4"></div>
                <p>Loading...</p>
              </div>
            </div>
          )}
          
          {/* Fallback image when video fails */}
          {showVideo && isVideoError && (
            <img 
              src={fallbackImage} 
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Floating Particles */}
        <div ref={particlesRef} className="absolute inset-0 z-20 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-40 text-center px-5 lg:px-0 max-w-6xl mx-auto">
          {/* Title */}
          <h1 
            ref={titleRef}
            className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
          >
            <span className="block animate-word">Transforming</span> &nbsp;
            <span className="block animate-word">
              <span className="text-[#F97316] drop-shadow-lg">Nigeria's Future</span>
            </span>
            <span className="block animate-word">Through Innovation</span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="hero-subtitle text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Empowering global innovation and policy impact through strategic research, 
            expert insight, and visionary leadership that shapes tomorrow's solutions.
          </p>

          {/* Buttons */}
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          >
            <button 
              onClick={handleDownload}
              className="group button-glow bg-[#F97316] hover:bg-[#EA580C] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center cursor-pointer"
            >
              Explore Initiatives
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M14.43 5.92993L20.5 11.9999L14.43 18.0699"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 12H20.33"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            
            <button 
              onClick={handleWatchStory}
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
              Watch Our Story
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 float-animation">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>



      {/* Video Dialog Modal */}
      {showVideoDialog && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-[#1D1D1D]">Watch Our Story</h3>
              <button
                onClick={closeVideoDialog}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
                         {/* Video Container */}
             <div className="relative bg-black">
               {showVideo ? (
                 <div className="relative">
                   <video
                     ref={videoRef}
                     autoPlay
                     loop
                     playsInline
                     className="w-full h-auto max-h-[60vh] object-contain"
                     poster={fallbackImage}
                     onLoadStart={() => setIsVideoLoading(true)}
                     onLoadedData={handleVideoLoad}
                     onError={handleVideoError}
                     onPlay={() => setIsPlaying(true)}
                     onPause={() => setIsPlaying(false)}
                   >
                     <source src={videoSource} type="video/mp4" />
                     <img 
                       src={fallbackImage} 
                       alt="Video Poster" 
                       className="w-full h-auto max-h-[60vh] object-contain"
                     />
                   </video>
                   
                                       {/* Play/Pause Button Overlay */}
                    <button
                      onClick={togglePlayPause}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/10 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 cursor-pointer opacity-30 hover:opacity-100"
                    >
                     {isPlaying ? (
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                     ) : (
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                     )}
                   </button>
                 </div>
               ) : (
                <div className="w-full h-64 flex items-center justify-center">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="group bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                  >
                    <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Play Video
                  </button>
                </div>
              )}
              
              {/* Loading indicator */}
              {showVideo && isVideoLoading && !isVideoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F97316] mx-auto mb-4"></div>
                    <p>Loading video...</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="p-6 bg-gray-50">
              <p className="text-gray-600 text-center">
                Discover the story behind our mission to transform Nigeria's future through innovation and leadership.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroPage;
