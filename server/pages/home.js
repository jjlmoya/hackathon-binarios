module.exports = {
    path: '/hackathon/',
    view: 'pages/hackathon/index',
    layout: 'main',
    brand: 'purple-skies',
    name: 'El Señor de los Anillos',
    logo: '/images/hackathon/logo.png',
    model: {
        films: [
            {
                name: 'La Comunidad del Anillo',
                image: 'http://elanillounico.com/wp-content/uploads/2016/12/ESDLA.-LCDA.jpg',
                link: '',
                characters: [
                    {
                        link: '',
                        name: 'Frodo Bolsón',
                        image: 'https://pbs.twimg.com/profile_images/914686805991190528/IgdbIKmV_400x400.jpg',
                    }
                ]
            },
            {
                name: 'Las Dos Torres',
                link: '',
                image: 'https://i0.wp.com/elanillounico.com/wp-content/uploads/2015/11/ESDLA.-LDT1.jpg',
                characters: [
                    {
                        link: '',
                        name: 'Frodo Bolsón',
                        image: 'https://pbs.twimg.com/profile_images/914686805991190528/IgdbIKmV_400x400.jpg',
                    }
                ]
            },
            {
                name: 'El Retorno del Rey',
                link: '',
                image: 'https://i.pinimg.com/originals/a1/12/27/a11227c7c318087a61e6cabfc9ef67bb.jpg',
                characters: [
                    {
                        link: '',
                        name: 'Frodo Bolsón',
                        image: 'https://pbs.twimg.com/profile_images/914686805991190528/IgdbIKmV_400x400.jpg',
                    }
                ]
            }
        ]
    },
    pages: [
        {
            path: 'personajes',
            view: 'pages/hackathon/characters/',
            layout: 'main',
            name: 'Personajes'
        }
    ],
};