import { useState } from "react";

function AttendenceForm({ searchQuery, setSearchQuery, addStudent, students }) {
  const [showPopup, setShowPopup] = useState(false);
  const [newName, setNewName] = useState("");

  const presentCount = students.filter(s => s.status === "present").length;
  const absentCount = students.filter(s => s.status === "absent").length;

  const handleAdd = () => {
    if (!newName.trim()) return;
    addStudent(newName);
    setNewName("");
    setShowPopup(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-6">Attendance Form</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Search */}
          <input
            type="text"
            placeholder="Search student..."
            className="px-4 py-2 border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Add student button */}
          <button
            onClick={() => setShowPopup(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            ➕ Add New Attendance
          </button>
        </div>

        <div className="flex gap-6 border-t pt-4">
          <span>Present: {presentCount}</span>
          <span>Absent: {absentCount}</span>
          <span>Total: {students.length}</span>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96">
            <h3 className="text-lg font-semibold mb-4">Add Student</h3>

            <input
              type="text"
              placeholder="Enter student name"
              className="w-full px-4 py-2 border rounded mb-4"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AttendenceForm;
