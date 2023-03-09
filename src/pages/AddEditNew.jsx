import React, { useEffect, useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Grid, Paper } from '@mui/material';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { viewNews } from '../ReduxStore/action/viewDataAction';
import { addNews } from '../ReduxStore/action/addNewsAction';
import { updateNews } from '../ReduxStore/action/updateNewsAction';


const paperStyle = { padding: 20, width: 300, margin: "20px auto" }
const btnstyle = { margin: '20px 0' }

export default function AddEditNew() {

  const news = useSelector(y => y.viewNews).items
  const disData = useDispatch();

  const img = useRef();
  const [formValue, setFormValue] = useState({
    title: "",
    content: "",
    imageURL: '',
    publishedBy: ""
  });
  const [editMode, setEditMode] = useState(false);

  const myNav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      disData(viewNews(id))
      setFormValue({ ...news })
    } else {
      setEditMode(false);
      setFormValue({
        title: "",
        content: "",
        imageURL: '',
        publishedBy: ""
      })
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      setFormValue({ ...news })
    } else {
      setFormValue({
        title: "",
        content: "",
        imageURL: '',
        publishedBy: ""
      })
    }
  }, [news])


  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .required('Please Enter the Value!'),
    content: Yup.string()
      .min(2, 'Too Short!')
      .max(500, 'Too Long!')
      .required('Please Enter the Value!'),
    imageURL: Yup.string()
      .url('Invalid URL')
      .matches(
        /(https?:\/\/.*\.(?:png|jpg|jpeg))/i,
        'Image must be in PNG or JPG format'
      )
      .required('Required'),
    publishedBy: Yup.string()
      .required('Please Enter the Value!'),
  });

  const formik = useFormik({
    initialValues: { ...formValue },
    enableReinitialize: true,
    validationSchema: SignupSchema,

    onSubmit: async (values) => {

      if (!editMode) {
        disData(addNews(values))
      } else {
        disData(updateNews(values))
      }

      setFormValue({
        title: "",
        content: "",
        imageURL: '',
        publishedBy: ""
      });

      myNav('/')
    },

  });

  return (

    <Grid component="form" onSubmit={formik.handleSubmit}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          {editMode ? "UPDATE NEWS ✏️" : "ADD NEWS 📜"}
        </Grid>

        <TextField
          label='Title'
          placeholder='Title'
          margin='normal'
          variant="outlined"
          fullWidth
          name='title'
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          label='Content'
          placeholder='Content'
          margin='normal'
          variant="outlined"
          fullWidth
          name='content'
          value={formik.values.content}
          onChange={formik.handleChange}
          error={formik.touched.content && Boolean(formik.errors.content)}
          helperText={formik.touched.content && formik.errors.content}
        />
        <TextField
          label='image'
          placeholder='Image URL'
          margin='normal'
          variant="outlined"
          fullWidth
          value={formik.values.imageURL}
          name='imageURL'
          onChange={formik.handleChange}
          error={formik.touched.imageURL && Boolean(formik.errors.imageURL)}
          helperText={formik.touched.imageURL && formik.errors.imageURL}
        />



        <TextField label='PublishedBy' placeholder='Published By' margin='normal' variant="outlined" fullWidth
          name='publishedBy'
          onChange={formik.handleChange}
          value={formik.values.publishedBy}
          error={formik.touched.publishedBy && Boolean(formik.errors.publishedBy)}
          helperText={formik.touched.publishedBy && formik.errors.publishedBy}
        />

        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>
          {editMode ? "UPDATE" : "ADD"}
        </Button>

      </Paper>
    </Grid>
  )
}
