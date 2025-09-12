import Navbar from "../components/Navbar";

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white text-center">
        <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-inter">
           <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Terms & Conditions
            </span>
            </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            By using RightClikk, you agree to follow our terms and conditions. Please read them carefully.
          </p>
          <ul className="text-gray-600 mb-10 text-lg leading-relaxed">
            <li>✔️ Provide accurate details while booking.</li>
            <li>✔️ RightClikk is not liable for delays caused by traffic or unforeseen events.</li>
            <li>✔️ Payments must be made through approved methods only.</li>
            <li>✔️ Misuse of the app may result in account suspension.</li>
          </ul>
        </div>
      </section>

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
                <a href="/terms" className="block text-gray-400 hover:text-orange-400 transition-colors">
                  Terms & Conditions
                </a>
                <a href="/privacy" className="block text-gray-400 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </a>


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
