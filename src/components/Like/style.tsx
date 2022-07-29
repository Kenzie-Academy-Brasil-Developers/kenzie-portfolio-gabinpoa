import { styled } from "../../styles/stitches.config";

export const ButtonAnimation = styled("button", {
  border: "none",
  backgroundColor: "transparent",
  width: "35px",
  height: "35px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 30px",
  cursor: "pointer",
  ".animation": {
    pointerEvents: "none",
  },
});
