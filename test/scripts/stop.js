/* eslint-disable */
const { execSync } = require("child_process");
const path = require("path");

const cwd = path.resolve(__dirname, ".");

const runCommand = function (cmd) {
  console.log(cmd);
  const ret = execSync(cmd, { cwd });
  console.log(ret.toString());
};

module.exports = function () {
  try {
    runCommand("bash stop.sh");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
