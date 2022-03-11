import React, { useState } from 'react'
import Axios from 'axios'
import './Dashboard.styles.css'

const Dashboard = ({ setItemList }) => {
    const [setTitle] = useState('')
    const [setDescription] = useState('')
    const handleSubmit = () => {
        Axios.post('https://backend7.cloudsenz.click/api/v1/items/').then((response) => {
            response.json()
                .then(data => setItemList(data))
        }).catch((err) =>
            alert(`Error loading Api, ${err}`)
        )
    }
    return (
        <div className='dashboard'>
            <div className='add_post'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" placeholder="Post Title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" >Description</label>
                        <textarea className="form-control" rows="3" placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary mb-3'>Add Post</button>
                </form>
            </div>
        </div>
    )
}

export default Dashboard
