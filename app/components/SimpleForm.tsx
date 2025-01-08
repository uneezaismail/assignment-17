"use client"
import { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    email: "",
    githubUrl: "",
    yearsOfExperience: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    githubUrl: "",
    yearsOfExperience: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const validate = () => {
    let isValid = true;
    const newErrors: typeof errors = {
      email: "",
      githubUrl: "",
      yearsOfExperience: "",
      password: "",
      confirmPassword: "",
    };

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.githubUrl.includes("github.com")) {
      newErrors.githubUrl = "Invalid GitHub URL";
      isValid = false;
    }

    if (
      isNaN(Number(formData.yearsOfExperience)) ||
      Number(formData.yearsOfExperience) < 1 ||
      Number(formData.yearsOfExperience) > 10
    ) {
      newErrors.yearsOfExperience =
        "Years of experience must be a number between 1 and 10";
      isValid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", formData);
      // Reset form (optional)
      setFormData({
        email: "",
        githubUrl: "",
        yearsOfExperience: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid col-auto w-full ">
        <h1 className="text-3xl font-bold mb-4">
        Simle Next.js Form
          </h1>
      <div className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="flex flex-col">
        <input
          type="text"
          name="githubUrl"
          placeholder="GitHub URL"
          value={formData.githubUrl}
          onChange={handleChange}
        />
        {errors.githubUrl && (
          <span className="error-message">{errors.githubUrl}</span>
        )}
      </div>

      <div className="flex flex-col">
        <input
          type="number"
          name="yearsOfExperience"
          placeholder="Years of Experience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
        />
        {errors.yearsOfExperience && (
          <span className="error-message">{errors.yearsOfExperience}</span>
        )}
      </div>

      <div className="flex flex-col">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="error-message">{errors.password}</span>
        )}
      </div>

      <div className="flex flex-col">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className="error-message">{errors.confirmPassword}</span>
        )}
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default SimpleForm;
