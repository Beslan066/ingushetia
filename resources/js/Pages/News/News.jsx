import Guest from "@/Layouts/GuestLayout.jsx";

export default function News() {
    return (
        <Guest>
            <main className="mt-40">
                <div className="container">
                    <h2 className="mb-40">Новости</h2>
                </div>
                <div className="container d-flex w-full  col-xxl-12 news-page">
                    <div className="main-left col-xxl-9">
                        <div className="main-materials">
                            <div className="main-material position-relative">
                                <img src="img/Rectangle 1.png" alt="Main material" className="w-100"/>
                                <div className="flex position-absolute w-100 flex-col  pl-40 pr-40 bottom-25">
                                    <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span>
                                    </p>
                                    <a href="">
                                        <h2 className="main-material-title">Количество туристов в 2023 году увеличилось
                                            на 24% по данным ИСТ</h2>
                                    </a>
                                    <div
                                        className="w-100 slider-buttons  d-flex justify-content-center bottom-12">
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

                                <div className="filter-items d-flex justify-content-between aligh-items-center">
                                    <div className="d-flex aligh-items-center ">
                                        <button className="active">Общество</button>
                                        <button>Образование</button>
                                        <button>Экономика</button>
                                        <button>Наука</button>
                                        <button>Спорт</button>
                                        <button>Туризм</button>
                                    </div>
                                    <div className="filter-icon-button">
                                        <button>
                                            <img src="img/icons/Filter.svg" alt="Ingushetia news filter"/>
                                        </button>
                                    </div>
                                </div>

                                <div className="filter-body d-flex aligh-items-center mb-24">
                                    <div className="d-flex aligh-items-center">
                                        <select name="" id="" placeholder="Период, с" className="mr-12">
                                            <option value="">Период, с</option>
                                        </select>
                                        <p>-</p>
                                        <select name="" id="" placeholder="Период, до" className="mr-12">
                                            <option value="">Период, до</option>
                                        </select>
                                    </div>
                                    <div className="d-flex aligh-items-center">
                                        <button className="mr-12">Применить</button>
                                        <button>Очистить</button>
                                    </div>
                                </div>

                                <div className="d-flex flex-wrap">
                                    <div className="d-flex news-row news-image-row">
                                        <div className="filtered-news-item col-4">
                                            <div className="news-image">
                                                <img src="img/Rectangle 1.png" alt="" className="w-100 h-100"/>
                                            </div>

                                            <div className="news-text">
                                                <p className="news-date">27 июня <span
                                                    className="news-category ml-4">Проекты</span></p>
                                                <a href="">
                                                    <h4>Глава республики посетил открытие новой школы</h4>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="filtered-news-item col-4">
                                            <div className="news-image">
                                                <img className="w-100 h-100" src="img/content/image 7 (2).png" alt=""/>
                                            </div>
                                            <div className="news-text">
                                                <p className="news-date">27 июня <span
                                                    className="news-category ml-4">Проекты</span></p>
                                                <a href="">
                                                    <h4>НИИ Ингушетии представели новый дрон для сельского
                                                        хозяйства</h4>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="filtered-news-item col-4">
                                            <div className="news-image">
                                                <img className="w-100" src="img/content/image 7 (3).png" alt=""/>
                                            </div>

                                            <div className="news-text">
                                                <p className="news-date">27 июня <span
                                                    className="news-category ml-4">Проекты</span></p>
                                                <a href="">
                                                    <h4>Курорт “Армхи” будет полностью обновлен к 2025 году </h4>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-wrap news-row">
                                        <div className="filtered-news-item col-4">
                                            <div className="news-text">
                                                <p className="news-date">27 июня <span
                                                    className="news-category ml-4">Проекты</span></p>
                                                <a href="">
                                                    <h4>Курорт “Армхи” будет полностью обновлен к 2025 году </h4>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="filtered-news-item col-4">
                                            <div className="news-text">
                                                <p className="news-date">27 июня <span
                                                    className="news-category ml-4">Проекты</span></p>
                                                <a href="">
                                                    <h4>Курорт “Армхи” будет полностью обновлен к 2025 году </h4>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="filtered-news-item col-4">
                                            <div className="news-text">
                                                <p className="news-date">27 июня <span
                                                    className="news-category ml-4">Проекты</span></p>
                                                <a href="">
                                                    <h4>Курорт “Армхи” будет полностью обновлен к 2025 году </h4>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="filtered-news-item col-4">
                                            <div className="news-text">
                                                <p className="news-date">27 июня <span
                                                    className="news-category ml-4">Проекты</span></p>
                                                <a href="">
                                                    <h4>Курорт “Армхи” будет полностью обновлен к 2025 году </h4>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="filtered-news-item col-4">
                                            <div className="news-text">
                                                <p className="news-date">27 июня <span
                                                    className="news-category ml-4">Проекты</span></p>
                                                <a href="">
                                                    <h4>Курорт “Армхи” будет полностью обновлен к 2025 году </h4>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="filtered-news-item col-4">
                                            <div className="news-text">
                                                <p className="news-date">27 июня <span
                                                    className="news-category ml-4">Проекты</span></p>
                                                <a href="">
                                                    <h4>Курорт “Армхи” будет полностью обновлен к 2025 году </h4>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="load-news d-flex justify-content-center w-100">
                                        <button>Показать еще</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="main-right  ml-32">
                        <div className="d-flex flex-column mb-32 news-sidebar">
                            <h4>Популярное</h4>
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
                                <a href="" className={'d-flex'}>
                                    <span>Смотреть все</span>
                                    <img src="img/icons/longarrow.svg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Guest>
    )
}
