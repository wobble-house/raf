import { ContactForm } from "@/components/contact-form"
export const metadata = {
  title: 'Contact',
  description: 'Contact me below',
}
export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ContactForm/>
    </main>
  )
}
