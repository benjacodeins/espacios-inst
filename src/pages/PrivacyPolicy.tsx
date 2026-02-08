import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">
                            Política de Privacidad
                        </h1>

                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p className="text-sm text-muted-foreground mb-8">
                                Última actualización: Febrero 2026
                            </p>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    1. Información que Recopilamos
                                </h2>
                                <p>
                                    En Espacios con Alma, respetamos tu privacidad. Recopilamos información personal
                                    solo cuando nos la proporcionas voluntariamente a través de nuestros formularios de contacto,
                                    incluyendo nombre, correo electrónico, teléfono y detalles del proyecto.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    2. Uso de la Información
                                </h2>
                                <p>
                                    Utilizamos tu información para:
                                </p>
                                <ul className="list-disc pl-6 mt-2 space-y-2">
                                    <li>Responder a tus consultas y solicitudes de asesoramiento</li>
                                    <li>Proporcionar cotizaciones y propuestas de servicios</li>
                                    <li>Mantener comunicación sobre proyectos en curso</li>
                                    <li>Mejorar nuestros servicios y experiencia del cliente</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    3. Protección de Datos
                                </h2>
                                <p>
                                    Implementamos medidas de seguridad apropiadas para proteger tu información personal
                                    contra acceso no autorizado, alteración, divulgación o destrucción. Tu información
                                    no será compartida con terceros sin tu consentimiento explícito.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    4. Cookies
                                </h2>
                                <p>
                                    Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario.
                                    Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar
                                    algunas funcionalidades del sitio.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    5. Tus Derechos
                                </h2>
                                <p>
                                    Tienes derecho a:
                                </p>
                                <ul className="list-disc pl-6 mt-2 space-y-2">
                                    <li>Acceder a tu información personal que tenemos</li>
                                    <li>Solicitar corrección de datos inexactos</li>
                                    <li>Solicitar la eliminación de tus datos</li>
                                    <li>Retirar tu consentimiento para el uso de tus datos</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    6. Contacto
                                </h2>
                                <p>
                                    Si tienes preguntas sobre nuestra política de privacidad o deseas ejercer
                                    tus derechos, contáctanos a través de nuestro formulario de contacto o por WhatsApp.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default PrivacyPolicy;
