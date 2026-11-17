
import { createContext, useContext, useState } from "react"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("edvora_user")) || null
    } catch {
      return null
    }
  })

  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("edvora_users") || "[]")

    const exists = users.some(
      item => item.email.toLowerCase() === email.toLowerCase()
    )

    if (exists) {
      return { success: false, message: "This email is already registered." }
    }

    const newUser = { name, email, password }
    users.push(newUser)

    localStorage.setItem("edvora_users", JSON.stringify(users))

    const activeUser = { name, email }
    localStorage.setItem("edvora_user", JSON.stringify(activeUser))
    setUser(activeUser)

    return { success: true }
  }

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("edvora_users") || "[]")

    const found = users.find(
      item =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password
    )

    if (!found) {
      return { success: false, message: "Invalid email or password." }
    }

    const activeUser = { name: found.name, email: found.email }

    localStorage.setItem("edvora_user", JSON.stringify(activeUser))
    setUser(activeUser)

    return { success: true }
  }

  const logout = () => {
    localStorage.removeItem("edvora_user")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }

  return context
}
