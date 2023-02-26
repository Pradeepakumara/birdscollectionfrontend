import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../api/api';

const Edit = () => {
    
    const {id} = useParams();

    // const history = useHistory()
    // console.log(id)

    // const [getpostdata, setPostdata] = useState([]);
    // console.log(getpostdata)

    const [inpval, setINP] = useState({
        name: "",
        date: "",
        image: "",
        title: "",
        description: ""
    })


    const setData = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    


    

    useEffect(() => {

        

        const getIndividualpost = async () => {

            const res = await fetch(`${BASE_URL}/getpost/${id}`, {
                method: "GET",
                headers:{
                    "Content-Type":"application/json"
                }
            });
    
            const data = await res.json();
            // console.log(data);
    
            if(res.status === 422 || !data){
                console.log("error")
            }
            else{
                setINP(data)
                console.log("get data")
                // history.push("/");
            }
        }
        
        getIndividualpost()
    }, [id])

    const updatePost = async (e) => {
        e.preventDefault();

        const {name, date, image, title,description} = inpval;

        const res2 = await fetch(`${BASE_URL}/updatepost/${id}`, {
            method: "PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, date, image, title,description
            })
        });

        const data2 = await res2.json()
        // console.log(data2)

        if(res2.status === 422 || !data2){
            alert("Fill the data")
        }
        else{
            alert('Data updated Successfully')
        }
    }

    return (
        <div className='container mt'>
            {/* <Link to='/'>
                <button className='btn btn-secondary'>Back to Home</button>
            </Link> */}
            <h2 className='text-center mb-4'>Update Birds Data</h2>
            <form>
                <div className="row">
                <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Id</label>
                        <input type="text" value={id}  name="id" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
                    </div>
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
                <button type="submit" className="btn btn-primary btn-lg" onClick={updatePost} >Update</button>
            </form>
        </div>
    )
}

export default Edit