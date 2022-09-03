import React from 'react'
import './blog.css'

import T from '../../components/T'

import IMG1 from '../../assets/blog1.webp'
import IMG2 from '../../assets/blog2.webp'
import IMG3 from '../../assets/blog3.webp'
import IMG4 from '../../assets/blog4.webp'
import IMG5 from '../../assets/blog5.webp'
import IMG6 from '../../assets/blog6.webp'

const data = [
    {
        id: 1,
        title: 'JavaScript Değişken Tanımlama – var, let, const',
        image: IMG1,
        alt: 'JavaScript Değişken Tanımlama – var, let, const',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: 'https://kodlib.com/javascript/javascript-degisken-tanimlama-var-let-const/'
    },
    {
        id: 2,
        title: 'Instantiate, Invoke ve Coroutine – Unity Metotları',
        image: IMG2,
        alt: 'Instantiate, Invoke ve Coroutine – Unity Metotları',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: 'https://kodlib.com/unity/instantiate-invoke-ve-coroutine-unity-metotlari/'
    },
    {
        id: 3,
        title: 'Unity Fonksiyonları – En Çok Kullanılanlar',
        image: IMG3,
        alt: 'Unity Fonksiyonları – En Çok Kullanılanlar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: 'https://kodlib.com/unity/unity-fonksiyonlari/'
    },
    {
        id: 4,
        title: 'Unity Oyunlarımıza AdMob ile Reklam Eklemek',
        image: IMG4,
        alt: 'Unity Oyunlarımıza AdMob ile Reklam Eklemek',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: 'https://kodlib.com/unity/unity-oyunlarimiza-admob-ile-reklam-ekleme/'
    },
    {
        id: 5,
        title: 'Unity DOTween Kullanımı – Animasyonlar ve Efektler',
        image: IMG5,
        alt: 'Unity DOTween Kullanımı – Animasyonlar ve Efektler',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: 'https://kodlib.com/unity/unity-dotween-kullanimi/'
    },
    {
        id: 6,
        title: 'Unity Matematik Metotları – En Çok Kullanılanlar',
        image: IMG6,
        alt: 'Unity Matematik Metotları – En Çok Kullanılanlar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: 'https://kodlib.com/unity/unity-matematik-metotlari/'
    }
]

const Blog = () => {
    return (
        <section id='blog'>
            <h5><T>my_blog_posts</T></h5>
            <h2><T>blog</T></h2>

            <div className='container blog__container'>
                {
                    data.map(({ id, image, title, link, alt }, index) => {
                        return (
                            <article className='blog__item' key={id}>
                                <div className='blog__item-img'>
                                    <img src={image} alt={alt} />
                                </div>
                                <div className='blog__item_bottom'>
                                    <h3>{title}</h3>
                                    <div className='blog__item-cta'>
                                        <a href={link} className='btn' target='_blank'><T>read</T></a>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export { Blog }