function AttendenceForm() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-lg font-semibold mb-6">Attendance Form</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Class dropdown */}
        <div>
          <label className="block mb-2">Select className</label>
          <select className="w-full px-4 py-2 border rounded-lg">
            <option>className 1</option>
            <option>className 2</option>
            <option>className 3</option>
          </select>
        </div>
        {/* Date input */}
        <div>
          <label className="block mb-2">Attendance Date</label>
          <input type="date" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        {/* Search input */}
        <div>
          <label className="block mb-2">Search Student</label>
          <input
            type="text"
            placeholder="Enter student name..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        {/* Mark Attendance button */}
        <div className="flex items-end">
          <button className="w-full bg-green-600 text-white px-6 py-2 rounded-lg">
            Mark Attendance
          </button>
        </div>
      </div>
      {/* Attendence summary */}
      <div className="flex gap-6 border-t pt-4">
        <span>Present: 3</span>
        <span>Absent: 3</span>
        <span>Total: 6</span>
      </div>
    </div>
  );
};
export default AttendenceForm;










