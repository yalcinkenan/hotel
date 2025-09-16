import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faUserPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';
import "flag-icons/css/flag-icons.min.css";

const languages = [
    { code: 'de', label: 'Deutsch' },
    { code: 'gb', label: 'English' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'fr', label: 'Français' },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(languages[2]);
    const langRef = useRef();

    // Mobil menüyü toggle etmek için fonksiyon
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Dil dropdown toggle
    const toggleLangDropdown = () => {
        setLangOpen(!langOpen);
    };

    // Dil seçimi fonksiyonu
    const selectLanguage = (lang) => {
        setSelectedLang(lang);
        setLangOpen(false);
    };

    // Dış tıklamayı yakalamak için event listener
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Pencere boyutu değişince mobil menüyü kapat
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992 && isMobileMenuOpen) { // lg breakpoint
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    const menuItems = [
        'Anasayfa',
        'Odalar',
        'Rezervasyon',
        'Hizmetler',
        'İletişim',
    ];

    return (
        <nav className="d-flex align-items-center justify-content-between pt-4" style={{ minHeight: '48px' }}>
            <div className="container d-flex align-items-center justify-content-between position-relative">
                <a href="#" className="navbar-brand d-flex align-items-center gap-2 mb-4">
                    <img
                        src={`${process.env.PUBLIC_URL}/img/top-logo.png`}
                        alt="Heart of The City Hotel Logo"
                        style={{ height: '80px', width: 'auto' }}
                    />
                </a>
                {/* Hamburger menü butonu */}
                <button
                    className="d-md-none"
                    onClick={toggleMobileMenu}
                    aria-label="Menüyü aç"
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: '2rem',
                        cursor: 'pointer',
                        userSelect: 'none',
                    }}
                >
                    &#9776;
                </button>
                {/* Mobil menü, conditionally render */}
                {isMobileMenuOpen && (
                    <div
                        style={{
                            position: 'fixed',
                            bottom: '48px',
                            right: 0,
                            backgroundColor: 'rgba(224, 123, 57, 0.97)',
                            padding: '10px',
                            minWidth: '200px',
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                            zIndex: 99999,
                            fontFamily: "'Patrick Hand', cursive",
                            color: 'white',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                            userSelect: 'none',
                        }}
                    >
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {menuItems.map(item => (
                                <li
                                    key={item}
                                    style={{ padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer' }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {/* Menü öğeleri büyük ekran için */}
                <ul
                    className={`d-flex list-unstyled mb-0 flex-grow-1 justify-content-center align-items-center flex-wrap position-absolute ${isMobileMenuOpen ? 'd-none' : 'd-none d-lg-flex'}`}
                    style={{
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: 'fit-content',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            style={{
                                padding: '8px 14px',
                                color: '#ffffffff',
                                fontSize: '2rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                fontFamily: '"Style Script", cursive',
                                transition: 'background-color 0.3s, color 0.3s',
                                userSelect: 'none',
                            }}
                            className="nav-item"
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = '#19a53aff';
                                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                                e.currentTarget.style.color = '#155724';
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                {/* Dil seçimi */}
                <div className="position-relative ms-5" ref={langRef}>
                    <button
                        onClick={toggleLangDropdown}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontSize: '1.4rem',
                            padding: '4px 8px',
                            userSelect: 'none',
                        }}
                        aria-haspopup="true"
                        aria-expanded={langOpen}
                        aria-label="Dili seçin"
                    >
                        <FontAwesomeIcon icon={faGlobe} />
                        <span className={`fi fi-${selectedLang.code}`}></span>
                    </button>
                    {langOpen && (
                        <ul className="position-absolute"
                            style={{
                                top: 0,
                                left: 0,
                                backgroundColor: 'rgba(255, 172, 142)',
                                listStyle: 'none',
                                padding: '8px',
                                margin: 0,
                                borderRadius: '4px',
                                zIndex: 10000,
                                fontWeight: 'normal',
                                fontSize: '1.4rem',
                            }}>
                            {languages.map((lang) => (
                                <li
                                    key={lang.code}
                                    style={{
                                        cursor: 'pointer',
                                        userSelect: 'none',
                                        textTransform: 'uppercase',
                                        whiteSpace: 'nowrap',
                                    }}
                                    onClick={() => selectLanguage(lang)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') selectLanguage(lang); }}
                                    tabIndex={0}
                                    role="button"
                                    aria-label={`Dil seç: ${lang.label}`}
                                >
                                    <span className={`fi fi-${lang.code}`}></span> {lang.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {/* Kullanıcı ikonları */}
                <div className="d-flex align-items-center gap-3 text-white ms-3" style={{ fontSize: '1.25rem' }}>
                    <a href="#" title="Kullanıcı Girişi" className="text-white" style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                    </a>
                    <a href="#" title="Kayıt Ol" className="text-white" style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </a>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;