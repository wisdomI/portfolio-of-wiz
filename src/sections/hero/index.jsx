import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";

import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import React from "react";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const socials = [
  { title: "Github", image: "/icons/GitHub.svg", link: " " },
  { title: "HTML", image: "/icons/HTML.svg" },
  { title: "CSS", image: "/icons/CSS.svg" },
  { title: "Node", image: "/icons/Node.svg" },
  { title: "React", image: "/icons/React.svg" },
  { title: "Javascript", image: "/icons/JavaScript.svg" },
  { title: "MUI", image: "/icons/devicon_materialui.svg" },
  { title: "Tailwind", image: "/icons/devicon_tailwindcss.svg" },
  { title: "Typescript", image: "/icons/devicon_typescript.svg" },
  { title: "Nextjs", image: "/icons/skill-icons_nextjs-light.svg" },
];

const MotionBox = motion(Box);
const TypoBox = motion(Typography);

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const avatarVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const staggerVariant = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const HeroSection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MotionBox
      id="hero"
      variants={staggerVariant}
      initial="hidden"
      animate="visible"
      sx={{
        backgroundImage: 'url("./Background_intro.png")',
        // backgroundImage: 'url("./Background_intro.png")',
        backgroundSize: isMobile ? "contain" : "cover",
        backgroundRepeat: isMobile ? "repeat" : "no-repeat",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: isMobile ? "column" : "row", // Reversed for desktop
        gap: isMobile ? "30px" : "80px",
        padding: isMobile ? "80px 20px 0px 20px" : " 150px 100px 0px 100px",
      }}
    >
      {/* Text Content */}
      <MotionBox
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "flex-start", // Left-align for desktop, center for mobile
          gap: 1,
          width: isMobile ? "100%" : "50%",
        }}
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        {/* Greeting */}
        <TypoBox variant={isMobile ? "h6" : "h2"} sx={{ textAlign: "left" }}>
          Hello World! I am{" "}
          <span
            style={{
              color: `${colors.green[100]}`,
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            {" "}
            Wisdom Iwunwa{" "}
          </span>
          {/* , and I am a */}
        </TypoBox>

        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            color: `${colors.yellow[100]}`,
            // fontWeight: "bold",
          }}
        >
          Frontend Developer
        </Typography>

        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{
            width: isMobile ? "100%" : "70%",
            marginTop: "20px",
            textAlign: "left",
          }}
        >
          Hi, I'm Wisdom Iwunwa, a frontend developer with a passion for
          crafting dynamic and visually engaging web experiences. With a strong
          foundation in React, MUI, and Framer Motion, I specialize in building
          intuitive user interfaces and seamless interactions. From responsive
          designs to API integrations, I enjoy bringing concepts to life through
          code. I am proficient in tools like Next.js and Tailwind CSS, and I'm
          continuously refining my skills by tackling complex projects that
          require advanced theming, state management, and custom animations.
          Let's create something impactful together!
        </Typography>

        {/* Social Tools */}
        <MotionBox
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: colors.green[100],
              // fontWeight: "bold",
            }}
          >
            My Tool Box
          </Typography>

          <MotionBox
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {socials.map((e) => (
              <IconButton key={e.title}>
                <img
                  src={e.image}
                  alt={e.title}
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                />
              </IconButton>
            ))}
          </MotionBox>
        </MotionBox>

        {/* Scroll Down Icon */}
        {/* <Box mt={8}>
          <ExpandCircleDownOutlinedIcon
            sx={{
              height: "30px",
              width: "30px",
            }}
          />
        </Box> */}
      </MotionBox>

      {/* Avatar Image */}
      <MotionBox
        sx={{
          width: isMobile ? "100%" : "auto",
          height: isMobile ? "100%" : "auto",
          // borderRadius: "50%",
          // border: `5px solid ${colors.red[100]}`,
          // padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        variants={avatarVariant}
      >
        <img
          src="profilephoto.png"
          alt="avatar"
          style={{
            height: "100%",
            width: "100%",
            // borderRadius: "50%",
          }}
        />
      </MotionBox>
    </MotionBox>
  );
};

export default HeroSection;
