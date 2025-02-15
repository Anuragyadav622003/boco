import React,{useState} from 'react'
import { FaArrowLeft } from 'react-icons/fa';
<<<<<<< HEAD
import {Link} from 'react-router-dom'
import storeBanner from "./assets/storeBanner.png";
=======
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

>>>>>>> 89bde4049aa4dfd0f1e031d3dd37b681772e7b8c
import store2 from "./assets/store2.png";
import store3 from './assets/store3.png';
import store4 from './assets/store4.png';
import store5 from './assets/store5.png';
import store6 from './assets/store6.png';
import storeBanner from "./assets/storeBanner.png";
const Store = () => {

  const faqs = [
    {
      question: "What is the overall turnaround time for a Shopify project?",
      answer: "Our Shopify projects typically take between 45-90 days, depending on the complexity and scope of the work. We’ll provide a clear timeline based on your specific requirements."
    },
    {
      question: "Why should I choose Shopify for my e-commerce store?",
      answer: "Shopify is a highly flexible and scalable platform that’s ideal for businesses of all sizes. It offers built-in security, extensive customization options, and powerful integrations to help drive sales and enhance customer experience."
    },
    {
      question: "What does your free audit include?",
      answer: "Our free audit covers a detailed review of your store’s design, performance, user experience, and conversion potential. You’ll receive actionable insights to enhance key metrics and optimize your store for growth."
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer: "Yes, we provide 30 days of complimentary post-launch support to ensure your site is running smoothly and help you get comfortable with managing your store."
    },
    {
      question: "Can you help with migrating my existing store to Shopify?",
      answer: "Absolutely! We specialize in seamless migrations from various platforms to Shopify, ensuring your data, products, and design elements are transitioned smoothly with minimal downtime."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const features = [
    {
      title: "Built for High Conversion Rate",
      description:
        "Our Core Focus for building any website is to ensure it reaches and outperforms Conversion Rate benchmarks.",
      icon: "📊", // Replace with actual icon component
    },
    {
      title: "Lightning Fast & Visually Stable",
      description:
        "All our websites follow market-leading benchmarks for Speed and Stability, ensuring user engagement & enhanced conversions.",
      icon: "⚡", // Replace with actual icon component
    },
    {
      title: "Timelines & Budgets On Track",
      description:
        "We have a well-structured process: Strategy, Design & Development with phase-wise updates to ensure milestones are met on time.",
      icon: "📅", // Replace with actual icon component
    },
  ];

  
const featuresList = [
  "Unmatched Speed & Stability",
  "Built for Conversions",
  "Reduced App Stack & Developer Dependencies",
  "Fully Integrated with Your Tools",
  "Highly Scalable",
];
const caseStudies = [
  {
    
    after: store3,
    alt: "Fashion Store Redesign",
  },
  {
    
    after:store4,
    alt: "Health Store Redesign",
  },
  {
    after: store5,
    alt: "Food Delivery UI Update",
  },
];

  return (
    <div>
    <div className="flex flex-col items-center text-center px-6 py-12 bg-white">
    {/* Heading Section */}
    <h1 className="text-5xl font-bold text-indigo-900 leading-tight">
      We Design, Develop & Build Shopify Stores
    </h1>
    <h2 className="text-4xl text-indigo-900 mt-2">with growth at their core</h2>
    <p className="text-lg text-gray-700 mt-4 max-w-2xl">
      We’re a team of Growth-focused Shopify Experts, helping you build
      High-Quality Websites that convert!
    </p>
    
    {/* CTA Buttons */}
    <div className="flex gap-4 mt-6">
      <button className="border-2 border-indigo-900 px-6 py-3 text-indigo-900 font-bold rounded-full hover:bg-indigo-900 hover:text-white transition">
        Audit My Website
      </button>
       {/* Contact Button */}
       <Link to="/contact" className="bg-indigo-900 text-white flex items-center p-2 rounded-full">
          <div className="px-6 font-bold hidden md:flex">Talk to Us</div>
          <div className="bg-indigo-900 md:bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <FaArrowLeft className="text-white md:text-indigo-950 rotate-135" />
          </div>
        </Link>
    </div>

    {/* Website Preview Section */}
    <div className="mt-12 relative w-3/4 h-auto">
      <img
        src={storeBanner}
        alt="Website Preview"
        className="rounded-xl shadow-lg border"
      />
    </div>
  </div>
  {/*card section*/}
    <div className="bg-purple-50 py-12 px-6 flex justify-center  ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-purple-50 py-16 px-8 flex flex-col md:flex-row items-center justify-center">
      {/* Left Image Section */}
      <div className="relative max-w-md w-full mb-10 md:mb-0">
        <div className="absolute top-0 left-10 bg-white shadow-lg p-4 rounded-lg transform rotate-[-10deg]">
          <p className="text-xs font-semibold">Mix & Match Bundling</p>
        </div>
        <div className="absolute bottom-10 left-0 bg-white shadow-lg p-4 rounded-lg transform rotate-[5deg]">
          <p className="text-xs font-semibold">Mega Menu</p>
        </div>
        <div className="absolute bottom-0 right-5 bg-white shadow-lg p-4 rounded-lg transform rotate-[-5deg]">
          <p className="text-xs font-semibold">Shoppable Videos</p>
        </div>
        <img src={store2} alt="Shopify Features" width={400} height={400} className="rounded-lg shadow-lg" unoptimized />
      </div>

      {/* Right Text Section */}
      <div className="max-w-lg text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Customized Shopify Solutions Tailored to Your Needs
        </h2>
        <p className="text-gray-600 mb-6">
          From sleek design to flawless functionality, we build Shopify stores that captivate and convert. We focus on every touchpoint, optimizing the user journey to maximize sales and engagement.
        </p>
        <ul className="space-y-3">
          {featuresList.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-900 font-semibold">
              ✅ {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="bg-gray-100 py-16 px-8 text-center">
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {caseStudies.map((study, index) => (
          <div key={index} className="relative">
            <img src={study.after} alt={study.alt} width={320} height={450} className="rounded-lg shadow-lg border border-gray-300 mt-4" unoptimized />
          </div>
        ))}
      </div>
      <button className="mt-8 px-6  py-2  font-semibold    border rounded-full transition">Explore Case Studies</button>
    </div>

    <div className="flex flex-col md:flex-row items-center bg-white py-20 px-12 md:px-24">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 relative flex justify-center md:justify-start">
        <img
          src={store6}
          alt="Website Audit Preview"
          width={550}
          height={450}
          className="rounded-lg shadow-xl "
          unoptimized
        />
      </div>
      
      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 text-left md:pl-16">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Let’s Audit Your Website!</h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Do you have an eCommerce website with more than 10k monthly sessions? Get a taste of what we can achieve for you, with a <span className="text-purple-600 font-semibold">FREE website audit</span> outlining the changes and optimizations that may help improve your website experience.
        </p>
        
        <ul className="space-y-4 text-lg font-medium text-gray-900">
          <li className="flex items-center"><span className="text-purple-600 text-2xl mr-3">✔</span> Sign up for a <span className="font-semibold">FREE Audit</span></li>
          <li className="flex items-center"><span className="text-purple-600 text-2xl mr-3">✔</span> Share the required brand details</li>
          <li className="flex items-center"><span className="text-purple-600 text-2xl mr-3">✔</span> Sit back and wait for your audit report</li>
        </ul>

       
        <button  className="bg-indigo-900 text-white flex items-center p-2 rounded-full mt-4">
          <div className="px-6 font-bold hidden md:flex">Audit My Website</div>
          <div className="bg-indigo-900 md:bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <FaArrowLeft className="text-white md:text-indigo-950 rotate-135" />
          </div>
        </button>
      </div>
    </div>

    <div className="bg-gray-100 py-20 px-8 text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        Let’s create something extraordinary together
      </h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div>
          <p className="text-5xl font-bold text-gray-900">90+</p>
          <p className="text-lg text-gray-600">Shopify & Shopify Plus Stores Created</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-gray-900">150%</p>
          <p className="text-lg text-gray-600">Improvement in Conversion on average</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-gray-900">100%</p>
          <p className="text-lg text-gray-600">Improvement in Load Speed</p>
        </div>

      </div>
      
      {/* Call to Action Button */}
  <div className='flex justify-center mt-10'>
     <Link to="/contact" className="bg-indigo-900 text-white flex items-center p-2 rounded-full">
              <div className="px-6 font-bold hidden md:flex">Talk to Us</div>
              <div className="bg-indigo-900 md:bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <FaArrowLeft className="text-white md:text-indigo-950 rotate-135" />
              </div>
            </Link>
        
        </div>
    </div>

    <div className="bg-gray-100 py-20 px-8 ">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
            <button 
              className="w-full text-left p-4 text-lg font-semibold text-gray-900 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-gray-600">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Store
