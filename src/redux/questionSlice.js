import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "question",
  initialState: {
    rawValue: {},
    value: {},
    score: 0,
    wrongAnswers: [],
  },
  reducers: {
    handleClick: (state, action) => {
      // console.log("the id is ", action.payload.id);
      // console.log("and user think is : ", action.payload.isFake);
      // console.log("answer is : ", state.value[action.payload.id].isFake );
      // console.log(state.value[action.payload.id]);

      if (action.payload.isFake === state.value[action.payload.id].isFake) {
        // Correct answer
        state.score += 1;
      } else {
        //wrong answer - make array for later
        state.wrongAnswers = [
          ...state.wrongAnswers,
          state.value[action.payload.id].a,
        ];
      }
      //in any case:
      state.currentQ += 1;
    },
    newGame: (state) => {
      state.score = 0;
      state.wrongAnswers = [];
      state.value = getNewList(10, state.rawValue.length, state.rawValue);
    },
    setRaw: (state, action) => {
      state.rawValue = action.payload;
    },
  },
});

const getNewList = (length, max, val) => {
  let tempArr = [];
  for (let i = 0; i < length; i++) {
    let tempNum = Math.floor(Math.random() * max);
    if (tempArr.includes(tempNum)) {
      i--;
    } else {
      tempArr.push(tempNum);
    }
  }
  // console.log(tempArr)
  let newList = [];
  tempArr.forEach((item) => newList.push(val[item]));
  return newList;
};

export const { handleClick, newGame, setRaw } = questionSlice.actions;
export default questionSlice.reducer;
