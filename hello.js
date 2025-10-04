#!/usr/bin/env node

function hello() {
    return "Hello World from JavaScript!";
}

function main() {
    console.log(hello());
    console.log("This is a simple Hello World program.");
}

if (require.main === module) {
    main();
}

module.exports = { hello };
