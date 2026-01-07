import { useState } from "react";

function AttendenceForm({ searchQuery, setSearchQuery }) {
  const [selectedClass, setSelectedClass] = useState("");
  const [attendanceDate, setAttendanceDate] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-lg font-semibold mb-6">Attendance Form</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Class dropdown */}
          <div>
            <label className="block mb-2">Select Class</label>
            <select
              className="w-full px-4 py-2 border rounded-lg"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">Select Class</option>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
            </select>
          </div>

          {/* Date input */}
          <div>
            <label className="block mb-2">Attendance Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg"
              value={attendanceDate}
              onChange={(e) => setAttendanceDate(e.target.value)}
            />
          </div>

          {/* Search input */}
          <div>
            <label className="block mb-2">Search Student</label>
            <input
              type="text"
              placeholder="Enter student name..."
              className="w-full px-4 py-2 border rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Mark Attendance button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-2 rounded-lg"
            >
              Mark Attendance
            </button>
          </div>
        </div>
      </form>

      {/* Attendance summary (static for now, can be dynamic later) */}
      <div className="flex gap-6 border-t pt-4">
        <span>Present: 3</span>
        <span>Absent: 3</span>
        <span>Total: 6</span>
      </div>
    </div>
  );
}

export default AttendenceForm;
