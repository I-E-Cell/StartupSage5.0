import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "./Button";

const Accordion = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    {
      name: "General",
      questions: [
        {
          title: "Who can participate in Startup Saga 5.0?",
          content:
            " Startup Saga 5.0 is an inter-college competition open to students and early-stage founders from any college across India.",
        },
        {
          title: "How can I register for the event?",
          content:
            "Framer Motion is a production-ready motion library for React. It provides simple yet powerful declarative APIs to create animations and gestures in your React applications.",
        },
        {
          title: "Is accommodation provided for outstation participants?",
          content:
            "Yes. Shortlisted teams will be provided accommodation along with meals. Detailed information will be shared post-selection.",
        },
        {
          title: "Whom do I contact for further assistance?",
          content:
            "For queries or support, participants may reach out to the I&E Cell AIT team via the official contact details provided on the event website.",
        },
        {
          title: "What is the total prize pool of Startup Saga 5.0?",
          content:
            "The overall prize pool for Startup Saga 5.0 is ₹600000+, with mini-events offering prizes worth ₹50,000.",
        },
        {
          title: "Can startups receive funding at Startup Saga 5.0?",
          content:
            "Yes. Funding opportunities are available in both Shark Tank and the Startup Expo. Startups in the Expo also stand a chance to receive funding up to ₹16 lakhs, based on investor interest.",
        },
      ],
    },
    {
      name: "NextNiche",
      questions: [
        {
          title: "What is NextNiche?",
          content:
            "NextNiche is an intense 18-hour business hackathon designed to challenge participants’ creativity, problem-solving, and entrepreneurial skills.",
        },
        {
          title: "Who can participate in NextNiche?",
          content:
            "College students and early-stage founders seeking to develop innovative solutions and gain mentorship are eligible.",
        },
        {
          title: "What does the preliminary round involve?",
          content:
            "Teams are required to submit a presentation (PPT) and a prototype for evaluation.",
        },
        {
          title: "Is the submission of a prototype mandatory?",
          content:
            "Yes. Both the PPT and prototype are essential components for the shortlisting process.",
        },
        {
          title: "Can previously developed prototypes be submitted?",
          content:
            "Yes, provided that the prototype and content are original and owned by the team.",
        },
      ],
    },
    {
      name: "Shark Tank AIT",
      questions: [
        {
          title: "What is Shark Tank AIT?",
          content:
            "Shark Tank AIT is a pitching event where startups present their ideas to angel investors and industry experts, with the opportunity to secure real funding and mentorship.",
        },
        {
          title: "What is the pitch duration?",
          content: "Typically 5-7 minutes, followed by investor Q&A.",
        },
        {
          title: "Can early-stage startups participate?",
          content: "Yes. Both idea-stage and early-stage startups are welcome.",
        },
        {
          title: "Do I need to disclose financial projections?",
          content:
            "Yes. Basic unit economics, revenue model, and projections are expected.",
        },
      ],
    },
    {
      name: "Startup Expo",
      questions: [
        {
          title: "Is there a registration fee for the Startup Expo?",
          content:
            "Yes. The Startup Expo registration fee is ₹3000, out of which ₹1500 is refundable upon attending the Expo.",
        },
        {
          title: "What facilities will be provided at the Startup Expo?",
          content:
            "All essential amenities required for your stall will be provided free of cost.",
        },
        {
          title: "Can early-stage startups participate in the Expo?",
          content:
            "Yes. The Startup Expo is designed for emerging startups to showcase their products, gain visibility, attract customers, and explore funding opportunities.",
        },
        {
          title: "Will there be investors present?",
          content:
            "Yes. Several reputed angel investors, venture capital representatives, and industry experts will be present throughout the event to evaluate ideas, provide feedback, and interact with participating teams.",
        },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setOpenIndex(null); // Close any open accordion when switching categories
  };

  return (
    <div className="w-full flex items-center justify-center px-4 md:px-16 lg:px-32 xl:px-52">
      <div className="w-full">
        {/* Category Tabs */}
        <div className="flex flex-col md:flex-row w-full justify-around mb-6 md:mb-8 gap-2 overflow-x-auto font-[superMario] tracking-wider">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryChange(index)}
              className="cursor-pointer"
            >
              <div
                className={`transition-transform duration-300 ${
                  activeCategory === index ? "scale-100" : "scale-90 opacity-80"
                }`}
              >
                <Button title={category.name} />
              </div>
            </div>
          ))}
        </div>

        {/* Accordion Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {categories[activeCategory].questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left"
                >
                  <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-900 shrink-0" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3 },
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-900 font-medium border-t border-gray-100 tracking-tighter">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accordion;
