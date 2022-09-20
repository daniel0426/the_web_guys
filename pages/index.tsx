import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Works from '../components/Works'
import Footer from '../components/Footer'
import Design from '../components/Design'
import Hero from '../components/Hero'

const designs = [
    { title: 'CQS', type: '29m DSS Super-Maxi Race Yatch' },
    { title: 'Anarchy', type: 'YD 37.11M Club Racer' },
    { title: 'A Fork in the Road', type: '13.7M IRC Race Yacht' },
    { title: 'General Lee', type: '11.3M IRC Race Yacht' },
    { title: 'Zana/Konica Minolta/Lahana', type: '30m Super-Maxi' },
    { title: 'Wired', type: '15.85m Canting Keel Racer/Cruiser' },
    { title: 'Jazz Player', type: '12m Production One Design Racer / Cruiser' },
    { title: 'Braveheart /Valkyrie', type: '15.85m TP52 Carbon Race Yacht' },
    { title: 'NZL-403', type: 'Mini 650 Carbon Race Yacht' },
    { title: 'Time to Burn', type: '12.5m Cruiser / Racer' },
]

const works = [
    {
        title: 'case study',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in venenatis id laoreet enim. Interdum in orci vitae feugiat quam urna. Pretium netus nec ante massa nulla odio nunc posuere sit. Nec justo, leo eget ipsum sollicitudin aliquet.',
        image: '/5.png',
    },
    {
        title: 'case study',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in venenatis id laoreet enim. Interdum in orci vitae feugiat quam urna. Pretium netus nec ante massa nulla odio nunc posuere sit. Nec justo, leo eget ipsum sollicitudin aliquet.',
        image: '/4.png',
    },
    {
        title: 'case study',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in venenatis id laoreet enim. Interdum in orci vitae feugiat quam urna. Pretium netus nec ante massa nulla odio nunc posuere sit. Nec justo, leo eget ipsum sollicitudin aliquet.',
        image: '/3.png',
    },
]

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>The Web Guys</title>
                <meta
                    name="description"
                    content="Intern test from the web guys"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <Hero />
                <About />
                <Works works={works} />
                <Design designs={designs} />
                <Footer />
            </main>
        </>
    )
}

export default Home
