/* eslint-disable react/display-name */

import { forwardRef } from 'react';

const ComponentWithForwardRef = forwardRef((props,ref) => {
  return <span ref={ref}>I am ComponentWithForwardRef</span>;
});

export default ComponentWithForwardRef;
