import React from 'react';

const cards = [
    {
        id: 1,
        title: 'Konforlu Odalar',
        content: 'Modern tasarımlı, rahat ve sessiz odalarımız sizi bekliyor.',
    },
    {
        id: 2,
        title: 'Lezzetli Yemekler',
        content: 'Yerel ve dünya mutfağından seçkin tatları deneyimleyin.',
    },
    {
        id: 3,
        title: 'Profesyonel Hizmet',
        content: 'Misafirperver ekibimiz her daim sizin yanınızda.',
    },
    {
        id: 4,
        title: 'Eşsiz Konum',
        content: 'Şehrin kalbinde, tarihi ve turistik noktaların yakınındayız.',
    },
];

const InfoCards = () => {
    return (
        <div className="container my-4">
            <div className="row g-4">
                {cards.map(card => (
                    <div key={card.id} className="col-md-6 col-lg-3">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoCards;