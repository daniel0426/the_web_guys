import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import EastSharpIcon from '@mui/icons-material/EastSharp'
import { ThemeProvider } from '@mui/material/styles'
import { oxygenFont } from './Theme'
import Link from 'next/link'

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundImage:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), linear-gradient(0deg, #A5B6BD, #A5B6BD),url(/6.png)',
                backgroundSize: 'cover',
                textTransform: 'uppercase',
                backgroundBlendMode: 'normal, color, normal',
            }}
        >
            <Grid
                container
                sx={{ jusfityContent: 'space-between', py: 6, px: 8 }}
            >
                <ThemeProvider theme={oxygenFont}>
                    <Grid item xs sx={{}}>
                        <Typography
                            variant="body1"
                            color="primary"
                            gutterBottom
                        >
                            info@bakewell-white.com
                        </Typography>
                        <Typography
                            variant="body1"
                            color="primary"
                            gutterBottom
                        >
                            +64 9 480 6800
                        </Typography>
                        <Typography
                            variant="body1"
                            color="primary"
                            gutterBottom
                        >
                            EST. 1994
                        </Typography>
                    </Grid>
                </ThemeProvider>
                <Grid
                    item
                    xs={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="h2"
                        color="primary"
                        sx={{ fontWeight: '500' }}
                        gutterBottom
                    >
                        get in touch
                    </Typography>
                    <Link href="/contact">
                        <Box
                            sx={{
                                border: '2px solid #f7f7f7',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '30%',
                                p: 2,
                                borderRadius: '50%',
                                cursor: 'pointer',
                            }}
                        >
                            <Typography variant="body1" color="primary">
                                Contact us
                            </Typography>
                            <EastSharpIcon color="primary" />
                        </Box>
                    </Link>
                </Grid>
                <ThemeProvider theme={oxygenFont}>
                    <Grid item xs sx={{ textAlign: 'right' }}>
                        <Typography
                            variant="body1"
                            color="primary"
                            gutterBottom
                        >
                            privacy policy
                        </Typography>
                        <Typography
                            variant="body1"
                            color="primary"
                            gutterBottom
                        >
                            facebook
                        </Typography>
                        <Typography
                            variant="body1"
                            color="primary"
                            gutterBottom
                        >
                            linkedin
                        </Typography>
                    </Grid>
                </ThemeProvider>
            </Grid>
        </Box>
    )
}

export default Footer
