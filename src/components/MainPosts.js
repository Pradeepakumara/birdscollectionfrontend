import React from 'react'
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


const MainPosts = ({post}) => {

    const {name, date, image, title, description} = post;
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
        <Card sx={{ maxWidth: 340, height:470 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            {name[0]}
                        </Avatar>
                    }
                    title={name}
                    subheader={date}
                />
                <CardMedia
                    sx={{ height: 200 }}
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
                {/* <CardActions>
                    <Link to={`/edit/${getpostdata._id}`}><button className='btn btn-primary'><EditIcon /></button></Link>
                    <button className='btn btn-danger' onClick={() => deletepost(getpostdata._id)}><DeleteIcon /></button>
                </CardActions> */}
            </Card>
    </div>
  )
}

export default MainPosts