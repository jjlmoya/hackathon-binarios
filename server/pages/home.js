module.exports = {
    path: '/hackathon/',
    view: 'pages/hackathon/index',
    layout: 'main',
    brand: 'purple-skies',
    name: 'El Señor de los Anillos',
    logo: '/images/hackathon/logo.png',
    model: {
        characters: [
            {
                link: '',
                name: 'Frodo Bolsón',
                image: 'https://pbs.twimg.com/profile_images/914686805991190528/IgdbIKmV_400x400.jpg',
            },
            {
                link: '',
                name: 'Boromir',
                image: 'https://vignette.wikia.nocookie.net/lotr/images/b/b4/Seanbean_boromir.jpg/revision/latest?cb=20110327195115',
            },
            {
                link: '',
                name: 'Gandalf',
                image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-the-lord-of-the-rings-ian-mckellen.jpg'
            },
            {
                link: '',
                name: 'Saruman',
                image: 'https://vignette.wikia.nocookie.net/lotr/images/0/0c/Christopher_Lee_as_Saruman.jpg/revision/latest?cb=20170127113833'
            },
            {
                link: '',
                name: 'Galadriel',
                image: 'https://vignette.wikia.nocookie.net/lotr/images/0/0c/Christopher_Lee_as_Saruman.jpg/revision/latest?cb=20170127113833'
            },
            {
                link: '',
                name: 'Abc',
                image: 'https://vignette.wikia.nocookie.net/lotr/images/0/0c/Christopher_Lee_as_Saruman.jpg/revision/latest?cb=20170127113833'
            },
            {
                link: '',
                name: 'Saruman',
                image: 'https://vignette.wikia.nocookie.net/lotr/images/0/0c/Christopher_Lee_as_Saruman.jpg/revision/latest?cb=20170127113833'
            }

        ],
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
            view: 'pages/hackathon/characters',
            layout: 'main',
            name: 'Personajes'
        }
    ],
};