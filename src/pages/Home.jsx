import { motion } from 'framer-motion';
import { Star, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import StickyVideoHero from '../components/StickyVideoHero';

const Home = () => {
  const services = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Guaranteed Best Prices",
      description: "We guarantee the best prices in South Florida"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Professional Installation",
      description: "Expert installation by certified professionals"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Service",
      description: "Fast and reliable service when you need it"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Sticky Video Hero */}
      <StickyVideoHero />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-12">
              We're committed to providing the best service and value in South Florida
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-stone-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-stone-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-stone-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Contact us today for your free consultation
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 text-lg rounded-lg shadow-xl transition-all duration-300"
            >
              <Link to="/contact">
                Get Free Quote
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

