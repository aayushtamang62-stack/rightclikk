import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6 relative">

        {/* Left Content */}
        <div className="text-center md:text-left max-w-2xl z-10 py-20">
          <h1 className="font-poppins text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              RightClikk
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-semibold text-gray-800">
              Your Smart Cab Booking App
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl font-medium leading-relaxed">
            RightClikk is a smart cab booking app that makes your rides faster, safer,
            and easier. Book a ride with just one tap and travel with trusted drivers
            at affordable prices — anytime, anywhere.
          </p>

          <a
            href="#download"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">📱</span>
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
            className="drop-shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Subtle Decorative Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full opacity-40"></div>
        <div className="absolute top-32 left-20 w-1 h-1 bg-blue-500 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 right-20 w-3 h-3 bg-yellow-400 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-50"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-center">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="/istockphoto-492362277-612x612-removebg-preview.png"
              alt="About RightClikk"
              className="w-72 md:w-96 drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
              <span className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
                About
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> RightClikk</span>
              </span>
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mb-6"></div>

            <p className="text-gray-400 leading-relaxed">
              RightClikk is your smart cab booking app, designed to make rides faster,
              safer, and easier. With just one click, you can book a ride and get where
              you need to go, anytime and anywhere.
            </p>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed">
              Our mission is to connect people with trusted drivers,
              provide a smooth booking experience, and ensure affordable pricing
              for everyone.
            </p>
            <a
              href="#download"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">🚀</span>
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section (New Addition) */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Why Choose RightClikk?
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-inter">Quick Booking</h3>
              <p className="text-gray-600 leading-relaxed">Book your ride in seconds with our intuitive interface and smart location detection.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-inter">Safe & Secure</h3>
              <p className="text-gray-600 leading-relaxed">All drivers are verified and rides are insured for your complete peace of mind.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-inter">Real-time Tracking</h3>
              <p className="text-gray-600 leading-relaxed">Track your ride in real-time with GPS precision and get accurate arrival estimates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            Download
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> RightClikk </span>
            Now
          </h2>
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            Get the app and start booking your rides with ease. Available on both Android and iOS.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Google Play Button */}
            <a
              href="#"
              className="flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">📱</span>
              <span className="text-left">
                <div className="text-sm text-gray-300 font-medium">Get it on</div>
                <div className="text-xl font-bold">Google Play</div>
              </span>
            </a>

            {/* App Store Button */}
            <a
              href="#"
              className="flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">🍎</span>
              <span className="text-left">
                <div className="text-sm text-gray-300 font-medium">Download on the</div>
                <div className="text-xl font-bold">App Store</div>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-inter">
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions or feedback about RightClikk? Fill out the form below and our team will get back to you shortly.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left side: Info */}
            <div className="flex flex-col gap-8 justify-center">
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                  📍
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1 font-inter">Our Office</h3>
                  <p className="text-gray-600">Siliguri, West Bengal, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-xl">
                  📧
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1 font-inter">Email Us</h3>
                  <p className="text-gray-600">support@rightclikk.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl">
                  📞
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1 font-inter">Call Us</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <form className="bg-white shadow-2xl rounded-3xl p-8 space-y-6 border border-gray-100">
              <div>
                <label className="block text-gray-800 mb-3 font-bold text-sm uppercase tracking-wide">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 font-medium"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-3 font-bold text-sm uppercase tracking-wide">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 font-medium"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-3 font-bold text-sm uppercase tracking-wide">Message</label>
                <textarea
                  placeholder="Type your message..."
                  rows={5}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 font-medium resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-inter">
            <span className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
              Terms & <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Conditions</span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            By using RightClikk, you agree to follow our terms and conditions. Please read them carefully.
          </p>
          <ul className="space-y-4 text-gray-600 text-left max-w-3xl mx-auto">
            <li>✔️ Provide accurate details while booking.</li>
            <li>✔️ RightClikk is not liable for delays caused by traffic or unforeseen events.</li>
            <li>✔️ Payments must be made through approved methods only.</li>
            <li>✔️ Misuse of the app may result in account suspension.</li>
          </ul>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-inter">
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            At RightClikk, your privacy is very important to us. We are committed to protecting your
            personal data and being transparent about how we use it.
          </p>
          <ul className="space-y-4 text-gray-600 text-left max-w-3xl mx-auto">
            <li>🔒 We collect only necessary details (name, email, phone) for bookings.</li>
            <li>🔒 Location data is used only for ride tracking and better service.</li>
            <li>🔒 We do not share your personal data with third parties without consent.</li>
            <li>🔒 You may request deletion of your data by contacting support.</li>
          </ul>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-inter">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  RightClikk
                </span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for safe, reliable, and affordable rides. Making every journey comfortable and memorable.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 font-inter">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-orange-400 transition-colors">About Us</a>
                <a href="#download" className="block text-gray-400 hover:text-orange-400 transition-colors">Download</a>
                <a href="#contact" className="block text-gray-400 hover:text-orange-400 transition-colors">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">Support</a>
                <a href="#terms" className="block text-gray-400 hover:text-orange-400 transition-colors">Terms & Conditions</a>
                <a href="#privacy" className="block text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>

              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 font-inter">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  🌐
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  🐦
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  📘
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} RightClikk. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>

    </main>
  );
}