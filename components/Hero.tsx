import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { oxygenFont } from './Theme'
import { Paper, Box, Grid, Typography } from '@mui/material'
import { useSpring, useTrail, a } from '@react-spring/web'

const Trail: React.FC<{
    open: boolean
    children?: JSX.Element | JSX.Element[]
}> = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        delay: 2000,
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 0, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}

const Hero = () => {
    const [open, set] = useState(true)
    const styles = useSpring({
        from: { transform: 'translateY(100%)' },
        to: [{ transform: 'translateY(0%)' }],
        config: { duration: 800, delay: 200 },
        loop: false,
    })

    useEffect(() => {
        set((state) => !state)
    }, [])

    return (
        <a.div style={styles}>
            <Paper
                square
                sx={{
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage:
                        'linear-gradient(0deg, #79858C, #79858C), url(/1.png)',
                    backgroundBlendMode: 'hue, normal',
                    position: 'relative',
                    minHeight: '100vh',
                }}
            >
                <ThemeProvider theme={oxygenFont}>
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '0',
                            width: '100%',
                            left: '0',
                            px: 6,
                        }}
                    >
                        <Trail open={open}>
                            <img src="/LogoLarge.svg" alt="logo" width="100%" />
                            <Grid
                                container
                                sx={{
                                    justifyContent: 'space-between',
                                    textTransform: 'uppercase',
                                    letterSpacing: 2,
                                }}
                            >
                                <Grid item>
                                    <Box
                                        sx={{
                                            textAlign: 'left',
                                            mb: 4,
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            color="primary"
                                        >
                                            +64 9 480 6800
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="primary"
                                        >
                                            info@bakewell-white.com
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography
                                            variant="body2"
                                            color="primary"
                                        >
                                            Bakewell-white Yacht Design LTD
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="primary"
                                        >
                                            Pace with grace / © 2022
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography
                                            variant="body2"
                                            color="primary"
                                        >
                                            Est. 1994
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="primary"
                                        >
                                            auckland / new zealand
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Trail>
                    </Box>
                </ThemeProvider>
            </Paper>
        </a.div>
    )
}

export default Hero
