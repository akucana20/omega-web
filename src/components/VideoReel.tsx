import { useState, useRef, useEffect } from 'react';
import { Video, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import reklamVideo from '@/assets/1.jpg';
import reklamCover from '@/assets/1.jpg';

const VideoReel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isDesktopPlaying, setIsDesktopPlaying] = useState(false);
  const [isDesktopMuted, setIsDesktopMuted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Ensure video starts playing when component mounts (mobile only)
    if (isMobile && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay was prevented
            setIsPlaying(false);
          });
      }
    }
  }, [isMobile]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    if (isMobile) {
      togglePlayPause();
    }
  };

  const toggleDesktopPlayPause = () => {
    if (desktopVideoRef.current) {
      if (isDesktopPlaying) {
        desktopVideoRef.current.pause();
      } else {
        desktopVideoRef.current.play();
      }
      setIsDesktopPlaying(!isDesktopPlaying);
    }
  };

  const toggleDesktopMute = () => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.muted = !isDesktopMuted;
      setIsDesktopMuted(!isDesktopMuted);
    }
  };

  const handleDesktopVideoClick = () => {
    toggleDesktopPlayPause();
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleDesktopPlay = () => setIsDesktopPlaying(true);
  const handleDesktopPause = () => setIsDesktopPlaying(false);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Video className="h-10 w-10 text-primary" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat text-foreground">
                Video Showreel
              </h2>
            </div>
          </div>
          
          {/* Mobile: Vertical Reel Style */}
          <div className="relative overflow-hidden bg-black md:hidden aspect-[9/16] max-w-sm mx-auto rounded-2xl">
              <video
                ref={videoRef}
                src={reklamVideo}
                poster={reklamCover}
                className="w-full h-full object-cover"
                preload="auto"
                onClick={handleVideoClick}
                onPlay={handlePlay}
                onPause={handlePause}
                playsInline
                autoPlay
                loop
                muted={isMuted}
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Controls Overlay for Mobile */}
              <>
                {/* Play/Pause Button - Only visible when paused */}
                {!isPlaying && (
                  <button
                    onClick={togglePlayPause}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity z-10"
                    aria-label="Play"
                  >
                    <div className="bg-white/90 rounded-full p-4 hover:scale-110 transition-transform">
                      <Play className="h-12 w-12 text-primary fill-primary" />
                    </div>
                  </button>
                )}
                
                {/* Pause Button - Only visible when playing (on tap) */}
                {isPlaying && (
                  <button
                    onClick={togglePlayPause}
                    className="absolute inset-0 flex items-center justify-center bg-transparent transition-opacity z-10 opacity-0 active:opacity-100"
                    aria-label="Pause"
                  >
                    <div className="bg-black/40 rounded-full p-3 transition-transform">
                      <Pause className="h-8 w-8 text-white fill-white" />
                    </div>
                  </button>
                )}
                
                {/* Mute Button - Always visible in corner */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 rounded-full p-2.5 transition-colors z-20"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5 text-white" />
                  ) : (
                    <Volume2 className="h-5 w-5 text-white" />
                  )}
                </button>
              </>
          </div>

          {/* Desktop: Instagram Reel Style - Clean, No Background Card */}
          <div className="hidden md:flex md:justify-center md:items-center">
            <div className="relative aspect-[9/16] w-full max-w-lg overflow-hidden bg-black">
              <video
                ref={desktopVideoRef}
                src={reklamVideo}
                poster={reklamCover}
                className="w-full h-full object-cover"
                preload="metadata"
                onClick={handleDesktopVideoClick}
                onPlay={handleDesktopPlay}
                onPause={handleDesktopPause}
                playsInline
                loop
                muted={isDesktopMuted}
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Controls Overlay for Desktop */}
              <>
                {/* Play/Pause Button - Only visible when paused */}
                {!isDesktopPlaying && (
                  <button
                    onClick={toggleDesktopPlayPause}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity z-10"
                    aria-label="Play"
                  >
                    <div className="bg-white/90 rounded-full p-4 hover:scale-110 transition-transform">
                      <Play className="h-12 w-12 text-primary fill-primary" />
                    </div>
                  </button>
                )}
                
                {/* Pause Button - Only visible when playing (on tap) */}
                {isDesktopPlaying && (
                  <button
                    onClick={toggleDesktopPlayPause}
                    className="absolute inset-0 flex items-center justify-center bg-transparent transition-opacity z-10 opacity-0 active:opacity-100"
                    aria-label="Pause"
                  >
                    <div className="bg-black/40 rounded-full p-3 transition-transform">
                      <Pause className="h-8 w-8 text-white fill-white" />
                    </div>
                  </button>
                )}
                
                {/* Mute Button - Always visible in corner */}
                <button
                  onClick={toggleDesktopMute}
                  className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 rounded-full p-2.5 transition-colors z-20"
                  aria-label={isDesktopMuted ? 'Unmute' : 'Mute'}
                >
                  {isDesktopMuted ? (
                    <VolumeX className="h-5 w-5 text-white" />
                  ) : (
                    <Volume2 className="h-5 w-5 text-white" />
                  )}
                </button>
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoReel;

