import React from 'react';
import styled, { css } from 'styled-components';
import qs from 'qs';

import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';

import { MdSearch } from 'react-icons/md';
import Card from '../common/Card';

const queryBuilder = (type, page, query) => {
  const queryItems = { page };
  if (type === 'keyword') {
    queryItems.keyword = query.keyword;
  }
  if (type === 'date') {
    queryItems.startdate = query.startdate;
    queryItems.enddate = query.enddate;
  }
  const querySelector = qs.stringify(queryItems);
  return querySelector;
};

const SearchFormStyle = styled.div`
  display: grid;
  place-content: space-between center;

  ${(props) =>
    props.keyword &&
    css`
      grid-template-columns: 8fr 1fr;
    `}

  ${(props) =>
    props.date &&
    css`
      grid-template-columns: 6fr 6fr 1fr;
      grid-gap: 0rem;
      gap: 0.25rem;
    `}
`;

export const SearchByKeyword = ({ form, onChange }) => {
  return (
    <Card search>
      <SearchFormStyle keyword>
        <InputBase
          style={{ gridColumn: '1 / span 1' }}
          placeholder="검색"
          inputProps={{ 'aria-label': 'naked' }}
          value={form.keyword === 'undefined' ? '' : form.keyword}
          type="keyword"
          name="keyword"
          onChange={onChange}
        />
        <IconButton
          aria-label="button-search"
          style={{ gridColumn: '2 / span 1' }}
          href={`?${queryBuilder('keyword', 1, { keyword: form.keyword })}`}
        >
          <MdSearch />
        </IconButton>
      </SearchFormStyle>
    </Card>
  );
};

export const SearchByDate = ({ form, onChange }) => {
  return (
    <SearchFormStyle date>
      <TextField
        style={{ gridColumn: '1 / span 1' }}
        id="date-start"
        label="시작일"
        type="date"
        value={form.startdate}
        name="startdate"
        variant="standard"
        size="small"
        onChange={onChange}
      />
      <TextField
        style={{ gridColumn: '2 / span 1' }}
        id="date-end"
        label="종료일"
        type="date"
        name="enddate"
        variant="standard"
        size="small"
        value={form.enddate}
        onChange={onChange}
      />
      <IconButton
        style={{ gridColumn: '3 / span 1', paddingRight: 0 }}
        href={`?${queryBuilder('date', 1, {
          startdate: form.startdate,
          enddate: form.enddate,
        })}`}
      >
        <MdSearch />
      </IconButton>
    </SearchFormStyle>
  );
};
