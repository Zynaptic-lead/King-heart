import { ContactSection } from "@/components/contact/ContactSection";

export const metadata = {
  title: "Contact — Valerie Noir Visual Studio",
  description: "Initiate a commission, request brand identity design, 3D motion artwork, or editorial publishing collaboration.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <ContactSection />
    </div>
  );
}
