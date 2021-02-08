import React from 'react';
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component"
import CollectionPage from "../collection/collection.component"
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
// import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
// import CollectionPage from "../collection/collection.component";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shoppage extends React.Component{
    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');

        collectionRef.get()
        .then(snapshot =>{
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionMap);
            this.setState({ loading:false});
        });
    }
render(){
    const {match}= this.props;
    const { loading } = this.state
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
            </div>);
}
} 
const mapDispatchTOProps = dispatch =>({
    updateCollections: collectionsMap =>{
        dispatch(updateCollections(collectionsMap))
    }
})


export default connect(null,mapDispatchTOProps)(Shoppage);