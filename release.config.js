const { buildQueries } = require("@testing-library/react");

module.exports = {
  branches: "main",
  respositoryUrl: "https://github.com/electronicbits/react-app-actions",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", label: "Build" },
          { path: "coverage.zip", label: "Coverage" },
        ],
      },
    ],
  ],
};
