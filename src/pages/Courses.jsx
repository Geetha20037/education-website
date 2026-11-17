
import { useMemo, useState } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import CourseCard from "../components/CourseCard"
import { courses } from "../data/courses"

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState(searchParams.get("category") || "All")
  const [level, setLevel] = useState("All")

  const categories = [
    "All", "Development", "Design", "Marketing",
    "Business", "Data Science"
  ]

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        category === "All" || course.category === category

      const matchesLevel =
        level === "All" || course.level === level

      return matchesSearch && matchesCategory && matchesLevel
    })
  }, [search, category, level])

  const changeCategory = value => {
    setCategory(value)
    if (value === "All") {
      setSearchParams({})
    } else {
      setSearchParams({ category: value })
    }
  }

  return (
    <>
      <section className="hero-gradient py-16">
        <div className="container-width text-center">
          <span className="section-label">EXPLORE & LEARN</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-5">
            Discover Your Next <span className="gradient-text">Skill.</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto mt-5 leading-8">
            Explore expert-led courses and find the perfect learning
            path for your goals.
          </p>
        </div>
      </section>

      <section className="container-width py-16">
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search courses, skills..."
              className="form-input pl-12 pr-10"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="flex gap-3 items-center">
            <SlidersHorizontal size={18} className="text-violet-600" />
            <select
              value={level}
              onChange={e => setLevel(e.target.value)}
              className="form-input py-3 w-auto min-w-36"
              aria-label="Filter by course level"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap mt-8">
          {categories.map(item => (
            <button
              key={item}
              onClick={() => changeCategory(item)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
                category === item
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                  : "bg-slate-100 text-slate-600 hover:bg-violet-100 hover:text-violet-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mt-10 mb-6">
          <div>
            <h2 className="text-2xl font-extrabold">All Courses</h2>
            <p className="text-sm text-slate-500 mt-1">
              {filteredCourses.length} courses found
            </p>
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-2xl">
            <Search size={40} className="mx-auto text-slate-300" />
            <h3 className="text-xl font-bold mt-5">No courses found</h3>
            <p className="text-slate-500 mt-2">
              Try changing your search or filters.
            </p>
            <button
              onClick={() => {
                setSearch("")
                setLevel("All")
                changeCategory("All")
              }}
              className="mt-5 text-violet-600 font-bold"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>
    </>
  )
}
