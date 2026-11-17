
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import CourseDetails from "./pages/CourseDetails"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import { AuthProvider } from "./context/AuthContext"

function PageLayout() {
  const location = useLocation()

  const authPage =
    location.pathname === "/login" ||
    location.pathname === "/signup"

  return (
    <>
      {!authPage && <Navbar />}

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={
              <div className="container-width py-32 text-center">
                <h1 className="text-5xl font-extrabold">404</h1>
                <p className="text-slate-500 mt-4">Page not found.</p>
                <a href="/" className="inline-block mt-6 text-violet-600 font-bold">
                  Back to Home
                </a>
              </div>
            } />
          </Routes>
        </motion.main>
      </AnimatePresence>

      {!authPage && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PageLayout />
      </AuthProvider>
    </BrowserRouter>
  )
}
