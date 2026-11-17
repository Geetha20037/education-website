
import { useState } from "react"
import {
  Mail, Phone, MapPin, Send, Clock, CheckCircle2
} from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = "Name is required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address"
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required"
    if (form.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!validate()) return

    const messages = JSON.parse(localStorage.getItem("edvora_messages") || "[]")
    messages.push({ ...form, submittedAt: new Date().toISOString() })
    localStorage.setItem("edvora_messages", JSON.stringify(messages))

    setSuccess(true)
    setForm({ name: "", email: "", subject: "", message: "" })
    setErrors({})
  }

  const updateField = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSuccess(false)
  }

  return (
    <>
      <section className="hero-gradient py-16">
        <div className="container-width text-center">
          <span className="section-label">GET IN TOUCH</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-5">
            Let's Start a <span className="gradient-text">Conversation.</span>
          </h1>
          <p className="text-slate-500 mt-5 max-w-xl mx-auto leading-8">
            Have questions about our courses? We're here to help you
            find the right learning path.
          </p>
        </div>
      </section>

      <section className="container-width py-16 grid lg:grid-cols-[.8fr_1.2fr] gap-10">
        <div>
          <h2 className="text-3xl font-extrabold">We'd Love to Hear From You</h2>
          <p className="text-slate-500 mt-4 leading-8">
            Reach out to our team. We'll help you with course information,
            enrollment and other questions.
          </p>

          <div className="space-y-6 mt-9">
            {[
              { icon: Mail, title: "Email Us", value: "hello@edvora.example" },
              { icon: Phone, title: "Call Us", value: "+91 98765 43210" },
              { icon: MapPin, title: "Visit Us", value: "Bengaluru, Karnataka, India" },
              { icon: Clock, title: "Working Hours", value: "Monday – Saturday, 9 AM – 6 PM" }
            ].map(({ icon: Icon, title, value }) => (
              <div key={title} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-white border border-slate-100 shadow-xl shadow-slate-100 p-6 sm:p-9 rounded-3xl">
          <h2 className="text-2xl font-extrabold mb-7">Send Us a Message</h2>

          {success && (
            <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-2 text-sm mb-6">
              <CheckCircle2 size={20} />
              Your message has been submitted successfully!
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input name="name" value={form.name} onChange={updateField} className="form-input" placeholder="Your name" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input name="email" type="email" value={form.email} onChange={updateField} className="form-input" placeholder="you@example.com" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-sm font-semibold mb-2">Subject</label>
            <input name="subject" value={form.subject} onChange={updateField} className="form-input" placeholder="How can we help?" />
            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
          </div>

          <div className="mt-5">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea name="message" rows="5" value={form.message} onChange={updateField} className="form-input resize-none" placeholder="Write your message..." />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <button type="submit" className="mt-6 w-full bg-violet-600 text-white rounded-xl py-4 font-bold flex items-center justify-center gap-2 hover:bg-violet-700 transition">
            Send Message <Send size={17} />
          </button>
        </form>
      </section>

      <section className="container-width pb-20">
        <div className="rounded-3xl overflow-hidden border border-slate-100">
          <iframe
            title="EDVORA Bengaluru location"
            src="https://www.google.com/maps?q=Bengaluru,Karnataka,India&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
