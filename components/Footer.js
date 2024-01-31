'use client';
import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
    return (
        <>
            <div className="divider"></div>
            <footer className="footer footer-center p-10  text-base-content rounded">

                <div className="grid grid-flow-col gap-4">
                    <a href='/matches' className="link link-hover">Matches</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Contact</a>
                </div>
                <div>
                    <div className="grid hover:text-blue-500 grid-flow-col gap-4">
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - Cricbet</p>
                </div>
            </footer>
        </>

    )
}
