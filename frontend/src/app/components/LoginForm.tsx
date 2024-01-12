"use client";

import { useState, useEffect } from "react";
import ValidateData from "../utils/Validations";
import { BaseUrl } from "../utils/Axios";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from "axios";

const RegistrationForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  async function handleSubmit() {
    const error = ValidateData(name, email, password, confirmPassword, terms);
    if (error !== "success") {
      iziToast.error({
        title: 'Error',
        message: error,
        position: 'topRight'
      });
      return;
    }
    await axios.post(BaseUrl + "/register", {
      name: name,
      email: email,
      password: password,
    }).then((response) => {
      if (response.status === 202) {
        iziToast.success({
          title: 'Success',
          message: response.data.message,
          position: 'topRight'
        });
      } else {
        iziToast.error({
          title: 'Error',
          message: response.data.message,
          position: 'topRight'
        });
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="md:mx-20 xl:mx-48 mx-10">
      <label htmlFor="name">
        <p className="text-gray-500 font-semibold">Name</p>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="John Doe"
        className="mb-4 p-2 w-full border rounded bg-gray-200"
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">
        <p className="text-gray-500 font-semibold">Email</p>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="johndoe@gmail.com"
        className="mb-4 p-2 w-full border rounded bg-gray-200"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">
        <p className="text-gray-500 font-semibold">Password</p>
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="********"
        className="mb-4 p-2 w-full border rounded bg-gray-200"
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="confirm_password">
        <p className="text-gray-500 font-semibold">Re-type Password</p>
      </label>
      <input
        type="password"
        id="confirm_password"
        name="confirm_password"
        placeholder="********"
        className="mb-4 p-2 w-full border rounded bg-gray-200"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <div className="flex items-center mb-4 mt-3">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          className="mr-2 border rounded-2xl bg-gray-200 w-7 h-7"
          onChange={(e) => setTerms(e.target.checked)}
        />
        <label htmlFor="terms">
          I confirm that I have read and accept the{" "}
          <span className="text-[#f27c37] underline">terms and conditions and privacy policy.</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-orange text-white py-3 px-4 rounded-lg bg-[#f27c37] mb-2"
        onClick={handleSubmit}
      >
        Next
      </button>

      <p className="text-center font-semibold"><span className="text-gray-500">Already have an account?</span> <span className="text-[#f27c37]">Login</span></p>
    </div>
  );
};

export default RegistrationForm;
