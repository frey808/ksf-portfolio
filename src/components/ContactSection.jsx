import { Mail, MapPin, Phone } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"


export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-primary"> Info </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in my work? Feel free to reach out, I'm always open to new opportunities.
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-lg mx-auto">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-full bg-primary/10 shrink-0">
              <Mail className="h-5 w-5 text-primary"/>
            </div>
            <div>
              <h4 className="text-sm font-medium">Email</h4>
              <a href="mailto:kaisunshine77@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                kaisunshine77@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-full bg-primary/10 shrink-0">
              <Phone className="h-5 w-5 text-primary"/>
            </div>
            <div>
              <h4 className="text-sm font-medium">Phone</h4>
              <a href="tel:+18082142444" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                +1 (808) 214-2444
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-full bg-primary/10 shrink-0">
              <FaLinkedin className="h-5 w-5 text-primary"/>
            </div>
            <div>
              <h4 className="text-sm font-medium">LinkedIn</h4>
              <a href="https://www.linkedin.com/in/kai-frazier/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                linkedin.com/in/kai-frazier
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-full bg-primary/10 shrink-0">
              <MapPin className="h-5 w-5 text-primary"/>
            </div>
            <div>
              <h4 className="text-sm font-medium">Location</h4>
              <p className="text-muted-foreground text-sm">Corvallis, OR, USA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}