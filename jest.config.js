module.exports = {
  roots: ['./tests', './lambdas'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFiles: ['./resources/jest-env-vars.js']
};
