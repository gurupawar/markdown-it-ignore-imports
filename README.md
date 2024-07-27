# markdown-it-ignore-import

A Markdown-it plugin that allows you to ignore JavaScript import statements in MDX files.

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
