
import { Link } from "react-router-dom"
import { Star, Clock, Users, ArrowUpRight } from "lucide-react"

export default function CourseCard({ course }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-slate-100 card-hover">
      <Link to={`/courses/${course.id}`} className="block relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-violet-700">
          {course.category}
        </span>
      </Link>

      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-semibold text-slate-500">
            {course.level}
          </span>
          <span className="flex items-center gap-1 text-sm font-bold text-amber-500">
            <Star size={15} fill="currentColor" />
            {course.rating}
          </span>
        </div>

        <Link to={`/courses/${course.id}`}>
          <h3 className="text-lg font-bold text-slate-900 leading-snug hover:text-violet-700 min-h-14">
            {course.title}
          </h3>
        </Link>

        <p className="text-sm text-slate-500 mt-2 line-clamp-2">
          {course.description}
        </p>

        <div className="flex gap-4 text-xs text-slate-500 mt-5">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} /> {course.students.toLocaleString()}
          </span>
        </div>

        <div className="border-t border-slate-100 mt-5 pt-4 flex justify-between items-center">
          <div>
            <span className="text-xl font-extrabold text-slate-900">
              ₹{course.price.toLocaleString("en-IN")}
            </span>
            <span className="ml-2 text-sm text-slate-400 line-through">
              ₹{course.oldPrice.toLocaleString("en-IN")}
            </span>
          </div>
          <Link
            to={`/courses/${course.id}`}
            aria-label={`View ${course.title}`}
            className="w-10 h-10 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center hover:bg-violet-600 hover:text-white transition"
          >
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
    </article>
  )
}
