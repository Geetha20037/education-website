
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Eye, EyeOff, GraduationCap, User,
  Mail, Lock, CheckCircle2
} from "lucide-react"
import { useAuth } from "../context/AuthContext"

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState("")

  const { signup } = useAuth()
  const navigate = useNavigate()

  const updateField = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError("")
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (form.name.trim().length < 2) {
      setError("Please enter your full name.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.")
      return
    }

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.")
      return
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    const result = signup(
      form.name.trim(),
      form.email.trim(),
      form.password
    )

    if (!result.success) {
      setError(result.message)
      return
    }

    navigate("/")
  }

  return (
    <section className="min-h-[85vh] grid lg:grid-cols-2">
      <div className="hidden lg:flex bg-slate-950 text-white items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute w-80 h-80 bg-violet-600/30 blur-3xl rounded-full top-10 left-10" />
        <div className="relative max-w-lg">
          <div className="flex items-center gap-3">
            <div className="bg-violet-600 p-3 rounded-xl">
              <GraduationCap size={30} />
            </div>
            <span className="text-3xl font-extrabold">EDVORA.</span>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight mt-14">
            Invest in Yourself. <span className="text-violet-400">Build Your Future.</span>
          </h1>
          <p className="text-slate-400 leading-8 mt-6">
            Join a community of passionate learners and discover
            opportunities to grow your knowledge and skills.
          </p>

          <div className="mt-10 space-y-5">
            {[
              "Access expert-led courses",
              "Learn practical and valuable skills",
              "Connect with a growing community"
            ].map(item => (
              <p key={item} className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="text-violet-400" size={20} />
                {item}
              </p>
            ))}
          </div>

          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=900"
            alt="University students"
            className="rounded-3xl mt-10 h-52 w-full object-cover opacity-80"
          />
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <GraduationCap size={30} className="text-violet-600" />
            <span className="text-2xl font-extrabold">EDVORA.</span>
          </div>

          <span className="section-label">JOIN OUR COMMUNITY</span>
          <h2 className="text-3xl font-extrabold mt-5">Create Your Account</h2>
          <p className="text-sm text-slate-500 mt-3">
            Start your learning journey with EDVORA today.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 mt-8">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  className="form-input pl-12"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  className="form-input pl-12"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={updateField}
                  className="form-input pl-12 pr-12"
                  placeholder="Minimum 8 characters"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={updateField}
                  className="form-input pl-12 pr-12"
                  placeholder="Re-enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  aria-label="Toggle confirm password visibility"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <p role="alert" className="bg-red-50 text-red-600 rounded-lg p-3 text-sm">
                {error}
              </p>
            )}

            <button type="submit" className="w-full bg-violet-600 text-white py-4 rounded-xl font-bold hover:bg-violet-700 transition">
              Create Account
            </button>
          </form>

          <p className="text-sm text-center text-slate-500 mt-7">
            Already have an account?{" "}
            <Link to="/login" className="text-violet-600 font-bold">Sign In</Link>
          </p>

          <p className="text-center mt-7">
            <Link to="/" className="text-sm text-slate-500 hover:text-violet-600">
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
