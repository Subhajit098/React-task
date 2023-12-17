import React, { useState } from 'react'
// import { useState } from 'react';
import List_comp from './List_comp'

let dummy_data=[{
    Name:"Abdul Hazir",
    Email:"abdul@234gmail.com",
    Phone:"1",
    Website:"website.org",
    Image:""
},
{
    Name:"Abdul Hazir",
    Email:"abdul@234gmail.com",
    Phone:"2",
    Website:"website.org",
    Image:""
},
{
    Name:"Abdul Hazir",
    Email:"abdul@234gmail.com",
    Phone:"3",
    Website:"website.org",
    Image:""
},
{
    Name:"Abdul Hazir",
    Email:"abdul@234gmail.com",
    Phone:"4",
    Website:"website.org",
    Image:""
},
{
    Name:"Abdul Hazir",
    Email:"abdul@234gmail.com",
    Phone:"3",
    Website:"website.org",
    Image:""
},
{
    Name:"Abdul Hazir",
    Email:"abdul@234gmail.com",
    Phone:"3",
    Website:"website.org",
    Image:""
},
{
    Name:"Abdul Hazir",
    Email:"abdul@234gmail.com",
    Phone:"3",
    Website:"website.org",
    Image:""
}]

// let list_items=dummy_data.map((obj)=><li>{obj.Name,obj.Email,obj.Phone}</li>)

export default function List() {

    const [data,setData]=useState(dummy_data);
    const [update,setUpdate]=useState(-1);

    const handleUpdate=(item)=>{
        setUpdate(item);
    }

    const handleDelete=(delete_item)=>{
        // alert(item.Name);
        const new_data=data.filter((obj)=>obj!=delete_item)
        setData(new_data);
    }

    const Edit=({obj,data,setData})=>{

        const handleInput=(e)=>{
            const newList=data.map(item=>(
                item.Phone===obj.Phone ? {...item,[e.target.name]:e.target.value} : item
            ))
            setData(newList)
        }

        return (
            <tr>
                <td><input type='text' name="Name" value={obj.Name} onChange={handleInput}/></td>
                <td><input type='email' name="Email" value={obj.Email} onChange={handleInput}/></td>
                <td><input type='text' name="Phone" value={obj.Phone} onChange={handleInput}/></td>
                <td><input type='text' name="Website" value={obj.Website} onChange={handleInput}/></td>
                <td><button type='submit'>Update</button></td>
            </tr>
        )
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUpdate(-1);
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
    {
    data.map((obj)=>{
        return (
            update === obj.Phone ? <Edit obj={obj} data={data} setData={setData}/> : 
            <div key={obj.Phone} style={{display:"grid",border:"2px solid red"}}>
            <List_comp props={obj}/>
            <div>
            <button onClick={()=>handleDelete(obj)}>Delete</button>
            <button onClick={()=>handleUpdate(obj.Phone)}>Edit</button>
            </div>
            </div>
        )
    })
    }
    </form>
    </>
  )
}
