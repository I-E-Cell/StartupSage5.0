import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Accordion = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    {
      name: "General",
      questions: [
        {
          title: "What is React?",
          content:
            "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
        },
        {
          title: "What is Framer Motion?",
          content:
            "Framer Motion is a production-ready motion library for React. It provides simple yet powerful declarative APIs to create animations and gestures in your React applications.",
        },
        {
          title: "Why use component-based architecture?",
          content:
            "Component-based architecture promotes reusability, maintainability, and separation of concerns. Each component manages its own state and logic, making your codebase more modular and easier to test.",
        },
      ],
    },
    {
      name: "Animations",
      questions: [
        {
          title: "How do animations work?",
          content:
            "Animations in Framer Motion work by defining initial and animate states, or by using variants. The library automatically handles the transitions between states with smooth, performant animations using the Web Animations API.",
        },
        {
          title: "What are animation variants?",
          content:
            "Variants are predefined animation states that can be reused across multiple components. They help organize complex animations and enable orchestration of parent-child animation sequences.",
        },
        {
          title: "Can I animate SVG elements?",
          content:
            "Yes! Framer Motion fully supports SVG animations. You can animate any SVG attribute including paths, transforms, fills, and strokes with the same declarative API used for other elements.",
        },
      ],
    },
    {
      name: "Customization",
      questions: [
        {
          title: "Can I customize the animations?",
          content:
            "Yes! Framer Motion provides extensive customization options including duration, easing functions, delays, spring physics, and much more. You can create complex animation sequences and orchestrate multiple animations together.",
        },
        {
          title: "How do I add custom easing?",
          content:
            "You can use built-in easing functions like 'easeIn', 'easeOut', or define custom cubic-bezier curves. Spring animations offer natural motion with configurable stiffness, damping, and mass properties.",
        },
        {
          title: "Can I use CSS transitions instead?",
          content:
            "While you can use CSS transitions, Framer Motion offers more control and better performance for complex animations. It uses the Web Animations API and provides features like gesture detection and layout animations.",
        },
      ],
    },
    {
      name: "Performance",
      questions: [
        {
          title: "Is Framer Motion performant?",
          content:
            "Yes! Framer Motion is highly optimized and uses hardware acceleration where possible. It automatically uses transform and opacity for animations, which are GPU-accelerated properties that don't trigger layout recalculations.",
        },
        {
          title: "How to optimize large lists?",
          content:
            "For large animated lists, use layout animations sparingly, implement virtualization with libraries like react-window, and use the 'layoutId' prop for shared element transitions to minimize re-renders.",
        },
        {
          title: "Does it work on mobile?",
          content:
            "Absolutely! Framer Motion is fully responsive and works great on mobile devices. It includes touch gesture support and automatically adjusts animations for different screen sizes and performance capabilities.",
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
    <div className="w-full flex items-center justify-center px-44">
      <div className="w-full">
        {/* Category Tabs */}
        <div className="flex w-full justify-around mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(index)}
              className={`relative px-6 py-3 rounded-md font-semibold whitespace-nowrap transition-colors ${
                activeCategory === index
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {activeCategory === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500 rounded-md"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{category.name}</span>
            </button>
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
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-600" />
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
                      <div className="px-6 py-4 text-gray-600 border-t border-gray-100">
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
