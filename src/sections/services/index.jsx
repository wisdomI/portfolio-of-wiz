import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";

import React from "react";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const MotionBox = motion(Box);

const services = [
  {
    id: 1,
    title: "Responsive Web App Development",
    image: "/icons/Devices.svg",
    description: "Fullstack Web-App and Website developement.",
  },
  {
    id: 2,
    title: "Web Design",
    image: "/icons/Devices.svg",
    description:
      "Optimizing tools like Figma and Adobe XD, I ideate and bring client's dream app to life.",
  },
  {
    id: 3,
    title: "Web App Project Management",
    image: "/icons/HardDrives.svg",
    description: "I manage the process of web app development. ",
  },
  {
    id: 4,
    title: "Web App Maintenance",
    image: "/icons/HardDrives.svg",
    description: "I manage the process of web app development. ",
  },
];

const Services = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <MotionBox
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      id="services"
      sx={{
        padding: isMobile ? "50px 0" : "120px 0",
        backgroundColor: `${colors.grey[200]}`,
        width: "100%",
        gap: "25px ",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MotionBox
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        // viewport={{ once: false, amount: 0.7 }}
      >
        <Typography
          variant="h4"
          sx={{
            color: colors.yellow[100],
          }}
        >
          MY SERVICES
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: colors.green[100],
          }}
        >
          How Can I help Your Business?
        </Typography>
        <MotionBox
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          // viewport={{ once: false, amount: 0.9 }}
          sx={{
            gap: "15px ",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {services.map((services, index) => {
            return (
              <Card
                key={index}
                sx={{
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: isMobile ? "250px" : "150px",
                  backgroundColor: "transparent",
                  border: `1px solid ${colors.grey[300]}`,
                  width: isMobile ? "250px" : "300px",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: isMobile ? "center" : "flex-start",
                    alignItems: isMobile ? "center" : "flex-start",
                  }}
                >
                  <img
                    src={services.image}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "15px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: colors.grey[500],
                      fontWeight: "900",
                      padding: "15px 0",
                    }}
                  >
                    {services.title}
                  </Typography>
                  <Typography variant="body2">
                    {services.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </MotionBox>
      </MotionBox>
    </MotionBox>
  );
};

export default Services;
