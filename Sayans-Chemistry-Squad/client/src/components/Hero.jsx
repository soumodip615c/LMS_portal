import heroImage from "../assets/images/hero.jpeg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-linear-to-r from-blue-900 via-sky-700 to-cyan-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <span className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Admissions Open 2026
            </span>

            <h1 className="text-5xl font-extrabold mt-6 leading-tight">
              Sayan's Chemistry Squad
            </h1>

            <p className="mt-6 text-xl text-blue-100">
              Chemistry Coaching for Class XI & XII
            </p>

            <p className="text-lg mt-2">WBCHSE • CBSE • ISC</p>

            <p className="mt-6 text-blue-100 leading-8">
              Learn Chemistry through Digital Smart Board Classes, Monthly Mock
              Tests, Doubt Clearing Sessions, Practical Chemistry Discussions,
              and Project Assistance.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Admission Form */}
              <Link
                to="/admission"
                className="bg-white text-blue-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-100 transition"
              >
                Admission Form
              </Link>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917003349913?text=Hello%20Sir,%20I%20want%20to%20know%20about%20your%20Chemistry%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Sayan's Chemistry Squad"
              className="rounded-3xl shadow-2xl w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
