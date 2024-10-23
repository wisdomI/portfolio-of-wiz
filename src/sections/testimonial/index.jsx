import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const testimonials = [
  {
    id: 1,
    name: "Susan Alphonsus",
    feedback:
      "Working with Wisdom was an absolute pleasure. His attention to detail and the creativity he brought to the project were unmatched.",
    role: "CEO, GreenShift",
    // image: "john-doe.png",
  },
  {
    id: 2,
    name: "Oluwadara Ajao",
    feedback:
      "Wisdom’s ability to solve complex problems and meet deadlines made our project a huge success. I highly recommend him!",
    role: "CTO, GreenShift",
    // image: "jane-smith.png",
  },
  {
    id: 3,
    name: "Emmy Walka",
    feedback:
      "A highly skilled developer! Wisdom was able to bring our vision to life with his exceptional frontend skills.",
    role: "CEO, WalkaArts",
    // image: "mike-johnson.png",
  },
];

const MotionBox = motion(Box);

const Testimonial = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MotionBox
      id="testimonial"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.1 }}
      sx={{
        padding: isMobile ? "30px 10px" : "100px 0", // Reduced padding for mobile
        backgroundColor: `${colors.grey[100]}`,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: colors.yellow[100],
        }}
      >
        TESTIMONIALS
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: colors.green[100],
        }}
      >
        Hear what clients have to say about my work
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px", // Reduce gap for mobile
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            sx={{
              width: isMobile ? "90%" : "300px", // Ensure width is responsive
              maxWidth: "300px",
              borderRadius: "20px",
            }}
          >
            <CardContent
              sx={{
                padding: "20px",
                textAlign: "center", // Center content
              }}
            >
              {/* <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  width: "100%", // Make image responsive
                  maxWidth: isMobile ? "180px" : "220px",
                  height: "auto",
                  borderRadius: "10px",
                }}
              /> */}
              <Typography
                variant="h5"
                sx={{
                  color: colors.blue[100],
                  fontWeight: "900",
                  padding: "15px 0",
                }}
              >
                {testimonial.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontStyle: "italic",
                  paddingBottom: "10px",
                }}
              >
                {`"${testimonial.feedback}"`}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: colors.blue[100],
                  fontWeight: "bold",
                }}
              >
                {testimonial.role}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </MotionBox>
  );
};

export default Testimonial;
