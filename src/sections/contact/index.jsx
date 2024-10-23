import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const contact = [
  {
    title: "Linkedin",
    image: "/icons/LinkedinLogo.svg",
    imageTwo: "/icons/ArrowUpRight.svg",
    link: "https://www.linkedin.com/in/wisdom-iwunwa-6027a5209/",
    id: "1",
  },
  {
    title: "Github",
    image: "/icons/GitHubLogo.svg",
    imageTwo: "/icons/ArrowUpRight.svg",
    link: "https://github.com/wisdomI/",
    id: "2",
  },
  {
    title: "Email",
    image: "/icons/EnvelopeSimple.svg",
    imageTwo: "/icons/ArrowUpRight.svg",
    link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    id: "3",
  },
];
const MotionBox = motion(Box);
const ContactSection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, for example, using an API to send email
    console.log("Form data:", formData);
  };

  return (
    <MotionBox
      // variants={fadeIn("up", 0.2)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{ once: false, amount: 0.7 }}
      id="contact"
      sx={{
        backgroundImage: 'url("./Background_Contacts.png")',
        backgroundSize: isMobile ? "contain" : "cover",
        backgroundRepeat: isMobile ? "repeat" : "no-repeat",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        padding: "50px 0",
      }}
    >
      {/* Section Header */}
      <MotionBox
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px", // Space between header and content
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: colors.yellow[100],
            marginBottom: "10px",
          }}
        >
          CONTACT
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: colors.green[100],
          }}
        >
          Reach Me
        </Typography>
      </MotionBox>

      {/* Contact Links and Form */}
      <MotionBox
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Stack vertically on mobile
          justifyContent: "space-around",
          alignItems: "flex-start",
          width: "100%",
          padding: isMobile ? "0 10px" : "0 50px",
          gap: isMobile ? "30px" : "50px", // Adjust gap for mobile vs desktop
        }}
      >
        {/* Social Buttons */}
        <MotionBox
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            width: isMobile ? "100%" : "40%", // Adjust width for mobile and desktop
          }}
        >
          {contact.map((e) => (
            <IconButton
              key={e.id}
              href={e.link}
              target="blank"
              sx={{
                height: "50px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "5px",
                background: `${colors.grey[300]}`,
                padding: "0 20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={e.image} alt={e.title} />
                <Typography variant="h6">{e.title}</Typography>
              </Box>
              <img src={e.imageTwo} alt={`${e.title} link`} />
            </IconButton>
          ))}
        </MotionBox>

        {/* Contact Form  */}
        {/* <MotionBox
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          sx={{
            width: isMobile ? "100%" : "50%", // Adjust width for mobile and desktop
            backgroundColor: colors.grey[200],
            // padding: "20px",
            borderRadius: "10px",
          }}
        > */}
        {/* <Typography
            variant="h5"
            sx={{
              color: colors.yellow[100],
              marginBottom: "20px",
            }}
          >
            Send me a message
          </Typography> */}
        {/* <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              label="Your Name"
              name="name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              sx={{ marginBottom: "15px" }}
            />
            <TextField
              label="Your Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              sx={{ marginBottom: "15px" }}
            />
            <TextField
              label="Your Message"
              name="message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              sx={{ marginBottom: "15px" }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                backgroundColor: colors.blue[100],
                "&:hover": {
                  backgroundColor: colors.blue[200],
                },
              }}
            >
              Send
            </Button>
          </form>
        </MotionBox> */}
      </MotionBox>
    </MotionBox>
  );
};

export default ContactSection;
