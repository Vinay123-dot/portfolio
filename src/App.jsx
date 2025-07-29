import React from "react";
import { motion } from "framer-motion";
import profileImage from "./assets/profile.jpeg";
import { my_skills, my_projects, my_experiences } from "./constant";
import { Mail, Phone, Linkedin, FileDown } from "lucide-react";

export default function App() {
  return (
    <div className="relative bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black font-sans scroll-smooth overflow-x-hidden">
      <header className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center px-8 py-5 bg-white bg-opacity-80 shadow-xl sticky top-0 z-50 backdrop-blur-md w-full">
        <h1 className="text-lg md:text-3xl font-bold tracking-wider text-orange-500">Velugoti Vinay</h1>
        <nav className="flex flex-col space-y-4 md:space-y-0 md:space-x-6  md:flex-row md:items-center">
          {["About", "Skills", "Experience", "Projects"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group text-gray-800 font-semibold hover:text-orange-500 transition-colors duration-300">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-24 md:group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </header>

      <section id="about" className="px-10 py-20">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          <motion.div initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex-1 flex justify-center order-1 md:order-2">
            <img src={profileImage} alt="Vinay" className="rounded-lg shadow-xl w-92 h-92 object-cover border-4 border-orange-400" />
          </motion.div>

          <motion.div initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex-1 order-2 md:order-1">
            <p className="text-lg font-semibold text-orange-500 mb-2">Software Engineer</p>

            <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Hi, I'm Vinay</h2>

            <p className="text-gray-700 font-semibold text-base leading-relaxed text-lg mb-6 max-w-2xl">
              A front-end developer with <strong>4 years</strong> of experience building fast, responsive, and scalable web apps using <strong>React.js</strong> and{" "}
              <strong>Tailwind CSS</strong>. Skilled in crafting clean UIs, managing complex states with <strong>Redux</strong>, and delivering smooth, user-first experiences.
              <br />
              <br />I focus on writing clean code, staying updated with modern web trends, and turning ideas into polished, performant products.
            </p>

            <div className="flex gap-4 items-center flex-wrap">
              <a href="mailto:velugotivinay326@gmail.com" className="flex items-center gap-2 bg-[#D44638] text-white px-4 py-2 rounded-md shadow-3xl hover:bg-[#bb3b2f] transition">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/velugotivinay/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-md shadow-3xl hover:bg-[#005e91] transition"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href="/Vinay_Velugoti_React_Developer_Resume.pdf"
                download
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md shadow-3xl hover:bg-orange-600 transition"
              >
                <FileDown className="w-5 h-5" />
                <span className="text-sm font-medium">Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-16 px-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-orange-500">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {my_skills.map((skill, idx) => (
            <motion.div
              key={skill}
              // className="bg-orange-500 text-white py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
              className="bg-orange-500 hover:bg-orange-600 focus:ring-2 text-white focus:ring-offset-2 focus:ring-[#5A87B2] py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="py-16 px-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-orange-500">Experience</h2>
        <div className="flex flex-col gap-8">
          {my_experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-orange-300 transition"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {exp.company} <span className="text-gray-500">({exp.duration})</span>
              </h3>
              <p className="text-orange-500 text-lg font-semibold mt-2">{exp.role}</p>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1 font-semibold">
                {exp.points.map((point, i) => (
                  <li key={i} className>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-16 px-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-orange-500">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {my_projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-orange-300 transition"
            >
              <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              <p className="text-orange-500 text-lg font-semibold mt-2">{project.role}</p>
              <ul className="list-disc list-inside text-gray-700 font-semibold mt-4 space-y-1">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

//dark
//  <div className="bg-gradient-to-br from-[#1a1a1a] via-[#111] to-black text-white font-sans scroll-smooth">
//    <header className="flex justify-between items-center px-8 py-5 bg-black bg-opacity-70 shadow-xl sticky top-0 z-50 backdrop-blur-md">
//      <h1 className="text-3xl font-bold tracking-wider text-orange-400">Velugoti Vinay</h1>
//      <nav className="space-x-6 flex items-center">
//        {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
//          <a key={item} href={`#${item.toLowerCase()}`} className="relative group text-white hover:text-orange-300 transition-colors duration-300">
//            {item}
//            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
//          </a>
//        ))}
//      </nav>
//    </header>

//    <section id="about" className="px-10 py-20">
//      <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
//        <motion.div initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex-1">
//          <p className="text-lg text-orange-300 mb-2">Software Engineer</p>
//          <h2 className="text-5xl font-extrabold text-white mb-6">Hi, I'm Vinay</h2>
//          <p className="text-gray-300 leading-relaxed">
//            Front-end developer with 4 years of experience in building scalable and user-friendly applications using React.js . Proven expertise in modern UI frameworks like
//            Tailwind CSS, state management with Redux, and delivering seamless user experiences.
//          </p>
//        </motion.div>
//        <motion.div initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex-1 flex justify-center">
//          <img src={profileImage} alt="Vinay" className="rounded-full shadow-2xl w-72 h-72 object-cover border-4 border-orange-400" />
//        </motion.div>
//      </div>
//    </section>

//    <section id="skills" className="py-16 px-10">
//      <h2 className="text-4xl font-bold text-center mb-10 text-orange-400">Skills</h2>
//      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
//        {my_skills.map((skill, idx) => (
//          <motion.div
//            key={skill}
//            className="bg-orange-500 text-black py-4 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300"
//            whileHover={{ scale: 1.05 }}
//            whileTap={{ scale: 0.95 }}
//            initial={{ opacity: 0, y: 30 }}
//            animate={{ opacity: 1, y: 0 }}
//            transition={{ delay: idx * 0.05 }}
//          >
//            {skill}
//          </motion.div>
//        ))}
//      </div>
//    </section>

//    <section id="experience" className="py-16 px-10">
//      <h2 className="text-4xl font-bold text-center mb-10 text-orange-400">Experience</h2>
//      <div className="flex flex-col gap-8">
//        {my_experiences.map((exp, idx) => (
//          <motion.div
//            key={idx}
//            initial={{ opacity: 0, y: 40 }}
//            whileInView={{ opacity: 1, y: 0 }}
//            transition={{ delay: idx * 0.1 }}
//            className="bg-[#1f1f1f] p-6 rounded-lg shadow-lg hover:shadow-orange-500/20 transition"
//          >
//            <h3 className="text-xl font-bold text-white">
//              {exp.company} <span className="text-gray-400">({exp.duration})</span>
//            </h3>
//            <p className="text-orange-300 text-lg font-semibold mt-2">{exp.role}</p>
//            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-1">
//              {exp.points.map((point, i) => (
//                <li key={i}>{point}</li>
//              ))}
//            </ul>
//          </motion.div>
//        ))}
//      </div>
//    </section>

//    <section id="projects" className="py-16 px-10">
//      <h2 className="text-4xl font-bold text-center mb-10 text-orange-400">Projects</h2>
//      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//        {my_projects.map((project, idx) => (
//          <motion.div
//            key={idx}
//            initial={{ opacity: 0, y: 40 }}
//            whileInView={{ opacity: 1, y: 0 }}
//            transition={{ delay: idx * 0.1 }}
//            className="bg-[#1f1f1f] p-6 rounded-lg shadow-lg hover:shadow-orange-500/20 transition"
//          >
//            <h3 className="text-xl font-bold text-white">
//              {project.title} <span className="text-gray-400">({project.duration})</span>
//            </h3>
//            <p className="text-orange-300 text-lg font-semibold mt-2">{project.role}</p>
//            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-1">
//              {project.points.map((point, i) => (
//                <li key={i}>{point}</li>
//              ))}
//            </ul>
//          </motion.div>
//        ))}
//      </div>
//    </section>

//    <div className="text-center py-10">
//      <a
//        href="/resume.pdf"
//        download
//        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-lg font-semibold transition duration-300 shadow-md"
//      >
//        Download Resume
//      </a>
//    </div>

//    <section id="contact" className="py-16 px-10 bg-black bg-opacity-70">
//      <h2 className="text-3xl font-bold text-center mb-8 text-orange-400">Contact Me</h2>
//      <form className="max-w-xl mx-auto space-y-4">
//        <input
//          type="text"
//          placeholder="Your Name"
//          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
//        />
//        <input
//          type="email"
//          placeholder="Your Email"
//          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
//        />
//        <textarea
//          rows="4"
//          placeholder="Your Message"
//          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
//        />
//        <button className="w-full bg-orange-500 hover:bg-orange-600 text-black py-2 rounded-lg font-semibold transition">Send Message</button>
//      </form>
//    </section>
//  </div>;
