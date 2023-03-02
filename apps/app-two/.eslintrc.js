const path = require('path');

module.exports = {
  settings: {
    tailwindcss: {
      config: path.join(__dirname, "tailwind.config-two.js"),
    }
  }
};