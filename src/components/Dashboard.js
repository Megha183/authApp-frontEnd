import React, { useState } from 'react';
import './Dashboard.css'
function Dashboard() {
  const [students, setStudents] = useState([]);

  const addStudent = (name, age, roll) => {
    const newStudent = {
      name,
      age,
      roll,
    };

    setStudents(prevStudents => [...prevStudents, newStudent]);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const roll = form.roll.value;

    addStudent(name, age, roll);

    form.reset();
  };

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>
        <h1 className='text-center text-light mb-4'>Student Management List</h1>
          <input type="text" placeholder="Student name" name="name" required />
          <input type="number" placeholder="Student age" name="age" required />
          <input type="number" placeholder="Student roll" name="roll" required />
          <button class="add" type="submit">Add student</button>
        </form>
        <div className="students">
          {students.map((student, index) => (
            <div key={index}>
              <h2>Student name: {student.name}</h2>
              <p>Student age: {student.age}</p>
              <p>Student roll: {student.roll}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
