# quora-only-answers
A browser add-on script that changes the filter drop-down in Quora questions from "All related (n)" to "Answers (n)", avoiding the annoying "related" questions/answers.

I have no relationship to Quora and do not represent them in any way. Heck, if I did, I'd certainly find whoever decided this would be a good idea (without a global switch to turn it off) and ask whether they ever used the goddamn website... seriously, it's annoying AF! 😡

After I published it I realized there are other scripts doing the same (silly me for not searching properly). But it was a good exercise on writing a Greasy Fork script using TypeScript, so I'll leave it here!

## Installation

1) Install a [Greasy Fork-compatible plugin](https://greasyfork.org/en) on your browser (my current favourite is [Violentmonkey](https://violentmonkey.github.io/)).
2) Add the script from the official [Greasy Fork page](https://greasyfork.org/en/scripts/456419-quora-only-answers).

## How it works

It is a Greasy Fork script that runs whenever a Quora question page is loaded, simulating the user action of changing the filter.

Quora doesn't identify its HTML elements with any classes or IDs, so the script uses the text of the filter drop-down to identify the filter drop-down. If Quora changes the text of the filter drop-down, the script will stop working.

## Limitations

The script won't work in non-English/non-Portuguese versions of Quora, because it uses the English or Portuguese text to identify the drop-down and the option to select. If you want me to support more languages you can pull request a code change, or open an issue informing how the menus are written (both singular and plural) for the desired language, and its main site URL. E.g., for the (already supported) Portuguese, it would be:

- Language: Portuguese
- Site: https://pt.quora.com
- All related (n): Todos Relacionados (n) (same for singular and plural)
- Answers (n): Resposta (1) / Respostas (n)

## Development/Contributing

If you want to change the plugin only to yourself, feel free to modify the JavaScript file directly. But if you want to contribute to the project, please use the TypeScript file and keep an eye on the generated JavaScript file (as it should be still human-readable).

Here is how I set up my environment (VSCode/macOS, but any editor and OS should work):

1) Check out this project (e.g.: `gh repo clone chesterbr/quora-only-answers`)
2) Install a Greasy Fork compatible extension/add-on on your browser and the local version of the script from the project (quora-only-answers.js) on it. I recommend [Violentmonkey](https://violentmonkey.github.io/).
3) Install npm (e.g. `brew install node` on macOS)
4) Install TypeScript (e.g. `npm install -g typescript`)
5) On a VSCode terminal, run `tsc -w` so your changes to the TypeScript file are compiled automatically into the JavaScript one.
6) Add the local version of the script (`quora-only-answers.js`) to the Greasy Fork compatible browser extension. Violentmonkey has detailed [installing from a local file](https://violentmonkey.github.io/posts/how-to-edit-scripts-with-your-favorite-editor/#install-a-local-script), which are useful in particular on Firefox (which doesn't allow installing scripts from local files by default). Here is a quick summary:
   - Install [http-server](https://github.com/indexzero/http-server#readme) (`npm install -g http-server`).
   - Run `http-server -c5` on another VSCode terminal.
   - Install the script from the URL: `http://localhost:8080/quora-only-answers.js` (don't forget to check "Track local file before this window is closed", see next step).
   - Keep the installation page open (so the script gets reloaded when you change it).
7) Optional: Add the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugin and configure it to run when files are saved.

## License

MIT License; see [LICENSE](LICENSE) for details.
