import React from 'react';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Skeleton from '@mui/material/Skeleton';

import Review from './Items';

// table items using redux-saga
const ReviewItem = ({ review }) => {
  const { rating, title, applicant } = review;
  return <Review title={title} applicant={applicant} rating={rating} />;
};

// table element
export const TableSkeleton = ({ review, loading }) => {
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

export const TableWhileLoading = () => {
  const screenWidth = window.innerWidth;
  const textWidth = window.innerWidth * 0.6;
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const Dummy = () => {
    return (
      <TableRow>
        <TableCell>
          <Skeleton width={screenWidth < 384 ? textWidth : 384 * 0.6} />
        </TableCell>
        <TableCell>
          <Skeleton width={25} height={35} />
        </TableCell>
      </TableRow>
    );
  };
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell align={'center'}>게임물명</TableCell>
          <TableCell align={'center'}>등급</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {array.map((idx) => (
          <Dummy />
        ))}
      </TableBody>
    </Table>
  );
};
