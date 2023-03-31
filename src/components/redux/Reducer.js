import * as actionTypes from "./ActionTypes"


const initialState={
    count:0,
    employees:[
        {
        name: 'jhon',
        age: '23',
        email: 'a@a'
        },
        {
        name: 'doe',
        age: '24',
        email: 'b@a' 
        }
        ]
    // cost:0
}
export const reducer=(state= initialState ,action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            return{
                ...state,
                count:state.count+1
            }
        case actionTypes.DECREMENT:
            if ( state.count <= 0){
                return {
                    count:state.count=0
                }
            }
            return{
                ...state,
                count:state.count-1
            }
        case actionTypes.ADDPOST:
            return null
        case actionTypes.RESET:
            return{
                ...state,
                count:state.count=0
            }
        // case actionTypes.COST:
        //     return{
        //         ...state,
        //         cost:state.cost+19
        //     }
        default:
            return state
    }
}