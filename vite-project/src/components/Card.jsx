import './Card.css';
export function UserCard({ name, age }) {
  return (
    <div className="userCard">
      <h1 className="title">User 1</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age: </strong>
        {age}
      </p>
    </div>
  );
}
