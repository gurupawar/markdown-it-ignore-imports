# markdown-it-ignore-import

A Markdown-it plugin to ignore import statements in Markdown files. This plugin filters out lines that start with `import`, allowing you to clean up Markdown content where import statements are not needed.

## Install

```
npm install markdown-it-ignore-imports
```

## Usage

```
// ESM
import MarkdownIt from "markdown-it";
import ignoreImportsPlugin from "markdown-it-ignore-imports";

const md = new MarkdownIt().use(ignoreImportsPlugin);


// CommonJS
const MarkdownIt = require("markdown-it");
const ignoreImportsPlugin = require("markdown-it-ignore-imports");

const md = new MarkdownIt().use(ignoreImportsPlugin);
```

## Example

```
# Example Markdown

Some introductory text.

import SomeModule from 'some-module';

More text here.

import AnotherModule from 'another-module';
```

## Rendered HTML Output

```
<h1>Example Markdown</h1>
<p>Some introductory text.</p>
<p>More text here.</p>
```
