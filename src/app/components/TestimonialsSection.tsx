import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";


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

        <div className="max-w-7xl mx-auto overflow-hidden">
  <motion.div
  whileHover={{}}
  animate={{
    x: ["0%", "-50%"],
  }}
    transition={{
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    }}
    className="flex gap-6 w-max"
  >
    {[...testimonials, ...testimonials].map((testimonial, index) => (
  <motion.div
    key={index}
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    className="w-[300px] sm:w-[360px] lg:w-[420px] bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 flex-shrink-0 hover:shadow-2xl transition-all duration-300"
  >
        {/* Stars */}
        <div className="flex gap-1 mb-5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#003CFF] text-[#003CFF]"
            />
          ))}
        </div>

        {/* Quote */}
        <p
          className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base"
          style={{ fontFamily: "var(--font-body)" }}
        >
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-[#003CFF]"
          />

          <div>
            <h4 className="font-bold text-[#0F172A]">
              {testimonial.name}
            </h4>

            <p className="text-sm text-gray-600">
              {testimonial.role}
            </p>

            <p className="text-xs text-gray-500">
              {testimonial.institution}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
</div>
        </div>
    </section>
  );
}
