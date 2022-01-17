// COPYRIGHT JEFF KWOK

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface Test123Props {}

const SyledTest123 = styled.div`
  color: pink;
`;

export function Test123(props: Test123Props) {
  return (
    <SyledTest123>
      <h1>Welcome to Test123!</h1>
    </SyledTest123>
  );
}

export default Test123;
