import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../api/api';

const Home = () => {

    const [getpostdata, setPostdata] = useState([]);
    // console.log(getpostdata)


    const getdata = async () => {

        const res = await fetch(`${BASE_URL}/getdata`, {
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
            setPostdata(data)
            console.log("get data")
        }
    }

    useEffect(() => {
        getdata()
    }, [])

    const deletepost = async (id) =>{
        const res2 = await fetch(`${BASE_URL}/delete/${id}`, {
            method: "DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const deletedata = await res2.json();
        // console.log(deletedata)

        if(res2.status === 422 || !deletedata){
            console.log("error")
        }
        else{
            alert("Data deleted successfully")
            getdata();
        }
    }


    return (
        <div className='mt'>
            <div className="container">
                <div className="add-btn mt-2 mb-4">
                    <Link to='/register' className='d-grid gap-2 col-6 mx-auto'>
                    <button className='btn btn-primary'>Add Birds Data</button>
                    </Link>
                </div>

                <table className="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            {/* <th scope="col">Image Url</th> */}
                            <th scope="col" className='display-none-mb'>Title</th>
                            {/* <th scope="col">Description</th> */}
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            getpostdata.map((item, id) => {
                                return (
                                
                                    <tr key={id}>
                            <th scope="row">{id+1}</th>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            {/* <td>{item.image}</td> */}
                            <td className='display-none-mb'>{item.title}</td>
                            {/* <td>{item.description}</td> */}
                            <td className='d-flex justify-content-between'>
                                <Link to={`/view/${item._id}`}>
                                <button className='btn btn-success'><RemoveRedEyeIcon /></button>
                                </Link>
                                <Link to={`/edit/${item._id}`}>
                                <button className='btn btn-primary'><EditIcon /></button>
                                </Link>
                                <button className='btn btn-danger' onClick={() => deletepost(item._id)}><DeleteIcon /></button>
                            </td>
                        </tr>
                                
                                )
                            })
                        }
                        
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Home