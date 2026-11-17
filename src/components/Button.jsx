
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function Button({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
  type = "button"
}) {
  const styles = {
    primary: "bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-200",
    secondary: "bg-white text-violet-700 border border-violet-200 hover:bg-violet-50",
    dark: "bg-slate-900 text-white hover:bg-slate-800"
  }

  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        <ArrowRight size={17} />
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      <ArrowRight size={17} />
    </button>
  )
}
