import { Button } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const HireMe = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <a
      href="https://mail.google.com/mail/u/0/#inbox?compose=new"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        sx={{
          position: "fixed",

          bottom: 50,
          right: -35,

          height: "30px",
          width: "100px",
          borderRadius: "0",
          transform: "rotate(-90deg)",

          // backgroundColor: "transparent",
          // border: `2px solid ${colors.green[100]}`,
          fontWeight: 500,
          "&:hover": {
            backgroundColor: colors.green[100],
            color: colors.grey[500],
          },
        }}
      >
        Hire Me
      </Button>
    </a>
  );
};

export default HireMe;
