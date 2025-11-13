import React, { useEffect } from 'react';
import Navbar from './components/Navbar'; // Adjust path as needed

const MyOrdersPage = () => {
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            My Work Orders
          </h1>
          <a
            href="/new-order.html"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center gap-2"
          >
            <i data-feather="plus"></i> New Order
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Order #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Priority
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Deadline
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #ORD-1001
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Upper and lower retainers
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="priority-badge standard">Standard</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2023-11-15
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      In Progress
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">
                      <i data-feather="eye"></i>
                    </a>
                    <a href="#" className="text-yellow-600 hover:text-yellow-900 mr-3">
                      <i data-feather="edit"></i>
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-900">
                      <i data-feather="trash-2"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #ORD-1000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Hawley retainer repair
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="priority-badge urgent">Urgent</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2023-11-05
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Received
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">
                      <i data-feather="eye"></i>
                    </a>
                    <a href="#" className="text-yellow-600 hover:text-yellow-900 mr-3">
                      <i data-feather="edit"></i>
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-900">
                      <i data-feather="trash-2"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #ORD-0999
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Clear aligners - case #2234
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="priority-badge standard">Standard</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2023-10-28
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">
                      <i data-feather="eye"></i>
                    </a>
                    <a href="#" className="text-gray-400 cursor-not-allowed mr-3">
                      <i data-feather="edit"></i>
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-900">
                      <i data-feather="trash-2"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyOrdersPage;