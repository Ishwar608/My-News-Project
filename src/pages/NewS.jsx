import { Button, CardMedia, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { viewNews } from '../ReduxStore/action/viewDataAction';

export default function NewS() {
  const news = useSelector(y => y.viewNews).items

  const disData = useDispatch();
  const { id } = useParams();
  const myNav = useNavigate();
  useEffect(() => {
    if (id) {
      getNewsData(id);
    }
  }, [id]);

  const getNewsData = (id) => {
    disData(viewNews(id))
  }

  return (

    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography
          variant="h4"
          color="text.secondary"
          mb='20px'
        >
          {news?.title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: 20, bgcolor: 'lightgray' }}
          mb='20px'
          p='5px 20px'
          component="h2">
          {news?.createdAt}

        </Typography>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ width: '243px', height: '262px', objectFit: 'revert', mb: 2 }}
          image={news?.imageURL}
        />
        <Button onClick={() => myNav('/')}>Go to Back</Button>
      </Box>
    </Container>
  )
}
