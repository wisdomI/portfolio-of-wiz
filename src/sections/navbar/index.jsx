import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

// Animation variants
const logoAnimationVariants = {
  animate: {
    scale: [0.8, 0.9, 0.9, 0.8],
    rotate: [0, 45, 360, 0],
    borderRadius: ["10%", "10%", "50%", "10%"],
  },
};

const MotionBox = motion(Box);

const navItems = [
  { id: 1, label: "About", href: "#hero" },
  { id: 2, label: "Projects", href: "#projects" },
  { id: 3, label: "Services", href: "#services" },
  { id: 4, label: "Testimonial", href: "#testimonial" },
  { id: 5, label: "Contact", href: "#contact" },
];

// NavItem component
const NavItem = ({ item, isActive, onClick, colors }) => (
  <a
    href={item.href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }}
    style={{ textDecoration: "none" }}
  >
    <Box
      sx={{
        height: "80px",
        width: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // padding: "50px",
        cursor: "pointer",
        borderRight: isActive ? `2px solid ${colors.green[100]}` : "none",
        backgroundColor: isActive ? colors.grey[100] : "transparent",
        transition: "background-color 0.2s ease",
        "&:hover": {
          backgroundColor: colors.grey[100],
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          transform: "rotate(90deg)",
          color: isActive ? colors.green[100] : colors.grey[400],
          transition: "color 0.2s ease",
        }}
      >
        {item.label}
      </Typography>
    </Box>
  </a>
);

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [activeSection, setActiveSection] = useState(1);
  const observerRef = useRef(null);

  useEffect(() => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const navItem = navItems.find(
              (item) => item.href === `#${sectionId}`
            );
            if (navItem) {
              setActiveSection(navItem.id);
              // Update URL hash without scrolling
              window.history.replaceState(null, null, navItem.href);
            }
          }
        });
      },
      {
        // Adjusted threshold for better detection
        threshold: [0.2, 0.8],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    // Observe all sections
    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) {
        observerRef.current.observe(section);
      }
    });

    // Set initial active section based on URL hash
    const hash = window.location.hash;
    if (hash) {
      const navItem = navItems.find((item) => item.href === hash);
      if (navItem) {
        setActiveSection(navItem.id);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        height: "100vh",
        padding: "10px 0",
        display: "flex",
        flexDirection: "column",
        gap: "100px",
        alignItems: "center",
        backgroundColor: colors.grey[900],
      }}
    >
      {/* Logo section */}
      <MotionBox
        sx={{
          height: "35px",
          width: "35px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
        animate={logoAnimationVariants.animate}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <img
          src="/icons/WIZLOGO.svg"
          alt="WIZLOGO"
          style={{
            height: "25px",
            width: "25px",
          }}
        />
      </MotionBox>

      {/* Navigation items */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            isActive={activeSection === item.id}
            onClick={() => handleNavClick(item.id)}
            colors={colors}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
