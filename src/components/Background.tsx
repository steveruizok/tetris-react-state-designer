import * as React from "react";

type Props = {} & React.HTMLProps<HTMLDivElement>;

const Background: React.FC<Props> = ({ children, ...rest }) => {
  return <div>{children}</div>;
};

export default Background;
