import React, { useState } from "react";
import LoginButton from "./LoginButton";

const defaultForm = { firstName: "", lastName: "", email: "", phone: "" };

const ContactForms = () => {
  const [userForm, setUserForm] = useState(defaultForm);

  const handleChange = (setter, form) => (e) => {
    setter({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, formData, formType) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api-5vkb.onrender.com/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      alert(`${formType} data saved successfully!`);
      setUserForm(defaultForm);
    } catch (err) {
      console.error(err);
      alert("Failed to save data. Please try again.");
    }
  };

  return (
    <section className="w-full min-h-screen bg-[#18171c] px-8 py-20 flex flex-col items-center">
      {/* Assume LoginButton handles any auth if needed */}
      <LoginButton />

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl justify-center">
        {/* User Form */}
        <form
          className="bg-[#232228] p-10 rounded-2xl shadow-2xl w-full md:w-1/2 border border-blue-500"
          onSubmit={(e) => handleSubmit(e, userForm, "user")}
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">
            User Contact Form
          </h2>
          {["firstName", "lastName", "email", "phone"].map((field) => (
            <div className="mb-6" key={field}>
              <label className="block text-gray-300 mb-2 font-medium">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={
                  field === "email" ? "email" : field === "phone" ? "tel" : "text"
                }
                name={field}
                value={userForm[field]}
                onChange={handleChange(setUserForm, userForm)}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#18171c] text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg shadow-md transition"
          >
            Submit & Save to MongoDB
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForms;
