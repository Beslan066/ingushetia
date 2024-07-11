import "../../../public/css/modal.css";
import React from "react";
export default function Modal({ active, onClose }) {

    return (
        <div className={`d-flex justify-content-center modal-section`}>
            <div className={`main-modal col-7 position-absolute p-32 ${active ? 'active' : ''}`} id="mainModal">
                <div className="modal-head w-100 d-flex aligh-items-center justify-content-between">
                    <p className="d-flex aligh-items-center">
                        <a href="">Главная </a>
                        <span className="ml-12"><img className={'next-icon'} src="../../img/icons/no.svg" alt=""/></span>
                        <a className="ml-12" href="">Новости </a>
                        <span className="ml-12"><img className={'next-icon'} src="../../img/icons/no.svg" alt=""/></span>
                        <a className="ml-12" href="">Новый современный спортивный комплекс появится в Ингушетии в 2025 году</a>
                    </p>
                    <div>
                        <button className="mr-12"><img src="img/icons/Print.png" alt="" /></button>
                        <button onClick={onClose}><img src="img/icons/Close.png" alt="" /></button>
                    </div>
                </div>

                <div className="modal-news-content mt-40 mb-24">
                    <div className="modal-news-date">
                        <p className="news-date text-black mb-4">27 июня 13:55<span className="news-category">Проекты</span></p>
                    </div>

                    <div className="modal-news-title">
                        <h2>Новый современный спортивный комплекс появится в Ингушетии в 2025 году</h2>
                    </div>

                    <div className="modal-news-image d-flex flex-column">
                        <img className="w-100" src="img/6.png" alt="" />
                        <div className="image-info d-flex aligh-items-center justify-content-between mt-2">
                            <p className="image-author">Фото: Beslan Shamaev</p>
                            <p className="image-desc">План нового спортивного комплекса в Гамурзиево</p>
                        </div>
                    </div>

                    <div className="modal-news-text mt-32">
                        <p>В Гамурзиевском административном округе Назрани планируют построить новый физкультурно-оздоровительный комплекс с бассейном.
                            Реализация объекта стоимостью более 300 млн рублей запланирована на 2025-2026 годы.
                        </p>
                        <p>
                            Спортивное сооружение возведут на благоустроенной территории сквера через реку Назранка в рамках национального проекта «Демография»,
                            реализуемого по решению Президента страны.
                        </p>

                        <div className="w-100 d-flex justify-content-center aligh-items-center mb-24">
                            <quote className="quote w-50 d-flex">
                                <img src="img/icons/citat.png" alt="" style={{marginRight: '10px'}}/>
                                К 2025-2026 году мы планируем полностью ввести в эксплуатацию физкультурно-оздоровительный комплекс в Гамурзиево. Мы давно искали средства для запуска такого комплекса и вот наши надежды оправдались.

                            </quote>
                        </div>

                        <p>
                            Отметим, что территория ранее участвовала в программе «Формирование комфортной городской среды», а еще раньше здесь была установлена многофункциональная площадка.
                        </p>

                        <p>
                            Здание комплекса будет состоять из трех этажей. На первом этаже разместят бассейн, зал, который предусмотрен для нескольких видов спорта: борьба, бокс, тяжелая атлетика,
                            игровые виды спорта. На втором этаже обустроят тренажерный зал, раздевалки, душевые, санузлы и административные помещения.
                        </p>

                        <div className="w-100 d-flex justify-content-center aligh-items-center mb-24">
                            <div className="col-10 d-flex flex-column">
                                <img className="w-100" src="img/7.png" alt="" />
                                <div className="image-info d-flex aligh-items-center justify-content-between mt-2">
                                    <p className="image-author">Фото: Beslan Shamaev</p>
                                    <p className="image-desc">План нового спортивного комплекса в Гамурзиево</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Наш регион всегда был спортивным, поэтому перспективы у проекта явно хорошие. Большая часть наших земляков проживает в сельской местности, там довольно много молодежи, и они тоже хотят заниматься физкультурой и спортом. Со строительством ФОКа мы получаем бонусы в виде спортивного комплекса с высокой единовременной пропускной способностью до 130 человек за сессию, новые рабочие места, налогооблагаемую базу, пространство для работы субъектов МСП, и, конечно же, новый центр притяжения для жителей Гамурзиево, что очень важно для включения населения в спорт, отметчал ранее Глава региона Махмуд-Али Калиматов.
                        </p>
                    </div>


                </div>

                <div className="modal-gallery d-flex flex-wrap mb-24">
                    <img src="img/8.png" className="mr-2" alt="" />
                    <img src="img/9.png" className="mr-2" alt="" />
                    <img src="img/10.png" className="mr-2" alt="" />
                    <img src="img/11.png" className="mr-2" alt="" />
                    <img src="img/12.png" alt="" />
                    <img src="img/13.png" alt="" />
                    <img src="img/111.png" alt="" />
                    <img src="img/123.png" alt="" />
                    <img src="img/121.png" alt="" />
                </div>

                <div className="modal-tags d-flex flex-column mb-24">
                    <div className="tags d-flex aligh-items-center mb-24">
                        <span className="mr-12">Теги:</span>
                        <a href="" type="button">Спорт</a>
                        <a href="" type="button">Новые проекты</a>
                        <a href="" type="button">Калиматов</a>
                        <a href="" type="button">Гамурзиево</a>
                    </div>
                    <div className="share-buttons d-flex aligh-items-center">
                        <span className="mr-12">Поделиться:</span>
                        <a href="" type="button"><img src="img/icons/social/telegram (1).png" alt="" /></a>
                        <a href="" type="button"><img src="img/icons/social/VK.png" alt="" /></a>
                        <a href="" type="button"><img src="img/icons/social/ok.png" alt="" /></a>
                        <a href="" type="button"><img src="img/icons/social/Whatsapp.png" alt="" /></a>
                        <a href="" type="button"><img src="img/icons/social/Link.png" alt="" /></a>

                    </div>
                </div>

                <div className="see-also d-flex flex-column">
                    <h3 className="mb-24">Смотрите также</h3>
                    <div className="d-flex justify-content-between aligh-items-center">
                        <div className="filtered-news-item">
                            <div className="news-image">
                                <img className="w-100" src="img/14.png" alt="" />
                            </div>

                            <div className="news-text p-25 mt-4">
                                <a href="">
                                    <h4>Для туристов в республике запустят специальную программу</h4>
                                </a>
                                <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span></p>
                            </div>
                        </div>
                        <div className="filtered-news-item ">
                            <div className="news-image">
                                <img className="w-100" src="img/15.png" alt="" />
                            </div>

                            <div className="news-text p-25 mt-4">
                                <a href="">
                                    <h4>Для туристов в республике запустят специальную программу</h4>
                                </a>
                                <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span></p>
                            </div>
                        </div>
                        <div className="filtered-news-item">
                            <div className="news-image">
                                <img className="w-100" src="img/16.png" alt="" />
                            </div>

                            <div className="news-text p-25 mt-4">
                                <a href="">
                                    <h4>Для туристов в республике запустят специальную программу</h4>
                                </a>
                                <p className="news-date">27 июня <span className="news-category ml-4">Проекты</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
