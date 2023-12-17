import React from 'react'
import "./styles/List_comp.css";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";


export default function List_comp({props}) {

  return (
    <div className='item'>
    {/* Image section */}
    {/* Image */}
    <img src={props.Image} alt='Dummy Image' className='Img'/>

{/* Name */}
    <h1 className='Name'>{props.Name}</h1>

{/* Email */}
    <div className='Email'>
    <CiMail />
    <p>{props.Email}</p>
    </div>

{/* Phone */}
    <div className='Phone'>
    <CiPhone />
    <p>{props.Phone}</p>
    </div>

    {/* Website */}
    <div className='Website'>
    <TfiWorld />
    <p>{props.Website}</p>
    </div>

  
    </div>
  )
}
