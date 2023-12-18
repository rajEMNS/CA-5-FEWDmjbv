import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
    const [name, setname ] = useState('')
    const [email, setemail ] = useState('')
    const [password, setpassword ] = useState("")
    const [confirm,setconfirm] = useState("")

    const [error,seterror]=useState({})
    const[valid,setvalid]=useState(false)
    
    function handlename(e){
        setname(e.target.value)
    
        if(name === ''){
            seterror(error=>({...error,name:'Name is required'}))
            setvalid(false)
        }else if(name.length>30){
            seterror(error=>({...error,name:'Name is greater than 30'}))
            setvalid(false)
        }else if(name.length<3){
            seterror(error=>({...error,name:'Name is lesser than 3'}))
            setvalid(false)
        }else{
            seterror(error=>({...error,name:''}))
            setvalid(true)
    }
    }

    function handleemail(e){
        setemail(e.target.value)
        if(email.includes('@')){
            seterror(error=>({...error,email:''}))
            setvalid(true)
        }else{
            seterror(error=>({...error,email:"Email is required"}))
            setvalid(false)
        }

    }

    function handlepassword(e){
        setpassword(e.target.value)
        if(password=''){
            seterror(error=>({...error,password:"Password is required"}))
            setvalid(false)
        }else if(password.length>10){
            seterror(error=>({...error,password:"Password is less than 10"}))
            setvalid(false)
        }else if(!/[!@#$%^&*()\-_*=+{};:,<.>]/.test(password)){
            seterror(error=>({...error,password:"Password should contain 1 special character"}))
            setvalid(false)
        }
        else{
            seterror(error=>({...error,password:''}))
            setvalid(true)
        }
    }

    function handleconfirm(e){
        setconfirm(e.target.value)
        if(password!==confirm){
            seterror(error=>({...error,confirm:"Password is not matching"}))
            setvalid(false)
        }else{
            seterror(error=>({...error,confirm:''}))
            setvalid(true)
        }
    }
    
    function handlesubmit(){

    if(valid){
        seterror(error=>({...error,submit:"Registeration succesful."}))
    }
    }
return (  
    <div className='container'>
        <h2>{error.submit}</h2>
        <form >
            <h2>Create Account</h2>
        <div>
            <input type="text" placeholder='Name' onChange={(e)=>handlename(e)} name="firstName"/>
            <p>{error.name}</p>
        </div>
        <div>
            <input type="email" placeholder='Email' name='Email' onChange={(e)=>handleemail(e)} />
            <p>{error.email}</p>
        </div>
        <div>
            <input type="password" placeholder='Password' name='' onChange={(e)=>handlepassword(e)}/>
            <p>{error.password}</p>
        </div>
        <div>
            <input type="password" placeholder='Resend your password' onChange={(e)=>handleconfirm(e)} />
            <p>{error.confirm}</p>
        </div>
        <div>
            <button type='submit' onClick={(e)=>handlesubmit(e)}>Register</button>
        </div>
        <p>Have already an account here?<Link to="/">Click here</Link></p>
        </form>
    </div>
    )
}

export default App