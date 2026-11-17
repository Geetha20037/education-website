
import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { GraduationCap, Menu, X, UserRound, LogOut } from "lucide-react"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" }
  ]

  const navClass = ({ isActive }) =>
    `text-sm font-semibold transition ${
      isActive ? "text-violet-700" : "text-slate-600 hover:text-violet-700"
    }`

  const handleLogout = () => {
    logout()
    setMenuOpen(false)
    navigate("/")
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
      <nav className="container-width h-[76px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center">
            <GraduationCap size={25} />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            EDVORA<span className="text-violet-600">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <NavLink key={link.path} to={link.path} className={navClass}>
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm font-semibold text-slate-600 max-w-40 truncate">
                <UserRound size={15} className="inline mr-1" />
                {user.name}
              </span>
              <button onClick={handleLogout} className="text-sm font-semibold text-slate-600 hover:text-red-500 flex items-center gap-1">
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-semibold text-slate-700 hover:text-violet-600">
                Log in
              </Link>
              <Link to="/signup" className="bg-violet-600 text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-violet-700 transition">
                Get Started
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-violet-50"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-5 flex flex-col gap-5">
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              {link.name}
            </NavLink>
          ))}

          {user ? (
            <button onClick={handleLogout} className="text-left text-red-500 font-semibold">
              Logout
            </button>
          ) : (
            <div className="flex gap-3">
              <Link to="/login" onClick={() => setMenuOpen(false)} className="flex-1 text-center border border-violet-200 text-violet-700 py-3 rounded-xl font-semibold">
                Log in
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)} className="flex-1 text-center bg-violet-600 text-white py-3 rounded-xl font-semibold">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  )
}
