import React, { useState } from "react";

function CustomForm(){
    const [ formData, setFormData] = useState({ name: "", email: ""});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          />
          <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
    );
}

export default CustomForm;