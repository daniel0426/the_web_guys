import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { archivoFont } from './Theme'
import Link from 'next/link'

interface DesignProps {
    designs: ReadonlyArray<{
        title: string
        type: string
    }>
}

const Design = (props: DesignProps) => {
    const { designs } = props
    return (
        <Grid
            container
            sx={{
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
                py: 14,
                px: 6,
                backgroundColor: '#F7F7F7',
                justifyContent: 'space-between',
                gap: '2',
            }}
        >
            <Grid item sx={{ textTransform: 'uppercase', flex: '1' }}>
                <Typography
                    variant="h2"
                    sx={{ fontWeight: '500', lineHeight: '0.9' }}
                >
                    award-winning <br /> designs
                </Typography>

                <img
                    src="/MEsh2.svg"
                    alt="mesh"
                    style={{
                        position: 'absolute',
                        width: '35%',
                        top: '60%',
                        right: '72%',
                    }}
                />
            </Grid>
            <Grid item sx={{ flex: '1' }}>
                {designs.map((design, index) => (
                    <Link key={index} href={design.title}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                borderTop: '2px solid #0e1219',
                                py: 1.5,
                                cursor: 'pointer',
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    mr: 1,
                                    position: 'relative',
                                    bottom: '5px',
                                }}
                            >
                                {' '}
                                {index + 1 < 10
                                    ? `[0${index + 1}]`
                                    : `[${index + 1}]`}
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {design.title}
                            </Typography>
                            <ThemeProvider theme={archivoFont}>
                                <Typography
                                    variant="body2"
                                    sx={{ flex: '1', textAlign: 'right' }}
                                >
                                    {design.type}
                                </Typography>
                            </ThemeProvider>
                        </Box>
                    </Link>
                ))}
                <Box
                    sx={{
                        borderTop: '2px solid #0e1219',
                        borderBottom: '2px solid #0e1219',
                        textTransform: 'uppercase',
                        py: 2,
                    }}
                >
                    <Link href="/design">
                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: 'right',
                                letterSpacing: 1,
                                fontWeight: '700',
                                cursor: 'pointer',
                            }}
                        >
                            view more
                        </Typography>
                    </Link>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Design
