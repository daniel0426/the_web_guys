import React, { useRef } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { archivoFont } from './Theme'
import { Paper, Box, Grid, Typography, Button } from '@mui/material'
import EastSharpIcon from '@mui/icons-material/EastSharp'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from '@react-spring/web'

const About = () => {
    const { ref: myRef, inView: myElementIsVisible } = useInView()

    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 200 },
    })
    return (
        <>
            <Paper
                sx={{
                    position: 'relative',
                    minHeight: '100vh',
                    background: '#0E1219',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        top: 0,
                        bottom: 0,
                        mt: 15,
                        backgroundImage:
                            'linear-gradient(180deg, rgba(14, 18, 25, 0) 0%, #0E1219 100%), url(/Mesh.svg)',
                        backgroundSize: 'cover ',
                    }}
                />
                <Grid
                    container
                    spacing={3}
                    sx={{
                        position: 'relative',
                        width: '60%',
                        py: 12,
                        backgroundColor: 'red',
                        background: 'url(/2.png)',
                        backgroundSize: '100% 100% ',
                        zIndex: 10,
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            backgroundColor: 'rgba(0,0,0,.3)',
                        }}
                    />
                    <Typography
                        variant="h2"
                        color="primary"
                        sx={{
                            position: 'absolute',
                            left: '-20%',
                            bottom: '95%',
                            textTransform: 'uppercase',
                            fontWeight: '500',
                            lineHeight: '1',
                        }}
                    >
                        We are an <br /> award-winning
                    </Typography>
                    <Typography
                        variant="h2"
                        color="primary"
                        sx={{
                            position: 'absolute',
                            right: '-20%',
                            top: '95%',
                            textTransform: 'uppercase',
                            fontWeight: '500',
                            textAlign: 'right',
                            lineHeight: '1',
                        }}
                    >
                        Boutique design <br /> studio
                    </Typography>
                    <Link href="/expertise">
                        <Button
                            sx={{
                                position: 'absolute',
                                left: '100%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                border: '2px solid #f7f7f7',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '20%',
                                zIndex: '1000',
                                p: 2,
                                borderRadius: '50%',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease',
                                '&:hover': {
                                    background: '#54646D',
                                    border: '2px solid #54646D',
                                },
                            }}
                        >
                            <Typography variant="body1" color="primary">
                                SEE EXPERTISE
                            </Typography>
                            <EastSharpIcon color="primary" />
                        </Button>
                    </Link>

                    <Grid
                        container
                        item
                        xs={7}
                        sx={{
                            textAlign: 'center',
                            alignItems: 'flex-end',
                            margin: '0 auto',
                        }}
                    >
                        <animated.div ref={myRef} style={styles}>
                            <Typography
                                variant="body1"
                                color="primary"
                                sx={{
                                    fontWeight: '600',
                                    filter: 'brightness(1.4)',
                                }}
                            >
                                We can offer a complete design service to all
                                vessels, power and sail. Whether it is
                                conceptual design work or full naval
                                architecture and engineering, no job is too big
                                or too small for our team.
                            </Typography>
                        </animated.div>
                    </Grid>

                    <ThemeProvider theme={archivoFont}>
                        <Grid
                            container
                            item
                            spacing={3}
                            sx={{
                                justifyContent: 'center',
                                opacity: '0.9',
                            }}
                        >
                            <Grid item xs={3} sx={{ textAlign: 'right' }}>
                                <Typography variant="body2" color="primary">
                                    We believe that success is to a large part a
                                    matter of design process, and a good
                                    designer will have a design process that
                                    will produce a successful outcome whether it
                                    be a yacht, a powerboat, an aeroplane, or a
                                    ballpoint pen.
                                </Typography>
                            </Grid>
                            <Grid item xs={3} sx={{ textAlign: 'left' }}>
                                <Typography variant="body2" color="primary">
                                    We undertake a wide variety of craft from
                                    radio yachts, to racing yachts, offshore
                                    powerboats, to 90m motoryachts, pilotboats,
                                    kayaks, Arabian dhows, cargo barges and
                                    fishing boats. As a result we are exposed to
                                    a wide variety of conditions, design
                                    problems and novel solutions, and if we were
                                    restricted to designing only one type of
                                    craft then we would not see this rich
                                    variety of thinking.
                                </Typography>
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                </Grid>
            </Paper>
        </>
    )
}

export default About
