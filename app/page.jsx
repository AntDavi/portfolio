import About from "@/containers/About";
import Cta from "@/containers/Cta";
import Hero from "@/containers/Hero";
import Reviews from "@/containers/Reviews";
import Services from "@/containers/Services";
import BestProjects from "@/containers/BestProjects";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <BestProjects/>
      <Reviews/>
      <Cta/>
    </>
  )
}