# quora-only-answers
Greasy Fork script that changes the filter drop-down in Quora questions from "All related (n)" to "Answers (n)", avoiding the annoying "related" questions/answers.

## Installation

1) Install a [Greasy Fork-compatible plugin](https://greasyfork.org/en) on your browser (my current favourite is [Violentmonkey](https://violentmonkey.github.io/)).
2) Add the script from the official [Greasy Fork page](https://greasyfork.org/en/scripts/3970-quora-only-answers).

## How it works

Quora doesn't identify its HTML elements with any classes or IDs, so the script uses the text of the filter drop-down to identify the filter drop-down. If Quora changes the text of the filter drop-down, the script will stop working.

## Limitations

The script won't work in non-English versions of Quora, because it uses the English text of the filter drop-down to identify the filter drop-down.

## Development/Contributing

If you want to change the plugin only to yourself, feel free to modify the JavaScript file directly. But if you want to contribute to the project, please use the TypeScript file and keep an eye on the generated JavaScript file (as it should be still human-readable).

Here is how I set up my environment (VSCode/macOS, but any editor and OS should work):

1) Check out this project (e.g.: `gh repo clone chesterbr/quora-only-answers`)
2) Install a Greasy Fork plugin on your browser and the local version of the script from the project (quora-only-answers.js) on it. I recommend [Violentmonkey](https://violentmonkey.github.io/) and its instructions for [installing from a local file][(https://violentmonkey.github.io/get-it/#local](https://violentmonkey.github.io/posts/how-to-edit-scripts-with-your-favorite-editor/#install-a-local-script)).
3) Install npm (e.g. `brew install node` on macOS)
4) Install TypeScript (e.g. `npm install -g typescript`)
5) On a VSCode terminal, run `tsc -w` so your changes to the TypeScript file are compiled automatically into the JavaScript one.
6) Optional: Add the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugin and configure it to run when files are saved.

## License

MIT License; see [LICENSE](LICENSE) for details.
