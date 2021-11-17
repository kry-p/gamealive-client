import React from 'react';
import styled from 'styled-components';
import qs from 'qs';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import { MdSearch } from 'react-icons/md';

const queryBuilder = (startdate, enddate, page) => {
  const query = qs.stringify({ startdate, enddate, page });
  return query;
};

const SearchFormStyle = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr 1fr;
  place-content: space-between center;
  grid-gap: 0.5rem;
  gap: 0.5rem;
`;

const SearchByDate = ({ form, onChange }) => {
  return (
    <SearchFormStyle>
      <TextField
        style={{ gridColumn: '1 / span 1' }}
        id="date"
        label="시작일"
        type="date"
        value={form.startdate}
        name="startdate"
        variant="standard"
        onChange={onChange}
      />
      <TextField
        style={{ gridColumn: '2 / span 1' }}
        id="date"
        label="종료일"
        type="date"
        name="enddate"
        variant="standard"
        value={form.enddate}
        onChange={onChange}
      />
      <IconButton
        style={{ gridColumn: '3 / span 1' }}
        href={`?${queryBuilder(form.startdate, form.enddate, 1)}`}
      >
        <MdSearch />
      </IconButton>
    </SearchFormStyle>
  );
};

export default SearchByDate;
