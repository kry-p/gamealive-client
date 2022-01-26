import React from 'react';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Review from './Items';

// table items using redux-saga
const ReviewItem = ({ review }) => {
  const { rating, title, applicant } = review;
  return <Review title={title} applicant={applicant} rating={rating} />;
};

// table element
const TableSkeleton = ({ review, loading }) => {
  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align={'center'}>게임물명</TableCell>
            {/* <TableCell align={'center'}>신청자</TableCell> */}
            <TableCell align={'center'}>등급</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading && review && (
            <>
              {review.map((data, index) => (
                <ReviewItem review={data} key={index} />
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default TableSkeleton;
