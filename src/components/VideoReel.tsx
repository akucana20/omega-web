import { useRef, useState } from 'react';
import { Video, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import reklamCover from '@/assets/reklam cover.jpg';

// Video URL - served from public folder
const VIDEO_URL = 'https://fxxenlsettps35yw.public.blob.vercel-storage.com/PREZANTIMI%20I%20WEBSITE.mp4', type='video/mp4';

const VideoReel = () => {
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);

  // Start videos paused; user must press play
  const [isMobilePlaying, setIsMobilePlaying] = useState(false);
  const [isDesktopPlaying, setIsDesktopPlaying] = useState(false);
  // Start videos unmuted so that the first time they are played, sound is enabled
  const [isMobileMuted, setIsMobileMuted] = useState(false);
  const [isDesktopMuted, setIsDesktopMuted] = useState(false);

  const toggleMobilePlay = () => {
    const video = mobileVideoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsMobilePlaying(true);
    } else {
      video.pause();
      setIsMobilePlaying(false);
    }
  };

  const toggleDesktopPlay = () => {
    const video = desktopVideoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsDesktopPlaying(true);
    } else {
      video.pause();
      setIsDesktopPlaying(false);
    }
  };

  const toggleMobileMute = () => {
    const video = mobileVideoRef.current;
    if (!video) return;
    video.muted = !isMobileMuted;
    setIsMobileMuted(!isMobileMuted);
  };

  const toggleDesktopMute = () => {
    const video = desktopVideoRef.current;
    if (!video) return;
    video.muted = !isDesktopMuted;
    setIsDesktopMuted(!isDesktopMuted);
  };

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
              ref={mobileVideoRef}
              className="w-full h-full object-cover"
              poster={reklamCover}
              preload="auto"
              playsInline
              loop
              muted={isMobileMuted}
              onClick={toggleMobilePlay}
            >
              <source src={VIDEO_URL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Center Play/Pause button like Instagram Reels */}
            <button
              type="button"
              onClick={toggleMobilePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/0 active:bg-black/20 transition-colors"
              aria-label={isMobilePlaying ? 'Pause video' : 'Play video'}
            >
              <div className="bg-black/50 rounded-full p-4">
                {isMobilePlaying ? (
                  <Pause className="h-10 w-10 text-white fill-white" />
                ) : (
                  <Play className="h-10 w-10 text-white fill-white" />
                )}
              </div>
            </button>

            {/* Mute button bottom-right */}
            <button
              type="button"
              onClick={toggleMobileMute}
              className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 rounded-full p-2.5 transition-colors"
              aria-label={isMobileMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMobileMuted ? (
                <VolumeX className="h-5 w-5 text-white" />
              ) : (
                <Volume2 className="h-5 w-5 text-white" />
              )}
            </button>
          </div>

          {/* Desktop: Video Reel Style */}
          <div className="hidden md:flex md:justify-center md:items-center">
            <div className="relative aspect-[9/16] w-full max-w-lg overflow-hidden bg-black rounded-2xl">
              <video
                ref={desktopVideoRef}
                className="w-full h-full object-cover"
                poster={reklamCover}
                preload="auto"
                playsInline
                loop
                muted={isDesktopMuted}
                onClick={toggleDesktopPlay}
              >
                <source src={VIDEO_URL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Center Play/Pause button like Instagram Reels */}
              <button
                type="button"
                onClick={toggleDesktopPlay}
                className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 active:bg-black/20 transition-colors"
                aria-label={isDesktopPlaying ? 'Pause video' : 'Play video'}
              >
                <div className="bg-black/50 rounded-full p-4">
                  {isDesktopPlaying ? (
                    <Pause className="h-10 w-10 text-white fill-white" />
                  ) : (
                    <Play className="h-10 w-10 text-white fill-white" />
                  )}
                </div>
              </button>

              {/* Mute button bottom-right */}
              <button
                type="button"
                onClick={toggleDesktopMute}
                className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 rounded-full p-2.5 transition-colors"
                aria-label={isDesktopMuted ? 'Unmute video' : 'Mute video'}
              >
                {isDesktopMuted ? (
                  <VolumeX className="h-5 w-5 text-white" />
                ) : (
                  <Volume2 className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoReel;
