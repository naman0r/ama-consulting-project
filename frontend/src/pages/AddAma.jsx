import { useState } from "react";

const AddAma = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    funFacts: ["", "", "", "", ""],
    blurb: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFunFactChange = (index, value) => {
    const updatedFacts = [...formData.funFacts];
    updatedFacts[index] = value;
    setFormData({ ...formData, funFacts: updatedFacts });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Submit Your AMA</h2>
      <form className="space-y-4">
        
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <div className="space-y-2">
          <p className="font-semibold">Enter 5 Fun Facts:</p>
          {formData.funFacts.map((fact, index) => (
            <input
              key={index}
              type="text"
              value={fact}
              onChange={(e) => handleFunFactChange(index, e.target.value)}
              placeholder={`Fun Fact #${index + 1}`}
              className="w-full p-2 border border-gray-300 rounded"
            />
          ))}
        </div>

        <textarea
          name="blurb"
          value={formData.blurb}
          onChange={handleChange}
          placeholder="Write a short personal blurb..."
          className="w-full p-2 border border-gray-300 rounded h-24"
        ></textarea>

        <button
          type="button"
          className="w-full bg-gray-400 text-white p-2 rounded"
          disabled
        >
          Submit (Disabled)
        </button>
      </form>
    </div>
  );
};

export default AddAma;
