import React from 'react';
import { Code2, Cpu, Globe2, MessageSquare, MonitorSmartphone, Users2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold flex items-center gap-2">
              <Code2 className="h-8 w-8" />
              Defcon Tech
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-white hover:text-blue-200">Services</a>
              <a href="#about" className="text-white hover:text-blue-200">About</a>
              <a href="#contact" className="text-white hover:text-blue-200">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Innovating the Future of Technology
              </h1>
              <p className="mt-6 text-lg text-blue-100">
                We deliver cutting-edge software solutions that transform businesses and drive growth.
              </p>
              <button className="mt-8 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300">
                Get Started
              </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                alt="Team working" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="h-10 w-10 text-blue-600" />,
                title: "AI & Machine Learning",
                description: "Leverage the power of artificial intelligence to automate and optimize your business processes."
              },
              {
                icon: <MonitorSmartphone className="h-10 w-10 text-blue-600" />,
                title: "Web & Mobile Development",
                description: "Create stunning, responsive applications that work seamlessly across all devices."
              },
              {
                icon: <Globe2 className="h-10 w-10 text-blue-600" />,
                title: "Cloud Solutions",
                description: "Scale your infrastructure efficiently with our cloud-native development approach."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Our team" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Defcon Tech</h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to revolutionize the tech industry, Defcon Tech brings together expertise, 
                innovation, and dedication to deliver exceptional software solutions. Our team of passionate 
                professionals works tirelessly to help businesses achieve their digital transformation goals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Users2 className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="font-semibold">50+ Experts</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="font-semibold">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Code2 className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold">Defcon Tech</span>
            </div>
            <div className="text-center md:text-right">
              <p>© 2024 Defcon Tech Pvt Ltd. All rights reserved.</p>
              <p className="mt-2 text-gray-400">Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;