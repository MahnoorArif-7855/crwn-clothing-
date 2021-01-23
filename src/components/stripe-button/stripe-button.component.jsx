import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ( { price } ) => {
    const priceForStripe = price * 100 ;
    const publishableKey = 'pk_test_51ICViJCW8s4987Lrzdffxcz7oeXrgbO6hmNXjaOyUAfvxnX3cjfFBfmrF8bwODIQ4NdIctTkha0QaLiHw5u2VXzX00oNsc1CQm';


const onToken = token => {
    console.log(token);
    alert('payement Successful')
}

    return (
        <StripeCheckout
         label='Pay Now'
         name='CRWN Cloathing Ltd.'
         billingaddress
         shippingaddress
         image='http://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
        />
    );
};


export default StripeCheckoutButton;