import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'

function Signu() {


    const {register,handleSubmit,watch,formState:{errors}}=useForm()
    const onSubmit=(data)=>{
    alert("Check Console for your details")
    console.log()
    console.log(`Your Name is ${data.Name}`)
    console.log(`Your Email ID is ${data.EmailId}`)
    console.log(`Your Password is ${data.Password}`)
    }

    return (
    <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Account</h2>
        <input className='inputs' type="text" placeholder='Your Name' name {...register('Name',{required:'Name is required',minLength:{
            value:3,
            message:"Name is less than 3"
        },maxLength:{
            value:30,
            message:'Name is more than 30'
        }})}/>
        <p className='error'>{errors.Name?.message}</p>

        <input className='inputs' type="text" placeholder='Your Email' name="Email" {...register('EmailId',{required:'EmailId is required' , pattern:{
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message:'Enter a valid EmailId'
        }})}/>
        <p className='error'>{errors.EmailId?.message}</p>

        <input className='inputs' type="Password" placeholder='Password' name='Password' {...register('Password',{required:"Password is required",minLength:{
                value: 10,
                message:"Password must be less than 10"},
                pattern:{
                    value: /.*[!@#$%^&*()\-_=+{};:,<.>]/,
                    message:'Password should contain 1 special character'
                }
        })}/>
        <p className='error'>{errors.Password?.message}</p>

        <input className='inputs' type="Password" placeholder='Repeat Your Password' {...register('Check',{required:"Password is required",
        validate: value=> value===watch('Password') || "Password does not matches"
        })}/>
        <p className='error'>{errors.Check?.message}</p>

        <button type='submit' className='btn'>Submit</button>
        <p>Have already an account here?<Link to="/">Click here</Link></p>
        </form>
    </div>
    )
}

export default Signu
