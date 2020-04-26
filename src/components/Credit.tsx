import * as React from "react";

type Props = {} & React.HTMLProps<HTMLDivElement>;

const Credit: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <div
      style={{
        padding: 32,
        margin: "0 auto",
        width: "fit-content",
        display: "grid",
        gridGap: 8,
      }}
    >
      <div>
        Built in <a href="https://reactjs.com/">React</a>
      </div>
      <div>
        with <a href="https://statedesigner.com/">State Designer</a>
      </div>
      <div>
        by <a href="https://twitter.com/steveruizok">@steveruizok</a>
      </div>

      <div style={{ marginTop: 16 }}>
        ~{" "}
        <a href="https://github.com/steveruizok/tetris-react-state-designer">
          View Source
        </a>
      </div>
    </div>
  );
};

export default Credit;
