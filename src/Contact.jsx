import React, { useState, useEffect } from 'react';
import CLoseSVG from './assets/CLoseSVG';

export default function Contact({ contactOpen, setContactOpen }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // New state for loading animation

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: '' })); // Clear errors on input change
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio.';
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email non è valida.";
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Il messaggio è obbligatorio.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true); // Show loading animation
      // Simulate API submission delay
      setTimeout(() => {
        console.log('Modulo inviato:', formData);
        setLoading(false); // Hide loading animation
        leaveContact();
      }, 2000); // Adjust the delay time as needed
    }
  };

  const leaveContact = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      };
    
    fetch('https://tuscanyai.it/api/contact/', requestOptions)
    setContactOpen(false);
  };

  useEffect(() => {
    if (contactOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = ''; // Reset overflow
    };
  }, [contactOpen]);

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center z-50 bg-black/30">
      <div>
        <form
          action="POST"
          className="bg-white relative p-6 rounded-2xl shadow-xl w-[350px] sm:w-[400px] text-sm sm:text-base h-auto flex flex-col justify-start items-center border"
          onSubmit={handleSubmit}
        >
          {/* Close button */}
          <button
            type="button"
            className="absolute top-3 right-3"
            onClick={leaveContact}
          >
            <CLoseSVG height={'30px'} width={'30px'} />
          </button>

          {/* Form Title */}
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Contattaci
          </h2>

          {/* Name Field */}
          <div className="w-full mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="name">
              Nome
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500`}
              placeholder="Inserisci il tuo nome"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="w-full mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500`}
              placeholder="Inserisci la tua email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="w-full mb-6">
            <label className="block text-gray-600 mb-2" htmlFor="message">
              Messaggio
            </label>
            <textarea
              id="message"
              rows="4"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500`}
              placeholder="Scrivi il tuo messaggio"
              value={formData.message}
              onChange={handleInputChange}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`bg-black/90 text-white px-8 py-3 rounded-md shadow transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/80'
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Invia...
              </div>
            ) : (
              'Invia'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
