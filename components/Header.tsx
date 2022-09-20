import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
interface HeaderProps {}
const Header = (props: HeaderProps) => {
    return (
        <AppBar
            position="absolute"
            sx={{
                background: 'transparent',
                boxShadow: 'none',
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                }}
            >
                <Link href="/expertise">
                    <Button sx={{ color: 'primary' }}>EXPERTISE</Button>
                </Link>
                <Link href="/portfolio">
                    <Button sx={{ color: 'primary' }}>PORTFOLIO</Button>
                </Link>
                <Button sx={{ flex: 0.4 }}>
                    <Image
                        src="/Logo.svg"
                        alt="logo"
                        width={250}
                        height={100}
                    />
                </Button>
                <Link href="/awards">
                    <Button sx={{ color: 'primary' }}>AWARDS</Button>
                </Link>
                <Link href="/contact">
                    <Button sx={{ color: 'primary' }}>CONTACT US</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header
