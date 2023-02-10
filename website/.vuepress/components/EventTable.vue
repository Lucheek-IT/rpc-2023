<script>
export default {
  props: {
    events: Array,
  }
}
</script>

<template>
  <table>
    <thead>
    <tr>
      <th scope="col">Time</th>
      <th scope="col">Name</th>
      <th scope="col">Run By</th>
    </tr>
    </thead>
    <tbody>
    <template v-for="event in events">
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
</template>