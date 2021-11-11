import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { changeField, listReviewDate } from '../../modules/review';
import ReviewInfo from '../../components/info/ReviewInfo';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

// redux-saga container for review information
const ReviewListDateContainer = ({ location }) => {
  const { form } = useSelector(({ review }) => ({
    form: review,
  }));
  const settings = useSelector((state) => state.option);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  const dispatch = useDispatch();
  const { review, error, loading } = useSelector(({ review, loading }) => ({
    review: review.review,
    error: review.error,
    loading: loading['review/LIST_REVIEW_DATE'],
  }));

  useEffect(() => {
    const { startdate, enddate, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    const { cancel, reject } = {
      cancel: settings.searchCancel,
      reject: settings.searchReject,
    };
    dispatch(listReviewDate({ startdate, enddate, page, cancel, reject }));
  }, [dispatch, location.search, settings.searchCancel, settings.searchReject]);

  const queryHandler = (startdate, enddate, page, cancel, reject) => {
    const query = qs.stringify({ startdate, enddate, page, cancel, reject });
    return query;
  };

  return (
    <>
      <ReviewInfo
        type="date"
        form={form}
        onChange={onChange}
        review={review}
        loading={loading}
        error={error}
      />
      {form.lastpage !== 0 ? (
        <Pagination
          page={form.currentpage}
          count={form.lastpage}
          siblingCount={0}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`?${queryHandler(
                form.startdate,
                form.enddate,
                item.page,
                settings.searchCancel,
                settings.searchReject,
              )}`}
              {...item}
            />
          )}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default withRouter(ReviewListDateContainer);
