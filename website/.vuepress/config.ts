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
            { text: 'Attend', link: '/attend', },
            { text: 'Participate', link: '/participate', },
            { text: 'Schedule', link: '/schedule' },
            { text: 'Vendors & Creators', link: '/people' },
            { text: 'Code of Conduct', link: '/conduct' },
            // { text: 'Envelope Shop', link: 'https://store.lucheek.com/' },
            // { text: 'Join the Discord', link: '#' },
        ],
        sidebar: false,
    }),
}
