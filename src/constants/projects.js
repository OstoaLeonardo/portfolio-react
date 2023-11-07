import dadu1 from '../assets/images/dadu-1.webp'
import dadu2 from '../assets/images/dadu-2.webp'
import dadu3 from '../assets/images/dadu-3.webp'
import prefer1 from '../assets/images/would-u-rather-1.webp'
import prefer2 from '../assets/images/would-u-rather-2.webp'
import prefer3 from '../assets/images/would-u-rather-3.webp'
import spotify1 from '../assets/images/spotify-stats-1.webp'
import spotify2 from '../assets/images/spotify-stats-2.webp'
import movies1 from '../assets/images/movies-stats-1.webp'
import movies2 from '../assets/images/movies-stats-2.webp'
import portfolio1 from '../assets/images/portfolio-1.webp'
import portfolio2 from '../assets/images/portfolio-2.webp'
import store1 from '../assets/images/store1.webp'
import store2 from '../assets/images/store2.webp'
import store3 from '../assets/images/store3.webp'

export const projects = [
    {
        title: 'Dadu',
        type: 'Mobile app',
        description: 'A game of questions about general culture and other topics.',
        images: [
            dadu1,
            dadu2,
            dadu3,
        ],
        technologies: ['Android', 'Java', 'SQLite', 'Lottie'],
        github: 'https://github.com/ostoaleonardo/dadu',
        color: 'dadu',
    },
    {
        title: '¿Qué prefieres?',
        type: 'Web app',
        description: 'A game of questions about what you prefer between two options.',
        images: [
            prefer1,
            prefer2,
            prefer3,
        ],
        technologies: ['React', 'JavaScript', 'Tailwind', 'Firebase', 'Framer Motion'],
        demo: 'https://wudu.vercel.app/',
        github: 'https://github.com/ostoaleonardo/would-u-rather',
        color: 'prefer',
    },
    {
        title: 'Your Spotify Stats',
        type: 'Web app',
        description: 'A web app that shows your Spotify stats.',
        images: [
            spotify1,
            spotify2,
        ],
        technologies: ['React', 'JavaScript', 'NextUI', 'Tailwind', 'Framer Motion'],
        demo: 'https://getspotifystats.vercel.app/',
        github: 'https://github.com/ostoaleonardo/spotify-stats',
        color: 'spotify',
    },
    {
        title: 'Store E-commerce',
        type: 'Web app',
        description: 'A web app that simulates an e-commerce store, where you can add products to the cart and make a purchase.',
        technologies: ['React', 'JavaScript', 'NextUI', 'Tailwind', 'Framer Motion'],
        images: [
            store1,
            store2,
            store3,
        ],
        demo: 'https://storecommerce.vercel.app/',
        github: 'https://github.com/ostoaleonardo/store-e-commerce',
        color: 'store',
    },
    {
        title: 'Movies Stats',
        type: 'Web app',
        description: 'A web app that shows movies stats, like the most popular movies, the best rated, etc.',
        technologies: ['React', 'JavaScript', 'NextUI', 'Tailwind', 'Framer Motion'],
        images: [
            movies1,
            movies2,
        ],
        demo: 'https://movies-stats.vercel.app/',
        github: 'https://github.com/ostoaleonardo/movies-stats',
        color: 'movies',
    },
    {
        title: 'My portfolio',
        type: 'Web app',
        description: 'A portfolio of my projects and skills in web and mobile development.',
        images: [
            portfolio1,
            portfolio2,
        ],
        technologies: ['React', 'JavaScript', 'Tailwind', 'Framer Motion'],
        github: 'https://github.com/ostoaleonardo/portfolio-react',
        color: 'portfolio',
    }
]