
const baseTheme = {
  space: [0, 2, 4, 8, 16, 32],
  fontSizes: [14, 16, 18, 24, 32],
  colors: {
    blue: "#07c",
    tomato: "tomato",
    purple: "purple"
  },
  radii: [0, 2, 4, 8]
};

const theme = {
  buttons: {
    primary: {
      color: "white",
      backgroundColor: baseTheme.colors.blue
    },
    secondary: {
      color: "white",
      backgroundColor: baseTheme.colors.purple
    },
    danger: {
      color: "white",
      backgroundColor: baseTheme.colors.tomato
    }
  },
  buttonSizes: {
    medium: {
      fontSize: baseTheme.fontSizes[2],
      padding: `8px 16px`,
      borderRadius: baseTheme.radii[2]
    },
    large: {
      fontSize: baseTheme.fontSizes[3],
      padding: `12px 24px`,
      borderRadius: baseTheme.radii[3]
    }
  }
};

export {theme};