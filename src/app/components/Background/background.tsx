export default function LighRaysBackground() {
  return (
    <>
      <video
        className="object-cover w-screen h-screen fixed inset-0"
        loop
        autoPlay
        muted
        playsInline
        src="/videos/light-rays-purple.webm"
        >
      </video>
    </>
  );
}
