import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Menu, X, ArrowDown, Cpu, Wifi, Cog, Magnet, Shapes, Shield, Coins, Github, Instagram, Youtube } from "lucide-react";
import synthecLogo from "@assets/images/Logo-SYNTHEC.png";
import symaLogo from "@assets/images/Logo-SYMA.png";
import symaDiagram from "@assets/images/Diagrama-SYMA.png";
import angelPhoto from "@assets/images/Angel.png";
import carlosPhoto from "@assets/images/Carlos.png";
import susanaPhoto from "@assets/images/Susana.png";
import emilianoPhoto from "@assets/images/Emiliano.png";

const TYPEWRITER_PHRASES = [
  "Redefiniendo la Manufactura",
  "Robótica Modular",
  "Industria 5.0",
  "Materia Programable",
];

function SectionDivider() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Separator className="bg-border/50" />
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar scrollToSection={scrollToSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection scrollToSection={scrollToSection} />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <TechSpecsSection />
      <SectionDivider />
      <TeamSection />
      <Footer />
    </div>
  );
}

function Navbar({ scrollToSection, isMenuOpen, setIsMenuOpen }: { scrollToSection: (id: string) => void; isMenuOpen: boolean; setIsMenuOpen: (open: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-lg bg-background/70 border-b border-border shadow-lg" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-3 py-2 transition-all"
            data-testid="link-home"
          >
            <img src={synthecLogo} alt="SYNTHEC" className="h-8 md:h-10" />
          </button>

          <button
            className="md:hidden text-foreground hover-elevate active-elevate-2 p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <NavLink onClick={() => scrollToSection("about")} data-testid="link-about">Sobre SYMA</NavLink>
            <NavLink onClick={() => scrollToSection("features")} data-testid="link-features">Características</NavLink>
            <NavLink onClick={() => scrollToSection("specs")} data-testid="link-specs">Especificaciones</NavLink>
            <NavLink onClick={() => scrollToSection("team")} data-testid="link-team">Equipo</NavLink>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 backdrop-blur-lg bg-card/90 rounded-md mt-2 p-4 border border-border">
            <MobileNavLink onClick={() => scrollToSection("about")} data-testid="link-about-mobile">Sobre SYMA</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("features")} data-testid="link-features-mobile">Características</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("specs")} data-testid="link-specs-mobile">Especificaciones</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("team")} data-testid="link-team-mobile">Equipo</MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ onClick, children, ...props }: { onClick: () => void; children: React.ReactNode; [key: string]: any }) {
  return (
    <button
      onClick={onClick}
      className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md"
      {...props}
    >
      {children}
    </button>
  );
}

function MobileNavLink({ onClick, children, ...props }: { onClick: () => void; children: React.ReactNode; [key: string]: any }) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-3 hover-elevate active-elevate-2 rounded-md"
      {...props}
    >
      {children}
    </button>
  );
}

function HeroSection({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <img src={symaLogo} alt="SYMA" className="h-20 md:h-28 mx-auto mb-8 opacity-90" data-testid="img-syma-logo" />
          <div className="h-16 md:h-20 mb-8">
            <TypewriterEffect />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed" data-testid="text-hero-subtitle">
            Plataforma de robótica modular auto-reconfigurable para la Industria 5.0
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("about")}
            className="text-lg px-8 py-6 shadow-xl hover:shadow-primary/50 transition-all duration-300 group relative overflow-hidden"
            data-testid="button-ver-prototipo"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-testid="button-gradient-overlay"></span>
            <span className="relative flex items-center gap-2" data-testid="button-text-content">
              <span data-testid="text-button-label">Ver Prototipo</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" data-testid="icon-arrow-down" />
            </span>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TypewriterEffect() {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullPhrase = TYPEWRITER_PHRASES[phraseIndex];

      if (!isDeleting) {
        if (charIndex < fullPhrase.length) {
          setCurrentPhrase(fullPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentPhrase(fullPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % TYPEWRITER_PHRASES.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary" data-testid="text-typewriter">
      <span data-testid="text-typewriter-content">{currentPhrase}</span>
      <span className="animate-pulse" data-testid="text-typewriter-cursor">|</span>
    </h2>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background" data-testid="section-about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground" data-testid="text-about-title">
            Sobre el Proyecto
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed text-justify" data-testid="text-about-description-1">
                <span className="text-primary font-semibold">SYMA (Sistema Modular Auto-ensamblable)</span> es una plataforma de robótica modular auto-reconfigurable (MSRR) de bajo costo inspirada en el diseño SMORES-EP y los microbots de Big Hero 6.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify" data-testid="text-about-description-2">
                Nuestro objetivo es desarrollar un prototipo funcional que demuestre locomoción diferencial robusta, comunicación inalámbrica en enjambre y un mecanismo de acoplamiento y desacoplamiento magnético controlado.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify" data-testid="text-about-description-3">
                La arquitectura del módulo está basada en el microcontrolador <span className="text-primary font-medium">ESP32</span>, que gestiona la comunicación a través del protocolo <span className="text-primary font-medium">ESP-NOW</span> por su baja latencia. El sistema de movimiento utiliza servomotores de rotación continua para tracción diferencial.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify" data-testid="text-about-description-4">
                El sistema de acoplamiento emplea <span className="text-primary font-medium">electroimanes de retención (EPMs)</span> controlados por puentes-H, permitiendo una unión mecánicamente sólida sin consumo de energía constante y un desacople activo.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Card className="p-4 md:p-6 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 max-w-md mx-auto">
              <div className="aspect-square rounded-md overflow-hidden flex items-center justify-center">
                <img 
                  src={symaDiagram} 
                  alt="Diagrama del módulo SYMA" 
                  className="w-full h-full object-contain"
                  data-testid="img-syma-diagram"
                />
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Shapes,
      title: "Versatilidad",
      description: "Capacidad de formar diferentes morfologías (serpientes, arañas, vehículos) para adaptarse a distintas tareas y entornos.",
    },
    {
      icon: Shield,
      title: "Robustez",
      description: "Módulos reconfigurables y reemplazables que garantizan continuidad operativa ante fallos individuales.",
    },
    {
      icon: Coins,
      title: "Bajo Costo",
      description: "Diseño modular universal replicable que reduce significativamente los costos de fabricación en producción masiva.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-card/30" data-testid="section-features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground" data-testid="text-features-title">
            Características Clave
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <ScrollReveal key={index} delay={index * 150}>
                <Card
                  className="p-8 backdrop-blur-md bg-card/70 border-border hover:border-primary/40 transition-all duration-300 group hover:-translate-y-2"
                  data-testid={`card-feature-${index}`}
                >
                  <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300" data-testid={`icon-feature-${index}`}>
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-foreground" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-justify" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechSpecsSection() {
  const specs = [
    { label: "Microcontrolador", value: "ESP32", icon: Cpu },
    { label: "Comunicación", value: "ESP-NOW", icon: Wifi },
    { label: "Locomoción", value: "Diferencial", icon: Cog },
    { label: "Acoplamiento", value: "Electroimanes", icon: Magnet },
  ];

  return (
    <section id="specs" className="py-20 md:py-32 bg-background" data-testid="section-specs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 text-foreground" data-testid="text-specs-title">
            Especificaciones Técnicas
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto" data-testid="text-specs-subtitle">
            Tecnología de vanguardia para robótica modular auto-reconfigurable
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => {
            const IconComponent = spec.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="p-6 backdrop-blur-sm bg-card/50 border-border hover:border-primary/40 transition-all duration-300 group" data-testid={`card-spec-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300" data-testid={`icon-spec-${index}`}>
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1" data-testid={`text-spec-label-${index}`}>
                        {spec.label}
                      </h3>
                      <p className="text-lg font-semibold text-foreground" data-testid={`text-spec-value-${index}`}>
                        {spec.value}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 backdrop-blur-sm bg-card/30 border-primary/20">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-display font-bold text-primary mb-2" data-testid="text-stat-budget">
                    <span data-testid="text-stat-budget-value">$1,250 MXN</span>
                  </div>
                  <p className="text-muted-foreground text-sm" data-testid="text-stat-budget-label">Presupuesto por módulo</p>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-primary mb-2" data-testid="text-stat-modules">
                    <span data-testid="text-stat-modules-value">2</span>
                  </div>
                  <p className="text-muted-foreground text-sm" data-testid="text-stat-modules-label">Módulos Alpha y Delta</p>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-primary mb-2" data-testid="text-stat-sdgs">
                    <span data-testid="text-stat-sdgs-value">3 ODS</span>
                  </div>
                  <p className="text-muted-foreground text-sm" data-testid="text-stat-sdgs-label">Objetivos de Desarrollo Sostenible</p>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TeamSection() {
  const team = [
    { name: "Angel Moreno", role: "Lider del Proyecto", photo: angelPhoto },
    { name: "Carlos García", role: "Diseñador Mecánico", photo: carlosPhoto },
    { name: "Susana Fang", role: "Especialista en Electrónica", photo: susanaPhoto },
    { name: "Emiliano Bustamante", role: "Investigador", photo: emilianoPhoto },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-card/30" data-testid="section-team">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 text-foreground" data-testid="text-team-title">
            El Equipo SYNTHEC
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto" data-testid="text-team-subtitle">
            Innovadores comprometidos con el futuro de la robótica modular
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="p-6 text-center backdrop-blur-md bg-card/70 border-border hover:border-primary/40 transition-all duration-300 group hover:-translate-y-2" data-testid={`card-team-${index}`}>
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 flex items-center justify-center ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300" data-testid={`photo-team-${index}`}>
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-bold mb-2 text-foreground" data-testid={`text-team-name-${index}`}>
                  <span data-testid={`text-team-name-value-${index}`}>{member.name}</span>
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-team-role-${index}`}>
                  <span data-testid={`text-team-role-value-${index}`}>{member.role}</span>
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-12" data-testid="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={synthecLogo} alt="SYNTHEC" className="h-8" data-testid="img-footer-logo" />
            <span className="text-muted-foreground text-sm" data-testid="text-copyright">
              <span data-testid="text-copyright-value">© 2025 SYNTHEC Robotics. Todos los derechos reservados.</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/synthec-robotics/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-elevate active-elevate-2 p-2 rounded-md" aria-label="GitHub" data-testid="link-github">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/synthec.robotics/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-elevate active-elevate-2 p-2 rounded-md" aria-label="Instagram" data-testid="link-instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@synthec.robotics" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-elevate active-elevate-2 p-2 rounded-md" aria-label="YouTube" data-testid="link-youtube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
}
