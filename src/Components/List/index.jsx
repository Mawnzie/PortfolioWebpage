import React, { useState, useEffect } from 'react';

export default function List({ items, links }) {

    const [index,setIndex] = useState(0);
    
     useEffect(() => {
        if (index <= items.length) {
          const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
          }, 50);
    
          return () => clearTimeout(timeout);
        }
      }, [index]);

    return (
        
        <ul style={{ width: '600px', textAlign: 'left', listStyle: 'none', padding: 0 }}>
{/* 
            {items.slice(0,index).map((item, idx) => (
                <li key={idx}>{item}</li>
            ))} */}
            {items.slice(0, index).map((item, idx) => (
  <li key={idx}>
    {links && links[idx] ? (
      <a href={links[idx]} target="_blank" rel="noopener noreferrer">
        {item}
      </a>
    ) : (
      item
    )}
  </li>
))}

        </ul>
    );
}