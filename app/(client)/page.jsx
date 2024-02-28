import About from "@/containers/About";
import Cta from "@/containers/Cta";
import Hero from "@/containers/Hero";
import Reviews from "@/containers/Reviews";
import Services from "@/containers/Services";
import BestProjects from "@/containers/BestProjects";
import Phrase from "@/containers/Phrase";

export default function Home() {
  return (
    <>
      <Hero/>
      <Phrase/>
      <About/>
      <Services/>
      <BestProjects/>
      <Reviews/>
      <Cta/>
    </>
  )
}