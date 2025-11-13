import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SmileCare Orthodontics</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing exceptional orthodontic care for beautiful, healthy smiles since 2009.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.609.035 6.298.129c-1.31.094-2.207.447-2.996.95a5.742 5.742 0 00-2.082 2.082c-.503.789-.856 1.686-.95 2.996C.035 7.609 0 8.396 0 12.017s.035 4.408.129 5.719c.094 1.31.447 2.207.95 2.996a5.742 5.742 0 002.082 2.082c.789.503 1.686.856 2.996.95 1.31.094 2.098.129 5.719.129s4.408-.035 5.719-.129c1.31-.094 2.207-.447 2.996-.95a5.742 5.742 0 002.082-2.082c.503-.789.856-1.686.95-2.996.094-1.31.129-2.098.129-5.719s-.035-4.408-.129-5.719c-.094-1.31-.447-2.207-.95-2.996a5.742 5.742 0 00-2.082-2.082c-.789-.503-1.686-.856-2.996-.95C16.425.035 15.638 0 12.017 0zm0 4.839a7.178 7.178 0 100 14.356 7.178 7.178 0 000-14.356zm8.533.183a1.68 1.68 0 11-3.36 0 1.68 1.68 0 013.36 0z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Traditional Braces</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Invisalign</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pediatric Orthodontics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retainers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/patient-resources" className="hover:text-white transition-colors">Patient Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>123 Dental Street</p>
                  <p>Suite 100, City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@smilecareortho.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SmileCare Orthodontics. All rights reserved.
            <span className="mx-2">|</span>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
