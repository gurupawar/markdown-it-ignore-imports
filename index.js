// "use strict";

// function ignoreImports(state, startLine, endLine, silent) {
//   let pos = state.bMarks[startLine] + state.tShift[startLine];
//   const max = state.eMarks[startLine];

//   // Check if the line starts with "import"
//   if (max - pos >= 6 && state.src.slice(pos, pos + 6) === "import") {
//     if (silent) return true; // Don't run rule, just report match
//     state.line = startLine + 1;
//     return true;
//   }

//   return false;
// }

// module.exports = function ignore_imports_plugin(md) {
//   md.block.ruler.before("paragraph", "ignoreimports", ignoreImports);
// };

"use strict";

function ignoreImports(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  const max = state.eMarks[startLine];

  // Check if the line starts with "import"
  if (max - pos >= 6 && state.src.slice(pos, pos + 6) === "import") {
    if (silent) return true; // Don't run rule, just report match

    // Skip this line
    state.line = startLine + 1;
    return true;
  }

  return false;
}

module.exports = function ignore_imports_plugin(md) {
  md.block.ruler.before("paragraph", "ignoreimports", ignoreImports, {
    alt: ["paragraph", "reference", "blockquote", "list"],
  });
};
