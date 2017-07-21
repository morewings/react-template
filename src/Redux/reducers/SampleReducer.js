import {SAMPLE} from 'Redux/constants';

export default function(state = [], action) {
  switch (action.type) {
    case SAMPLE: {
      return [action.payload.data, ...state];
    }
    default: {
      return state;
    }
  }
}
