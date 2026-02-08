import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Estado para guardar los datos del usuario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- LÓGICA DE ENVÍO REAL (FORMSPREE) ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Tu endpoint personal de Formspree
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgggdob";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          telefono: formData.phone,
          mensaje: formData.message
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        }, 3000);
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Hubo un problema al enviar. Por favor intenta de nuevo o escríbenos por WhatsApp.");
      console.error(error);
    }
  };

  // --- AQUÍ ESTÁ EL CAMBIO DEL NÚMERO ---
  const openWhatsApp = () => {

    const phoneNumber = "5493885168435";
    window.open(`https://wa.me/${phoneNumber}?text=Hola!`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Contacto
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Solicita tu <span className="text-gradient-gold">Asesoramiento</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te ayudaremos a crear el espacio verde de tus sueños.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Ubicación</h4>
                    <p className="text-muted-foreground text-sm">
                      Villa Jardín de Reyes<br />
                      Jujuy, Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Teléfono</h4>
                    <p className="text-muted-foreground text-sm">
                      Contáctanos por WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">
                      info@espaciosconalma.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="w-5 h-5" />
                  Escribenos por WhatsApp
                </Button>
              </div>
            </div>

            {/* Decorative Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <p className="font-serif text-xl italic text-muted-foreground">
                "Cada planta es una historia, cada jardín es un sueño hecho realidad."
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
              Formulario de Asesoramiento
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || isSubmitted}
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Tu teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting || isSubmitted}
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">¿En qué podemos ayudarte?</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto, el espacio que quieres transformar, o cualquier consulta..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                  className="bg-muted/50 border-border focus:border-primary min-h-[150px] resize-none"
                />
              </div>

              <Button
                type="submit"
                variant={isSubmitted ? "gold" : "hero"}
                size="lg"
                className="w-full"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    ¡Mensaje Enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Solicitud
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;