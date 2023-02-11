# RPC 2023 Website
This site is built with [VuePress](https://v2.vuepress.vuejs.org/) to quickly create a professional, mobile-friendly website. Content is written in [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) for simplicity, but you can do HTML for more complicated formatting. Custom CSS and interactive Vue components can be included in pages too, for really special pages.

## Editing Stuff
It's easy to edit the content right here on GitHub. The content lives in the [`website`](./website) directory. 

If you're adding new pages, they need to be included in the [config file](./website/.vuepress/config.ts) to show up on the navigation bar. It's a Javascript file, so it's a bit annoying.

### Colours
The colours are controlled from the [styles `index.scss`](./website/.vuepress/styles/index.scss) file. There are a ton of CSS variables that can be overwritten for light & dark mode. The only customization the site has done to them is changing the brand colour from VuePress Green to Rampage Orange (from the RPC '23 logo).

References for the full list are here:

- [Light mode](https://github.com/vuepress/vuepress-next/blob/main/ecosystem/theme-default/src/client/styles/vars.scss)
- [Dark mode](https://github.com/vuepress/vuepress-next/blob/main/ecosystem/theme-default/src/client/styles/vars-dark.scss)

### Creators & Vendors
The [Creators & Vendors](./website/people/index.md) page generates a table based on the frontmatter -- the stuff between the `---` at the top of the file. The frontmatter is very sensitive to the tabbing, so mind that when inserting new people. 

Adding a new person can be done by putting another entry at the bottom of the frontmatter:

```yaml
- name: Owls
  page: /people/owls.html
  iconUrl: https://mastomedia.yshi.org/accounts/avatars/108/239/251/250/937/273/original/680abda5e63ccb5a.png
  description: | 
     Computer-sufferer. "Gamer".
```

Not sure if you like the profile pages on the RPC site. But if you do, the intention is to add a new file in the [people folder](./website/people). That should Just Work™ and link it from there.

### Schedule
The [Schedule page](./website/schedule.md) is similar to the Creators & Vendors: all the data is in the frontmatter. It's set up like this because managing the Markdown or HTML table would be very unpleasant.

There are two sections: `dayOne` and `dayTwo`. Add entries like this to either, in the order you want them to show up.

There is one thing to be aware of: `timeExact` should be `true` or `false`. When it's `false`, whatever you write for the `time` is shown in the table.

When it's `true`, it expects the time to be in the format below so it can parse it and show it in the viewer's own timezone. The `-5` in the example below is the offset for central time; if you include that, you can write the times down in what is familiar to you, and the conversion just kinda Happens for people when they look at it.

```yaml
- name: Defend Stone Mist Castle
  time: 2023-09-03 09:00:00 -5
  timeExact: true
  description: |
    Invaders are attacking your castle. Defend the gates!
  people:
  - name: Lucheek
    page: /people/lucheek.html 
  - name: Owls
    page: /people/owls.html
```

## Hosting
GitHub hosts the website via GitHub Pages. It's a free service, and the `rollypollycon.com` domain is pointed there. 

There's an [action](./.github/workflows/publish.yml) that runs the command and deploys it on GitHub Pages. This means you can edit some stuff right here on Github and it'll be published to the site about a minute later.

The action runs a command to turn everything into a static HTML site.