import React, { useState } from 'react';

const slides = [
    {
        id: 1,
        title: 'Konforlu Konaklama',
        subtitle: 'Şehrin kalbinde, evinizde gibi hissedin.',
        btnText: 'Rezervasyon Yap',
        img: `${process.env.PUBLIC_URL}/img/slide/1.jpg`,
    },
    {
        id: 2,
        title: 'Lezzetli Yemekler',
        subtitle: 'Özel menüler ve kaliteli hizmet sizi bekliyor.',
        btnText: 'Menüyü Göster',
        img: `${process.env.PUBLIC_URL}/img/slide/2.jpg`,
    },
    {
        id: 3,
        title: 'Unutulmaz Anılar',
        subtitle: 'Konfor ve lüks bir arada sizi bekliyor.',
        btnText: 'Daha Fazla Bilgi',
        img: `${process.env.PUBLIC_URL}/img/slide/3.jpg`,
    },
];

const AccordionSlider = () => {
    const [openId, setOpenId] = useState(slides[0].id);

    const toggleSlide = (id) => {
        setOpenId(prev => (prev === id ? null : id));
    };

    return (
        <div style={{ display: 'flex', height: 400, maxWidth: '100%', overflow: 'hidden' }}>
            {slides.map(slide => {
                const isOpen = slide.id === openId;
                return (
                    <div
                        key={slide.id}
                        style={{
                            flex: isOpen ? 6 : 1,
                            display: 'flex',
                            position: 'relative',
                            transition: 'flex 0.5s ease',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            boxShadow: isOpen ? '0 0 15px rgba(0,0,0,0.5)' : 'none',
                            borderLeft: '1px solid #ccc',
                        }}
                        onClick={() => toggleSlide(slide.id)}
                    >
                        {/* Sol başlık dikey metin */}
                        <div className='pt-3'
                            onClick={() => {
                                if (isOpen) toggleSlide(slide.id);
                            }}
                            style={{
                                cursor: isOpen ? 'default' : 'pointer',
                                color: isOpen ? '#cccccc' : '#fff',
                                writingMode: 'vertical-rl',
                                transform: 'rotate(180deg)',
                                whiteSpace: 'nowrap',
                                backgroundColor: isOpen ? 'rgba(50, 205, 50, 0.8)' : 'rgba(50, 205, 50, 0.4)',
                                width: 50,
                                display: 'flex',
                                alignItems: 'end',
                                justifyContent: 'start',
                                fontWeight: 'bold',
                                fontSize: 24,
                                fontStyle: 'italic',
                                flexShrink: 0,
                                userSelect: 'none',
                                position: 'relative',
                                zIndex: 2,
                            }}
                        >
                            {slide.title}
                        </div>

                        {/* Kapalı slaytlarda önizleme */}
                        {!isOpen && (
                            <div
                                style={{
                                    flex: 1,
                                    backgroundImage: `url(${slide.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    filter: 'brightness(0.6)',
                                }}
                            />
                        )}

                        {/* Açık slayt içeriği */}
                        {isOpen && (
                            <div className='ps-5 pb-5'
                                style={{
                                    flex: 1,
                                    padding: 20,
                                    color: '#fff',
                                    backgroundImage: `url(${slide.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'end',
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: 28,
                                        marginBottom: 10,
                                        textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
                                    }}
                                >
                                    {slide.title}
                                </h2>
                                <p
                                    style={{
                                        fontSize: 16,
                                        marginBottom: 20,
                                        textShadow: '1px 1px 5px rgba(0,0,0,0.8)',
                                    }}
                                >
                                    {slide.subtitle}
                                </p>
                                <button
                                    style={{
                                        width: 160,
                                        padding: '10px 15px',
                                        backgroundColor: '#32CD32',
                                        border: 'none',
                                        borderRadius: 6,
                                        color: '#fff',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        fontSize: 16,
                                        alignSelf: 'flex-start',
                                        boxShadow: '0 3px 6px rgba(0,0,0,0.3)',
                                        transition: 'background-color 0.3s ease',
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        alert(`Butona tıklandı: ${slide.btnText}`);
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor = '#28a428')
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.backgroundColor = '#32CD32')
                                    }
                                >
                                    {slide.btnText}
                                </button>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default AccordionSlider;