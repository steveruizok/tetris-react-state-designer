import * as React from "react";

type Props = {} & React.HTMLProps<HTMLDivElement>;

const Screen: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <div
      style={{
        backgroundColor: "var(--tetris-grey)",
        margin: "32px auto",
        padding: "40px 80px",
        width: "min-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
      }}
    >
      <div
        style={{
          height: "100%",
          width: "fit-content",
          border: "4px inset var(--tetris-lgrey)",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            width: 432,
            height: 480,
            backgroundColor: "var(--tetris-light)",
            display: "grid",
            gridTemplateColumns: "repeat(18, 1fr)",
            gridTemplateRows: "repeat(20, 1fr)",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Screen;
