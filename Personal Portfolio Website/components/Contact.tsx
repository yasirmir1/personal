import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@yourname.com',
      href: 'mailto:hello@yourname.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Your City, Country',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourprofile'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/yourhandle'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/yourhandle'
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-gray-600 text-sm tracking-wider">(Get In Touch)</span>
          </div>
          
          <h2 className="text-2xl lg:text-4xl leading-tight mb-6">
            Let's collaborate on your next project. Ready to bring 
            innovative ideas to life.
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Whether you have a specific project in mind or just want to explore possibilities, 
            I'd love to hear from you. Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                    <method.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{method.label}</p>
                    {method.href ? (
                      <a 
                        href={method.href}
                        className="text-black hover:text-gray-600 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-black">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-lg mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                  >
                    <social.icon size={20} />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-600 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}