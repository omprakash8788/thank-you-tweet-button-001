import type { Config } from "jest";

const config: Config = {
testEnvironment: "jsdom",
transform: {
"^.+\\.ts?$": "ts-jest",
},
};
export default config;
