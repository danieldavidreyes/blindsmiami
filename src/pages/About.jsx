import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality",
      description: "We never compromise on the quality of our work or materials. Every project is completed to the highest standards."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Integrity",
      description: "Honest pricing and transparent communication are at the core of everything we do."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We work closely with you to ensure your needs are met."
    },
  ];

  const features = [
    "1,000s of happy customers",
    "25+ years experience",
    "100% Residential and Commercially Insured",
    "Placeholder: Free in-home consultation and measurement",
    "Placeholder: Personalized recommendations for your space",
    "Placeholder: Detailed quote with transparent pricing",
    "Placeholder: Professional installation scheduling",
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
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
              Read more about what we do, and our commitment to exceptional service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
              Placeholder: Founded with a passion for excellence and customer satisfaction, we've been serving South Florida with dedication and expertise. Our journey began with a simple mission: to provide the highest quality service at the best possible prices.
            </p>
            <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto mt-4">
              Placeholder: Over the years, we've built a reputation for reliability, craftsmanship, and exceptional customer service. Every project we undertake is a testament to our commitment to transforming spaces and exceeding expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-stone-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-5xl font-bold text-amber-700">1000s+</h3>
              <p className="text-xl text-stone-600 mt-2">Happy Customers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-stone-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-5xl font-bold text-amber-700">25+</h3>
              <p className="text-xl text-stone-600 mt-2">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-stone-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-5xl font-bold text-amber-700">100%</h3>
              <p className="text-xl text-stone-600 mt-2">Insured</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              We are dedicated to delivering renowned service and value to all of our customers. Operating for over 25 years, we’ve aimed to be the most trusted name in South Florida for professional installation and repair services for all window solutions. Our approach to design and manufacturing will always be tailored to your specific needs, With close consultation, precise planning, and the goal in mind of emulating your desired outcome we will always strive to bring your vision to reality as accurately as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-stone-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-stone-900 mb-8">
                Why Choose Us?
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-stone-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
                  alt="Quality installation"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-700 to-stone-700 rounded-full flex items-center justify-center text-white shadow-xl">
                <div className="text-center">
                  <Star className="w-8 h-8 mx-auto mb-1" />
                  <div className="text-sm font-bold">Best Prices</div>
                </div>
              </div>
            </motion.div>
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
              Ready to Work With Us?
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
                Contact Us Today
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;


