// COPYRIGHT JEFF KWOK

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface <%= className %>Props {}

const <%= className %> = styled.div`
  color: pink;
`;

export function <%= className %>(props: <%= className %>Props) {
  return (
    <<%= className %>>
      <h1>Welcome to <%= className %>!</h1>
    </<%= className %>>
  );
}

export default <%= className %>;