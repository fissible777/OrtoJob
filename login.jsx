import React, { useEffect } from 'react';
import Navbar from './components/Navbar'; // Adjust path as needed
import Footer from './components/Footer'; // Adjust path as needed

const SignInPage = () => {
  useEffect(() => {
    // Load Feather Icons
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

  const handleGoogleSignIn = () => {
    // Implement your Google Sign-In logic here
    console.log('Google Sign-In clicked');
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden p-8">
          <div className="text-center mb-8">
            <i data-feather="clipboard" className="w-12 h-12 mx-auto text-blue-600"></i>
            <h1 className="text-2xl font-bold text-gray-800 mt-4">Sign In to OrtoJob</h1>
            <p className="text-gray-600 mt-2">Access your work order dashboard</p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <i data-feather="info" className="w-5 h-5 text-blue-600 mt-0.5 mr-2"></i>
                <p className="text-sm text-blue-800">
                  Only Google accounts from approved organizations can access this system. New users require admin approval.
                </p>
              </div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg py-3 px-4 hover:bg-gray-50 transition duration-200 font-medium text-gray-700"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google logo"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <div className="text-center text-sm text-gray-500">
              By signing in, you agree to our{' '}
              <a href="/terms.html" className="text-blue-600 hover:underline">
                Terms
              </a>{' '}
              and{' '}
              <a href="/privacy.html" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignInPage;