import React from 'react';

// import './custom-button.style.scss';
import {CustomerButtonContainer} from './custom-button.style'

const CustomButton =({ children, ...Props}) => (
    <CustomerButtonContainer
        {...Props}> {children}
    </CustomerButtonContainer>
);

export default CustomButton;