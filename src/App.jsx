export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">Snyman Dhlamini</h1>

          <div className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
            <a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition duration-300">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
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

    <p className="max-w-2xl text-lg md:text-xl text-slate-300 mb-8 leading-8">
      I build practical digital solutions, support business IT systems,
      and create data-driven reports that help organisations work smarter.
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

      <a
        href="https://github.com/SnymanD"
        target="_blank"
        className="border border-slate-500 hover:border-blue-400 px-8 py-3 rounded-xl font-medium"
      >
        GitHub
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
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-slate-300 leading-8 text-lg">
          I am a Mathematical and Computer Science graduate with experience in
          software development, IT support, systems administration, and data
          analysis. I have worked as an Information Systems Officer, supporting
          users, troubleshooting IT issues, managing business data, and building
          reporting tools that improve decision-making.
        </p>

        <p className="text-slate-300 leading-8 text-lg mt-6">
          I enjoy solving real business problems using technology, whether that
          means building a system, analysing data, supporting users, or improving
          business processes.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-semibold mb-5 text-blue-400">
                Software Development
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>Python</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-semibold mb-5 text-blue-400">
                IT Support
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>Windows Support</li>
                <li>Microsoft 365</li>
                <li>Networking</li>
                <li>Hardware Troubleshooting</li>
                <li>Printers & Scanners</li>
                <li>User Support</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-semibold mb-5 text-blue-400">
                Data Analysis
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>Excel Dashboards</li>
                <li>Power BI</li>
                <li>SQL</li>
                <li>Python</li>
                <li>Jupyter Notebook</li>
                <li>Reporting Automation</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              Retail Performance Dashboard
            </h3>
            <p className="text-slate-300 leading-7 mb-5">
              Built a professional Excel reporting dashboard for tracking store
              sales, branch performance, department performance, monthly
              variance, and growth insights.
            </p>
            <p className="text-sm text-blue-400">
              Excel • Dashboards • Data Analysis • Reporting
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              Training Centre Data App
            </h3>
            <p className="text-slate-300 leading-7 mb-5">
              Created a MySQL-based application to store, manage, and organise
              training centre records more efficiently.
            </p>
            <p className="text-sm text-blue-400">
              MySQL • Database Design • Visual Studio
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              SnyTech Solutions Website
            </h3>
            <p className="text-slate-300 leading-7 mb-5">
              Developed and managed a business website for IT support, web
              design, hosting services, and digital solutions.
            </p>
            <p className="text-sm text-blue-400">
              WordPress • Hosting • cPanel • SEO
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              Delivery Management System Concept
            </h3>
            <p className="text-slate-300 leading-7 mb-5">
              Designed a concept for an online delivery platform with customer
              ordering, admin order management, delivery tracking, and
              notifications.
            </p>
            <p className="text-sm text-blue-400">
              React • Node.js • MySQL • System Design
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>

          <div className="space-y-8">

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-semibold">
                Information Systems Officer
              </h3>
              <p className="text-blue-400 mt-1">
                BiBi Funeral Scheme
              </p>
              <p className="text-slate-400 mt-1">
                Dec 2025 – Feb 2026
              </p>

              <ul className="list-disc list-inside text-slate-300 mt-5 space-y-2 leading-7">
                <li>Provided IT support across multiple branches.</li>
                <li>Managed business data and policy information.</li>
                <li>Assisted with systems, troubleshooting, and reporting.</li>
                <li>Supported users with hardware, software, and network issues.</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-semibold">
                IT Support Intern
              </h3>
              <p className="text-blue-400 mt-1">
                GaoTek Inc
              </p>

              <ul className="list-disc list-inside text-slate-300 mt-5 space-y-2 leading-7">
                <li>Assisted with IT support and technical troubleshooting.</li>
                <li>Worked with software tools and technical documentation.</li>
                <li>Improved practical technical support skills.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>

        <p className="text-slate-300 mb-8 leading-7">
          I am open to opportunities in software development, IT support,
          desktop support, helpdesk support, and data analysis.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:dhlaminisnyman@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-medium"
          >
            Email Me
          </a>

          <a
            href="https://wa.me/27766330663"
            target="_blank"
            className="border border-slate-500 hover:border-blue-400 px-8 py-3 rounded-xl font-medium"
          >
            WhatsApp Me
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="border border-slate-500 hover:border-blue-400 px-8 py-3 rounded-xl font-medium"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-800">
        <p>© 2026 Snyman Dhlamini. All rights reserved.</p>

        <a
          href="https://github.com/SnymanD"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 mt-3 inline-block"
        >
          github.com/SnymanD
        </a>
      </footer>

    </div>
  )
}