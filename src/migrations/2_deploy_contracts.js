/* global artifacts */
const GradBVA = artifacts.require("GradBVA");

module.exports = function (deployer) {
  deployer.deploy(GradBVA);
};
