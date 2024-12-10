import React, { useState } from 'react';

const FormValComp = () => {
  // Available courses for the dropdown
  const myCourses = ["React", "Java", "Python", "JavaScript"];

  // State to store form data
  const [user, setUser] = useState({
    fname: "",
    term: false,
    course: ""
  });

  // State to store validation error messages
  const [errors, setErrors] = useState({
    fname: "",
    term: "",
    course: ""
  });

  // Function to handle input changes
  const changeInput = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setUser((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Validate form fields before submitting
  const validateForm = () => {
    let valid = true;
    let formErrors = { fname: "", term: "", course: "" };

    if (!user.fname) {
      window.alert("FUllName required");
      valid = false;
    }

    if (!user.term) {
      window.alert("You must accept the terms and conditions");
      valid = false;
    }

    if (!user.course) {
      window.alert("Please select a course");
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Form is valid, you can now submit it
      alert(`Form Submitted! Welcome, ${user.fname}`);
    }
  };

  return (
    <div>
      <h2>This is form validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter your Full Name</label>
          <input
            type="text"
            name="fname"
            value={user.fname}
            onChange={changeInput}
          />
          {errors.fname && <p style={{ color: "red" }}>{errors.fname}</p>}
        </div>

        <div>
          <label>Course</label>
          <select
            name="course"
            value={user.course}
            onChange={changeInput}
          >
            <option value="">Select a Course</option>
            {myCourses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
          {errors.course && <p style={{ color: "red" }}>{errors.course}</p>}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="term"
              checked={user.term}
              onChange={changeInput}
            />
            I agree to the terms and conditions
          </label>
          {errors.term && <p style={{ color: "red" }}>{errors.term}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValComp;

