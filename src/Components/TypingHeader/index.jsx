import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';



function TypingHeader({Tag,fullText,onTypingComplete}) {
  const characters = [...fullText];
  const [index, setIndex] = useState(0);
  const [completed,setCompleted] = useState(false);

  // Wait and increase the index by 1
  useEffect(() => {
    if (index < characters.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else if(onTypingComplete){
      onTypingComplete();
    }
    setCompleted(true);
  }, [index]);

  return (
<div style={{
 display: 'flex',
  justifyContent: 'center'
  }}>
    <Tag
  style={{
    width: '25ch',           // Fixed width in character units
    textAlign: 'left',       // Text always starts from left
    whiteSpace: 'pre',       // Keeps spacing consistent
    fontFamily: 'Barrio, sans-serif',
  }}
  >
      
      {characters.slice(0, index).join('')}
     {!completed && <span className="blinking-cursor">|</span>}
    </Tag>
    </div>


  );
}


export default TypingHeader;
