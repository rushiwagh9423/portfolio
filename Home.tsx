import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Download, ChevronDown } from "lucide-react";

export default function Home() {
  const [showPhoto, setShowPhoto] = useState(false);
  const [photoTimer, setPhotoTimer] = useState(0);

  // Photo reveal with 3-second auto-hide
  useEffect(() => {
    if (!showPhoto) return;
    
    setPhotoTimer(3);
    const interval = setInterval(() => {
      setPhotoTimer((prev) => {
        if (prev <= 1) {
          setShowPhoto(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showPhoto]);

  // Base64 photo data
  const PHOTO_B64 = "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";

  // Resume download function
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = `data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${RESUME_B64}`;
    link.download = "Rushikesh_Wagh_Resume.docx";
    link.click();
  };

  // Scroll animations
  const handleScroll = () => {
    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-indigo-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            RW
          </div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
            <Button onClick={downloadResume} className="bg-indigo-600 hover:bg-indigo-700">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center scroll-reveal">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 cursor-pointer" onClick={() => setShowPhoto(!showPhoto)}>
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-500 overflow-hidden hover:border-purple-400 transition">
              <img
                src={`data:image/jpeg;base64,${PHOTO_B64}`}
                alt="Rushikesh Wagh"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-indigo-400 mt-2">Click to reveal</p>
          </div>

          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Rushikesh Wagh
          </h1>
          <p className="text-xl text-slate-300 mb-2">Electronics Engineer</p>
          <p className="text-lg text-slate-400 mb-8">Specializing in Embedded Systems & Robotics</p>

          <div className="flex justify-center gap-4 mb-12">
            <a href="https://github.com/rushiwagh9423" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-indigo-600 rounded-lg transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:rushikesh@example.com" className="p-3 bg-slate-800 hover:bg-indigo-600 rounded-lg transition">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/rushikesh-wagh" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-indigo-600 rounded-lg transition">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <Button onClick={downloadResume} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg px-8 py-3">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50 scroll-reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            I am a passionate Electronics Engineer with expertise in embedded systems and robotics. With a strong foundation in hardware design and software integration, I create innovative solutions that bridge the physical and digital worlds.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 scroll-reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-800 rounded-lg border border-indigo-500/30 hover:border-indigo-500 transition">
              <h3 className="text-xl font-bold mb-4 text-indigo-400">Hardware Design</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• PCB Design (Altium/KiCad)</li>
                <li>• Circuit Simulation</li>
                <li>• Microcontroller Programming</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-800 rounded-lg border border-indigo-500/30 hover:border-indigo-500 transition">
              <h3 className="text-xl font-bold mb-4 text-indigo-400">Embedded Systems</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• C/C++ Firmware</li>
                <li>• Arduino & ESP32</li>
                <li>• Real-time Systems</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-800 rounded-lg border border-indigo-500/30 hover:border-indigo-500 transition">
              <h3 className="text-xl font-bold mb-4 text-indigo-400">Robotics</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Robot Design</li>
                <li>• Motion Control</li>
                <li>• Sensor Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-
