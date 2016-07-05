import teamcityReporter from "mocha-teamcity-reporter"
import specReporter from "mocha-better-spec-reporter"

export default function (env) {
  return env.TEAMCITY_VERSION ? teamcityReporter : specReporter
}
