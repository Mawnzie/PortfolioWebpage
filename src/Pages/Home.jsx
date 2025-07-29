import React from 'react';
import Layout from '../Components/Layout';
import {motion,AnimatePresence} from 'framer-motion';
import { useState } from 'react';
import Modal from '../Components/Modal'; // Adjust the import path as necessary
import '../index.css'

import TypingHeader from '../Components/TypingHeader';

const listItemsEducation = [
        "PhD in applied mathematics and machine learning, Lund University",
        "Msc in Mathematics, Lund University"
    ];

const listItemsPortfolio = [
        "Cakery website in react",
        "Movie database with MVC",
        "World cities database with C# and Entity Framework"
    ];

const links =[
    "https://github.com/Mawnzie/Cupcake-heaven",
    "https://github.com/Mawnzie/MovieDatabase",
    "https://github.com/Mawnzie/WorldCities"
]

function Home() {


    const [activeModal, setActiveModal] = useState(null);

    const openModal = (type) => setActiveModal(type);
    const closeModal = () => setActiveModal(null);

    const [startParagraph, setStartParagraph] = useState(false);

    

    return (
        <Layout>
               <TypingHeader Tag="h1" fullText={"Måns Williamson's portfolio"} 
                onTypingComplete={() => setStartParagraph(true)}
                />
               {startParagraph &&
               <TypingHeader Tag="p" fullText={"Checkout my awesome whatever"}
               />}
               <div className="button-row">
               <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => (activeModal === "Education" ? closeModal() : openModal("Education"))}>
                Education
                </motion.button>
                <AnimatePresence
                initial={false}
                mode="await"
                >
                    {activeModal === "Education" &&  <Modal handleClose={closeModal} title={"Education"} listItems={listItemsEducation} />}
                </AnimatePresence>
   
               <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => (activeModal === "Portfolio" ? closeModal() : openModal("Portfolio"))}>
                Portfolio
                </motion.button>
                <AnimatePresence
                initial={false}
                mode="await"
                >
                    {activeModal === "Portfolio" &&  <Modal handleClose={closeModal} title={"Portfolio"} listItems={listItemsPortfolio} links={links}/>}
                </AnimatePresence>
          
                   
               {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => (activeModal === "Skills" ? closeModal() : openModal("Skills"))}>
                Skills
                </motion.button>
                <AnimatePresence
                initial={false}
                mode="await"
                >
                    {activeModal === "Skills" &&  <Modal handleClose={closeModal} title={"Skills"} listItems={listItemsEducation} />}
                </AnimatePresence> */}

                </div>
                      <div className="footer">
        &copy; 2025 Måns Williamson
      </div>
        </Layout>
    );
}
export default Home;



/*
const listItemsEducation = [
        "Master of Science in Computer Science, University of Example, 2023",
        "Bachelor of Science in Information Technology, University of Sample, 2021"
    ];



function Home() {

    const [activeModal, setActiveModal] = useState(null);

    const openModal = (type) => setActiveModal(type);
    const closeModal = () => setActiveModal(null);
    

    return (
        <Layout>
               <TypingHeader Tag="h1" fullText={"Måns Williamson's portfolio"}/>
               
               <TypingHeader Tag="p" fullText={"Checkout my awesome whatever"}/>
               <div className="button-row">
               <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => (activeModal === "Education" ? closeModal() : openModal("Education"))}>
                Education
                </motion.button>
                <AnimatePresence
                initial={false}
                mode="await"
                >
                    {activeModal === "Education" &&  <Modal handleClose={closeModal} title={"Education"} listItems={listItemsEducation} />}
                </AnimatePresence>
   
               <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => (activeModal === "Experience" ? closeModal() : openModal("Experience"))}>
                Experience
                </motion.button>
                <AnimatePresence
                initial={false}
                mode="await"
                >
                    {activeModal === "Experience" &&  <Modal handleClose={closeModal} title={"Experience"} listItems={listItemsEducation} />}
                </AnimatePresence>
          
                   
               <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => (activeModal === "Skills" ? closeModal() : openModal("Skills"))}>
                Skills
                </motion.button>
                <AnimatePresence
                initial={false}
                mode="await"
                >
                    {activeModal === "Skills" &&  <Modal handleClose={closeModal} title={"Skills"} listItems={listItemsEducation} />}
                </AnimatePresence>

                </div>
        </Layout>
    );
}
export default Home;

*/