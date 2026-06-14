import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Ronak Jogeshwar",
    role: "Viksit Bharat Fellow",
    institution: "BlueKraft Digital Foundation",
    image: "/ronaktestimonial.jpg",
    quote: "Muskan combines sharp research acumen, analytical rigor, and strong written and communication skills. She synthesizes complex information into coherent, academically robust narratives. Detail-oriented, highly organized, and proactive, she collaborates seamlessly across teams and contributes effectively across research, writing, editing, and coordination.",
    rating: 5,
  },
  {
    name: "Jannat Khosla",
    role: "Intern",
    institution: "IIT Roorkee",
    image: "/jannatkhosla.jpg",
    quote: "Muskan has been amazing as a co author. I absolutely adore her work ethics and I appreciate the amount of work and effort she puts into whatever she plans to do. She has great potential & I wish her the best.",
    rating: 5,
  },
  {
    name: "ICTCS 2025 Board",
    role: "Conference",
    institution: "ICTCS",
    image: "/ictcs.jpg",
    quote: "Muskan's presentation at our conference was highly praised by attendees. Her research quality and communication skills set a high standard. I highly recommend her for any academic collaboration.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FAFC] to-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#003CFF]/10 to-[#4F7CFF]/10 border border-[#003CFF]/20 text-[#003CFF] text-sm font-medium">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            What People Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Trusted by researchers, academics, and organizations worldwide
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial Display */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br from-[#003CFF]/10 to-[#4F7CFF]/10 flex items-center justify-center">
              <Quote className="w-10 h-10 text-[#003CFF]" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#003CFF] text-[#003CFF]" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed italic" style={{ fontFamily: 'var(--font-body)' }}>
              "{testimonials[activeIndex].quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#003CFF]"
              />
              <div>
                <h4 className="text-xl font-bold text-[#0F172A]">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                <p className="text-sm text-gray-500">{testimonials[activeIndex].institution}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "w-12 h-3 bg-gradient-to-r from-[#003CFF] to-[#4F7CFF]"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* All Testimonials Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer bg-white rounded-2xl p-6 border transition-all duration-300 ${
                  index === activeIndex
                    ? "border-[#003CFF] shadow-lg"
                    : "border-gray-100 hover:border-gray-200 shadow"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-semibold text-[#0F172A]">{testimonial.name}</h5>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#003CFF] text-[#003CFF]" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
