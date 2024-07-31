import React from 'react'
import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import {Link, usePage} from "@inertiajs/react";
import Modal from "@/Components/Modal.jsx";

export default function FilteredNews({key, title, lead, content, image, user, category, onClick, agency, published}) {

    let {posts, categories} = usePage().props;
    const baseUrl = import.meta.env.VITE_APP_URL;

    // Состояние модального окна
    const [modal,setModal] = React.useState(false);



    // Состояние для выбранной категории
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Функция для обработки клика по категории
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    // Функция для обработки клика по кнопке "Все новости"
    const handleAllNewsClick = () => {
        setSelectedCategory(null);
    };

    // Фильтрация постов по выбранной категории
    const filteredPosts = selectedCategory
        ? posts.filter(post => post.category_id === selectedCategory.id)
        : posts;


    // Ограничение вывода новостей до 3 постов
    const limitedPosts = filteredPosts.slice(0, 3);

    // Функция для форматирования даты
    const formattedDate = format(parseISO(published), 'HH:mm, d MMMM', { locale: ru });


    useEffect(() => {
        if (modal) {
            document.body.classList.add('fixed-body')
        }else {
            document.body.classList.remove('fixed-body')
        }
    })
    return (
        <div className="filtered-news w-full d-flex mt-40 flex-column">
            <div className="filter-items">
                <button
                    className={`filter-button ${selectedCategory === null ? 'active' : ''}`}
                    onClick={handleAllNewsClick}
                >
                    Все новости
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`filter-button ${selectedCategory && selectedCategory.id === category.id ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            <div className="d-flex flex-wrap">
                {limitedPosts.map((post) => (
                    <div key={post.id} className="filtered-news-item col-4">
                        <div className="news-image">
                            <img src={`${baseUrl}/storage/${post.image_main}`} alt=""
                                 className="w-100 h-100"/>
                        </div>

                        <div className="news-text">
                            <p className="news-date">
                                {formattedDate} <span
                                className="news-category ml-4">{post.category.title}</span>
                            </p>

                            <h4 onClick={() => setModal(true)}>{post.title}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <div className="more-news">
                <Link href={route('news.index')} className={'d-flex'}>
                    <span>Больше новостей по этой теме</span>
                    <img src="img/icons/longarrow.svg" alt="" className={'pl-3'}/>
                </Link>
            </div>

            <Modal

                title={title}
                date={formattedDate}
                category={category}
                image={image}
                content={content}
                active={modal}
                onClose={() => setModal(false)}
            />
        </div>


    )
}
