import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
// import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link, useHistory, useParams } from 'react-router-dom';
import { BASE_URL } from '../api/api';



const Details = () => {

    const {id} = useParams();
    console.log(id)
    
    const history = useHistory();

    const [n, setN] = useState('')
    const [getpostdata, setPostdata] = useState([]);
    console.log(getpostdata)


    const getIndividualpost = async () => {

        const res = await fetch(`${BASE_URL}/getpost/${id}`, {
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if(res.status === 422 || !data){
            console.log("error")
        }
        else{
            setPostdata(data)
            console.log("get data")
            setN(data.name);
        }
    }

    useEffect(() => {
        getIndividualpost()
    }, [id])
    

    const {name, date, image, title, description} = getpostdata;
    
    const deletepost = async (id) =>{
        const res2 = await fetch(`${BASE_URL}/delete/${id}`, {
            method: "DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata)

        if(res2.status === 422 || !deletedata){
            console.log("error")
        }
        else{
            alert("Data deleted successfully")
            history.push('/');
        }
    }
    
    return (
        <div className='container d-flex justify-content-center align-item-center mt'>
            {/* <h1 className=''>Hello World</h1> */}
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            {n[0]}
                        </Avatar>
                    }
                    // action={
                    //     <IconButton aria-label="settings">
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title={name}
                    subheader={date}
                />
                <CardMedia
                    sx={{ height: 194 }}
                    image={image}
                    component='img'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions className='d-flex justify-content-between'>
                    <Link to={`/edit/${getpostdata._id}`}><button className='btn btn-primary'><EditIcon /></button></Link>
                    <button className='btn btn-danger' onClick={() => deletepost(getpostdata._id)}><DeleteIcon /></button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Details