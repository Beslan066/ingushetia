import { Link, Head } from '@inertiajs/react';
import Guest from "@/Layouts/GuestLayout.jsx";
import Modal from "@/Components/Modal.jsx";
import React from 'react'
import { useEffect } from 'react';
export default function Welcome() {

    const [modal,setModal] = React.useState(false);

    useEffect(() => {
        if (modal) {
            document.body.classList.add('fixed-body')
        }else {
            document.body.classList.remove('fixed-body')
        }
    })
    return (
        <Guest>
            <div>
                <main className="mt-40">
                    <div className="container d-flex w-full  col-xxl-12">
                        <div className="main-left col-xxl-9 ">
                            <div className="main-materials ">
                                <div className="main-material position-relative">
                                    <img src="img/Rectangle 1.png" alt="Main material" className="w-100"/>
                                    <div className="flex position-absolute w-100 flex-col  pl-40 pr-40 bottom-25">
                                        <p className="news-date">27 июня <span
                                            className="news-category ml-4">Туризм</span>
                                        </p>
                                        <a>
                                            <h2  className="main-material-title">Количество туристов в
                                                2023 году увеличилось на 24% по данным ИСТ</h2>
                                        </a>
                                        <div
                                            className="w-100 slider-buttons d-flex justify-content-center bottom-12">
                                            <button className="active"></button>
                                            <button></button>
                                            <button></button>
                                            <button></button>
                                            <button></button>
                                            <button></button>
                                            <button></button>
                                        </div>
                                    </div>
                                </div>

                                <div className="filtered-news w-full d-flex mt-40 flex-column">

                                    <div className="filter-items">
                                        <button className="active">Общество</button>
                                        <button>Образование</button>
                                        <button>Экономика</button>
                                        <button>Наука</button>
                                        <button>Спорт</button>
                                        <button>Туризм</button>
                                    </div>

                                    <div className="d-flex flex-wrap">
                                        <div className="filtered-news-item col-4">
                                            <div className="news-image">
                                                <img src="img/Rectangle 1.png" alt="" className="w-100 h-100"/>
                                            </div>

                                            <div className="news-text">
                                                <p className="news-date">09:22, 5 июня<span
                                                    className="news-category ml-4">Проекты</span></p>
                                                <Link href="">
                                                    <h4>Глава республики посетил открытие новой школы</h4>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="filtered-news-item col-4">
                                            <div className="news-image">
                                                <img className="w-100 h-100" src="img/content/image 7 (2).png" alt=""/>
                                            </div>
                                            <div className="news-text">
                                                <p className="news-date">21:57, 28 июня<span
                                                    className="news-category ml-4">Проекты</span></p>
                                                <Link href="">
                                                    <h4>НИИ Ингушетии представели новый дрон для сельского
                                                        хозяйства</h4>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="filtered-news-item col-4">
                                            <div className="news-image">
                                                <img className="w-100" src="img/content/image 7 (3).png" alt=""/>
                                            </div>

                                            <div className="news-text">
                                                <p className="news-date">13:22, 28 июня<span
                                                    className="news-category ml-4">Проекты</span></p>
                                                <Link href="">
                                                    <h4>Курорт “Армхи” будет полностью обновлен к 2025 году </h4>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="more-news">
                                        <Link href="" className={'d-flex'}>
                                            <span>Больше новостей по этой теме</span>
                                            <img src="img/icons/longarrow.svg" alt=""/>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="main-right  ml-32">
                            <div className="d-flex flex-column mb-32 news-sidebar">
                                <div className="news-item">
                                    <div className="news-date mb-4 d-flex justify-content-between">
                                        <div>
                                            13:45, 8 июля <span
                                            className="news-category">Общество</span>
                                        </div>
                                        <img src="img/icons/video-icon.svg" alt=""/>
                                    </div>
                                        <h2 onClick={() => setModal(true)}>М-А. Калиматов проверил ход восстановительных работ в Карабулаке</h2>
                                </div>

                                <div className="news-item">
                                    <div className="news-date mb-4 d-flex justify-content-between">
                                        <div>
                                            09:22, 5 июня <span
                                            className="news-category">Образование</span>
                                        </div>
                                    </div>
                                    <h2 onClick={() => setModal(true)}>В с.п. Сурхахи открылась новая школа на 320 мест</h2>

                                </div>
                                <div className="news-item">
                                    <div className="news-date mb-4 d-flex justify-content-between">
                                        <div>
                                            11:34, 2 июля<span
                                            className="news-category">Образование</span>
                                        </div>
                                        <img src="img/icons/video-icon.svg" alt=""/>
                                    </div>
                                    <h2 onClick={() => setModal(true)}>В Яндаре по программе «Развитие образования»
                                        построили новый детский сад-ясли</h2>

                                </div>
                                <div className="news-item">
                                    <div className="news-date mb-4 d-flex justify-content-between">
                                        <div>
                                            18:15, 29 июня<span
                                            className="news-category">Общество</span>
                                        </div>
                                    </div>

                                    <h2 onClick={() => setModal(true)}>Ингушетия снова в тройке лидеров по ожидаемой
                                        продолжительности жизни</h2>

                                </div>
                                <div className="news-item">
                                    <div className="news-date mb-4 d-flex justify-content-between">
                                        <div>
                                            21:57, 28 июня<span
                                            className="news-category">Общество</span>
                                        </div>
                                    </div>
                                    <h2 onClick={() => setModal(true)}>М-А. Калиматов проверил ход восстановительных
                                        работ в Карабулаке</h2>

                                </div>
                                <div className="news-item">
                                    <div className="news-date mb-4 d-flex justify-content-between">
                                        <div>
                                            13:45, 8 июля <span
                                            className="news-category">Проекты</span>
                                        </div>
                                        <img src="img/icons/video-icon.svg" alt=""/>
                                    </div>
                                    <h2 onClick={() => setModal(true)}>Ингушетия снова в тройке лидеров по ожидаемой
                                        продолжительности жизни</h2>

                                </div>

                                <div className="more-news">
                                    <Link>
                                    <span>Смотреть все</span>
                                        <img src="img/icons/longarrow.svg" alt=""/>
                                    </Link>
                                </div>
                            </div>

                            <div className="important p-24">
                                <div className="important-title">
                                    <h2>Важное</h2>
                                </div>
                                <ul>
                                    <li>
                                        <Link href="">Нац. проекты</Link>
                                    </li>
                                    <li>
                                        <Link href="">Поддержка семей участников СВО</Link>
                                    </li>
                                    <li>
                                        <Link href="">Инвестиции</Link>
                                    </li>
                                    <li>
                                        <Link href="">Противодействие коррупции</Link>
                                    </li>
                                    <li>
                                        <Link href="">Помощь нуждающимся</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
                <section className="ingushetia-vectors mt-32">
                    <div className="container d-flex flex-column">
                        <h2 className="mb-48">Векторы развития республики</h2>
                        <div className=" d-flex w-100 mb-32">
                            <div className="vector-item  mr-32 w-100">
                                <img className="w-100 vector-image" src="img/content/vectors/image 7.png" alt=""/>
                                <ul>
                                    <li>
                                        <h3>АПК</h3>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>Создано более 1000 рабочих мест</span>
                                    </li>
                                    <li>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>На 18% увеличен сбор с/х продуктов</span>
                                    </li>
                                    <li>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>145 гектаров новых пахатных земель</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="vector-item w-100">
                                <img className="w-100 vector-image" src="img/content/vectors/image 7 (1).png" alt=""/>
                                <ul>
                                    <li>
                                        <h3>Цифровая сфера</h3>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>Открыт IT-университет “Школа 21”</span>
                                    </li>
                                    <li>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>Выпущено более 400 IT-специалистов</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="d-flex mb-48">
                            <div className="vector-item w-100 mr-32">
                                <img className="w-100 vector-image" src="img/content/vectors/image 7 (2).png" alt=""/>
                                <ul>
                                    <li>
                                        <h3>Промышленность</h3>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>Запущено 3 новых предприятия</span>
                                    </li>
                                    <li>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>Создано более 2000 новых рабочих мест</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="vector-item w-100">
                                <img className="w-100 vector-image" src="img/content/vectors/image 7 (3).png" alt=""/>
                                <ul>
                                    <li>
                                        <h3>Туризм</h3>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>На 20% больше туристов</span>
                                    </li>
                                    <li>
                                        <img src="img/icons/checkmark.svg" alt=""/>
                                        <span>Более 2 новых туристических зон</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="municipalities  mb-32">
                    <div className="container d-flex flex-column">
                        <h3 className="mb-48 mt-32">Районы и округа</h3>
                        <div className="d-flex col-xxl-12 mb-32">
                            <div className="municipality-image col-xxl-9 position-relative">
                                <img className="w-100 h-100" src="img/content/country/orig.jpeg" alt=""/>
                                <div
                                    className="d-flex aligh-items-center position-absolute municipality-info justify-content-between">
                                    <div className="municipality-title">
                                        <h4>МАГАС</h4>
                                        <Link href="" className={'d-flex'}>
                                            Подробнее
                                            <img src="img/icons/longarrow.svg" alt=""/>
                                        </Link>
                                    </div>
                                    <div className="municipality-date d-flex flex-column">
                                        <span>Основан</span>
                                        <span>1994 г</span>
                                    </div>
                                    <div className="municipality-date d-flex flex-column">
                                        <span>Площадь</span>
                                        <span>12,63 км²</span>
                                    </div>
                                    <div className="municipality-date d-flex flex-column">
                                        <span>Население</span>
                                        <span>18 640 чел.</span>
                                    </div>
                                    <div className="municipality-date d-flex flex-column">
                                        <span>Глава города</span>
                                        <span>John Doe</span>
                                    </div>
                                </div>
                            </div>
                            <div className="municipality-city col-xxl-3 d-flex flex-column ml-32">
                                <div className="d-flex flex-column">
                                    <h4 className="mb-24">Городские округа</h4>
                                    <ul className="d-flex flex-column mb-32">
                                        <li className="active">Магас</li>
                                        <li>Назрань</li>
                                        <li>Сунжа</li>
                                        <li>Малгобек</li>
                                        <li>Карабулак</li>
                                    </ul>
                                </div>

                                <div className="d-flex flex-column">
                                    <h4>Муниципальные районы</h4>
                                    <ul className="d-flex flex-column">
                                        <li>Назрановский район</li>
                                        <li>Сунженский район</li>
                                        <li>Малгобекский район</li>
                                        <li>Джейрахский район</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home-media">
                    <div className="container">
                        <div className="d-flex justify-content-between flex-wrap">
                            <div className="filtered-news-item col-4 ">
                                <div className="news-image">
                                    <img src="img/Rectangle 1.png" alt="" className="w-100 h-100"/>
                                </div>

                                <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                    <div>
                                        <Link href="">
                                            <h4>Глава республики посетил открытие новой школы</h4>
                                        </Link>
                                    </div>
                                    <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span>
                                    </p>
                                </div>
                            </div>
                            <div className="filtered-news-item col-4">
                                <div className="news-image">
                                    <img className="w-100 h-100" src="img/content/image 7 (2).png" alt=""/>
                                </div>
                                <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                    <div>
                                        <Link href="">
                                            <h4>НИИ Ингушетии представели новый дрон для сельского хозяйства</h4>
                                        </Link>
                                    </div>
                                    <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span>
                                    </p>
                                </div>
                            </div>
                            <div className="filtered-news-item col-4">
                                <div className="news-image">
                                    <img className="w-100" src="img/content/image 7 (3).png" alt=""/>
                                </div>

                                <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                    <div>
                                        <Link href="">
                                            <h4>Курорт “Армхи” будет полностью обновлен к 2025 году </h4>
                                        </Link>
                                    </div>
                                    <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span>
                                    </p>
                                </div>
                            </div>

                            <div className="filtered-news-item col-4">
                                <div className="news-image">
                                    <img src="img/Rectangle 1.png" alt="" className="w-100 h-100"/>
                                </div>

                                <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                    <div>
                                        <Link href="">
                                            <h4>Глава республики посетил открытие новой школы</h4>
                                        </Link>
                                    </div>
                                    <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span>
                                    </p>
                                </div>
                            </div>
                            <div className="filtered-news-item col-4">
                                <div className="news-image">
                                    <img className="w-100 h-100" src="img/content/image 7 (2).png" alt=""/>
                                </div>
                                <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                   <div>
                                       <Link href="">
                                           <h4>НИИ Ингушетии представели новый дрон для сельского хозяйства</h4>
                                       </Link>
                                   </div>
                                    <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span>
                                    </p>
                                </div>
                            </div>
                            <div className="filtered-news-item col-4">
                                <div className="news-image">
                                    <img className="w-100" src="img/content/image 7 (3).png" alt=""/>
                                </div>

                                <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                   <div>
                                       <Link href="">
                                           <h4>Курорт “Армхи” будет полностью обновлен к 2025 году </h4>
                                       </Link>
                                   </div>
                                    <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span>
                                    </p>
                                </div>
                            </div>
                            <div className="filtered-news-item col-4">
                                <div className="news-image">
                                    <img src="img/Rectangle 1.png" alt="" className="w-100 h-100"/>
                                </div>

                                <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                    <div>
                                        <Link href="">
                                            <h4>Глава республики посетил открытие новой школы</h4>
                                        </Link>
                                    </div>
                                    <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span>
                                    </p>
                                </div>
                            </div>
                            <div className="filtered-news-item col-4">
                                <div className="news-image">
                                    <img src="img/Rectangle 1.png" alt="" className="w-100 h-100"/>
                                </div>

                                <div className="news-text pl-20 d-flex flex-column justify-content-between">
                                    <div>
                                        <Link href="">
                                            <h4>Глава республики посетил открытие новой школы</h4>
                                        </Link>
                                    </div>
                                    <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="documents mb-32">
                    <div className="container d-flex flex-column">
                        <h3 className="mb-32">Документы</h3>
                        <div className="document-item d-flex justify-content-between w-100 aligh-items-center">
                            <div>
                                <Link href="">
                                    <h4>Отчет Правительства РИ за 2023 год</h4>
                                </Link>
                                <span>Отчеты</span>
                            </div>
                            <Link href="">
                                <img src="img/icons/arrow grey.svg" alt=""/>
                            </Link>
                        </div>
                        <div className="document-item d-flex justify-content-between w-100 aligh-items-center">
                            <div>
                                <Link href="">
                                    <h4>Постановление Аравительства РИ о повышении пособий</h4>
                                </Link>
                                <span>Акты</span>
                            </div>
                            <Link href="">
                                <img src="img/icons/arrow grey.svg" alt=""/>
                            </Link>
                        </div>
                        <div className="document-item d-flex justify-content-between w-100 aligh-items-center">
                            <div>
                                <Link href="">
                                    <h4>Республиканский закон №2884 от 19.04.2024</h4>
                                </Link>
                                <span>Законы</span>
                            </div>
                            <Link href="">
                                <img src="img/icons/arrow grey.svg" alt=""/>
                            </Link>
                        </div>
                        <div className="document-item d-flex justify-content-between w-100 aligh-items-center">
                            <div>
                                <Link href="">
                                    <h4>Отчет правительства за 2022 год</h4>
                                </Link>
                                <span>Отчеты</span>
                            </div>
                            <Link href="">
                                <img src="img/icons/arrow grey.svg" alt=""/>
                            </Link>
                        </div>

                        <div className="more-news">
                            <Link href="">
                                <span> Все документы</span>
                                <img src="img/icons/longarrow.svg" alt=""/>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="other-resources mb-32">
                    <div className="container">
                        <h3 className="section-title">Полезные ресурсы</h3>
                    </div>
                    <div className="container d-flex justify-content-between aligh-items-center ">
                        <div className="resource-item col-3 p-25 d-flex justify-content-between flex-column">
                            <h3>Сайт президента РФ </h3>
                            <div className="d-flex justify-content-between">
                                <Link href="kremlin.ru">kremlin.ru</Link>
                                <Link href="">
                                    <img src="img/icons/external link.svg" alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className="resource-item col-3 p-25 d-flex justify-content-between flex-column">
                            <h3>Сайт правительства РФ</h3>
                            <div className="d-flex justify-content-between">
                                <Link href="government.ru">government.ru</Link>
                                <Link href="">
                                    <img src="img/icons/external link.svg" alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className="resource-item col-3 p-25 d-flex justify-content-between flex-column">
                            <h3>Сервер органов государственной власти</h3>
                            <div className="d-flex justify-content-between">
                                <Link href="gov.ru">gov.ru</Link>
                                <Link href="">
                                    <img src="img/icons/external link.svg" alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className="resource-item col-3 p-25 d-flex justify-content-between flex-column">
                            <h3>Поддержка предпринимателей</h3>
                            <div className="d-flex justify-content-between">
                                <Link href="мойбизнес25.рф">мойбизнес25.рф</Link>
                                <Link href="">
                                    <img src="img/icons/external link.svg" alt=""/>
                                </Link>
                            </div>
                        </div>


                    </div>
                </section>

            </div>

            <Modal active={modal} onClose={() => setModal(false)}/>
        </Guest>
    );
}
