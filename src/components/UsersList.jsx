import React, {useContext} from 'react'
import { GlobalContext } from '../context/Store';
import './UsersList.css'

const UsersList = () => {
    const { users } = useContext(GlobalContext);

    return (
      <div className="container">
        {users && users?.map((user) => {
            const {picture, country, age, name, id} = user
            return (
                <div key={id} className="card">
                    <div className="avatar">
                        <img className="image" alt={name} src= {picture?.large} />
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