import { HeroContent } from "./HeroContent";

const Hero = () => {
  return (
    <div className="h-screen text-center flex flex-col items-center justify-center bg-neutral-950">
      <div className="top-0 bottom-0 right-0 left-0 h-screen object-cover">
        <video
          className="absolute top-0 bottom-0 right-0 left-0 w-screen h-screen object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./videos/RK_bunt_480p.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="h-screen fixed top-0 left-0 right-0 bottom-0 bg-black/70 z-0" />
      <HeroContent />
    </div>
  );
};

export default Hero;
