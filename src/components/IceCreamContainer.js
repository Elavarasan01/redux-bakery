import React, { useReducer } from 'react';

const initialState = {
  numOfIceCreams: 20
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'BUY_ICE_CREAM':
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };
    default:
      return state;
  }
};

function IceCreamContainer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Number of Ice creams: {state.numOfIceCreams}</h2>
      <button onClick={() => dispatch({ type: 'BUY_ICE_CREAM' })} style={{padding:"5px",border:"none",background:"skyblue",color:"#fff"}}>
        Buy Ice cream
      </button>
    </div>
  );
}

export default IceCreamContainer;