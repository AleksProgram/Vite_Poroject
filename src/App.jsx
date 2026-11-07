import StudentList from './components/StudentList';
import Footer from './components/Footer';
import { students } from './data/students';
// import './App.css';

function App() {

  return (
      <div>
        <h1>Student Management</h1>
        <h3>Total students: {students.length}</h3>
        <StudentList students={students} />
        <br></br>
        <Footer />
      </div>
  );
}

export default App
