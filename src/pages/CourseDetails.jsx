
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import {
  Star, Clock, BookOpen, Users, CheckCircle2,
  PlayCircle, ChevronDown, ChevronUp, Award
} from "lucide-react"
import { courses } from "../data/courses"
import { useAuth } from "../context/AuthContext"

export default function CourseDetails() {
  const { id } = useParams()
  const { user } = useAuth()
  const [openLesson, setOpenLesson] = useState(0)
  const [enrolled, setEnrolled] = useState(false)

  const course = courses.find(item => item.id === id)

  if (!course) {
    return (
      <div className="container-width py-28 text-center">
        <h1 className="text-3xl font-bold">Course Not Found</h1>
        <p className="text-slate-500 mt-3">The requested course is unavailable.</p>
        <Link to="/courses" className="inline-block mt-6 text-violet-600 font-bold">
          Explore Courses
        </Link>
      </div>
    )
  }

  const handleEnroll = () => {
    if (!user) {
      window.location.href = `/login?redirect=/courses/${course.id}`
      return
    }

    const current = JSON.parse(localStorage.getItem("edvora_enrollments") || "[]")
    if (!current.some(item => item.email === user.email && item.courseId === course.id)) {
      current.push({ email: user.email, courseId: course.id })
      localStorage.setItem("edvora_enrollments", JSON.stringify(current))
    }
    setEnrolled(true)
  }

  return (
    <>
      <section className="bg-slate-950 text-white py-16">
        <div className="container-width">
          <div className="text-sm text-slate-400 mb-7">
            <Link to="/">Home</Link> / <Link to="/courses">Courses</Link> / {course.category}
          </div>

          <div className="grid lg:grid-cols-[1fr_390px] gap-12 items-center">
            <div>
              <span className="bg-violet-500/20 text-violet-300 rounded-lg px-3 py-2 text-xs font-bold">
                {course.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold mt-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-slate-300 leading-8 mt-5">{course.description}</p>

              <div className="flex flex-wrap gap-5 mt-7 text-sm text-slate-300">
                <span className="flex items-center gap-1 text-amber-400">
                  <Star size={16} fill="currentColor" /> {course.rating} Rating
                </span>
                <span className="flex items-center gap-2"><Users size={16} /> {course.students} Students</span>
                <span className="flex items-center gap-2"><Clock size={16} /> {course.duration}</span>
              </div>

              <div className="flex items-center gap-3 mt-8">
                <img src={course.instructorImage} alt={course.instructor} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-xs text-slate-400">Created by</p>
                  <p className="font-bold">{course.instructor}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-3 text-slate-900">
              <img src={course.image} alt={course.title} className="w-full h-52 object-cover rounded-xl" />
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold">₹{course.price.toLocaleString("en-IN")}</span>
                  <span className="text-slate-400 line-through">₹{course.oldPrice.toLocaleString("en-IN")}</span>
                </div>
                <p className="text-xs text-green-600 font-semibold mt-2">Limited-time course offer</p>

                <button
                  onClick={handleEnroll}
                  disabled={enrolled}
                  className="w-full bg-violet-600 text-white py-4 rounded-xl font-bold mt-6 hover:bg-violet-700 disabled:bg-green-600 transition"
                >
                  {enrolled ? "Successfully Enrolled ✓" : "Enroll Now"}
                </button>

                <p className="text-xs text-slate-500 text-center mt-4">
                  Learn at your own pace
                </p>

                <div className="border-t border-slate-100 mt-5 pt-5 space-y-4 text-sm text-slate-600">
                  <p className="flex justify-between"><span>Duration</span><b>{course.duration}</b></p>
                  <p className="flex justify-between"><span>Lessons</span><b>{course.lessons}</b></p>
                  <p className="flex justify-between"><span>Level</span><b>{course.level}</b></p>
                  <p className="flex justify-between"><span>Category</span><b>{course.category}</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-width py-16 grid lg:grid-cols-[1fr_340px] gap-12">
        <div>
          <h2 className="text-2xl font-extrabold">Course Overview</h2>
          <p className="text-slate-500 leading-8 mt-5">{course.description}</p>

          <h2 className="text-2xl font-extrabold mt-12">What You'll Learn</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {course.outcomes.map(item => (
              <div key={item} className="flex gap-3 text-sm text-slate-600">
                <CheckCircle2 size={19} className="text-violet-600 shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold mt-12 mb-6">Course Curriculum</h2>
          <div className="space-y-3">
            {course.syllabus.map((item, index) => (
              <div key={item.title} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenLesson(openLesson === index ? -1 : index)}
                  className="w-full p-5 flex justify-between items-center text-left hover:bg-slate-50"
                >
                  <span className="font-bold text-sm">{index + 1}. {item.title}</span>
                  <span className="flex items-center gap-3 text-slate-500 text-xs">
                    {item.lessons} Lessons
                    {openLesson === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                {openLesson === index && (
                  <div className="px-5 pb-5 space-y-3 border-t border-slate-100 pt-4">
                    <div className="flex gap-2 items-center text-sm text-slate-500">
                      <PlayCircle size={17} className="text-violet-600" />
                      Introduction to {item.title}
                    </div>
                    <div className="flex gap-2 items-center text-sm text-slate-500">
                      <BookOpen size={17} className="text-violet-600" />
                      Practical exercises and assignments
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <aside>
          <div className="bg-violet-50 p-7 rounded-2xl">
            <Award size={32} className="text-violet-600" />
            <h3 className="text-xl font-bold mt-5">Your Learning Journey</h3>
            <p className="text-sm text-slate-500 leading-7 mt-3">
              Build confidence with structured lessons, practical
              assignments and expert guidance.
            </p>
            <button onClick={handleEnroll} className="w-full bg-violet-600 text-white rounded-xl py-3 mt-6 font-bold">
              {enrolled ? "Enrolled ✓" : "Start Learning"}
            </button>
          </div>

          <div className="border border-slate-100 p-6 rounded-2xl mt-6">
            <h3 className="font-bold">Your Instructor</h3>
            <div className="flex gap-3 items-center mt-5">
              <img src={course.instructorImage} alt={course.instructor} className="w-14 h-14 rounded-full" />
              <div>
                <h4 className="font-bold text-sm">{course.instructor}</h4>
                <p className="text-xs text-slate-500 mt-1">{course.role}</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}
