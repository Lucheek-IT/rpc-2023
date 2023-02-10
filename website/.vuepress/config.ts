import { defaultTheme } from '@vuepress/theme-default'

export default {
    base: '/',
    title: 'RollyPolly Con',
    theme: defaultTheme({
        // Not technical docs, don't want any of this nonsense.
        editLink: false,
        lastUpdated: false,
        contributors: false,

        logo: '/logo.jpg',
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },
            { text: 'Attend', link: '/attend.html', },
            { text: 'Schedule', link: '/schedule.html' },
            {
                text: 'Events',
                children: [
                    '/events/foo-bar.md',
                    { text: 'Latin', link: '/events/latin.md' },
                ]
            },
            { text: 'Code of Conduct', link: '/conduct.html' },
            { text: 'Envelope Shop', link: 'https://store.lucheek.com/' },
        ],
        sidebar: false,
    }),
}
