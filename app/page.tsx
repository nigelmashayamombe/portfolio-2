'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useCursorStore } from '@/lib/store';
import { Code, Briefcase, Mail, ExternalLink, Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';
import { projects, skills, experiences, socialLinks } from '@/lib/data';
import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Navbar } from '@/components/navbar';

export default function Home() {
  const setVariant = useCursorStore((state) => state.setVariant);
  const containerRef = useRef<HTMLDivElement>(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Full Stack Laravel Developer", "Designer", "Innovative Developer", "Creative thinker" ,"Artisan"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects = projects.filter(
    (project) =>
      selectedTags.length === 0 ||
      project.tags.some((tag) => selectedTags.includes(tag))
  );

  return (
    <div ref={containerRef}>
      <div className="parallax-bg" />
      <div className="gradient-overlay" />
      <Navbar />
      
      <main className="relative min-h-screen">
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-2/3">
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
                    onMouseEnter={() => setVariant('hover')}
                    onMouseLeave={() => setVariant('default')}
                  >
                    Hello, I'm Nigel M.
                  </motion.h1>
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-teal-400 h-16 flex items-center"
                    key={titleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {titles[titleIndex]}
                  </motion.div>
                  <p className="text-xl text-white/80 mt-6 max-w-2xl">
                    I strive to deliver user experiences that are both intuitive and
                    pleasing to the eye, creating applications and websites
                    consistent with industry standards.
                  </p>
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full"
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      See my work <ArrowDown className="ml-2" />
                    </Button>
                  </motion.div>
                </div>
                <div className="md:w-1/3">
                  <motion.div
                    className="relative w-full aspect-square rounded-full overflow-hidden"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-teal-500 opacity-80 animate-pulse" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <section id="about" className="mb-32">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block">About Me</h2>
              <motion.div
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-white/80 mb-6 leading-relaxed text-justify">
                  I'm a passionate Full Stack Developer with a strong foundation in web development,
                  particularly experienced with Laravel and modern JavaScript frameworks.I've gained hands-on experience in building scalable web applications
                  and working with diverse teams through internships and personal projects. I'm constantly learning and exploring new technologies
                  to create better digital experiences.
                </p>
                <div className="flex justify-center space-x-6">
                  {[
                    { icon: Github, href: "https://github.com/nigelmashayamombe", label: 'GitHub' },
                    { icon: Linkedin, href: "www.linkedin.com/in/nigel-mashayamombe-4881b1241", label: 'LinkedIn' },
                    { icon: Twitter, href: socialLinks.twitter, label: 'Twitter' },
                    { icon: Mail, href:'mailto:mashayamombenigel424@gmail.com', label: 'Email' },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      onMouseEnter={() => setVariant('hover')}
                      onMouseLeave={() => setVariant('default')}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="sr-only">{label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section id="skills" className="mb-32">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block">Skills</h2>
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="glass-card px-6 py-3 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onMouseEnter={() => setVariant('hover')}
                    onMouseLeave={() => setVariant('default')}
                    onClick={() => 
                      setSelectedTags((prev) =>
                        prev.includes(skill)
                          ? prev.filter((t) => t !== skill)
                          : [...prev, skill]
                      )
                    }
                  >
                    <span className={selectedTags.includes(skill) ? 'text-primary' : 'text-white'}>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <section id="projects" className="mb-32">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block">Projects</h2>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="mb-16 glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-2/5">
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="lg:w-3/5 space-y-4">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-white/80">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Progress value={project.progress} className="my-4" />
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="text-white border-white/20 hover:bg-white/10"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          View Live <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          className="text-white border-white/20 hover:bg-white/10"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          Source Code <Code className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="experience" className="mb-32">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block">Experience</h2>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.id}
                    className="glass-card p-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        <p className="text-white/80">{exp.company}</p>
                      </div>
                      <p className="text-white/60 mt-2 md:mt-0">{exp.duration}</p>
                    </div>
                    <ul className="list-disc list-inside space-y-2 mb-4 text-white/80">
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="mb-32">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block">Get in Touch</h2>
              <motion.form
                className="glass-card p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">Name</label>
                    <Input className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <Input type="email" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Message</label>
                    <Textarea className="bg-white/10 border-white/20 text-white" rows={6} />
                  </div>
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                    Send Message
                  </Button>
                  <div className="flex justify-center space-x-6 pt-6 border-t border-white/10">
                    {[
                      { icon: Github, href: "https://github.com/nigelmashayamombe", label: 'GitHub' },
                      { icon: Linkedin, href: "www.linkedin.com/in/nigel-mashayamombe-4881b1241", label: 'LinkedIn' },
                      { icon: Twitter, href: socialLinks.twitter, label: 'Twitter' },
                      { icon: Mail, href:'mailto:mashayamombenigel424@gmail.com', label: 'Email' },
                    ].map(({ icon: Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-teal-400 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        onMouseEnter={() => setVariant('hover')}
                        onMouseLeave={() => setVariant('default')}
                      >
                        <Icon className="w-6 h-6" />
                        <span className="sr-only">{label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}