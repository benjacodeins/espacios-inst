import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-20">
                <ContactForm />
            </div>

            <Footer />
        </main>
    );
};

export default Contact;
