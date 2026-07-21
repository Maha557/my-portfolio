import { useState } from "react";
import { SplashScreen }  from "@/components/splash";
import { AmbientBg }     from "@/components/ambient-bg";
import { Navbar }        from "@/components/navbar";
import { Hero }          from "@/components/hero";
import { Stats }         from "@/components/stats";
import { About }         from "@/components/about";
import { Skills }        from "@/components/skills";
import { Projects }      from "@/components/projects";
import { Experience }    from "@/components/experience";
import { Education }     from "@/components/education";
import { Certificates }  from "@/components/certificates";
import { Contact }       from "@/components/contact";
import { Footer }        from "@/components/footer";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SplashScreen onDone={() => setSplashDone(true)} />
      {splashDone && (
        <>
          <AmbientBg />
          <Navbar showAvatar={true} />
          <main className="flex flex-col relative z-10">
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certificates />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
