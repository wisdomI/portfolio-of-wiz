import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

import React from "react";

const ProjectModal = ({ open, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{project.title}</DialogTitle>
      <DialogContent>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "auto",
            marginBottom: "20px",
          }}
        />
        <Typography variant="body1">{project.description}</Typography>
        <Typography
          variant="body2"
          sx={{ marginTop: "10px", color: "blue", cursor: "pointer" }}
          onClick={() => window.open(project.link, "_blank")}
        >
          View Project
        </Typography>

        <Box
          sx={{
            display: "flex",
            mt: "10px",
          }}
        >
          <Typography>Tools:</Typography>
          {/* <img
            src={project.tag}
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "20px",
            }}
          /> */}
          <Box className="tags">
            {project.tag.map((tagImage, index) => (
              <img
                key={index}
                src={tagImage}
                alt="Tag"
                className="tag-icon"
                style={{ height: "20px", width: "20px" }}
              />
            ))}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
