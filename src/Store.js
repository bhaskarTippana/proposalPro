import {createStore} from "redux";



const intialState = {
    selectedTab : "1",
};


const storeReducer = (state = intialState , action ) =>{
    switch (action.type) {
        case "UPDATE_SELECTED_TAB":
          return {
            ...state,
            selectedTab: action.payload, // Update the selected tab in the state
          };
        default:
          return state;
      }

};

const Store  = createStore(storeReducer);

export default Store;