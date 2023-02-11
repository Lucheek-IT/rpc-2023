<script>
export default {
  props: {
    events: Array,
  },
  methods: {
    toHumanTime(timeStamp) {
      const formatSettings = {hour: 'numeric', minute: 'numeric', timeZoneName: 'short'};

      return Intl.DateTimeFormat('en-US', formatSettings).format((new Date(timeStamp)));
    },
  }
}
</script>

<template>
  <table class="schedule-table">
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
        <td v-text="toHumanTime(event.time)" v-if="event.timeExact"></td>
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