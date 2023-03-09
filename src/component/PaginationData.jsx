import { Box } from '@mui/material'
import React from 'react'
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../ReduxStore/action/getDataAction';


export default function PaginationData({ page, totalCount, setPage, pageSize, search }) {
    const disData = useDispatch();

    const handleChange = (event, value) => {
        setPage(value);
        disData(getData(value, pageSize, search));
    };


    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Pagination
                count={Math.ceil(totalCount / pageSize)}
                page={page}
                onChange={handleChange}
                color="primary"
            />
        </Box>
    )
}
