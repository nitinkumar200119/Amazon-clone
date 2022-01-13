export const initialState={
    basket:[],
    user:null,
};

export const getbasketTotal = (basket) =>
basket?.reduce((amount , item)=> item.price + amount,0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        case 'ADD_TO_BASKET':
            // logic for adding iten ib basket 
            return { 
                ...state ,
                basket:[...state.basket,action.item],
            };
        case 'REMOVE_FROM_BASKET':
            // we clone the basket 
            let newBasket=[...state.basket];

            // we check to see if product exist 
            const index=state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index>=0){
                // item exist in basket, remove it... 
                newBasket.splice(index ,1);
            }else{
                console.warn(
                    `cant remove product(id:${action.id}) as its njot found`
                );
            }
            // logic for removing item from basket 
            return {...state,basket:newBasket};
        default:
            return state;
        
    }
};

export default reducer;