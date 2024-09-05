import Wrapper from "@/components/Wrapper";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-slate-50 grainy-light">
      <Wrapper className="py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-center mb-4">
          Welcome to TigCase! We are dedicated to providing high-quality,
          customizable phone cases that reflect your unique style.
        </p>
        <div className="flex flex-col items-center md:flex-row md:justify-around">
          <div className="max-w-sm mb-6 md:mb-0">
            <Image
              src="/team.jpg"
              alt="Our Team"
              width={300}
              height={250}
              className="rounded-lg shadow-lg object-cover h-64 w-full"
              priority
            />
            <h2 className="text-xl font-semibold text-center mt-4">Our Team</h2>
            <p className="text-center">
              Our team is composed of passionate individuals who strive to
              deliver the best products and services.
            </p>
          </div>
          <div className="max-w-sm">
            <Image
              src="/mission.jpg"
              alt="Our Mission"
              width={300}
              height={250}
              className="rounded-lg shadow-lg object-cover h-64 w-full"
              priority
            />
            <h2 className="text-xl font-semibold text-center mt-4">
              Our Mission
            </h2>
            <p className="text-center">
              We aim to protect your devices while allowing you to express your
              individuality through our designs.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold" id="contact">Contact Us</h3>
          <p className="mt-4">
            If you have any questions or need assistance, feel free to reach out
            to us!
          </p>
          <p className="mt-2">
            Email:{" "}
            <a href="mailto:support@tigcase.com" className="text-blue-500">
              support@tigcase.com
            </a>
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/tiger-astronaut.png"
            alt="Tiger Astronaut"
            width={300}
            height={250}
            className="mt-6 rounded-lg"
            priority
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutPage;
