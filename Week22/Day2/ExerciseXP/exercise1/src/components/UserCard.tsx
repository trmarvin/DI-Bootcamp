interface UserCardProps {
  name?: string;
  age?: number;
  role?: string;
}

function UserCard({
  name = 'Anonymous',
  age = 0,
  role = 'User',
}: UserCardProps) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '12px',
        borderRadius: '8px',
        maxWidth: '240px',
      }}
    >
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default UserCard;