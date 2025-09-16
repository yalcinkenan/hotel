import React, { useState } from 'react';

const ModernNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        'Anasayfa',
        'Odalar & Suitler',
        'Rezervasyon',
        'Hizmetler & İmkanlar',
        'İletişim'
    ];

    return (
        <nav className="d-flex justify-content-between align-items-center px-4 py-3" style={{ backgroundColor: '#E07B39', fontFamily: 'Roboto, sans-serif' }}>
            <div className="brand text-white fw-bold" style={{ fontSize: '1.5rem' }}>
                <a href="#" className="navbar-brand d-flex align-items-center gap-2">
                    <img
                        src={`${process.env.PUBLIC_URL}/img/top-logo.png`}
                        alt="Heart of The City Hotel Logo"
                        style={{ height: '80px', width: 'auto' }}
                    />
                </a>
            </div>

            {/* Hamburger Button for Mobile */}
            <button className="d-lg-none btn btn-transparent p-0" onClick={toggleMenu} aria-label="Toggle menu">
                <span style={{ fontSize: '1.5rem', color: '#fff' }}>&#9776;</span>
            </button>

            {/* Menu Items */}
            <ul className={`list-unstyled d-lg-flex gap-2 m-0 ${isOpen ? 'd-flex flex-column position-absolute top-100 end-0 bg-orange p-3' : 'd-none d-lg-flex'}`} style={{ minWidth: '200px', zIndex: 1000, border: '1px solid #ccc' }}>
                {menuItems.map((item, idx) => (
                    <li key={idx} style={{ border: '1px solid #fff' }}>
                        <a href="#" className="text-white px-3 py-2 d-block text-center text-decoration-none"
                            style={{
                                fontWeight: '600',
                                borderColor: 'white',
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                borderRadius: '0',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default ModernNavbar;
