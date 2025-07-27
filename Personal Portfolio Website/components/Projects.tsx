import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      id: '01',
      title: 'Brand Identity Project',
      category: 'Branding',
      description: 'Complete brand identity design for a tech startup, including logo, color palette, and brand guidelines.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop'
    },
    {
      id: '02',
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce platform built with React and modern design principles.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
    },
    {
      id: '03',
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      description: 'User experience design for a productivity mobile application with clean, intuitive interface.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
    },
    {
      id: '04',
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Professional corporate website with custom CMS and responsive design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      id: '05',
      title: 'Creative Campaign',
      category: 'Creative Direction',
      description: 'Art direction and creative campaign for a global fashion brand launch.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop'
    }
  ];

  return (
    <section className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-gray-600 text-sm tracking-wider">(The Portfolio)</span>
          </div>
          
          <h2 className="text-2xl lg:text-4xl leading-tight max-w-3xl">
            A collection of work, creative concepts, and professional projects 
            that showcase expertise and innovation.
          </h2>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 py-6 lg:py-8 border-b border-gray-200 last:border-b-0 group cursor-pointer hover:bg-gray-50 transition-colors duration-300 -mx-6 lg:-mx-8 px-6 lg:px-8"
            >
              <div className="flex items-start gap-4 lg:gap-6 flex-1">
                <span className="text-gray-400 text-sm">({project.id})</span>
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl mb-2 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base mb-3">
                    {project.category}
                  </p>
                  <p className="text-gray-500 text-sm lg:text-base max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="lg:w-48 lg:h-36 w-full h-48 bg-gray-100 rounded overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}