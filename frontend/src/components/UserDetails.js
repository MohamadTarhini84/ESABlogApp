const UserDetails = ({ user }) => {

  return (
    <div className="user-details">
      <h4>{user.username}</h4>
      <p><strong>email: </strong>{user.email}</p>
      <p><strong>firstname: </strong>{user.firstname}</p>
      <p>{user.createdAt}</p>
    </div>
  )
}

export default UserDetails