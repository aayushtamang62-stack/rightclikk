import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-orange-500 to-pink-500 px-6 relative">

        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            RightClikk <br /> Your Smart Cab Booking App”
          </h1>

          <p className="text-lg text-gray-200 mb-6 max-w-xl">
            RightClikk is a smart cab booking app that makes your rides faster, safer,
            and easier. Book a ride with just one tap and travel with trusted drivers
            at affordable prices — anytime, anywhere.
          </p>


          <a
            href="#download"
            className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-full shadow hover:bg-gray-100"
          >
            Download Now
          </a>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 md:ml-10">
          <Image
            src="/taxi_services_img.webp"
            alt="RightClikk App"
            width={300}
            height={600}
            className="drop-shadow-2xl"
          />
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="/png-transparent-2017-subaru-impreza-2011-subaru-impreza-wrx-sti-car-taxi-taxi-compact-car-sedan-car-removebg-preview.png" // 👉 replace with another app screenshot
              alt="About RightClikk"
              className="w-72 md:w-96 drop-shadow-2xl"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About RightClikk
            </h2>
            <p className="text-gray-600 mb-6">
              RightClikk is your smart cab booking app, designed to make rides faster,
              safer, and easier. With just one click, you can book a ride and get where
              you need to go, anytime and anywhere.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to connect people with trusted drivers,
              provide a smooth booking experience, and ensure affordable pricing
              for everyone.
            </p>
            <a
              href="#download"
              className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Download RightClikk Now
          </h2>
          <p className="text-gray-600 mb-10">
            Get the app and start booking your rides with ease. Available on both Android and iOS.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Google Play Button */}
            <a
              href="#"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-black text-white rounded-lg shadow hover:opacity-90"
            >
              <span className="text-2xl">📱</span>
              <span>
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </span>
            </a>

            {/* App Store Button */}
            <a
              href="#"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-black text-white rounded-lg shadow hover:opacity-90"
            >
              <span className="text-2xl">🍎</span>
              <span>
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Have questions or feedback about RightClikk? Fill out the form below and our team will get back to you shortly.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left side: Info */}
            <div className="flex flex-col gap-6 justify-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">📍 Our Office</h3>
                <p className="text-gray-600">Siliguri, West Bengal, India</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">📧 Email Us</h3>
                <p className="text-gray-600">support@rightclikk.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">📞 Call Us</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            {/* Right side: Form */}
            <form className="bg-white shadow-lg rounded-xl p-8 space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea
                  placeholder="Type your message..."
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} RightClikk. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white">🌐 Website</a>
          <a href="#" className="hover:text-white">🐦 Twitter</a>
          <a href="#" className="hover:text-white">📘 Facebook</a>
        </div>
      </footer>

    </main>
  );
}
