import { useState } from 'react'
import './login.styles.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('https://backend7.cloudsenz.click/api/v1/login/test-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()
        console.log(data);

        if (data.user) {
            localStorage.setItem('token', data.user)
            alert('Login successful')
            window.location.href = '/dashboard'
        } else {
            alert('Please check your username and password')
        }
    }

    return (
        <div className='login_page'>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input
                    className='form-control'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <br />
                <input
                    className='form-control'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <br />
                <input type="submit" value="Login" className='btn btn-primary' />
            </form>
        </div>
    )
}

export default Login;
