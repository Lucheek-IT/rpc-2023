---
people:
- name: Lucheek
  page: /people/lucheek.html
  iconUrl: https://pbs.twimg.com/profile_images/1620063257175199747/HKVfBPn6_400x400.jpg
  description: | 
     Founder & CEO of RollyPolly Con. Creator of <a href="https://crittercoven.com/">Critter Coven</a>, <a href="http://stationstarseed.com/">Station: Starseed</a>, and more. Skilled at brass-brad paper-crafts, organizing conferences, and drawing deer.
---

# Vendors & Creators
<!-- The YAML frontmatter is less awful than trying to do a Markdown table of this size, I guess. -->
<table>
    <thead>
    <tr>
        <th scope="col"><span class="sr-only">Icon</span></th>
        <th scope="col">Name</th>
        <th scope="col">About</th>
    </tr>
    </thead>
    <tbody>
        <tr v-for="person in $page.frontmatter.people">
            <td><img v-bind:src="person.iconUrl" v-bind:alt="person.name" class="bio-img-sm"></td>
            <td><a v-bind:href="person.page">{{ person.name }}</a></td>
            <td v-html="person.description"></td>
        </tr>
    </tbody>
</table>

:::tip Want to be listed here?
Head over to the [Participate page](../participate.md) to see how you can become an RPC vendor or creator!
:::