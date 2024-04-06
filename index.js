"use strict";

function ignoreImports(state, startLine, endLine, silent) {
  var nextLine,
    token,
    lineText,
    pos = state.bMarks[startLine] + state.tShift[startLine],
    max = state.eMarks[startLine];

  if (
    pos >= max ||
    state.src.charCodeAt(pos) !== 0x69 /* i */ ||
    state.src.substr(pos, 6) !== "import"
  ) {
    return false;
  }

  if (silent) {
    return true;
  }

  nextLine = startLine + 1;
  while (nextLine < state.lineMax) {
    lineText = state.getLines(nextLine, nextLine + 1, 0, false); // Define lineText here
    if (lineText.trim().length === 0) break; // Stop at empty line
    nextLine++;
  }

  state.line = nextLine; // Update state.line to the next line

  return true;
}

module.exports = function ignore_imports_plugin(md) {
  md.block.ruler.before("paragraph", "ignoreimports", ignoreImports);
};
