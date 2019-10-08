
const base = {
  space: [0, 2, 4, 8, 16, 32],
  fontSizes: [14, 16, 18, 24, 32],
  colors: [
    "#56d9f6",
    "#00b3e3",
    "#aaccd4",
    "#7d8896",
    "#596677",
    "#b3becc"
  ]
};

const theme = {
  buttons: {
    primary: {
      color: "white",
      backgroundColor: base.colors[1],
      border: `1px solid ${base.colors[1]}`,
      "hover": {
        backgroundColor: base.colors[0],
        color: "#fff"
      }
    },
    secondary: {
      color: base.colors[1],
      backgroundColor: "white",
      border: `1px solid ${base.colors[1]}`,
      "hover": {
        backgroundColor: base.colors[0],
        color: "#fff"
      }
    }
  }
};

export {theme};