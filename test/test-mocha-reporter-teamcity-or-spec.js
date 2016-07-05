/*global it, describe */
import chai from "chai"
import factory from "../src/factory"
import mainExport from "../src/mocha-reporter-teamcity-or-spec"
import teamcityReporter from "mocha-teamcity-reporter"
import specReporter from "mocha-better-spec-reporter"

const expect = chai.expect

describe("factory", function () {
  it("should return spec reporter when TEAMCITY_VERSION is not set", function () {
    const reporter = factory({})
    expect(reporter).to.equal(specReporter)
  })
  it("should return teamcity reporter when TEAMCITY_VERSION is set", function () {
    const reporter = factory({TEAMCITY_VERSION: "1.0.0"})
    expect(reporter).to.equal(teamcityReporter)
  })
})

describe("main export", function () {
  it("should be teamcity reporter or spec reporter", function () {
    expect(mainExport).to.be.oneOf([teamcityReporter, specReporter])
  })
})
