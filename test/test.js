// For test only
const md = require("markdown-it")();
const ignore_imports_plugin = require("../index.js");

md.use(ignore_imports_plugin);

const markdownString = `
# Heading

Some introductory text.

import SomeModule from 'some-module';

Some more content.

import AnotherModule from 'another-module';

import { MyComponent } from './MyComponent';

End of content.
`;

const htmlString = md.render(markdownString);
console.log(htmlString);
