import wrapAsm from "./yoga/javascript/src_js/wrapAsm.js";
import yoga from "./tmp/yoga-asm.mjs";

export default function () {
  return wrapAsm(yoga());
}
