import React from "react";
import {connect } from "react-redux"
import {createStructuredSelector } from "reselect";

import  CollectionPreview  from "../collection-preview/collection-preview.component"
import { selectCollectionForPrevirew } from "../../redux/shop/shop.selectors";
import "./collection-overview.styles.scss";

const CollectionsOverview =({ collections }) =>(
    <div className ="collection-overview">
    {
    collections.map(({id , ...otherCollectionProps}) => (
    <CollectionPreview key ={id} {...otherCollectionProps}/>
    ))
    }

    </div>

);

const mapsStateToProps= createStructuredSelector({
    collections:selectCollectionForPrevirew
});
export default connect (mapsStateToProps)(CollectionsOverview);