/* eslint-disable */
const { resolve } = require('path');
const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  displayName: 'test',
  testMatch: ["<rootDir>/test/**/*.test.ts"],
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
};