
import { useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { Eye, EyeOff, GraduationCap, Mail, Lock } from "lucide-react"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [searchParams] = useSearchParams()

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    setError("")

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }

    if (!password.trim()) {
      setError("Please enter your password.")
      return
    }

    const result = login(email, password)

    if (!result.success) {
      setError(result.message)
      return
    }

    const redirect = searchParams.get("redirect")
    const safeRedirect =
      redirect && redirect.startsWith("/") && !redirect.startsWith("//")
        ? redirect
        : "/"

    navigate(safeRedirect)
  }

  return (
    <section className="min-h-[85vh] grid lg:grid-cols-2">
      <div className="hidden lg:flex hero-gradient items-center justify-center p-12 relative overflow-hidden">
        <div className="max-w-lg relative">
          <div className="flex items-center gap-3">
            <div className="bg-violet-600 text-white p-3 rounded-xl">
              <GraduationCap size={30} />
            </div>
            <span className="text-3xl font-extrabold">EDVORA.</span>
          </div>
          <h1 className="text-5xl font-extrabold leading-tight mt-12">
            Welcome Back to Your <span className="gradient-text">Learning Journey.</span>
          </h1>
          <p className="text-slate-500 leading-8 mt-6">
            Continue learning, explore new skills and move one step
            closer to achieving your goals.
          </p>
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900"
            alt="Students learning"
            className="rounded-3xl mt-10 w-full h-64 object-cover shadow-xl"
          />
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-10">
            <GraduationCap className="text-violet-600" size={30} />
            <span className="text-2xl font-extrabold">EDVORA.</span>
          </div>

          <span className="section-label">WELCOME BACK</span>
          <h2 className="text-3xl font-extrabold mt-5">Sign In to Your Account</h2>
          <p className="text-slate-500 mt-3 text-sm">
            Enter your details to continue learning.
          </p>

          <form onSubmit={handleSubmit} className="mt-9 space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="form-input pl-12"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="form-input pl-12 pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {error && (
              <p role="alert" className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </p>
            )}

            <button type="submit" className="w-full bg-violet-600 text-white py-4 rounded-xl font-bold hover:bg-violet-700 transition">
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-8">
            Don't have an account?{" "}
            <Link to="/signup" className="text-violet-600 font-bold">
              Create Account
            </Link>
          </p>

          <p className="text-center mt-8">
            <Link to="/" className="text-sm text-slate-500 hover:text-violet-600">
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
