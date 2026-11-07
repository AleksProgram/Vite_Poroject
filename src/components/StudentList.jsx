import StudentCard from "./StudentCard.jsx";

function StudentList({students}) {
    if (students.length === 0) {
        return (
            <div>
                <p>The list is empty!</p>
            </div>
        )
    }

    return (
        <div>
            {students.map((student) => (
                <StudentCard
                student={student}
                key = {student.id} /* для указа */
            />
            ))}
        </div>
    );
}

export default StudentList;