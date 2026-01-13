import { useEffect, useState } from "react";
import AttendenceForm from "./Components/AttendenceForm";
import AttendenceTable from "./Components/AttendenceTable";

const defaultStudents = [
  { id: 1, roll: 1, name: "Arul", status: "present", remarks: "" },
  { id: 2, roll: 2, name: "Pooja", status: "absent", remarks: "" },
  { id: 3, roll: 3, name: "Saji", status: "present", remarks: "" },
  { id: 4, roll: 4, name: "Ajie", status: "present", remarks: "" },
  { id: 5, roll: 5, name: "Abi", status: "present", remarks: "" }

];

export default function App() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : defaultStudents;
  });

  const [searchQuery, setSearchQuery] = useState("");

  // Save to localStorage whenever students change
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Toggle present / absent
  const toggleStatus = (id) => {
    setStudents(prev =>
      prev.map(s =>
        s.id === id
          ? { ...s, status: s.status === "present" ? "absent" : "present" }
          : s
      )
    );
  };

  // Save remarks
  const handleRemarkChange = (id, value) => {
    setStudents(prev =>
      prev.map(s =>
        s.id === id ? { ...s, remarks: value } : s
      )
    );
  };

  // Filter by name
  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add new student
  const addStudent = (name) => {
    const newStudent = {
      id: Date.now(),
      roll: students.length + 1,
      name,
      status: "absent",
      remarks: ""
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <AttendenceForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        addStudent={addStudent}
        students={students}
      />

      <AttendenceTable
        students={filteredStudents}
        toggleStatus={toggleStatus}
        handleRemarkChange={handleRemarkChange}
      />
    </div>
  );
}
