import {
  Box,
  Card,
  CardContent,
  Pagination,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

import ProjectModal from "./projectsModal";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { tokens } from "../../theme";
import { useDialogModal } from "../../hooks/useDialougeModal";
import { useTheme } from "@emotion/react";

const projects = [
  {
    id: 6,
    title: "GREENSHIFT",
    description:
      "GreenShift is a platform that facilitates direct connections between producers and consumers, aiming to streamline interactions and promote a more efficient system. By addressing key challenges in the process, GreenShift supports a balanced and sustainable environment for all parties involved.",
    image: "greenshift.png",
    link: "https://frontend-ruddy-six-56.vercel.app/ ",
    modalDescription: " ",
    tag: [
      "icons/React.svg",
      "icons/devicon_materialui.svg",
      "icons/CSS.svg",
      "icons/HTML.svg",
      "icons/GitHub.svg",
      "icons/JavaScript.svg",
      "icons/Node.svg",
      "icons/react-router.svg",
    ],
  },
  {
    id: 1,
    title: "EMMY WALKA PORTFOLIO",
    description:
      "This portfolio showcases the work of Emmy Walka, an international NFT artist renowned for his diverse digital creations. Built with vanilla JavaScript, HTML, and CSS, the website features a visually engaging layout that highlights Emmy's artistic range and innovative approach to digital art. Visitors can explore his extensive collection of NFTs, providing insight into his creative process and artistic vision.",
    image: "emmy-walka.png",
    link: "https://www.emmywalka.com ",
    tag: [
      "icons/CSS.svg",
      "icons/HTML.svg",
      "/icons/GitHub.svg",
      "icons/JavaScript.svg",
    ],
  },
  {
    id: 4,
    title: "HEALTH MANAGEMENT SYSTEM",
    description:
      "VitalTrack is a comprehensive app designed to monitor the wellbeing of university students. It allows users to track their health metrics, book appointments with healthcare professionals, and receive dosage reminders for medications. By providing a user-friendly platform, VitalTrack empowers students to take charge of their health and wellbeing, ensuring they stay on top of their academic and personal lives.",
    image: "clinic-ms.png",
    link: " https://vital-track.vercel.app/dashboard/app",
    tag: [
      "icons/React.svg",
      "icons/devicon_materialui.svg",
      "icons/CSS.svg",
      "icons/GitHub.svg",
      "icons/JavaScript.svg",
      "icons/Node.svg",
      "icons/react-router.svg",
    ],
  },
  {
    id: 2,
    title: "TECH1M JUNIOR LEARNING PLATFORM",
    description:
      "TECH1M is a dynamic learning platform for children that focuses on technology and essential digital skills. Offering interactive courses and resources, it promotes creativity, critical thinking, and problem-solving. By providing an engaging environment, TECH1M empowers kids to explore STEM subjects and fosters a love for learning, preparing them for future opportunities in a tech-driven world.",
    image: "tech1m-jnr.png",
    link: " ",
    tag: [
      "icons/React.svg",
      "icons/devicon_materialui.svg",
      "icons/CSS.svg",
      "icons/HTML.svg",
      "icons/GitHub.svg",
      "icons/JavaScript.svg",
      "icons/Node.svg",
      "icons/react-router.svg",
    ],
  },
  {
    id: 7,
    title: "ENGINEER EMMANUEL PORTFOLIO",
    image: "EngEmmanuel.png",
    description:
      " Engineer Emmanuel's portfolio showcases his expertise as a mechanical engineer, highlighting his projects, skills, and accomplishments. Built with ReactJS, the portfolio features a sleek, user-friendly design that emphasizes his innovative engineering solutions and technical proficiency. Visitors can explore his work and insights, reflecting his commitment to excellence in mechanical engineering.",
    link: "https://emmanuel-nine.vercel.app/",
    tag: [
      "icons/React.svg",
      "icons/CSS.svg",
      "icons/GitHub.svg",
      "icons/react-router.svg",
    ],
  },
  {
    id: 8,
    title: "MY PORTFOLIO",
    image: "Newportfolio.png",
    description:
      " My Portfolio is a sleek, visually appealing website built with ReactJS and the MUI framework. Utilizing CSS Grid for layout, it showcases my skills, projects, and experiences in a user-friendly format. The portfolio effectively highlights my work and serves as a comprehensive representation of my professional journey.",
    link: "#",
    tag: [
      "icons/React.svg",
      "icons/CSS.svg",
      "icons/GitHub.svg",
      "icons/react-router.svg",
    ],
  },
  {
    id: 5,
    title: "CHUNK FILE",
    description:
      "The CHUNK CSV to Excel Converter is a tool developed during my internship with the Zuri program. This project efficiently transforms CHUNK CSV files into user-friendly Excel documents, streamlining data management and analysis. With its intuitive interface, the converter simplifies the process of handling large datasets, making it easier for users to access and manipulate their data effectively.",
    image: "",
    link: " ",
    tag: [
      "icons/CSS.svg",
      "icons/HTML.svg",
      "icons/GitHub.svg",
      "icons/JavaScript.svg",
    ],
  },
  {
    id: 3,
    title: "MY EX PORTFOLIO",
    image: "portfolio-image.png",
    description:
      "My Former Portfolio is a visually appealing website built with ReactJS and the MUI framework. Utilizing CSS Grid for layout, it showcases my skills, projects, and experiences in a user-friendly format, effectively representing my professional journey.",
    link: "https://emmanuelodefadehan-mu.vercel.app/",
    tag: [
      "icons/React.svg",
      "icons/devicon_materialui.svg",
      "icons/CSS.svg",
      "icons/GitHub.svg",
      "icons/react-router.svg",
    ],
  },
];

const ITEMS_PER_PAGE = 3;

const MotionBox = motion(Box);
const Projects = () => {
  const [page, setPage] = useState(1);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [DialogComponent, openDialog] = useDialogModal(ProjectModal);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLearnMore = (project) => {
    setSelectedProject(project);
    openDialog();
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedProjects = projects.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <MotionBox
      id="projects"
      // variants={fadeIn("up", 0.2)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{ once: false, amount: 0.7 }}
      sx={{
        padding: isMobile ? "50px 0" : "100px 0",
        backgroundColor: `${colors.grey[100]}`,
        width: "100%",
        display: "flex",
        gap: "25px",
        flexDirection: "column",
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
          gutterBottom
          sx={{
            color: colors.yellow[100],
          }}
        >
          PROJECTS
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: colors.green[100],
          }}
        >
          A list of featured projects
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {paginatedProjects.map((project, index) => (
            <MotionBox
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              // variants={fadeIn("right", 0.1)}
              // initial="hidden"
              // whileInView={"show"}
              // viewport={{ once: true, amount: 0.7 }}
            >
              <Card
                sx={{
                  borderRadius: "25px",
                }}
              >
                <CardContent
                  sx={{
                    height: isMobile ? "500px" : "420px",
                    width: isMobile ? "250px" : "350px",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      height: "150px",
                      width: isMobile ? "200px" : "250px",
                      borderRadius: "15px",
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      color: colors.blue[100],
                      fontWeight: "900",
                      padding: "15px 0",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: colors.blue[100], cursor: "pointer" }}
                    onClick={() => handleLearnMore(project)} // Handle Learn More click
                  >
                    Learn More...
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          ))}
        </Box>
        <Pagination
          count={Math.ceil(projects.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={handleChange}
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        />
        {/* Render the modal */}
        <DialogComponent project={selectedProject} />
      </MotionBox>
    </MotionBox>
  );
};

export default Projects;
