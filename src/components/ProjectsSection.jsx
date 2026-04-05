import { ArrowRight, Link2 } from "lucide-react"
import bluey_and_unc from "@/assets/bluey_and_unc.jpg"
import twilight_mountains from "@/assets/twilight_mountains.jpg"
import soundtracker from "@/assets/soundtracker_logo.jpg"


const projects = [
  {
    id: 1,
    title: "Cameraperson Robot",
    description: "An old educational robotic arm repurposed into an autonomous camera operator for improved video production",
    image: bluey_and_unc,
    tags: ["Open Source", "C++", "Robotics"],
    githubUrl: "https://github.com/talos-rit"
  },
  {
    id: 2,
    title: "Rendering Engine",
    description: "A CPU-based rasterizer built from scratch in Python, executing traditional graphics rendering pipelines",
    image: twilight_mountains,
    tags: ["Graphics", "Python", "3D Rendering"],
    githubUrl: "https://github.com/frey808/rasterization-engine"
  },
  {
    id: 3,
    title: "Soundtracker",
    description: "An AI-powered mobile app that produces Spotify playlists tailored to your current activity, based on a photo",
    image: soundtracker,
    tags: ["UI/UX", "AI-Powered", "APIs"],
    githubUrl: "#"
  }
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that I'm proud of.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagKey) => (
                    <span key={tagKey} className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-primary text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank"
                      className="text-foreground/80 hover:text-primary flex items-center gap-2 transition-colors duration-300"
                    >
                      <span> Github </span>
                      <Link2 />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href={"https://github.com/frey808"} 
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