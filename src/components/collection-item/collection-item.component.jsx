import React from 'react';
import { connect } from 'react-redux';
import {
    CollectionItemContainer,
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    NameConatiner,
    PriceConatiner
} from './collection-item.styles'



import { addItem } from  '../../redux/cart/cart.action';

// import './collection-item.styles.scss';

const CollectionItem =({ item,addItem}) =>{
    const{ name ,price ,imageUrl}=item;
    return(
    <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer >
            <NameConatiner>{name}</NameConatiner>
            <PriceConatiner>{price}</PriceConatiner>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted >
            ADD To CART
        </AddButton>
        </CollectionItemContainer>
)};

const mapDispatchToProps =dispatch =>({
    addItem: item => dispatch(addItem(item))
})
export default connect(
    null,
    mapDispatchToProps)
    (CollectionItem);