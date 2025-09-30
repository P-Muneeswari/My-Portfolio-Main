import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, CombatChronicles, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Portfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Experience />
            <Education />            
            <Projects />
            <Achievement />
            <Services />
            <Testimonials />
            <CombatChronicles />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main