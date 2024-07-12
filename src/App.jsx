import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);


  
  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}

         <AddStudent 
         setStudents={setStudents} 
         students={students} 
         />

      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student, index) => {
          return <StudentCard key={index} {...student} />;
        })}
    </div>
  );
}

export default App;
