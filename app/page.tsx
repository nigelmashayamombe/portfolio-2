'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useCursorStore } from '@/lib/store';
import { Code, Briefcase, Mail, ExternalLink, Github, Linkedin, Twitter, ArrowDown, Phone } from 'lucide-react';
import { projects, skills, experiences, socialLinks } from '@/lib/data';
import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Navbar } from '@/components/navbar';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Home() {
  const setVariant = useCursorStore((state) => state.setVariant);
  const containerRef = useRef<HTMLDivElement>(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Developer", "Designer", "Innovator", "Creator"];
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) {
    return null;
  }

  return (
    <div ref={containerRef}>
      <div className="parallax-bg" />
      <div className="gradient-overlay" />
      <Navbar />
      
      <main className="relative min-h-screen">
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-2/3">
                  <motion.h1
                    className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:bg-gradient-to-r dark:from-purple-400 dark:via-pink-500 dark:to-red-500 dark:text-transparent dark:bg-clip-text"
                    onMouseEnter={() => setVariant('hover')}
                    onMouseLeave={() => setVariant('default')}
                  >
                    Hie there , I'm Nigel M.
                  </motion.h1>
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-teal-400 h-12 flex items-center justify-start"
                    key={titleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {titles[titleIndex]}
                  </motion.div>
                  <p className="text-lg text-gray-700 dark:text-white/80 mt-6 max-w-2xl">
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
                      className="dark:bg-teal-500 dark:hover:bg-teal-600 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      See my work <ArrowDown className="ml-2" />
                    </Button>
                  </motion.div>
                </div>
                <div className="md:w-1/3">
                  <motion.div
                    className="relative w-full aspect-square"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {theme === 'dark' ? (
                      <div className="w-full h-full rounded-full dark:bg-gradient-to-br dark:from-purple-500 dark:via-pink-500 dark:to-teal-500 opacity-80 animate-pulse" />
                    ) : (
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-lg relative">
                        <Image
                          src="https://res.cloudinary.com/dnecnwcaf/image/upload/v1739057117/photo_4_2025-02-09_01-24-56_amurni.jpg"
                          alt="Profile"
                          layout="fill"
                          objectFit="cover"
                          priority
                        />
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-5xl">
          <section id="about" className="mb-32">
            <h2 className="section-title">About Me</h2>
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="dark:text-white/80 light:text-gray-700 mb-6 leading-relaxed text-justify">
                I'm a passionate Full Stack Developer with a strong foundation in web development,
                particularly experienced with Laravel and modern JavaScript frameworks. Through my
                internships, I've gained hands-on experience in building scalable web applications
                and working with diverse teams. I'm constantly learning and exploring new technologies
                to create better digital experiences.
              </p>
            </motion.div>
          </section>

          <section id="skills" className="mb-32">
            <h2 className="section-title">Skills</h2>
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
                  <span className={`${selectedTags.includes(skill) ? 'dark:text-primary light:text-blue-600' : 'dark:text-white light:text-gray-800'}`}>
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section id="projects" className="mb-32">
            <h2 className="section-title">Projects</h2>
            <div className="grid grid-cols-1 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="glass-card p-6"
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
                          className="object-cover w-full h-48 transform hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="lg:w-3/5 space-y-4">
                      <h3 className="text-2xl font-bold dark:text-white light:text-gray-900">{project.title}</h3>
                      <p className="dark:text-white/80 light:text-gray-700">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-sm px-3 py-1 rounded-full dark:bg-white/10 dark:text-white/80 light:bg-blue-100 light:text-blue-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Progress value={project.progress} className="my-4" />
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="dark:text-white dark:border-white/20 dark:hover:bg-white/10 light:text-blue-700 light:border-blue-200 light:hover:bg-blue-50"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          View Live <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          className="dark:text-white dark:border-white/20 dark:hover:bg-white/10 light:text-blue-700 light:border-blue-200 light:hover:bg-blue-50"
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
            <h2 className="section-title">Experience</h2>
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
                      <h3 className="text-xl font-bold dark:text-white light:text-gray-900">{exp.position}</h3>
                      <p className="dark:text-white/80 light:text-gray-700">{exp.company}</p>
                    </div>
                    <p className="dark:text-white/60 light:text-gray-500 mt-2 md:mt-0">{exp.duration}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 mb-4 dark:text-white/80 light:text-gray-700">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 rounded-full dark:bg-white/10 dark:text-white/80 light:bg-blue-100 light:text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="contact" className="mb-32">
            <h2 className="section-title">Get in Touch</h2>
            <motion.form
              className="glass-card p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div>
                  <label className="block dark:text-white light:text-gray-700 mb-2">Name</label>
                  <Input className="dark:bg-white/10 dark:border-white/20 dark:text-white light:bg-white light:border-gray-300 light:text-gray-900" />
                </div>
                <div>
                  <label className="block dark:text-white light:text-gray-700 mb-2">Email</label>
                  <Input type="email" className="dark:bg-white/10 dark:border-white/20 dark:text-white light:bg-white light:border-gray-300 light:text-gray-900" />
                </div>
                <div>
                  <label className="block dark:text-white light:text-gray-700 mb-2">Message</label>
                  <Textarea className="dark:bg-white/10 dark:border-white/20 dark:text-white light:bg-white light:border-gray-300 light:text-gray-900" rows={6} />
                </div>
                <Button className="w-full dark:bg-teal-500 dark:hover:bg-teal-600 bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
                <div className="flex justify-center space-x-6 pt-6 border-t dark:border-white/10 light:border-gray-200">
                  {[
                    { icon: Github, href: socialLinks.github, label: 'GitHub' },
                    { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
                    { icon: Twitter, href: socialLinks.twitter, label: 'Twitter' },
                    { icon: Mail, href: socialLinks.email, label: 'Email' },
                    { icon: Phone, href: socialLinks.phone, label: 'Phone' },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={label === 'Phone' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="dark:text-white/80 dark:hover:text-teal-400 light:text-gray-600 light:hover:text-blue-600 transition-colors"
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
          </section>
        </div>
      </main>
    </div>
  );
}