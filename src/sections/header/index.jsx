import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

import Resume from "../../components/ResumeButton";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const socials = [
  {
    image: "/icons/GitHub.svg",
    link: "https://github.com/wisdomI/ ",
  },
  {
    image: "/icons/EnvelopeSimple.svg",
    link: " https://mail.google.com/mail/u/0/#inbox?compose=new",
  },
  {
    image: "/icons/LinkedinLogo.svg",
    link: "https://www.linkedin.com/in/wisdom-iwunwa-6027a5209/ ",
  },
];

const Header = () => {
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        backdropFilter: "blur(10px)",
        width: "100%",
        height: "60px",
        position: "fixed",
        padding: "15px",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.05)",
            },

            //   flexWrap: "wrap",
          }}
        >
          {socials.map((e) => (
            <IconButton
              sx={{
                "&:hover": {
                  color: colors.green[100],
                },
              }}
              key={e.title}
              href={e.link}
              target="blank"
            >
              <img
                src={e.image}
                alt=""
                style={{
                  height: "20px",
                  width: "20px",
                  // "&:hover": {
                  //   backgroundColor: colors.green[100],
                  // },
                }}
              />
            </IconButton>
          ))}
        </Box>
        <Resume />
      </Box>
    </Box>
  );
};

export default Header;
