import React, { useEffect } from 'react'
import Axios from 'axios'

const HomePage = ({ itemList }) => {
    useEffect(() => {
        Axios.get('https://backend7.cloudsenz.click/api/v1/items/?skip=0&limit=100').then((response) => {
            response.json()
                .then((data) => console.log(data))
        }).catch((err) =>
            alert(`Error loading Api, ${err}`)
        )
    })
    const UpdateUser = (id) => {
        Axios.post(`https://backend7.cloudsenz.click/api/v1/items/${id}`)
    }
    const DeleteUser = (id) => {
        Axios.delete(`https://backend7.cloudsenz.click/api/v1/items/${id}`)
    }
    return (
        <div>
            <table className="table table-primary table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {itemList.map((val, key) => {
                    return <tbody key={key}>
                        <tr>
                            <td>{val.title}</td>
                            <td>{val.description}</td>
                            <td><button className='btn btn-delete' onClick={() => DeleteUser(val.id)}>Delete</button></td>
                            <td><button className='btn btn-primary' onClick={() => UpdateUser(val.id)}>Update</button></td>
                        </tr>
                    </tbody>
                })}
            </table>
        </div>
    )
}

export default HomePage;