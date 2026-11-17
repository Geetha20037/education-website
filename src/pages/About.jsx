
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react"

const team = [
  { name: "Daniel Wilson", role: "Founder & CEO", image: "https://i.pravatar.cc/300?img=12" },
  { name: "Sophia Martinez", role: "Head of Education", image: "https://i.pravatar.cc/300?img=47" },
  { name: "James Anderson", role: "Lead Instructor", image: "https://i.pravatar.cc/300?img=13" },
  { name: "Emily Johnson", role: "Community Manager", image: "https://i.pravatar.cc/300?img=44" }
]

export default function About() {
  return (
    <>
      <section className="hero-gradient py-20">
        <div className="container-width text-center">
          <span className="section-label">ABOUT EDVORA</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-5">
            Education That <span className="gradient-text">Inspires.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto mt-5 leading-8">
            We are on a mission to make quality education accessible,
            practical and meaningful for everyone.
          </p>
        </div>
      </section>

      <section className="container-width py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="section-label">OUR STORY</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-5 leading-tight">
            Creating Opportunities Through <span className="gradient-text">Learning.</span>
          </h2>
          <p className="text-slate-500 leading-8 mt-6">
            EDVORA was created with a simple belief: education should
            open doors, inspire curiosity and help people achieve their
            dreams.
          </p>
          <p className="text-slate-500 leading-8 mt-4">
            We bring together experienced instructors, practical courses
            and a supportive learning community to help students build
            valuable skills for the future.
          </p>
          <div className="grid grid-cols-2 gap-5 mt-9">
            <div>
              <h3 className="text-3xl font-extrabold text-violet-600">15K+</h3>
              <p className="text-sm text-slate-500 mt-1">Happy Learners</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-violet-600">120+</h3>
              <p className="text-sm text-slate-500 mt-1">Expert Courses</p>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000"
          alt="Students in a classroom"
          className="w-full h-[430px] object-cover rounded-3xl"
        />
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-width">
          <div className="text-center">
            <span className="section-label">WHAT DRIVES US</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-4">Our Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-7 mt-12">
            <div className="bg-white rounded-3xl p-9 card-hover border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold mt-6">Our Mission</h3>
              <p className="text-slate-500 leading-8 mt-4">
                To empower learners with accessible, engaging and
                career-focused education that builds confidence and
                creates meaningful opportunities.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-9 card-hover border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold mt-6">Our Vision</h3>
              <p className="text-slate-500 leading-8 mt-4">
                To become a trusted global learning community where
                everyone has the opportunity to discover their potential
                and shape a brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-width py-20">
        <div className="text-center">
          <span className="section-label">OUR VALUES</span>
          <h2 className="text-3xl font-extrabold mt-4">What We Believe In</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-7 mt-12">
          {[
            { icon: Heart, title: "Passion", text: "We believe in the power of curiosity and lifelong learning." },
            { icon: Award, title: "Excellence", text: "We aim to provide quality education and meaningful experiences." },
            { icon: Users, title: "Community", text: "We grow stronger by learning, sharing and supporting each other." }
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center p-7 rounded-2xl bg-white border border-slate-100 card-hover">
              <Icon size={32} className="mx-auto text-violet-600" />
              <h3 className="font-bold text-xl mt-5">{title}</h3>
              <p className="text-slate-500 text-sm leading-7 mt-3">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-width">
          <div className="text-center">
            <span className="section-label">THE PEOPLE BEHIND EDVORA</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-4">Meet Our Team</h2>
            <p className="text-slate-500 mt-3">Passionate people making learning better.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {team.map(member => (
              <div key={member.name} className="bg-white p-4 rounded-2xl text-center card-hover">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-xl"
                />
                <h3 className="font-bold mt-4">{member.name}</h3>
                <p className="text-violet-600 text-xs font-semibold mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
