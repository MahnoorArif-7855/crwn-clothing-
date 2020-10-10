export const addItemToCart = (cartItems ,cartItemToAdd) =>{
    const existingCartItem =cartItems.find(
        cartItem => cartItem.id===cartItemToAdd.id
    );
    if(existingCartItem){
        return cartItems.map(cartItems=>
            cartItems.id=== cartItemToAdd.id
            ?
            {...cartItems ,quantity:cartItems.quantity+1}
            :
            {
                cartItems
            }
            
            )
  }
  return[...cartItems,{...cartItemToAdd,quantity:1}]
};