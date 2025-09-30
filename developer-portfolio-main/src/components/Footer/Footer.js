import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'

function Footer() {

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary, textAlign: 'center', fontStyle: 'italic'}}>
                "I can do all things through Christ who strengthens me." - Philippians 4:13
            </p>
        </div>
    )
}

export default Footer
