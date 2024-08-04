// import { createTheme } from "@mui/material/styles";

// export const customPalette = {
//   mainBgColor: "#f0f0f0", // Very light grey
//   secondaryBgColor: "#e1e2e6", // Light grey 1
//   mainFontColor: "#4a4a4a", // Darker grey
//   secondaryFontColor: "#787775", // Dark grey
//   accentColor: "#c4b3a9", // Warm beige
//   highlightColor: "#b0a296", // Slightly darker beige
// };

// const theme = createTheme({
//   palette: {
//     customColors: customPalette,
//     background: {
//       default: customPalette.mainBgColor,
//       paper: customPalette.secondaryBgColor,
//     },
//     text: {
//       primary: customPalette.mainFontColor,
//       secondary: customPalette.secondaryFontColor,
//     },
//     primary: {
//       main: customPalette.accentColor,
//     },
//     secondary: {
//       main: customPalette.highlightColor,
//     },
//   },
//   typography: {
//     body1: {
//       color: customPalette.mainFontColor,
//     },
//     body2: {
//       color: customPalette.secondaryFontColor,
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           padding: "10px 30px",
//           backgroundColor: customPalette.mainBgColor,
//           color: customPalette.mainFontColor,
//           borderColor: "none",
//           boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add box-shadow here

//           "&:hover": {
//             backgroundColor: customPalette.mainFontColor,
//             color: customPalette.mainBgColor,
//             borderColor: "none",
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Adjusted box-shadow on hover
//           },
//         },
//       },
//     },
//   },
// });

// export default theme;


import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#f0f0f0", // Very light grey
      paper: "#f0f0f0", // Use the same color for paper background
    },
    text: {
      primary: "#4a4a4a", // Darker grey
      secondary: "#4a4a4a", // Use the same color for secondary text
    },
    primary: {
      main: "#4a4a4a", // Darker grey
    },
    secondary: {
      main: "#4a4a4a", // Darker grey
    },
    action: {
      // Using transparent version of second color for disabled and hover states
      disabled: "rgba(74, 74, 74, 0.5)", // Transparent second color
      hover: "rgba(74, 74, 74, 0.5)", // Transparent second color
    },
  },
  typography: {
    body1: {
      color: "#4a4a4a", // Darker grey
    },
    body2: {
      color: "#4a4a4a", // Darker grey
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 30px",
          backgroundColor: "#f0f0f0", // Very light grey
          color: "#4a4a4a", // Darker grey
          borderColor: "none",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add box-shadow here

          "&:hover": {
            backgroundColor: "#4a4a4a", // Darker grey
            color: "#f0f0f0", // Very light grey
            borderColor: "none",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Adjusted box-shadow on hover
          },
        },
      },
    },
  },
});

export default theme;
