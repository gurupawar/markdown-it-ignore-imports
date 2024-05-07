use strict";

// Function for Ignoring Inport statement in md/mdx files
function ignoreImports(state, startLine, endLine, silent) {
  let nextLine,
    lineText,
    pos = state.bMarks[startLine] + state.tShift[startLine],
    max = state.eMarks[startLine];

  if (state.src.substr(pos, 6) === "import") {
    state.line++;
    return true;
  }

  return false;
}

module.exports = function ignore_imports_plugin(md) {
  md.block.ruler.before("paragraph", "ignoreimports", ignoreImports);
};
