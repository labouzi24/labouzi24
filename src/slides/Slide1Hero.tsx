import { useState } from "react";
import useHls from "../hooks/useHls";
import { useTranslations } from "../i18n/I18nContext";

// Mux playback ID: wt6DQITOnWO2ixVCPWrFACbz9W2ioLQTUEadGzD3KdBc
const HERO_VIDEO_SRC = "https://stream.mux.com/wt6DQITOnWO2ixVCPWrFACbz9W2ioLQTUEadGzD3KdBc.m3u8";

export default function Slide1Hero() {
  const videoRef = useHls(HERO_VIDEO_SRC);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const t = useTranslations();

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        aria-hidden="true"
        className={[
          "absolute inset-0 animate-pulse bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent transition-opacity duration-500",
          isVideoReady ? "pointer-events-none opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setIsVideoReady(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

      <div className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
          {t.slide1.headline}
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">{t.slide1.subheadline}</p>
      </div>
    </div>
  );
}
