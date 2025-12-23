import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="text-6xl font-bold text-indigo-600 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/attendance"
            className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-indigo-50 transition"
          >
            Go to Attendance
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
