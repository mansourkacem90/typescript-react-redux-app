import { IToggleAgeAction } from '../components/pages/landing-component';
const initialState = {
  age: 20,
};
export const counter = (state = initialState, action: IToggleAgeAction) => {
  const newState = { ...state };

  switch (action.type) {
    case 'AGE_UP_ASYNC':
      newState.age += 1;
      break;

    case 'AGE_DOWN':
      newState.age -= 1;
      break;
  }
  return newState;
};
