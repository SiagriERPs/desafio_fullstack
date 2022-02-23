const style = {
  body: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },

  card: {
    backgroundColor: "transparent",
    marginRight: "2em",
  },

  content: {
    height: "5em",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },

  title: {
    color: "white",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box" /* fallback */,
    lineClamp: 3 /* number of lines to show */,
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
  },

  actions: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "space-between",
  },

  actionsLabel: {
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },

  actionsIcon: {
    color: "white",
  },
};

export default style;
