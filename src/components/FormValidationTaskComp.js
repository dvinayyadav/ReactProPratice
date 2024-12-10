import React, { useState } from 'react';

const FormValComp = () => {
  // State to store form data and errors
  const [user, setUser] = useState({
    email: '',
    password: '',
    mobile: '',
  });

  // Handle input change
  const changeInput = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validate the form fields
  const validateForm = () => {
    let isValid = true;
    let errorMessages = [];

    // Email validation (simple regex for valid email format)
    if (!user.email) {
      errorMessages.push('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errorMessages.push('Email format is invalid');
      isValid = false;
    }

    // Password validation (min length check)
    if (!user.password) {
      errorMessages.push('Password is required');
      isValid = false;
    } else if (user.password.length < 6) {
      errorMessages.push('Password must be at least 6 characters');
      isValid = false;
    }

    // Mobile number validation (exactly 10 digits)
    if (!user.mobile) {
      errorMessages.push('Mobile number is required');
      isValid = false;
    } else if (!/^\d{10}$/.test(user.mobile)) {
      errorMessages.push('Mobile number must be 10 digits');
      isValid = false;
    }

    // Show error messages as alerts if there are validation issues
    if (!isValid) {
      errorMessages.forEach((error) => window.alert(error));
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      window.alert('Form submitted successfully!');
    }
  };

  return (
    <div>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={changeInput}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={changeInput}
            placeholder="Enter your password"
          />
        </div>

        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={user.mobile}
            onChange={changeInput}
            placeholder="Enter your mobile number"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValComp;
