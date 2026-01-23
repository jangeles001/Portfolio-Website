import emailjs from "@emailjs/browser"
import type { EmailFormData } from "../types/emails"

export async function SendEmail(formData: EmailFormData) {
    return emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
}   