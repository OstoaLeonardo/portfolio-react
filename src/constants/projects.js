import tailtools1 from '../assets/images/tailtools1.webp'
import tailtools2 from '../assets/images/tailtools2.webp'
import tailtools3 from '../assets/images/tailtools3.webp'
import tailtools4 from '../assets/images/tailtools4.webp'
import wavestify1 from '../assets/images/wavestify1.webp'
import wavestify2 from '../assets/images/wavestify2.webp'
import movies1 from '../assets/images/movies-stats-1.webp'
import movies2 from '../assets/images/movies-stats-2.webp'
import store1 from '../assets/images/store1.webp'
import store2 from '../assets/images/store2.webp'
import store3 from '../assets/images/store3.webp'
import minecraft1 from '../assets/images/minecraft1.webp'
import minecraft2 from '../assets/images/minecraft2.webp'
import minecraft3 from '../assets/images/minecraft3.webp'
import prefer1 from '../assets/images/would-u-rather-1.webp'
import prefer2 from '../assets/images/would-u-rather-2.webp'
import prefer3 from '../assets/images/would-u-rather-3.webp'

export const projects = [
    {
        title: 'Tailtools',
        type: 'Web app',
        description: 'A web app that you can use to generate color palettes, gradients, and more for Tailwind CSS.',
        images: [
            tailtools1,
            tailtools2,
            tailtools3,
            tailtools4,
        ],
        technologies: ['React', 'TypeScript', 'Tailwind', 'NextUI'],
        github: 'https://github.com/ostoaleonardo/tailtools',
        color: 'bg-zinc-900'
    },
    {
        title: 'Wavestify',
        type: 'Web app',
        description: 'A web app that shows your Spotify stats.',
        images: [
            wavestify1,
            wavestify2,
        ],
        technologies: ['React', 'JavaScript', 'NextUI', 'Tailwind', 'Framer Motion'],
        demo: 'https://wavestify.vercel.app/',
        github: 'https://github.com/ostoaleonardo/spotify-stats',
        color: 'bg-spotify',
    },
    {
        title: 'E-commerce',
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
        color: 'bg-purple-500',
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
        color: 'bg-[#f31260]',
    },
    {
        title: 'Minecraft Three.js',
        type: 'Web app',
        description: 'Based on the game Minecraft, this web app allows you to create a world with blocks and move around it.',
        technologies: ['React', 'JavaScript', 'Three.js', 'Tailwind'],
        images: [
            minecraft1,
            minecraft2,
            minecraft3,
        ],
        demo: 'https://minecraft-three-js.vercel.app/',
        github: 'https://github.com/ostoaleonardo/minecraft-three-js',
        color: 'bg-zinc-900',
    },
    // {
    //     title: '¿Qué prefieres?',
    //     type: 'Web app',
    //     description: 'A game of questions about what you prefer between two options.',
    //     images: [
    //         prefer1,
    //         prefer2,
    //         prefer3,
    //     ],
    //     technologies: ['React', 'JavaScript', 'Tailwind', 'Firebase', 'Framer Motion'],
    //     demo: 'https://wudu.vercel.app/',
    //     github: 'https://github.com/ostoaleonardo/would-u-rather',
    //     color: 'bg-[#ff475a]',
    // },
]