import { Typography } from '@mui/material';
import React, { useMemo, useState } from 'react'

export const ShowMoreData = ({ helpText }) => {
    const [showMore, setShowMore] = useState(false);

    const d = useMemo(() => {
        return helpText.slice(0, 150).concat('...');
    }, [helpText]);

    return (
        <Typography 
            style={{cursor:'pointer',marginBottom:'10px'}}
            onClick={() => { setShowMore(!showMore) }}
        >
            {showMore ? helpText : d} {showMore ? 'less' : 'More'}
        </Typography>
    )
}