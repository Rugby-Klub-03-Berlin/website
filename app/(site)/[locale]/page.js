import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/home/AboutSection";
import GameReportsSection from "@/components/home/GameReportsSection";
import PostSection from "@/components/home/PostSection";

export default async function Home() {
  return (
    <div className="bg-neutral-950">
      <Hero />
      <AboutSection />
      <PostSection />
      <GameReportsSection />
    </div>
  );
}
