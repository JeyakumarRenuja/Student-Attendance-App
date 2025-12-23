import StudentRow from "./StudentRow";
const AttendenceTable = ({ students }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="px-6 py-4 text-left">Roll No</th>
            <th className="px-6 py-4 text-left">Student Name</th>
            <th className="px-6 py-4 text-center">Status</th>
            <th className="px-6 py-4 text-left">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {/* Use map() to dynamically render student rows */}
          {students.map(student => (
            <StudentRow key={student.id} student={student} />
          ))}
        </tbody>
      </table>
      <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3">
        <button className="border px-6 py-2 rounded-lg">Export CSV</button>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">
          Save Attendance
        </button>
      </div>
    </div>
  );
};
export default AttendenceTable;
