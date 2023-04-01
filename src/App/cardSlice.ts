import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cardModel } from "../Models/cardModel";


let initialState = {};

// const cardSlice = createSlice({
//     name: "card",
//     initialState,
//     reducers: {
//         info: (state, action: PayloadAction<cardModel>) => {
//             const card = action.payload;
//             state = {card};
//             return state;
//         },
//         template: (state, action: PayloadAction<number>) => {
//             const template = action.payload;
//             console.log(template);
            
//             state = {...state, template};
//             return state;
//         },
        
//     }
// })

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
            // info: (state, action: PayloadAction<cardModel>) => {
            //     const card = action.payload;
            //     return {...state, card};
            //   },
        info: (state, action: PayloadAction<cardModel>) => {
            const card = action.payload;
                card["templateNum"] = +state
            state = card
            return state;
        },
            // template: (state, action: PayloadAction<number>) => {
            //     const template = action.payload;
            //     console.log({...state,template});
                
            //     return {...state, template}
            //   },
        template: (state, action: PayloadAction<number>) => {
            const template = action.payload;
            state = template;
            return state;
        },
    }
})

export const { info, template } = cardSlice.actions;

export default cardSlice.reducer;
