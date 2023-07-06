export const initialState = {
    basket: [],
};
const reducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

            case 'Remove_From_Basket' :
                console.log('item id',action.id);
                
                    const index=state.basket.findIndex(i=>i.id===action.id);
                  
                  
                    let newBasket=[...state.basket];
                    newBasket.splice(index,1);
                    return{
                        ...state,
                        basket:newBasket,
                    }
                    

                    
               
            
            
        default:
            return state;
    }
};

export default reducer;