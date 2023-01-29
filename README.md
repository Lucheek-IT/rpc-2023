# RPC 2023 Website
*This is an unofficial proof-of-concept and is **not affiliated** with RPC.*

## Proposal
> Does anybdoy want to help me build a website for RPC?
> 
> I have the text and stuff but its like, I don't want to figure out layout/look/coding.

I am not much of a web designer, but I can use [my favorite hammer](https://v2.vuepress.vuejs.org/) to give you something that looks professional, help you fill it out with the content, and publish the site.

This proof-of-concept site is in fact already published -- please have a look: https://nie7321.github.io/rpc-2023

## Editing Stuff
It's easy to edit the content right here on github. The content lives in the [`website`](./website) directory. 

If you're adding new pages, they need to be included in the [config file](./website/.vuepress/config.ts) to show up on the navigation bar. It's a Javascript file so it's a bit annoying!

## Hosting
There's a command that runs to turn everything into a static HTML site.

Github can host the website via GitHub Pages. It's a free service that you can put your own domain on (so `rollypolly.party` or a subdomain like `rollypolly.lucheek.com`).

There's an [action](./.github/workflows/publish.yml) that runs the command and delpoyed it on GitHub Pages. This can give you a very pleasant workflow: edit some stuff right here on Github and it'll be published to the site about a minute later.

Alternatively, the HTML can be hosted on neocities or whatever. It's just HTML, after all.