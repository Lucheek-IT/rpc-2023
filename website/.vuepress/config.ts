import { defaultTheme } from '@vuepress/theme-default'

export default {
    theme: defaultTheme({
        navbar: [
            { text: 'Home', link: '/' },
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