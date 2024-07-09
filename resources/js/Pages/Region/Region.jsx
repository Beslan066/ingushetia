import "../../../../public/css/region.css";
import Guest from "@/Layouts/GuestLayout.jsx";

export default function Region() {
    return (
        <Guest>
            <main className="mt-40">
                <div className="container">
                    <h2>О республике</h2>
                </div>
                <div className="container d-flex w-full  col-xxl-12 news-page">
                    <div className="main-left col-xxl-9">
                        <div className="page-head d-flex flex-column">

                            <p>
                                Ингушетия самая молодая республика в составе Российской Федерации, образованная 4 июня
                                1992
                                года, расположена на северных
                                склонах предгорья Большого Кавказского хребта, в центральной его части.
                            </p>

                            <p>Республика Ингушетия граничит с Северной Осетией и Чеченской Республикой. По территории
                                республики проходит участок государственной
                                границы Российской Федерации с Республикой Грузия.
                            </p>
                            <p>
                                В республике насчитывается 4 района, 5 городов республиканского подчинения. Столица
                                —город
                                Магас.
                                Климат континентальный. Основная река — Сунжа. Протекают также реки Асса, Фортанга,
                                Армхи,
                                Гулойхи, Фазтонка, Чемульга. Общая площадь
                                бассейна рек составляет 3073 км².
                            </p>
                        </div>

                        <div className="region-accordion mb-40">
                            <section className="drawers">
                                <div className="accordion-header" data-target="drawer-1">
                                    <span>География</span>
                                    <img src="../../img/icons/Plus.svg" alt="" className="icon"/>
                                </div>
                                <div className="drawer" id="drawer-1">
                                    <div className="drawer-content">
                                        <p>Территория И. расположена...</p>
                                    </div>
                                </div>

                                <div className="accordion-header" data-target="drawer-2">
                                    <span>Рельеф, геология и полезные ископаемые</span>
                                    <img src="../../img/icons/Plus.svg" alt="" className="icon"/>
                                </div>
                                <div className="drawer" id="drawer-2">
                                    <div className="drawer-content">
                                        <p>Важнейшие полезные ископаемые И. – нефть и природный газ...</p>
                                    </div>
                                </div>

                                <div className="accordion-header" data-target="drawer-3">
                                    <span>Полезные ископаемые</span>
                                    <img src="../../img/icons/Plus.svg" alt="" className="icon"/>
                                </div>
                                <div className="drawer" id="drawer-3">
                                    <div className="drawer-content">
                                        <p>Территория И. расположена в пределах складчато-покровной системы
                                            Большого Кавказа Альпийско-Гималайского подвижного пояса.
                                            Северная часть И. (Терский и Сунженский хребты, разделённые
                                            Алханчуртской долиной, Чеченская равнина) находится в пределах
                                            Терско-Каспийского передового прогиба (заполнен
                                            олигоцен-неогеновой молассой), строение которого осложнено
                                            Терским и Сунженским валами.
                                            Тектоническая зона северного склона Большого Кавказа (Чёрные горы,
                                            Пастбищный и Скалистый хребты) сложена наклонно залегающими
                                            шельфовыми
                                            терригенно-карбонатными отложениями верхней юры – эоцена
                                            (глинами, песчаниками, мергелями, известняками, доломитами).
                                            В осевой зоне (антиклинорий Бокового хребта) развита интенсивно
                                            деформированная черносланцевая формация нижней и средней юры.
                                            Горная Ингушетия область интенсивной сейсмичности.
                                        </p>
                                        <img className="w-100" src="../../img/Rectangle 1.png" alt=""/>
                                    </div>
                                </div>
                            </section>
                        </div>


                    </div>

                    <div className="main-right  ml-32">
                        <div className="d-flex flex-column mb-32 region-links">
                            <ul className="region-pager">
                                <li className="active"><a href="region.html">О Республике</a></li>
                                <li><a href="history.html">История</a></li>
                                <li><a href="economic.html">Экономика</a></li>
                                <li><a href="municipality.html">Муниципальные образования</a></li>
                                <li><a href="">Социально-экономическое развитие</a></li>
                                <li><a href="">Реализация стратегических инициатив Президента РФ</a></li>
                                <li><a href="">Поддержка семей военнослужащих</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </Guest>
    )
}
