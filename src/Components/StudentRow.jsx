function StudentRow ({ student }) {
  const isPresent = student.status === 'present';
  return (
    <tr className={`border-b ${isPresent ? 'bg-green-50' : 'bg-red-50'}`}>
      <td className="px-6 py-4">{student.roll}</td>
      <td className="px-6 py-4">{student.name}</td>
      <td className="px-6 py-4 text-center">
        <button className={`${isPresent ? 'bg-green-500' : 'bg-red-500'} text-white px-4 py-1 rounded-full`}>
          {isPresent ? 'Present' : 'Absent'}
        </button>
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          placeholder="Add remarks..."
          className="w-full px-2 py-1 border rounded"
          defaultValue={student.remarks}
        />
      </td>
    </tr>
  );
};
export default StudentRow;







