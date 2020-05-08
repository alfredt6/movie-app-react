import React from 'react';
import Proptypes from 'prop-types';

// Styled componets
import { StyledGrid, StyledGridContent } from '../styles/StyledGrid';

const Grid = ({ header, children }) => (
    <StyledGrid>
        <h1>{header}</h1>
        <StyledGridContent>{children}</StyledGridContent>    
    </StyledGrid>
    
)

Headers.proptypes = {
    header: Proptypes.string,
}

export default Grid;