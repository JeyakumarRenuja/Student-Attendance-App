import StudentRow from "./StudentRow";

const AttendenceTable = ({ students, toggleStatus, handleRemarkChange }) => {
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
          {students.map(student => (
            <StudentRow 
              key={student.id} 
              student={student} 
              toggleStatus={toggleStatus} 
              handleRemarkChange={handleRemarkChange} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendenceTable;
