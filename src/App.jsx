import { useState } from "react"
import emailjs from "@emailjs/browser"

import {
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa"

export default function App() {

  const [darkMode, setDarkMode] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.send(
      "service_snyman",
      "template_oq4ly6t",
      formData,
      "exlFR0zP0LS6wQNN4"
    )

    alert("Thank you! Your message has been sent successfully.")

    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <div
      className={
        darkMode
          ? "bg-slate-950 text-white min-h-screen transition duration-500"
          : "bg-gray-100 text-black min-h-screen transition duration-500"
      }
    >

      {/* PARTICLES */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full top-20 left-20 animate-pulse"></div>

        <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-20 right-20 animate-pulse"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-slate-800">

        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="font-bold text-xl">
            Snyman Dhlamini
          </h1>

          <div className="flex items-center gap-6">

            <div className="hidden md:flex gap-6 text-sm">
              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-blue-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl hover:text-blue-400 transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-12 px-6 pt-24 max-w-6xl mx-auto">

        <div className="text-center md:text-left">

          <p className="text-blue-400 mb-4 font-medium">
            Software Developer • IT Support • Data Analyst
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I’m Snyman Dhlamini
          </h2>

          <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-8 leading-8">
            I build practical digital solutions, support business IT systems,
            and create data-driven dashboards that help organisations work smarter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-medium"
            >
              View Projects
            </a>

            <a
              href="/cv.pdf"
              download
              className="border border-slate-500 hover:border-blue-400 px-8 py-3 rounded-xl font-medium"
            >
              Download CV
            </a>

          </div>

          {/* ICONS */}
          <div className="flex gap-5 mt-8 justify-center md:justify-start text-2xl">

            <a
              href="https://github.com/SnymanD"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:dhlaminisnyman@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://wa.me/27766330663"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        <div className="relative">

          <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-30 rounded-full"></div>

          <img
            src="/profile.png"
            alt="Snyman Dhlamini"
            className="relative w-72 md:w-96 rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/30"
          />

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="leading-8 text-lg text-slate-300">
            I am a passionate and solutions-driven Mathematical and Computer Science graduate
            with practical experience in software development, IT support, systems administration,
            database management, and data analysis.

            I have worked in real business environments supporting IT operations,
            managing sensitive organisational data, troubleshooting technical issues,
            and developing systems that improve efficiency and decision-making.

            My experience includes supporting multi-branch business operations,
            maintaining reliable IT infrastructure, handling financial and client data,
            building reporting dashboards, and creating software solutions tailored to
            business needs.

            I enjoy solving real-world problems using technology and continuously improving
            my skills in modern software development, data analytics, and digital systems.
            I am particularly interested in building scalable applications, business intelligence
            solutions, automation systems, and user-focused digital experiences.

            In addition to technical work, I also founded SnyTech Solutions,
            where I focus on IT support services, web development, hosting solutions,
            and digital transformation for businesses.

            My goal is to contribute to innovative teams where I can apply my technical,
            analytical, and problem-solving skills to create impactful solutions while
            continuing to grow as a technology professional.
        </p>

      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* DEVELOPMENT */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300">

              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Software Development
              </h3>

              <div className="space-y-4">

                <div>
                  <p className="mb-2">React & JavaScript</p>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full w-[85%]"></div>
                  </div>
                </div>

                <div>
                  <p className="mb-2">Python</p>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full w-[90%]"></div>
                  </div>
                </div>

                <div>
                  <p className="mb-2">MySQL & SQL</p>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full w-[88%]"></div>
                  </div>
                </div>

                <div>
                  <p className="mb-2">Git & GitHub</p>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full w-[80%]"></div>
                  </div>
                </div>

              </div>
            </div>

            {/* IT SUPPORT */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300">

              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                IT Support & Systems
              </h3>

              <div className="space-y-4">

                <div>
                  <p className="mb-2">Networking</p>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full w-[85%]"></div>
                  </div>
                </div>

                <div>
                  <p className="mb-2">Microsoft 365</p>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full w-[90%]"></div>
                  </div>
                </div>

                <div>
                  <p className="mb-2">Troubleshooting</p>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full w-[95%]"></div>
                  </div>
                </div>

                <div>
                  <p className="mb-2">Windows Support</p>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full w-[92%]"></div>
                  </div>
                </div>

              </div>
            </div>

            {/* DATA ANALYTICS */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300">

              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Data Analysis & Reporting
              </h3>

              <div className="space-y-4">

                <div>
                  <p className="mb-2">Excel Dashboards</p>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full w-[95%]"></div>
                  </div>
                </div>

                <div>
                  <p className="mb-2">Power BI</p>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full w-[80%]"></div>
                  </div>
                </div>

                <div>
                  <p className="mb-2">SQL Reporting</p>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full w-[88%]"></div>
                  </div>
                </div>

                <div>
                  <p className="mb-2">Business Intelligence</p>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full w-[82%]"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* PROJECTS */}
<section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

  <h2 className="text-4xl font-bold mb-12">
    Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-10">

    {/* PROJECT 1 */}
    <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300">

      <img
        src="/dashboard.png"
        alt="Retail Dashboard"
        className="w-full h-64 object-cover"
      />

      <div className="p-8">

        <h3 className="text-2xl font-semibold mb-4 text-blue-400">
          Grocery Store Performance Dashboard
        </h3>

        <p className="text-slate-300 leading-7 mb-5">
          Built a professional Excel reporting dashboard for tracking branch
          sales, department performance, growth trends, variance analysis,
          and automatic business insights across multiple grocery stores.
        </p>

        <p className="text-sm text-blue-400">
          Excel • Dashboards • Reporting • Data Analysis
        </p>

      </div>
    </div>

    {/* PROJECT 2 */}
    <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300">

      <img
        src="/snylearn.png"
        alt="SnyLearn System"
        className="w-full h-64 object-cover"
      />

      <div className="p-8">

        <h3 className="text-2xl font-semibold mb-4 text-blue-400">
          SnyLearn Student Management System
        </h3>

        <p className="text-slate-300 leading-7 mb-5">
          Developed a desktop-based student management system for handling
          student registrations, management, scores, dashboards, and reporting
          for educational administration.
        </p>

        <p className="text-sm text-blue-400">
          Python • MySQL • Desktop Application • Database Systems
        </p>

      </div>
    </div>

  </div>
</section>
      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Contact Me
        </h2>

        <form
          onSubmit={sendEmail}
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-medium"
          >
            Send Message
          </button>

        </form>

      </section>
      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-800">

        <p>
          © 2026 Snyman Dhlamini. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 mt-4 text-2xl">

          <a
            href="https://github.com/SnymanD"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:dhlaminisnyman@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/27837188802"
            target="_blank"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>

        </div>

      </footer>

    </div>
  )
}