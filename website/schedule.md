---
dayOne:
- name: Opening Ceremonies
  time: Morning (time TBD)
  timeExact: false
  description: | 
    We'll start the convention! This will include a feature of our vendors, creators, and panelists, an introduction of the goals and intents of RollyPolly Con, the Competition, as well a distribution of the digital con-book and badge.
  people:
  - name: Lucheek
    page: /person/lucheek.html
- name: Paper-Craft Badge Creation w/ Lucheek
  time: Morning (time TBD)
  timeExact: false
  description: |
    Lucheek will walk you through the creation of a unique, moving papercraft “con badge” project that you can make at home!
  people:
  - name: Lucheek
    page: /person/lucheek.html
- name: Musical Showcase / Dance
  time: Evening (time TBD)
  timeExact: false
  description: |
    Listen to original music submitted by creators, and prepare to dance and get-down!
  people:
  - name: Lucheek
    page: /person/lucheek.html

dayTwo:
- name: Infini-Net Famous TTRPG Stream w/ Lucheek (GM)
  time: Morning (time TBD)
  timeExact: false
  description: |
    Infini-Net Famous is TTRPG that's meant to be live-streamed, where the viewers can make suggestions and demands that effect the game for the players!
  people:
  - name: Lucheek
    page: /person/lucheek.html
---

# Events, Panels, and Schedule

## Saturday, September 3rd
<table>
    <thead>
    <tr>
        <th scope="col">Time</th>
        <th scope="col">Name</th>
        <th scope="col">Run By</th>
    </tr>
    </thead>
    <tbody>
        <template v-for="event in $page.frontmatter.dayOne">
            <tr>
              <td v-html="event.name"></td>                
              <td v-text="event.time" v-if="! event.timeExact"></td>
              <td v-text="Intl.DateTimeFormat('en-US', {hour: 'numeric', minute: 'numeric', timeZoneName: 'short'}).format((new Date(event.time)))" v-if="event.timeExact"></td>
              <td>
                  <template v-for="(person, index) in event.people">
                    <a v-bind:href="person.page">{{ person.name }}</a><span v-if="index != event.people.length - 1">, </span>
                  </template>
              </td>
            </tr>
            <tr>
                <td colspan="3" v-html="event.description"></td>
            </tr>
        </template>
    </tbody>
</table>

## Sunday, September 4th

|     Time | Topic                                                                | Presented By      |
|---------:|----------------------------------------------------------------------|-------------------|
|  9:00 AM | [Foo bar](/events/foo-bar.md)                                        | Somebody Cool     |
| 10:00 AM | [Vestibulum et aliquet risus, quis volutpat lacus](/events/latin.md) | Emperor Nero      |