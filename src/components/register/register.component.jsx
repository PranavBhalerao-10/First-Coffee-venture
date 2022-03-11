import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './register.styles.css'


// You can add users to check if it gets added in db and gets deleted when we go on dashboard.
function Register() {
    const navigate = useNavigate()

    const [full_name, setFull_Name] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()

        const response = await fetch('https://backend7.cloudsenz.click/api/v1/users/open', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                full_name,
                email,
                password,
            }),
        })

        const data = await response.json()
        console.log(data.password);
        navigate('/login')
        if (data.status === 'ok') {
            console.log("ok");
        }
    }

    return (
        <div className='register_page'>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input
                    className='form-control'
                    value={full_name}
                    onChange={(e) => setFull_Name(e.target.value)}
                    type="text"
                    placeholder="Full Name"
                    required
                />
                <br />
                <input
                    className='form-control'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    required
                />
                <br />
                <input
                    className='form-control'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    required
                />
                <br />
                <input type="submit" value="Register" className='btn btn-primary' />
            </form>
        </div>
    )
}

export default Register;
