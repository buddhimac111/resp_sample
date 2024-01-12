import React from "react";

const RegistrationForm = () => {
  
  return (
    <div className="p-8 md:mx-20 xl:mx-48 mx-10">
      <label htmlFor="name">
        <p className="text-gray-500 font-semibold">Name</p>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="John Doe"
        className="mb-4 p-2 w-full border rounded bg-gray-200"
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
      />

      <div className="flex items-center mb-4 mt-3">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          className="mr-2 border rounded-2xl bg-gray-200 w-7 h-7"
        />
        <label htmlFor="terms">
          I confirm that I have read and accept the{" "}
          <span className="text-[#f27c37] underline">terms and conditions and privacy policy.</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-orange text-white py-3 px-4 rounded-lg bg-[#f27c37] mb-2"
      >
        Next
      </button>

      <p className="text-center font-semibold"><span className="text-gray-500">Already have an account?</span> <span className="text-[#f27c37]">Login</span></p>
    </div>
  );
};

export default RegistrationForm;
