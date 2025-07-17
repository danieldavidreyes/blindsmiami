import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["(305) 206-0745", "(305) 498-3491"],
      color: "text-amber-700"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["alex@blinds-miami.com"],
      color: "text-amber-700"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Monday - Friday", "7:00 AM - 4:00 PM"],
      color: "text-amber-700"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["648 W 84th St", "Hialeah, FL"],
      color: "text-amber-700"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-900 via-stone-800 to-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
              Get in touch with our team for a free consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${info.color} bg-opacity-10`}>
                  <div className={info.color}>
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-stone-600">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-stone-900 mb-8">
                Send Us a Message
              </h2>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="(305) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <h2 className="text-3xl font-bold text-stone-900 mb-8">
                Get Your Free Consultation
              </h2>
              
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 text-amber-800">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Free in-home consultation and measurement
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Personalized recommendations for your space
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Detailed quote with transparent pricing
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Professional installation scheduling
                    </li>
                  </ul>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">
                    Service Areas
                  </h3>
                  <p className="text-stone-800 mb-3">
                    We proudly serve all of South Florida, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-stone-700">
                    <div>• Miami</div>
                    <div>• Hialeah</div>
                    <div>• Coral Gables</div>
                    <div>• Homestead</div>
                    <div>• Kendall</div>
                    <div>• Doral</div>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">
                    Emergency Repairs
                  </h3>
                  <p className="text-amber-800">
                    Need urgent repairs? We offer emergency service for broken blinds and urgent installations. Call us directly for immediate assistance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-8">
              Find Us
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 bg-stone-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-stone-400 mx-auto mb-4" />
                  <p className="text-stone-600">
                    648 W 84th St, Hialeah, FL
                  </p>
                  <p className="text-sm text-stone-500 mt-2">
                    Interactive map would be integrated here
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

