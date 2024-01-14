"use client"
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";

import React from 'react'

const NavBarOnScroll = () => {
    const [scrollY, setscrollY] = useState(0);
    const onScroll = useCallback(event => {
        const { scroll } = window;
        console.log("scrollY", scrollY);
        setscrollY(scroll);
    }, []);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true });
        }
    }, []);
}

export default NavBarOnScroll
