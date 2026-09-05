import useHls from "../hooks/useHls";

// Mux playback ID: wt6DQITOnWO2ixVCPWrFACbz9W2ioLQTUEadGzD3KdBc
const HERO_VIDEO_SRC = "https://stream.mux.com/wt6DQITOnWO2ixVCPWrFACbz9W2ioLQTUEadGzD3KdBc.m3u8";

export default function Slide1Hero() {
  const videoRef = useHls(HERO_VIDEO_SRC);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

      <div className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
          قطع الغيار الصحيحة تبدأ من هنا
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
          سوق يجمع أفضل البائعين لكل ماركات وموديلات السيارات
        </p>
      </div>
    </div>
  );
}
