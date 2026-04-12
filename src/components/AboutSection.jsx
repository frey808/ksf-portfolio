import { Code, Cpu, Terminal } from "lucide-react"


export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Firmware & Embedded Systems Engineer</h3>

            <p className="text-muted-foreground">
              I see engineering as a fractal — no matter how deeply you look at a 
              system, there's another layer of intentional complexity beneath it. 
              That belief shapes how I approach problems: the best solution 
              always comes from understanding the underlying mechanics.
            </p>

            <p className="text-muted-foreground">
              I specialize in real-time embedded systems, low-level C/C++, and 
              hardware-software integration. I've shipped firmware professionally 
              at Biamp Systems and built open source embedded control systems 
              involving FreeRTOS, I2C peripherals, and hands-on debugging.
              I'm currently seeking entry-level firmware and embedded systems roles.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semi-bold">Real-Time Systems</h4>
                  <p className="text-muted-foreground">
                    Building deterministic, interrupt-driven firmware in C using FreeRTOS 
                    on ESP32 and STM32 platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semi-bold">Hardware Integration</h4>
                  <p className="text-muted-foreground">
                    Interfacing with peripherals over I2C and UART, with hands-on debugging 
                    experience using oscilloscopes, multimeters, and packet sniffers.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Terminal className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semi-bold">Systems & Networking</h4>
                  <p className="text-muted-foreground">
                    Professional experience with Linux-based firmware development, 
                    networking protocols, and team tooling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}