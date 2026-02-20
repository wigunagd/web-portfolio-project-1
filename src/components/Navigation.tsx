'use client'

import Image from "next/image";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { iconClose, iconMenu } from "../../public/imgassets/assets-img";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion"

const navItems = [
    {
        label: "Home",
        href: "#home"
    }, {
        label: "About",
        href: "#about"
    }, {
        label: "Skill",
        href: "#skill"
    }, {
        label: "Projects",
        href: "#projects"
    }, {
        label: "FAQ",
        href: "#faq"
    }, {
        label: "Contact",
        href: "#contact"
    },
];

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        const handleScroll = () => {
            if (window.scrollY > 5) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen, isMobile]);

    const menuVariants: Variants = {
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            }
        },
        closed: {
            x: isMobile ? "100%" : 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            }
        }
    };

    return (
        <header className={`flex w-full fixed top-0 left-0 z-10 transition-colors duration-50 border-b 
        ${scrolled || menuOpen ? 'bg-background' : 'bg-transparent'}
        `}>
            <nav className={`flex w-full relative justify-between md:max-w-296 h-20 mx-auto lg:px-0 md:px-[24px] px-[16px] items-center`}>
                <Logo />

                <AnimatePresence mode="wait">
                    {(menuOpen || !isMobile) && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            key="menu-bar"
                            id="menu-bar"
                            className={`
                        md:block
                        md:relative
                        ${menuOpen ?
                                    'block fixed top-20 left-0 bg-background w-full h-screen p-4'
                                    : 'hidden'
                                }
                        `}>
                            <ul className={`flex md:flex-row flex-col md:gap-[40px]
                        ${menuOpen ?
                                    'gap-[16px]'
                                    : ''
                                }
                        `}>
                                {
                                    navItems.map((nav) => (
                                        <li key={nav.label}><a href={nav.href}>{nav.label}</a></li>
                                    ))
                                }
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                <Button
                    onClick={handleMenuOpen}
                    variant={'ghost'}
                    className="md:hidden">
                    <motion.div
                        key={menuOpen ? 'close' : 'open'}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                        <Image src={menuOpen ? iconClose : iconMenu} width={24} height={24} alt="menu-toggle-btn-img" />
                    </motion.div>
                </Button>
            </nav>
        </header>
    )
}

export default Navigation;