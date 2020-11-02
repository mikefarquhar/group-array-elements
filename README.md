# groupArrayElements
> Group the contents of an array into chunks of equal size.

This helper function attempts to group the elements of an array into N equally sized groups.
* If the array length does not divide equally by N the final group will contain the remainder.
* If N is greater than the array length the array will be grouped into single element groups.
* No empty groups will be returned from the function.

## Install Instructions
NPM/Yarn: add `"group-array-elements": "git://github.com/mikefarquhar/group-array-elements.git#main"`
to your dev dependencies.

Local: Copy the 'group-array-elements.js' file from the dist folder.

## Usage
Node/CommonJS:
``` javascript
const groupArrayElements = require('group-array-elements');

const elements = [1, 2, 3, 4, 5];
const groupedElements = groupArrayElements(elements, 3);
// groupedElements === [[1, 2], [3, 4], [5]];
```

ES modules:
``` javascript
import groupArrayElements from 'group-array-elements';

const elements = [1, 2, 3, 4, 5];
const groupedElements = groupArrayElements(elements, 3);
// groupedElements === [[1, 2], [3, 4], [5]];
```

Browser:
``` html
<script src="group-array-element.js"></script>
<script>
	const elements = [1, 2, 3, 4, 5];
	const groupedElements = groupArrayElements(elements, 3);
	// groupedElements === [[1, 2], [3, 4], [5]];
</script>
```

## For developers

Install dependencies before starting:
``` bash
npm install
```

The following scripts can be run from the command line:
``` bash
# Build the minified UMD library:
npm run build

#Run the test suite:
npm run test

# Lint the code (only checks for errors):
npm run lint

# Format files with Prettier:
npm run format

# Run the example in Node.
npm run example
```
