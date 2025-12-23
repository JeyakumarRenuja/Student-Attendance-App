import Header from "../Components/Header";
import AttendenceForm from "../Components/AttendenceForm";
import AttendenceTable from "../Components/AttendenceTable";

function AttendencePage() {
  const students = [
  { id: 1, roll: '001', name: 'Jeru', status: 'present', remarks: '' },
  { id: 2, roll: '002', name: 'Pooja', status: 'absent', remarks: 'Sick leave' },
  { id: 3, roll: '003', name: 'Kapi', status: 'present', remarks: 'Late by 10 minutes' },
  { id: 4, roll: '004', name: 'Arul', status: 'absent', remarks: 'Family function' },
  { id: 5, roll: '005', name: 'Ajie', status: 'present', remarks: '' },
  { id: 6, roll: '006', name: 'Saji', status: 'absent', remarks: 'Doctor appointment' },
  ];
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <AttendenceForm />
        <AttendenceTable students={students} />
      </main>
    </>
  );
}
export default AttendencePage;


