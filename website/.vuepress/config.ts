import { defaultTheme } from '@vuepress/theme-default'

export default {
    base: '/',
    title: 'RollyPolly Con',
    theme: defaultTheme({
        logo: 'https://pbs.twimg.com/profile_images/1406981901563437062/4s2z3Csh_400x400.jpg',
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
