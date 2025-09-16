import React from 'react';
import { faEnvelope, faLock, faShieldAlt, faCertificate, faFingerprint, faUserShield, faInfoCircle, faBed, faConciergeBell, faBuilding } from '@fortawesome/free-solid-svg-icons';
import {
    faCcPaypal,
    faCcVisa,
    faCcAmex,
    faCcMastercard,
    faCcDiscover,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    // Menü öğeleri arrayleri
    const hakkimizdaItems = ['MISSIONUMUZ', 'VİZYONUMUZ', 'EKİBİMİZ', 'TARİHÇE'];
    const odalarItems = ['TEK KİŞİLİK', 'ÇİFT KİŞİLİK', 'AİLE ODASI', 'SUİT'];
    const hizmetlerItems = ['RESTORAN', 'SPA', 'SPOR SALONU', 'ÜCRETSİZ Wİ-Fİ'];
    const iletisimItems = ['İLETİŞİM FORMU', 'ADRES', 'TELEFON', 'SOSYAL MEDYA'];
    const kurumsalItems = ['BASIN BÜLTENLERİ', 'KARİYER', 'YASAL BİLGİLER', 'GİZLİLİK POLİTİKASI'];

    // Stil objesi
    const menuItemStyle = {
        textTransform: 'uppercase',
        borderTop: '1px dotted #555',
        padding: '5px 0',
        cursor: 'pointer',
        transition: 'color 0.3s',
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.color = '#32CD32';
    };
    const handleMouseLeave = (e) => {
        e.currentTarget.style.color = '#555';
    };

    return (
        <footer>
            <div className="container px-5">

                {/* Menü sütunları */}
                <div className="row justify-content-between mt-4">
                    {[{ title: 'Hakkımızda', items: hakkimizdaItems, icon: faInfoCircle },
                    { title: 'Odalar', items: odalarItems, icon: faBed },
                    { title: 'Hizmetler', items: hizmetlerItems, icon: faConciergeBell },
                    { title: 'İletişim', items: iletisimItems, icon: faEnvelope },
                    { title: 'Kurumsal', items: kurumsalItems, icon: faBuilding }
                    ].map(({ title, items, icon }) => (
                        <div key={title} className="col-md-2 text-start mb-2">
                            <h5><FontAwesomeIcon icon={icon} /> {title}</h5>
                            <ul className="list-unstyled">
                                {items.map(item => (
                                    <li
                                        key={item}
                                        style={menuItemStyle}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Üst kısım: Email list, ödeme ikonları, ssl */}
                <div className="row mb-5">
                    <div className="col-md-5 mb-3 mb-md-0 text-start">
                        <h5>Yenilikler ve kampanyalar!</h5>
                        <div className="d-flex">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                style={{
                                    flexGrow: 1,
                                    padding: '8px',
                                    borderRadius: '4px 0 0 4px',
                                    border: 'none',
                                    outline: 'none',
                                }}
                            />
                            <button
                                style={{
                                    backgroundColor: '#32CD32',
                                    border: 'none',
                                    padding: '8px 12px',
                                    borderRadius: '0 4px 4px 0',
                                    color: 'white',
                                    cursor: 'pointer',
                                }}
                                aria-label="E-posta gönder"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </button>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5>Ödeme Yöntemleri</h5>
                        <div className="d-flex justify-content-center flex-wrap gap-2" style={{ fontSize: '2.5rem' }}>
                            <FontAwesomeIcon icon={faCcPaypal} />
                            <FontAwesomeIcon icon={faCcVisa} />
                            <FontAwesomeIcon icon={faCcAmex} />
                            <FontAwesomeIcon icon={faCcMastercard} />
                            <FontAwesomeIcon icon={faCcDiscover} />
                        </div>
                    </div>

                    <div className="col-md-3 d-flex flex-column">
                        <h5>Güvenli Site</h5>
                        <div className="d-flex justify-content-center flex-wrap gap-3" style={{ fontSize: '2rem', color: '#479dffff' }}>
                            <FontAwesomeIcon icon={faLock} title="Güvenli Bağlantı" />
                            <FontAwesomeIcon icon={faFingerprint} title="Biyometrik Güvenlik" />
                            <FontAwesomeIcon icon={faUserShield} title="Kullanıcı Koruması" />
                        </div>
                    </div>
                </div>

                <hr style={{ borderColor: '#444' }} />
                <p className="text-center mb-0">© 2024 Heart of The City Hotel. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;