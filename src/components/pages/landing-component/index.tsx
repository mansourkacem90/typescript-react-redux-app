import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';

declare interface LandingComponentProps {
  onAgeUp?: () => void;
  onAgeDown?: () => void;
  age?: number;
}
const LandingComponent = ({
  onAgeUp,
  onAgeDown,
  age,
}: LandingComponentProps): React.ReactElement => {
  return (
    <div>
      <h1>hello here is landing component</h1>
      <Button variant="secondary" onClick={onAgeUp}>
        +
      </Button>
      <Button variant="secondary" onClick={onAgeDown}>
        -
      </Button>
      <div>
        Age : <h1>{age}</h1>
      </div>
    </div>
  );
};
interface MapState {
  counter: {
    age: number;
  };
}
export interface IToggleAgeAction {
  type: string;
}
const mapStateToProps = ({ counter: { age } }: MapState) => {
  return {
    age,
  };
};
const mapDispatchToProps = (dispatch: Dispatch<IToggleAgeAction>) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP' }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN' }),
  };
};
const LazyLandingComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingComponent);
export default LazyLandingComponent;
