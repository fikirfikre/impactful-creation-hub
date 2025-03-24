
import React from "react";
import { Phone, Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Get In Touch</h2>
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 animate-fade-in opacity-0 delay-100">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="text-base font-medium">+251 945886685</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a 
                      href="mailto:fikirtsinat15@gmail.com" 
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      fikirtsinat15@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Linkedin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/fikirfikre" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      linkedin.com/in/fikirfikre
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-base font-medium">Tullu Dimtu, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 animate-fade-in opacity-0 delay-200">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-md font-medium transition-all hover:shadow-lg hover:shadow-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
