import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillChip from "@/components/ui/SkillChip";
import TimelineItem from "@/components/ui/TimelineItem";
import { skills, education, experience } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "Cloud Enthusiast / Designer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen pt-20" data-testid="page-about">
      <div ref={heroRef} className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-neon-cyan bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center shadow-neon-cyan overflow-hidden">
              <img 
                src="/profile.jpg" 
                alt="Ragni Kumari" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-neon-green border-2 border-black shadow-neon-green" />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-glow-cyan mb-4">
            Ragni Kumari
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-muted-foreground font-mono">
            <span>{typedText}</span>
            <span className="w-0.5 h-6 bg-neon-cyan animate-pulse" />
          </div>

          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A passionate developer who builds immersive, animated, and high-performance
            digital experiences for the modern web. I love combining clean engineering
            with bold visual storytelling.
          </p>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Skills"
            subtitle="Technologies I work with every day"
          />

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <SkillChip key={skill} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Experience"
            subtitle="My professional journey"
          />

          <div className="space-y-8">
            <div className="flex items-center gap-3 text-neon-magenta mb-8">
              <Briefcase className="w-5 h-5" />
              <span className="font-mono text-sm uppercase tracking-wider">Work History</span>
            </div>
            
            {experience.map((exp, index) => (
              <TimelineItem
                key={exp.title}
                title={exp.title}
                subtitle={exp.company}
                year={exp.year}
                description={exp.description}
                isLeft={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Education"
            subtitle="Academic background"
          />

          <div className="space-y-8">
            <div className="flex items-center gap-3 text-neon-cyan mb-8">
              <GraduationCap className="w-5 h-5" />
              <span className="font-mono text-sm uppercase tracking-wider">Academic</span>
            </div>
            
            {education.map((edu, index) => (
              <TimelineItem
                key={edu.degree}
                title={edu.degree}
                subtitle={edu.institution}
                year={edu.year}
                description={edu.description}
                isLeft={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
