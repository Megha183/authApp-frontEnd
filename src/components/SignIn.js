import {React ,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './File.css'

function SignIn() {

    const [credentials, setcredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/loginUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                email: credentials.email,
                password: credentials.password,

            }),
        });
        const json = await response.json(); // Parse the response as JSON
        console.log(json);
        if (!json.success) {
            alert("Enter valid credentials");
        }
        if (json.success) {
            localStorage.setItem("userEmail", credentials.email)

            localStorage.setItem("authToken", json.authToken)
            console.log(localStorage.getItem("authToken"));
            console.log(localStorage.getItem("userEmail"));
            alert("login success");
            navigate('/dashboard')

        }

    };
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

  return (
    <div className='background'>
        <div className='top'>
            <div className='container forms p-3' >
                <form onSubmit={handleSubmit}>
                    <h1 className='text-center text-light'>Log in</h1>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputEmail1" className='text-primary'>Email address</label>
                        <input type="email" className="form-control mt-3" id="exampleInputEmail1"
                            aria-describedby="emailHelp" name='email' autoComplete="off" value={credentials.email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className='mt-3 text-primary'>Password</label>
                        <input type="password" className="form-control mt-3" id="exampleInputPassword1"
                            name='password' value={credentials.password} autoComplete="off" onChange={onChange} />
                    </div>


                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link to={'/register'} className='m-3 btn btn-danger'>I'm a new user</Link>

                </form>
            </div>
        </div>
        </div>
  )
}

export default SignIn