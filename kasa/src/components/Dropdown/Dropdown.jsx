import React, { useState, useEffect } from 'react';
import './Dropdown.css';

function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        // Attendez un court délai (par exemple 100 ms) avant de définir la classe "close"
        const timeout = setTimeout(() => {
            setIsOpen(false);
        }, 50);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`dropdown ${!isOpen ? 'close' : ''}`} id="dropdown">
            <div className="dropdownTop">
                <p>{title}</p>
                <button onClick={toggleDropdown} className="dropdown-toggle">
                    <i className={`fa-solid fa-chevron-up ${isOpen ? 'open' : 'close'}`}></i>
                </button>
            </div>
            <div className={`dropdownContent ${!isOpen ? 'close' : ''}`}>
                {content}
            </div>
        </div>
    );
}

export default Dropdown;
