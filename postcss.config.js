module.exports = {
  plugins: {
    "postcss-mixins": {
      mixinsFiles: ["src/config/mixins.css"],
      // mixinsFiles: ["src/config/mixins/**/*.css"],
    },
    "postcss-preset-mantine": {},
    "postcss-nested": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    },
    autoprefixer: {},
    "postcss-flexbugs-fixes": {},
  },
};
