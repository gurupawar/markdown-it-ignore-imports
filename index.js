"use strict";

function ignoreImports(state, startLine, endLine, silent) {
  if (
    !state ||
    !Array.isArray(state.bMarks) ||
    !Array.isArray(state.tShift) ||
    !Array.isArray(state.eMarks)
  ) {
    throw new Error("Invalid state object");
  }

  if (
    typeof startLine !== "number" ||
    typeof endLine !== "number" ||
    typeof silent !== "boolean"
  ) {
    throw new Error("Invalid arguments");
  }

  let pos = state.bMarks[startLine] + state.tShift[startLine];
  if (typeof pos !== "number" || pos < 0 || pos >= state.src.length) {
    throw new Error("Invalid position calculation");
  }

  const max = state.eMarks[startLine];
  if (typeof max !== "number" || max < pos) {
    throw new Error("Invalid max position");
  }

  if (max - pos >= 6 && state.src.slice(pos, pos + 6) === "import") {
    if (silent) return true;

    state.line = startLine + 1;
    return true;
  }

  return false;
}

module.exports = function ignore_imports_plugin(md) {
  if (!md || typeof md.block.ruler.before !== "function") {
    throw new Error("Invalid markdown-it instance");
  }

  md.block.ruler.before("paragraph", "ignoreimports", ignoreImports, {
    alt: ["paragraph", "reference", "blockquote", "list"],
  });
};
