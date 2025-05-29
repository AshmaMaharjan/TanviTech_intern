import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";
import { FiMail, FiUser, FiPhone, FiHome, FiMessageCircle, FiFileText, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";

const FeedbackForm = () => {
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    email: "",
    companyname: "",
    companyaddress: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/api/feedback", {
        firstName: form.firstname,
        lastName: form.lastname,
        userEmail: form.email,
        companyName: form.companyname,
        companyAddress: form.companyaddress,
        subject: form.subject,
        message: form.message,
      });

      setForm({
        lastname: "",
        firstname: "",
        email: "",
        companyname: "",
        companyaddress: "",
        subject: "",
        message: "",
      });

      toast.success("Form Submitted Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      console.log(response.data);
    } catch (error) {
      toast.error("Error submitting form", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.error("There was an error submitting the form!", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 mx-auto max-w-7xl p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <ToastContainer />
      <div className="grid lg:grid-cols-2 gap-14">
        {/* Get in Touch Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white p-10 rounded-lg shadow-md">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Have some <span className="font-semibold text-blue-600">big idea</span> or brand to develop and need help? Reach out to us! <strong className="text-blue-600">We'd love to hear about your project</strong> and provide the help you need.
          </p>
          <hr className="my-4 border-gray-300" />
          <ul className="mt-6 space-y-6">
            <li className="flex items-center text-gray-600 space-x-4">
              <FiMail className="w-6 h-6 text-blue-500" />
              <a href="mailto:contact@tanvitech.com.np" className="ml-4 text-md font-medium text-blue-600 hover:text-blue-700">
                contact@tanvitech.com.np
              </a>
            </li>
            <li className="flex items-center text-gray-600 space-x-4">
              <FiPhone className="w-6 h-6 text-blue-500" />
              <a href="tel:+9851312180" className="ml-4 text-md font-medium text-blue-600 hover:text-blue-700">
                9851312180, 9818350053
              </a>
            </li>
            <li className="flex items-center text-gray-600 space-x-4">
              <FiHome className="w-6 h-6 text-blue-500" />
              <span className="ml-4 text-md font-medium">
                Jadibuti,Kathmandu, Nepal
              </span>
            </li>
            <li className="flex items-center space-x-4 mt-6">
              <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                <FiFacebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FiTwitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <form onSubmit={submit} className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Enter your details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative w-full">
                  <FiUser className="absolute left-4 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="firstname"
                    value={form.firstname}
                    onChange={handleChange}
                    className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:border-blue-500 shadow-sm"
                    placeholder="First Name"
                  />
                </div>
                <div className="relative w-full">
                  <FiUser className="absolute left-4 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="lastname"
                    value={form.lastname}
                    onChange={handleChange}
                    className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:border-blue-500 shadow-sm"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="relative w-full">
                <FiMail className="absolute left-4 top-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:border-blue-500 shadow-sm"
                  placeholder="Email"
                />
              </div>
              <div className="relative w-full">
                <FiFileText className="absolute left-4 top-3 text-gray-400" />
                <input
                  type="text"
                  name="companyname"
                  value={form.companyname}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:border-blue-500 shadow-sm"
                  placeholder="Company Name"
                />
              </div>
              <div className="relative w-full">
                <FiHome className="absolute left-4 top-3 text-gray-400" />
                <input
                  type="text"
                  name="companyaddress"
                  value={form.companyaddress}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:border-blue-500 shadow-sm"
                  placeholder="Company Address"
                />
              </div>
              <div className="relative w-full">
                <FiFileText className="absolute left-4 top-3 text-gray-400" />
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:border-blue-500 shadow-sm"
                  placeholder="Subject"
                />
              </div>
              <div className="relative w-full">
                <FiMessageCircle className="absolute left-4 top-3 text-gray-400" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:border-blue-500 shadow-sm"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-10px py-3 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
