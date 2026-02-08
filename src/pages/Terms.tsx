import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
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
                            Términos y Condiciones
                        </h1>

                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p className="text-sm text-muted-foreground mb-8">
                                Última actualización: Febrero 2026
                            </p>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    1. Aceptación de Términos
                                </h2>
                                <p>
                                    Al acceder y utilizar el sitio web de Espacios con Alma, aceptas estar sujeto a
                                    estos términos y condiciones. Si no estás de acuerdo con alguno de estos términos,
                                    no debes usar este sitio.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    2. Servicios
                                </h2>
                                <p>
                                    Espacios con Alma ofrece servicios de paisajismo, diseño de interiores, venta de
                                    plantas y decoración. Los detalles específicos de cada servicio se proporcionan
                                    mediante cotización personalizada.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    3. Cotizaciones y Presupuestos
                                </h2>
                                <p>
                                    Todas las cotizaciones son válidas por 30 días desde su emisión. Los precios están
                                    sujetos a cambios sin previo aviso. Los presupuestos finales pueden variar según
                                    las condiciones del sitio y disponibilidad de materiales.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    4. Garantías
                                </h2>
                                <p>
                                    Ofrecemos garantía en nuestras plantas según las condiciones detalladas al momento
                                    de la compra. La garantía no cubre daños por negligencia o cuidado inadecuado.
                                    Los servicios de diseño e instalación cuentan con garantía de trabajo según lo
                                    acordado en el contrato.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    5. Propiedad Intelectual
                                </h2>
                                <p>
                                    Todos los diseños, propuestas y materiales creativos desarrollados por Espacios con Alma
                                    son de nuestra propiedad intelectual. No pueden ser reproducidos o utilizados sin
                                    autorización expresa.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    6. Limitación de Responsabilidad
                                </h2>
                                <p>
                                    Espacios con Alma no se responsabiliza por daños indirectos, incidentales o
                                    consecuentes derivados del uso de nuestros servicios o productos. Nuestra
                                    responsabilidad se limita al monto pagado por el servicio o producto específico.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    7. Modificaciones
                                </h2>
                                <p>
                                    Nos reservamos el derecho de modificar estos términos en cualquier momento.
                                    Los cambios serán efectivos al ser publicados en este sitio web.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    8. Contacto
                                </h2>
                                <p>
                                    Para cualquier consulta sobre estos términos, contáctanos a través de nuestro
                                    formulario de contacto o por WhatsApp.
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

export default Terms;
