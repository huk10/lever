/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
