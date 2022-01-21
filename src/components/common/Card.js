import React from 'react';
import styled, { css } from 'styled-components';
import {
  mainTextColor,
  cardColor,
  searchFormColor,
} from '../../lib/styles/global';

// color
import palette from '../../lib/styles/palette';

// card css
export const CardStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.05);
  color: ${mainTextColor};

  background-color: ${cardColor};

  h1 {
    font-size: medium;
  }
  h2 {
    font-size: small;
  }
  h3 {
    font-size: x-small;
  }

  animation: fadein 1s;
  -moz-animation: fadein 1s;
  /* Firefox */
  -webkit-animation: fadein 1s;
  /* Safari and Chrome */
  -o-animation: fadein 1s;
  /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${(props) =>
    props.mainColor &&
    css`
      background-color: ${palette.logo_base[0]};
    `}

  ${(props) =>
    props.subColor &&
    css`
      background-color: ${palette.logo_base[1]};
    `}

  ${(props) =>
    props.search &&
    css`
      background-color: ${searchFormColor};
      margin: 0rem;
      padding-left: 1rem;
      padding-right: 0rem;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
    `}

  ${(props) =>
    props.header &&
    css`
      padding: 0.5rem;
    `}

  ${(props) =>
    props.small &&
    css`
      @media (max-width: 360px) {
        width: 80%;
      }

      @media (min-width: 360px) {
        width: 288px;
      }
    `}

    ${(props) =>
    props.big &&
    css`
      @media (max-width: 360px) {
        width: 100%;
      }

      @media (min-width: 360px) {
        width: 360px;
      }
    `}

    ${(props) =>
    props.licenses &&
    css`
      flex-direction: column;
    `}
`;
const Card = (props) => {
  return <CardStyle {...props} />;
};

export default Card;
