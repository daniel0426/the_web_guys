import React, { useState } from 'react'
import { Paper, Grid, Typography, Box, Button } from '@mui/material'
import EastSharpIcon from '@mui/icons-material/EastSharp'
import Link from 'next/link'

interface WorkProps {
    works: ReadonlyArray<{
        title: string
        description: string
        image: string
    }>
}
const Works = (props: WorkProps) => {
    const { works } = props

    const [currentWork, setCurrentWork] = useState(works[works.length - 1])
    console.log(currentWork)
    const currentWorkIndex = works.indexOf(currentWork)
    console.log(currentWorkIndex)
    return (
        <Paper
            sx={{
                position: 'relative',
                minHeight: '100vh',
                background:
                    'linear-gradient(180deg,#0E1219 0%, #2E3941 10%,#54646D 50%, #54646D 100%)',
                overflow: 'hidden',
                zIndex: '1',
            }}
        >
            <Grid container sx={{ zIndex: '10' }}>
                <Grid item sx={{ pl: 8, pt: 8 }} xs={6}>
                    <Typography
                        variant="h2"
                        color="primary.dark"
                        sx={{
                            textTransform: 'uppercase',
                            lineHeight: '0.9',
                            fontWeight: '500',
                            mb: 12,
                        }}
                    >
                        Selected <br /> works
                    </Typography>
                    {works.map((work, index) => (
                        <Box
                            key={index}
                            sx={{ mb: 2, ml: 4, cursor: 'pointer' }}
                            onClick={() => setCurrentWork(works[index])}
                        >
                            {index === currentWorkIndex ? (
                                <>
                                    <Box sx={{ position: 'relative' }}>
                                        <Typography
                                            variant="body2"
                                            color="primary.dark"
                                            sx={{
                                                position: 'absolute',
                                                right: '100%',
                                                top: '10px',
                                                mr: 1,
                                                opacity: '0.9',
                                            }}
                                        >
                                            [0{index + 1}]
                                        </Typography>

                                        <Typography
                                            variant="h3"
                                            color="primary"
                                            sx={{
                                                textTransform: 'uppercase',
                                                fontWeight: '500',
                                            }}
                                            gutterBottom
                                        >
                                            {work.title}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        color="primary"
                                        sx={{ maxWidth: '23rem' }}
                                    >
                                        {work.description}
                                    </Typography>
                                </>
                            ) : (
                                <Box sx={{ position: 'relative' }}>
                                    <Typography
                                        variant="body2"
                                        color="primary.dark"
                                        sx={{
                                            position: 'absolute',
                                            right: '100%',
                                            top: '0px',
                                            mr: 1,
                                            opacity: '0.7',
                                        }}
                                    >
                                        [0{index + 1}]
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        color="primary.dark"
                                        sx={{
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {work.title}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    ))}

                    <Link href="/design">
                        <Button
                            sx={{
                                border: '2px solid #f7f7f7',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '40%',
                                zIndex: '1000',
                                p: 2,
                                borderRadius: '50%',
                                cursor: 'pointer',
                                mt: 40,
                                mb: 12,
                            }}
                        >
                            <Typography variant="body1" color="primary">
                                SEE ALL DESIGN
                            </Typography>
                            <EastSharpIcon color="primary" />
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={6} sx={{ position: 'relative' }}>
                    {works.map((work, index) => (
                        <img
                            src={work.image}
                            alt="work_image"
                            key={index}
                            style={{
                                position: 'absolute',
                                bottom:
                                    index === currentWorkIndex
                                        ? '0'
                                        : `${(index + 1) * 120}px`,
                                right:
                                    index === currentWorkIndex
                                        ? '0'
                                        : `${(index + 1) * -50}px`,
                                zIndex:
                                    index === currentWorkIndex ? 1000 : -index,
                                width: '100%',
                                height: '45%',
                                filter:
                                    index === currentWorkIndex
                                        ? 'brightness(1)'
                                        : 'brightness(0.4)',
                            }}
                        />
                    ))}
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Works
