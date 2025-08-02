import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "DeepVox.ai's Enterprise AI Stack™ transformed our healthcare operations while maintaining HIPAA compliance. The implementation was seamless and the results exceeded our expectations.",
      author: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      company: "Regional Medical Center",
      rating: 5
    },
    {
      quote: "The privacy-first approach and comprehensive security features gave us confidence to implement AI across our financial services. ROI was achieved within 6 months.",
      author: "Michael Rodriguez",
      title: "Head of Digital Innovation",
      company: "Community Bank Network",
      rating: 5
    },
    {
      quote: "Outstanding support and enterprise-grade solutions. The 5-layer architecture provided exactly what we needed for our manufacturing AI transformation.",
      author: "Jennifer Kim",
      title: "VP of Operations",
      company: "Industrial Manufacturing Corp",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-deepvox-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from industry leaders who have successfully transformed their 
            organizations with our Privacy-First Enterprise AI Stack™.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-deepvox-gray rounded-xl p-8 border border-gray-700 hover:border-deepvox-blue transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up opacity-0 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              {/* Rating */}
              <div className="flex items-center mb-6 transition-transform duration-300 group-hover:scale-105">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-deepvox-accent fill-current transition-transform duration-300 hover:scale-125" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-deepvox-blue opacity-50 absolute -top-2 -left-2 transition-opacity duration-300 group-hover:opacity-70" />
                <p className="text-gray-200 leading-relaxed pl-6 transition-colors duration-300 group-hover:text-white">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-gray-700 pt-6 transition-colors duration-300 group-hover:border-gray-600">
                <div className="font-semibold text-white transition-colors duration-300 group-hover:text-deepvox-accent">{testimonial.author}</div>
                <div className="text-deepvox-accent text-sm transition-colors duration-300 group-hover:text-deepvox-blue">{testimonial.title}</div>
                <div className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-gray-300">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-deepvox-accent mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-deepvox-blue mb-2">200+</div>
              <div className="text-gray-300">Successful Implementations</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-deepvox-accent mb-2">24/7</div>
              <div className="text-gray-300">Enterprise Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;