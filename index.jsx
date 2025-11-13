import React, { useEffect } from 'react';
import Navbar from './components/Navbar'; // Adjust path as needed
import Footer from './components/Footer'; // Adjust path as needed

const HomePage = () => {
  useEffect(() => {
    // Load and initialize Feather Icons
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/feather-icons';
    script.onload = () => {
      if (window.feather) {
        window.feather.replace();
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Streamline Your Orthodontic Work Orders
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Secure digital work order management between clinics and labs
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="/login.html"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            >
              <i data-feather="log-in"></i> Sign In with Google
            </a>
            <a
              href="#features"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            >
              <i data-feather="info"></i> Learn More
            </a>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <img
              src="http://static.photos/medical/1024x576/42"
              alt="Dental clinic workspace"
              className="w-full h-auto"
            />
          </div>
        </div>

        <section id="features" className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Modern Work Order Management
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-blue-600 mb-4">
                  <i data-feather="lock" className="w-10 h-10"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Secure Access</h3>
                <p className="text-gray-600">
                  Google-authenticated sign-in with administrative approval workflow for security.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-blue-600 mb-4">
                  <i data-feather="file-plus" className="w-10 h-10"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Digital Work Orders</h3>
                <p className="text-gray-600">
                  Create, edit, and track work orders with attachments and clear priority levels.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-blue-600 mb-4">
                  <i data-feather="shield" className="w-10 h-10"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">GDPR Compliant</h3>
                <p className="text-gray-600">
                  Data protection built-in with encryption and access controls.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;