export const SET_WORD = "SETWORD";
export const SET_CHAR = "SETCHAR";
export const TIMER_DECREMENT = "TIMERDECREMENT";
export const APPEND_TYPED_HISTORY = "APPENDTYPEDHISTORY";
export const TIMER_SET = "TIMERSET";
export const TIMERID_SET = "TIMERIDSET";
export const PREV_WORD = "PREVWORD";
export const SET_WORDLIST = "SETWORDLIST";
export const SET_TIME = "SETTIME";
export const SET_REF = "SETREF";
export const SET_CARET_REF = "SETCARETREF";
export const SET_TYPE = "SETTYPE";

// Time Actions
export const timerDecrement = () => ({ type: TIMER_DECREMENT });
export const timerSet = (payload) => ({ type: TIMER_SET, payload });
export const setTimerId = (payload) => ({
  type: TIMERID_SET,
  payload,
});

// Word Actions
export const setWord = (payload) => ({ type: SET_WORD, payload });
export const setChar = (payload) => ({ type: SET_CHAR, payload });
export const setTypedWord = (payload) => ({ type: SET_CHAR, payload });
export const appendTypedHistory = () => ({
  type: APPEND_TYPED_HISTORY,
});
export const backtrackWord = (payload) => ({
  type: PREV_WORD,
  payload,
});
export const setWordList = (payload) => ({
  type: SET_WORDLIST,
  payload,
});
export const setRef = (payload) => ({
  type: SET_REF,
  payload,
});
export const setCaretRef = (payload) => ({
  type: SET_CARET_REF,
  payload,
});

// Prefrences Actions
export const setTime = (payload) => ({ type: SET_TIME, payload });
export const setType = (payload) => ({
  type: SET_TYPE,
  payload,
});
