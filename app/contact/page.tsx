import { ContactForm } from "@/components/contact-form"
import Nav from "@/components/nav"
export const metadata = {
  title: 'Contact',
  description: 'Contact me below',
}
export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center py-14">
      <ContactForm/>
    </main>
  )
}
