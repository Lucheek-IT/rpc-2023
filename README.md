# RPC 2023 Website
This site is built with [VuePress](https://v2.vuepress.vuejs.org/) to quickly create a professional, mobile-friendly website. Content is written in [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) for simplicity, but you can do HTML for more complicated formatting. Custom CSS and interactive Vue components can be included in pages too, for really special pages.

## Editing Stuff
It's easy to edit the content right here on GitHub. The content lives in the [`website`](./website) directory. 

If you're adding new pages, they need to be included in the [config file](./website/.vuepress/config.ts) to show up on the navigation bar. It's a Javascript file, so it's a bit annoying.

## Hosting
GitHub hosts the website via GitHub Pages. It's a free service, and the `rollypollycon.com` domain is pointed there. 

There's an [action](./.github/workflows/publish.yml) that runs the command and deploys it on GitHub Pages. This means you can edit some stuff right here on Github and it'll be published to the site about a minute later.

The action runs a command to turn everything into a static HTML site.