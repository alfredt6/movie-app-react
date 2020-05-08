import React from 'react';
import Proptypes from 'prop-types';

// Styled component
import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';


const LoadMoreBtn = ({ text, callback}) => (
    <StyledLoadMoreBtn type="button" onClick={callback}>
        {text}
    </StyledLoadMoreBtn>
)

LoadMoreBtn.prototypes = {
    text: Proptypes.string,
    callback: Proptypes.func,
}

export default LoadMoreBtn;