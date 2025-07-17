import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'blinds', label: 'Window Blinds' },
    { id: 'shutters', label: 'Shutters' },
    { id: 'motorized', label: 'Motorized' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Living Room Blinds",
      category: "blinds",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      description: "Custom horizontal blinds for a contemporary living space"
    },
    {
      id: 2,
      title: "Bedroom Window Treatment",
      category: "blinds",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      description: "Blackout blinds for optimal privacy and light control"
    },
    {
      id: 3,
      title: "Kitchen Vertical Blinds",
      category: "blinds",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
      description: "Moisture-resistant vertical blinds for kitchen windows"
    },
    {
      id: 4,
      title: "Plantation Shutters",
      category: "shutters",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      description: "Classic white plantation shutters for traditional home"
    },
    {
      id: 5,
      title: "Office Motorized Blinds",
      category: "motorized",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      description: "Smart motorized blinds with remote control"
    },
    {
      id: 6,
      title: "Commercial Installation",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
      description: "Large-scale commercial blind installation"
    },
    {
      id: 7,
      title: "Bathroom Privacy Blinds",
      category: "blinds",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      description: "Waterproof blinds for bathroom privacy"
    },
    {
      id: 8,
      title: "Patio Door Shutters",
      category: "shutters",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      description: "Bi-fold shutters for patio door access"
    },
    {
      id: 9,
      title: "Smart Home Integration",
      category: "motorized",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
      description: "Automated blinds integrated with smart home system"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openLightbox = (project) => {
    setSelectedImage(project);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredProjects.length;
    } else {
      newIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredProjects[newIndex]);
  };

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
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
              Explore our work and see the quality for yourself
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-amber-700 text-white shadow-lg'
                    : 'bg-stone-100 text-stone-700 hover:bg-amber-50 hover:text-amber-700'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.category === 'blinds' ? 'bg-amber-600 text-white' :
                        project.category === 'shutters' ? 'bg-stone-600 text-white' :
                        project.category === 'motorized' ? 'bg-amber-700 text-white' :
                        'bg-stone-700 text-white'
                      }`}>
                        {categories.find(c => c.id === project.category)?.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-stone-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-stone-600">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-stone-500">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {filteredProjects.length > 1 && (
                <>
                  <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-stone-900">
                    {selectedImage.title}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedImage.category === 'blinds' ? 'bg-amber-600 text-white' :
                    selectedImage.category === 'shutters' ? 'bg-stone-600 text-white' :
                    selectedImage.category === 'motorized' ? 'bg-amber-700 text-white' :
                    'bg-stone-700 text-white'
                  }`}>
                    {categories.find(c => c.id === selectedImage.category)?.label}
                  </span>
                </div>
                <p className="text-stone-600 text-lg">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

