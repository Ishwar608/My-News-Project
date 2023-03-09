import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { ShowMoreData } from './ShowMoreData';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function NewBlog({items, remove }) {
    const myNav = useNavigate();
  
    return (
        <Stack
            direction="row"
            flexWrap='wrap'
            justifyContent='center'
            alignItems='center'
            marginTop='10px'
        >
            {items?.length === 0 ?

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: 25, mb: 5 }}>
                    No Record Found

                </Typography>
                :
                items && items.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            sx={{
                                padding: 1,
                                maxWidth: 400,
                                m: 1, boxShadow: 3,
                                bgcolor: '#e7eaf0'
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    {item.title}
                                </Typography>
                                <CardMedia

                                    component="img"
                                    alt="green iguana"
                                    sx={{ width: '243px', height: '262px', objectFit: 'revert', mb: 2 }}
                                    image={item.imageURL}
                                />
                                <Typography
                                    color="text.secondary"
                                >
                                    Published-By : - {item.publishedBy} $
                                </Typography>

                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-evenly' }}>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    startIcon={<VisibilityIcon />}
                                    onClick={() => {
                                        myNav(`/news/${item.id}`)
                                    }}
                                >
                                    View
                                </Button>
                                <Button variant="outlined" color="success"
                                    onClick={() => {
                                        myNav(`/editNews/${item.id}`)
                                    }}
                                    startIcon={<EditIcon />}>
                                    Edit
                                </Button>
                                <Button variant="outlined" color="error"
                                    onClick={() => {
                                        remove(item.id)
                                    }}
                                    startIcon={<DeleteIcon />}>
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })
            }



        </Stack >
    )
}
