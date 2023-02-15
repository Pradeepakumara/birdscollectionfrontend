import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { BASE_URL } from '../api/api'

const Register = () => {

    const history = useHistory()

    const [inpval, setINP] = useState({
        name: "",
        date: "",
        image: "",
        title: "",
        description: ""
    })

    const setData = (e) => {
        console.log(e.target.value);
        const {name, value} = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const addInpdata = async (e) => {
        e.preventDefault();

        const {name, date, image, title,description} = inpval;

        if(!name || !date || !image || !title || !description){
            alert('All fields are required please fill it')
        }
        else{
            const res = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, date, image, title, description 
            })
        });

        const data = await res.json();
        console.log(data);

        if(res.status === 422 || !data){
            alert('error');
        }
        else{
            alert("Data Added Successfully");
            history.push("/");
        }
        }
    }

    return (
        <div className='container mt'>
            {/* <Link to='/'>
                <button className='btn btn-secondary'>Back to Home</button>
            </Link> */}
            <h2 className='text-center mb-4'>Post Birds Data</h2>
            <form>
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setData}   name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Date</label>
                        <input type="text" name="date" value={inpval.date} 
                        onChange={setData}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Image Url</label>
                        <input type="text"  name="image" value={inpval.image}  onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input type="text"  name="title" value={inpval.title}  onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-3 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <textarea className="form-control" 
                        value={inpval.description}
                        onChange={setData}   name="description" id="" cols="30" rows="2" required></textarea>
                    </div>

                </div>
                <button type="submit" className="btn btn-primary btn-lg mb-3" onClick={addInpdata}>Submit</button>
            </form>
        </div>
    )
}

export default Register