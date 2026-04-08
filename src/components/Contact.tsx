import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'ramadhanwambia83@gmail.com',
      href: 'mailto:ramadhanwambia83@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+254 704 489 778',
      href: 'tel:+254704489778'
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: 'https://wa.me/254704489778'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Eldoret, Kenya',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          Let's create something amazing together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                placeholder="Project discussion, collaboration, etc."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 resize-none"
                placeholder="Tell me about your project, ideas, or how we can work together..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400 text-center">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400 text-center">Failed to send message. Please try again or contact me directly.</p>
              </div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group"
              >
                <div className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-500">{info.label}</div>
                  <div className="text-white group-hover:text-blue-400 transition-colors">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-gray-800">
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;