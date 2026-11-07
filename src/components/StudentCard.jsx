import StatusBadge from './StatusBadge.jsx';

function StudentCard({student}) {
    return (
        <div>
            <h2>{student.name}</h2>
            <p>ID: {student.id}</p>
            <p>Age: {student.age}, {student.age < 18 ? "Minor student" : "Adult student"}</p>
            <p>Group: {student.group}</p>
            <StatusBadge isActive={student.isActive} />
        </div>
    );
}

export default  StudentCard;