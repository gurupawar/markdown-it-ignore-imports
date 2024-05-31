"use strict";

function ignoreImports(state, startLine, endLine, silent) {
  let nextLine,
    lineText,
    pos = state.bMarks[startLine] + state.tShift[startLine],
    max = state.eMarks[startLine];

  // Check if the line starts with "import"
  if (state.src.substr(pos, 6) === "import") {
    // if (!silent) {
    //   console.log("Removed import line:", state.src.slice(pos, max));
    // }
    // Skip the line
    state.line++;
    return true;
  }

  return false;
}

module.exports = function ignore_imports_plugin(md) {
  md.block.ruler.before("paragraph", "ignoreimports", ignoreImports);
};



"use strict";

const removeComponentPlugin = (md) => {
  md.core.ruler.push("remove_component", function (state) {
    // Loop through tokens and remove the component
    for (let i = state.tokens.length - 1; i >= 0; i--) {
      const token = state.tokens[i];

      // Check if the token is an inline HTML block containing the component
      if (
        token.type === "inline" &&
        (token.content.includes("<AccordionForFAQ") ||
          token.content.includes("<CardComp"))
      ) {
        state.tokens.splice(i, 1);
      }
    }
  });
};

module.exports = function ignore_imports_and_custom_tags_plugin(md) {
  return removeComponentPlugin(md);
};
