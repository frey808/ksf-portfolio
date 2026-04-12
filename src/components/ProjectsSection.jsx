import { useRef, useState } from "react"
import { ArrowRight, Link2, Volume2, VolumeX } from "lucide-react"
import bluey_homing from "@/assets/bluey_homing.mp4"


const featuredProject = {
  title: "Cameraperson Robot",

  description: "An open source robotics project built across two successive teams, with the goal of repurposing old hardware. " + 
  "We made the SCORBOT-ER4U usable again by creating a new controller for it, since the original is no longer available. " + 
  "Our new controller runs on an ESP32, using FreeRTOS and interrupt-driven design to safely control hardware peripherals over I2C. " + 
  "It includes a socket command interface with 2-axis manual control, and a deterministic homing sequence.",

  detail: "The most pivotal challenge was current sensing for collision detection. " + 
  "When it should've been working, the motors would either refuse to move or fail to react to " + 
  "resistance at all, depending on what threshholds we set. Using an oscilliscope to view the current signal revealed " + 
  "that there was a brief spike whenever the motors started moving, which threw everything off. " + 
  "With this knowledge, we were able to design a dynamic threshhold that expected and ignored the startup spike. " + 
  "This breakthrough was made possible by using tools to observe the underlying mechanics of what we were working with.",

  media: bluey_homing,
  tags: ["Open Source", "FreeRTOS", "C/C++", "I2C", "ESP32", "Interrupts"],
  githubUrl: "https://github.com/talos-rit"
}

const secondaryProjects = [
  {
    id: 1,
    title: "Bidirectional Control Stack",
    description: "Real-time telemetry and control system, including a server and live browser dashboard for bidirectional communication with hardware.",
    tags: ["ESP32", "C/C++", "Networking"],
    githubUrl: "https://github.com/frey808/bidirectional-control-stack"
  },
  {
    id: 2,
    title: "STM32 Song Player",
    description: "A song player with external speaker that reads from MIDI files, capable of pausing, resuming, and skipping through songs.",
    tags: ["STM32", "Bare Metal", "Timing Control"],
    githubUrl: "https://github.com/frey808/midi-player"
  },
  {
    id: 3,
    title: "3D Rendering Engine",
    description: "CPU-based rasterizer built from scratch in Python, executing traditional graphics rendering pipelines.",
    tags: ["Python", "Graphics", "3D"],
    githubUrl: "https://github.com/frey808/rasterization-engine"
  }
]

export const ProjectsSection = () => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const handleSoundToggle = () => {
    setMuted(prev => {
      if (videoRef.current) videoRef.current.muted = !prev
      return !prev
    })
  }
  
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          This is what I've been up to recently.
        </p>

        {/* Featured project */}
        <div className="group bg-card rounded-xl overflow-hidden shadow-xs card-hover mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Video panel */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={featuredProject.media}
              />

              {/* Caption overlay — top */}
              <div className="absolute top-0 left-0 right-0 px-4 py-3 bg-gradient-to-b from-black/60 to-transparent">
                <p className="text-white text-xl font-medium">
                  First successful homing sequence
                </p>
              </div>

              {/* Sound toggle — bottom left */}
              <button
                onClick={handleSoundToggle}
                className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white text-xs transition-colors duration-200"
              >
                {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                <span>{muted ? "Sound off" : "Sound on"}</span>
              </button>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProject.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-primary text-2xl font-semibold mb-3">{featuredProject.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{featuredProject.description}</p>
                <p className="text-muted-foreground text-sm">{featuredProject.detail}</p>
              </div>
              <div className="mt-6">
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary flex items-center gap-2 transition-colors duration-300"
                >
                  <span>GitHub</span>
                  <Link2 size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary projects — compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {secondaryProjects.map((project, i) => (
            <div key={i} className="bg-card rounded-lg p-5 shadow-xs card-hover flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-foreground font-medium text-sm mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-xs">{project.description}</p>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                className="text-foreground/80 hover:text-primary flex items-center gap-1 mt-4 text-xs transition-colors duration-300"
              >
                <span>GitHub</span>
                <Link2 size={12} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/frey808"
            target="_blank"
            className="custom-button w-fit flex items-center mx-auto gap-2"
          >
            My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}