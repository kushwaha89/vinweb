import { Link } from "react-router-dom";

export default function Partners404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center pt-24">
      
      {/* Big 404 */}
      <h1 className="text-8xl font-extrabold text-red-600 mb-6">404</h1>
      
      {/* Title */}
      <h2 className="text-4xl font-bold mb-4 text-gray-800">
        Pricing  Page Not Found
      </h2>
      
      {/* Description */}
      <p className="text-gray-600 mb-8 max-w-xl">
        Oops! The Pricing page you are looking for doesn’t exist or has been moved. 
        Please check back later or return to the homepage.
      </p>
      
      {/* Go Back Home Button */}
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>

      
      </div>

  );
}
