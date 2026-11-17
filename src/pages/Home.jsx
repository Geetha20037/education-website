
import { motion } from "framer-motion"
import {
  ArrowRight, BookOpen, Users, Award, Play,
  Code2, Palette, BriefcaseBusiness, Database,
  Star, Quote, CheckCircle2, Sparkles
} from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import CourseCard from "../components/CourseCard"
import { courses } from "../data/courses"

const categories = [
  { name: "Development", count: "24 Courses", icon: Code2 },
  { name: "Design", count: "18 Courses", icon: Palette },
  { name: "Business", count: "16 Courses", icon: BriefcaseBusiness },
  { name: "Data Science", count: "12 Courses", icon: Database }
]

const testimonials = [
  {
    name: "Olivia Martin",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/100?img=47",
    text: "EDVORA completely transformed the way I learn. The practical projects helped me build confidence and get my first developer role."
  },
  {
    name: "Ryan Cooper",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/100?img=12",
    text: "The instructors explain complex concepts in such a simple way. I loved the structured lessons and hands-on approach."
  },
  {
    name: "Emma Wilson",
    role: "Marketing Specialist",
    image: "https://i.pravatar.cc/100?img=44",
    text: "A fantastic learning experience. I developed real-world skills and can now confidently work on professional projects."
  }
]

export default function Home() {
  return (
    <>
      <section className="hero-gradient overflow-hidden">
        <div className="container-width grid lg:grid-cols-2 items-center gap-12 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">
              <Sparkles size={13} className="inline mr-1" />
              LEARN SOMETHING NEW TODAY
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold leading-[1.12] tracking-tight text-slate-900 mt-6">
              Unlock Your
              <span className="gradient-text block">Potential.</span>
              Shape Your Future.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-8 mt-6 max-w-lg">
              Learn in-demand skills from industry experts. Explore
              practical courses designed to take your career to the next level.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Button to="/courses">Explore Courses</Button>
              <Link
                to="/about"
                className="flex items-center gap-2 px-5 py-3 font-semibold text-slate-700 hover:text-violet-700"
              >
                Discover EDVORA <ArrowRight size={17} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-7 mt-12">
              {[
                ["15K+", "Active Learners"],
                ["120+", "Expert Courses"],
                ["98%", "Satisfaction"]
              ].map(([value, label]) => (
                <div key={label}>
                  <h3 className="text-2xl font-extrabold text-slate-900">{value}</h3>
                  <p className="text-xs text-slate-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-8 bg-violet-300 blur-3xl opacity-30 rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1100"
              alt="Students learning together"
              className="relative rounded-[30px] w-full h-[390px] sm:h-[490px] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-5 -left-3 sm:-left-8 bg-white p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-3 float-animation">
              <div className="bg-green-100 p-3 rounded-xl text-green-600">
                <Award size={25} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Learn with experts</h4>
                <p className="text-xs text-slate-500">Practical learning journey</p>
              </div>
            </div>

            <div className="absolute -top-5 right-0 sm:-right-5 bg-white p-4 rounded-2xl shadow-xl">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map(n => <Star key={n} size={15} fill="currentColor" />)}
              </div>
              <p className="text-sm font-bold mt-1 text-slate-800">4.9/5 Rating</p>
              <p className="text-xs text-slate-500">Loved by learners</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-width py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label">LEARNING CATEGORIES</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 text-slate-900">
            Explore What You Love
          </h2>
          <p className="text-slate-500 mt-4 leading-7">
            Discover the right learning path and build skills that matter.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {categories.map(({ name, count, icon: Icon }) => (
            <Link
              key={name}
              to={`/courses?category=${encodeURIComponent(name)}`}
              className="card-hover p-6 rounded-2xl border border-slate-100 bg-white"
            >
              <div className="w-14 h-14 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center">
                <Icon size={27} />
              </div>
              <h3 className="font-bold text-slate-900 mt-5">{name}</h3>
              <p className="text-sm text-slate-500 mt-2">{count}</p>
              <ArrowRight size={17} className="text-violet-600 mt-4" />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-width">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <div>
              <span className="section-label">TOP PICKS FOR YOU</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-4">
                Featured Courses
              </h2>
              <p className="text-slate-500 mt-3">Skills that move your career forward.</p>
            </div>
            <Button to="/courses" variant="secondary">View All Courses</Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {courses.slice(0, 3).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-width py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000"
              alt="Collaborative learning"
              className="rounded-3xl w-full h-[420px] object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white p-5 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="bg-violet-100 text-violet-600 p-3 rounded-xl">
                  <Users size={25} />
                </div>
                <div>
                  <p className="font-extrabold text-xl">15,000+</p>
                  <p className="text-xs text-slate-500">Growing learner community</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="section-label">WHY EDVORA</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mt-5">
              Education That Moves You <span className="gradient-text">Forward.</span>
            </h2>
            <p className="text-slate-500 leading-8 mt-5">
              We believe everyone deserves access to quality education.
              Our courses combine expert instruction with practical knowledge.
            </p>

            <div className="space-y-5 mt-8">
              {[
                "Learn from experienced industry professionals",
                "Practical projects and real-world applications",
                "Flexible learning at your own pace",
                "Career-focused skills and knowledge"
              ].map(item => (
                <div key={item} className="flex gap-3 items-center">
                  <CheckCircle2 className="text-violet-600 shrink-0" size={21} />
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <Button to="/about">Discover Our Story</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-violet-50 py-20">
        <div className="container-width">
          <div className="text-center">
            <span className="section-label">STUDENT STORIES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-4">
              What Our Learners Say
            </h2>
            <p className="text-slate-500 mt-3">Real experiences from our learning community.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.map(item => (
              <div key={item.name} className="bg-white rounded-2xl p-7 shadow-sm card-hover">
                <Quote className="text-violet-300" size={30} />
                <p className="text-slate-600 leading-7 text-sm mt-4">{item.text}</p>
                <div className="flex gap-1 text-amber-400 mt-5">
                  {[1, 2, 3, 4, 5].map(n => <Star key={n} size={14} fill="currentColor" />)}
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-width py-20">
        <div className="bg-slate-950 rounded-[30px] p-8 sm:p-14 text-center text-white relative overflow-hidden">
          <div className="absolute w-72 h-72 bg-violet-600/30 blur-3xl rounded-full -top-32 -left-20" />
          <div className="relative">
            <span className="text-violet-300 text-xs font-bold tracking-widest">YOUR FUTURE STARTS HERE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-5">
              Ready to Start Learning?
            </h2>
            <p className="text-slate-400 mt-4 max-w-lg mx-auto leading-7">
              Take the next step towards your goals. Discover a course
              that inspires you.
            </p>
            <div className="mt-8">
              <Button to="/courses">Find Your Course</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
