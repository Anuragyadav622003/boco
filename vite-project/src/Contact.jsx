import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    First_Name: "",
    brandName: "",
    webUrl: "",
    email: "",
    phone: "",
    sessions: "",
    conversionRate: "",
    issues: [],
    summary: "",
    referral: ""
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        issues: checked ? [...prev.issues, value] : prev.issues.filter((issue) => issue !== value)
      }));
    } else if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
//   const form =   {
//         First_Name: formData.First_Name,
//         brandName: formData.brandName,
//         webUrl: formData.webUrl,
//         email: formData.email,
//         phone: formData.phone,
//         sessions: formData.sessions,
//         conversionRate: formData.conversionRate,
//         issues: formData.issues,
//         summary: formData.summary,
//         referral: formData.referral
//       }
      console.log(formData)
    try {
      const response = await axios.post("http://localhost:1337/api/contact-forms", {
        data:formData
      });

      console.log("Form Submitted Successfully:", response.data);
      alert("Form submitted successfully!");

      // Reset form after submission
      setFormData({
        First_Name: "",
        brandName: "",
        webUrl: "",
        email: "",
        phone: "",
        sessions: "",
        conversionRate: "",
        issues: [],
        summary: "",
        referral: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
      alert("Failed to submit form. Check the fields and try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="p-8 rounded-lg w-full max-w-2xl">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
          Got a Project? Let's Talk!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Simply complete the form below and we’ll get in touch!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="First_Name" value={formData.First_Name} placeholder="Your Name*" className="w-full p-2 border rounded-md" required onChange={handleChange} />
          <input type="text" name="brandName" value={formData.brandName} placeholder="Brand Name*" className="w-full p-2 border rounded-md" required onChange={handleChange} />
          <input type="url" name="webUrl" value={formData.webUrl} placeholder="Website URL" className="w-full p-2 border rounded-md" onChange={handleChange} />
          <input type="email" name="email" value={formData.email} placeholder="Email Address*" className="w-full p-2 border rounded-md" required onChange={handleChange} />
          <input type="tel" name="phone" value={formData.phone} placeholder="Phone Number*" className="w-full p-2 border rounded-md" required onChange={handleChange} />

          {/* Radio Buttons */}
          <div>
            <label className="block text-gray-700 mb-2">What are your Monthly Store Sessions?*</label>
            <div className="space-y-2">
              {["Less than 10k", "10k to 50k", "50k to 100k", "100k+"].map((session, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="radio" name="sessions" value={session} className="form-radio" checked={formData.sessions === session} onChange={handleChange} />
                  <span>{session}</span>
                </label>
              ))}
            </div>
          </div>

          <input type="text" name="conversionRate" value={formData.conversionRate} placeholder="What is your current Conversion Rate?" className="w-full p-2 border rounded-md" onChange={handleChange} />

          {/* Checkboxes */}
          <div>
            <label className="block text-gray-700 mb-2">What issues are you facing with your Shopify Store?*</label>
            <div className="grid grid-cols-2 gap-2">
              {["Website Design & Development", "Technical Maintenance & Support", "High-Converting Landing Pages", "Conversion Rate Optimization"].map((issue, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="checkbox" name="issues" value={issue} className="form-checkbox" checked={formData.issues.includes(issue)} onChange={handleChange} />
                  <span>{issue}</span>
                </label>
              ))}
            </div>
          </div>

          <textarea name="summary" value={formData.summary} placeholder="Give a short summary of your requirements?" className="w-full p-2 border rounded-md h-24" required onChange={handleChange}></textarea>
          <input type="text" name="referral" value={formData.referral} placeholder="How did you find us today?" className="w-full p-2 border rounded-md" onChange={handleChange} />

          {/* Submit Button */}
          <button type="submit" className="bg-indigo-900 text-white flex items-center mx-auto p-2 rounded-full" disabled={loading}>
            <div className="px-6 font-bold hidden md:flex">{loading ? "Submitting..." : "Submit"}</div>
            <div className="bg-indigo-900 md:bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <FaArrowLeft className="text-white md:text-indigo-950 rotate-135" />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
