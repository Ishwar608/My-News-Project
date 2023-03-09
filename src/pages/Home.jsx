import { Backdrop } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import NewBlog from '../component/NewBlog';
import PaginationData from '../component/PaginationData';
import SearchBox from '../component/SearchBox'
import { getData } from '../ReduxStore/action/getDataAction';
import { deleteNews } from '../ReduxStore/action/deleteNewsAction';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router';

export default function Home() {

  const getNews = useSelector(y => y.news);
  const [datas, setDatas] = useState(getNews?.items);
  const myNav = useNavigate();

  const disData = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const firstIndex = 1;

  const [pageSize] = useState(9);
  const [page, setPage] = useState(1);

  useEffect(() => {
    disData(getData(firstIndex, pageSize, searchValue))
    setDatas(getNews?.items)
  }, []);

  const inputSubmit = async (e) => {
    e.preventDefault()
    disData(getData(firstIndex, pageSize, searchValue))

  }

  const dltNews = (id) => {
    disData(deleteNews(id))
    setPage(1)
    disData(getData(firstIndex, pageSize, searchValue))
   
  }


  return (
    <>
      <SearchBox
        search={searchValue}
        inputHandler={setSearchValue}
        inputSubmit={inputSubmit}
      />

      {
        getNews.isloadding ?
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open='true'
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          :
          <>
            <NewBlog items={page == 1 ? getNews.items.slice(0, pageSize) : getNews.items} remove={dltNews} />

            <PaginationData
              page={page}
              pageSize={pageSize}
              setPage={setPage}
              totalCount={getNews.count}
              search={searchValue}
            />
          </>
      }
    </>
  )
}
