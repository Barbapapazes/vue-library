import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["./src/"],
  declaration: true,
  clean: true,
  externals: ["vue"],
});
