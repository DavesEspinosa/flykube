import './UsersList.css'
import React from 'react'

const UsersList = () => {
    const { users } = useContext(GlobalContext);

    return (
      <div className="container">
        {users && users?.map((user) => {
            const {picture, country, age, name} = user
            return (
                <div className="card">
                <div className="avatar">
                    <img className="image" src= {picture?.thumbnail} />
                </div>
                <div className="content-container">
                    <p className="title">{name}</p>
                    <p className="content">{country}</p>
                    <p className="content">
                    {`${age} years`}
                    </p>
                </div>
                </div>
            )
          })
        } 
    </div> 
    )
}

export default UsersList