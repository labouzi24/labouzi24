import { useEffect, useRef } from "react";
import Hls from "hls.js";

/**
 * Attaches an HLS (Mux) stream to a <video> element using hls.js, falling
 * back to native HLS playback on browsers that support it (Safari).
 */
export default function useHls(src: string) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => {
        hls.destroy();
      };
    }
  }, [src]);

  return videoRef;
}
