import React, { useEffect, useState } from 'react'
import Search from '../Assets/Search.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Signup from './Signup'

function Home(){
    const[data,setdata]=useState([])
    const[search,setsearch]=useState('')

    function handlesearch(e){
        setsearch(e.target.value)
    }

    useEffect(()=>{
        axios.get('https://reactnd-books-api.udacity.com/books',{headers: { 'Authorization': 'whatever-you-want' }})
        .then(response=>{
            setdata(response.data.books)
            console.log(data)
        })
    },[])
return (
    <>
    <nav>
        <div className='Logo'>Kalvium Store</div>
        <div className='searcharea'><i><img src={Search} alt="" height={19} className='searchimg'/></i><input type="text" name="" className='searchbar' placeholder='Search book' onChange={(e)=>handlesearch(e)}/></div>
        <div><Link to="/Signup"><button className='register'>Registration</button></Link></div>
    </nav>
    <div className='books'>
    {data
    .filter((items) =>items.title.toLowerCase().includes(search))
    .map((item,index) => {
        return (
            <div key={index} className='book'>
                <a href={item.infoLink}>
                    <img src={item.imageLinks.smallThumbnail} alt="" className='bookimg'/>
                </a>
                    <h3>{item.title}</h3>
                    <div className='bookrating'>
                        <p className='rating'>{item.averageRating}</p>
                        <p className='rating'>Free</p>
                    </div>
                    <p className='detail'>Pages {item.pageCount}</p>
                    <p className='detail'>{item.publishedDate}</p>

            </div>
        )

    })
    }
    </div>
    </>
    )
}

export default Home
