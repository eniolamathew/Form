import React, { useState } from "react";
import { IFormData, IFormErrors } from "./utils/interface";
import { FormInput, FormTextera } from "./components/FormControls";

const Home: React.FC = () => {
  const [IFormData, setIFormData] = useState<IFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<IFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: IFormErrors = {};

    if (!IFormData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!IFormData.email.trim()) {
      newErrors.email = "Email is required";
    }else if (!/\S+@\S+\.\S+/.test(IFormData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!IFormData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!IFormData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (IFormData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setIFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value}));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) { return }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("https://localhost:7000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(IFormData),
      });

      if (response.ok) {
        setSubmitMessage("Form submitted successfully!");
        setIFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitMessage("Error submitting form. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container-fluid p-0 flex items-center bg-yellow-50 h-screen">
      <div className="container mx-auto px-16 py-16 lg:py-20 lg:px-20">
        <div className="mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="mb-6">
              <FormInput
                label="Full Name *"
                id="name"
                placeholder="Your Full Name"
                value={IFormData.name}
                onChange={handleChange}
                error={errors.name || ""}
              />
            </div>
            <div className="mb-6">
              <FormInput
                label="Email Address *"
                id="email"
                value={IFormData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                error={errors.email || ""}
              />
            </div>
            <div className="mb-6">
              <FormInput
                label="Phone Number"
                id="phone"
                placeholder="+44..."
                value={IFormData.phone}
                onChange={handleChange}
                error={errors.phone || ""}
              />
            </div>

            <div className="mb-6">
              <FormTextera
                label="Message *"
                id="message"
                rows={4}
                value={IFormData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                error={errors.message || ""}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Home;