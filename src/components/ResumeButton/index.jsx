import { Button } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const Resume = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <a href="WISDOM-CV.pdf" target="_blank" rel="noopener noreferrer">
      <Button
        sx={{
          height: "30px",
          width: "70px",
          borderRadius: "5px",
          backgroundColor: "transparent",
          border: `2px solid ${colors.green[100]}`,
          fontWeight: 500,
          color: colors.grey[600],
          "&:hover": {
            backgroundColor: colors.green[100],
            color: colors.grey[500],
          },
        }}
      >
        Resume
      </Button>
    </a>
  );
};

export default Resume;
