import Image from "next/image";
import ProgressTracker from "./components/ProgressTracker";
import RegistrationForm from "./components/LoginForm";

export default function Home() {
  return (
    <>
      <div className="w-full flex">
        <div className="hidden lg:flex w-[40%] bg-[#f27c37] h-screen items-center justify-center">
          <Image
            src="/resp_logo.png"
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </div>
        <div className="w-full lg:w-[60%]">
          <div className="ps-12 md:ps-36 pt-10 md:pt-20">
            <p className="text-3xl font-bold text-[#f27c37]">Login Details</p>
            <p className="text-gray-500">Resper Sys.</p>
          </div>
          <ProgressTracker />
          <RegistrationForm />
        </div>
      </div>
    </>
  );
}
