import Guest from "@/Layouts/GuestLayout.jsx";
import { Link } from '@inertiajs/react';
import "../../../../public/css/region.css";
import React, { useState } from 'react';

export default function History() {

    const [tab, setTab] = React.useState(false);

    return(
        <Guest>
            <main className="mt-40">
                <div className="container">
                    <h2 className="mb-32">История Республики Ингушетия</h2>
                </div>
                <div className="container d-flex w-full  col-xxl-12 news-page">
                    <div className="main-left col-xxl-9">
                        <div className="page-head d-flex flex-column">


                            <div className="republic-history-image">
                                <img className="w-100" src="../../img/image 6.png" alt=""/>
                                <div className="image-info d-flex aligh-items-center justify-content-between mt-2">
                                    <p className="image-desc">Город Солнца, картина Алана Дзаурова</p>
                                </div>
                            </div>
                            <p>
                                Ингуши – народ с древней и богатой историей. Ингушей антропологи относят к
                                кавкасионскому
                                антропологическому типу большой кавказской или кавказоидной расы. В России кавказоидную
                                расу
                                называют европеоидной. Впервые название «кавказская раса» дал белой расе в начале XIX в.
                                немецкий ученый И.Ф. Блюменбах.
                                Он владел самой большой в мире коллекцией черепов, и, при их изучении, он пришел к
                                выводу, что
                                наиболее древними представителями белой расы являются кавказцы.
                            </p>

                            <p>Представители кавказоидной расы заселили с Кавказа Европу еще в очень далекие времена. В
                                1956
                                году, когда, благодаря тбилисским антропологам,
                                в научный оборот уже внедрилось название «кавкасионский тип», московский антрополог Г.Ф.
                                Дебец
                                отметил, что этот тип сохранил в себе черты
                                старого европеоидного, кроманьонского населения, обладавшего таким же высокими скелетами
                                и
                                массивными черепами. В.П. Алексеев по итогам своих собственных
                                исследований подтвердил это мнение, добавив только, что кавкасионский тип имеет не
                                только все
                                кроманьонские признаки, но и южный генезис.
                            </p>
                            <p>
                                На Кавказе известно несколько антропологических типов: кавкасионский – в центре
                                Кавказа, каспийский – на Северо-Восточном Кавказе, понтийский – на Северо-Западном
                                Кавказе и
                                иберийский – в Закавказье.
                            </p>

                            <p>Кавкасионский тип имеют народы, обитающие на центральном Кавказе на территории бытования
                                кобанской археологической культуры (сер.II – конец I тыс. до н.э.) и расселения алан
                                (I-XV вв.)
                                – ингуши, чеченцы, осетины, балкарцы, карачаевцы, кабардинцы, черкесы, тушины, хевсуры,
                                сваны и
                                др. горские грузинские этнографические группы. Кроме ингушей, все народы имеют сильную
                                примесь
                                других антропологических типов. Антрополог В.В. Бунак писал, что «среди ингушей этот
                                собственный
                                кавказский тип сохранился более чем у кого-либо из других северокавказских народов».</p>
                        </div>

                        <div className="history-tabs">
                            <div className="tab">
                                <input checked id="tab-btn-1" name="tab-btn" type="radio" value=""/>
                                <label htmlFor="tab-btn-1">До нашей эры</label>
                                <input id="tab-btn-2" name="tab-btn" type="radio" value=""/>
                                <label htmlFor="tab-btn-2">I-X Н.Э.</label>
                                <input id="tab-btn-3" name="tab-btn" type="radio" value=""/>
                                <label htmlFor="tab-btn-3">X-XVII Н.Э.</label>
                                <input id="tab-btn-4" name="tab-btn" type="radio" value=""/>
                                <label htmlFor="tab-btn-4">XVII-XIX Н.Э.</label>
                                <input id="tab-btn-5" name="tab-btn" type="radio" value=""/>
                                <label htmlFor="tab-btn-5">XX - XXI</label>
                                <div className="tab-content" id="content-1">
                                    <p>
                                        В областях, окружающих Черное море — Кавказе, Анатолии, Балканах, Карпатах, в
                                        Северном
                                        Причерноморье — в IV-III тыс. до н.э. сформировалась циркумпонтийская
                                        металлургическая
                                        провинция, создателями которой являлись северокавказцы. Здесь свершались
                                        важнейшие
                                        открытия и развивались производства, определявшие характер и пути развития
                                        множества
                                        культур Евразии; подразумевается, в частности, горно-металлургический промысел и
                                        формирование здесь циркумпонтийской провинции — основной и центральной системы
                                        производящих центров для всего Старого Света на протяжении почти двух тысяч лет:
                                        со второй половины IV тысячелетия по начало II тысячелетия до н.э.
                                    </p>
                                    <p>
                                        В конце IV — начале III тыс. до н.э. в Европу вторгаются орды кочевников,
                                        вышедших
                                        несколько тысячелетий назад из глубин Азии, говоривших на праиндоевропейских
                                        языках. В
                                        этот период в районах, прилегающих к Черному морю (циркумпонтийская провинция)
                                        начинается строительство каменных крепостей,
                                        которые должны были защитить местное население от завоевателей.
                                    </p>
                                    <p>
                                        В конце IV тыс. до н.э. происходит распад восточнокавказской семьи на нахскую и
                                        дагестанскую ветви. В материальной культуре это проявилось в складывании
                                        майкопской и
                                        куро-аракской культур.
                                    </p>
                                    <p>
                                        С конца IV тыс. до н.э. далекие предки ингушей начинают несколькими волнами
                                        переселяться
                                        в Закавказье и Переднюю Азию. Это привело к складыванию в Передней Азии
                                        хурритской
                                        цивилизации. (Во II-I тыс. до н.э. хурритами было создано более десятка
                                        государств,
                                        наиболее крупными из которых являлись в Передней Азии — Миттания (Ханигальбат,
                                        Нахарина), Биайнили (Урарту), Аррапхэ, Мана (Матиена), Алзи, Ацци-Хаяса (Страна
                                        диаухов), Кулха (Колхида) и др., в Малой Азии — Киццуватна, и др. Также в
                                        Хеттском
                                        царстве хурриты составляли значительную часть населения.)
                                    </p>
                                    <p>
                                        Во II тыс. до н.э. на Северном Кавказе майкопскую культуру сменила ее
                                        генетическая
                                        наследница — северокавказская культура. С конца II тыс. до н.э. на основе
                                        северокавказской культуры формируется кобанская культура, которая была
                                        распространена на
                                        территории от р. Аргун на востоке, до междуречья Малки и Кубани на западе. На
                                        юго-восточном побережье Черного моря складывается колхидская культура, которую
                                        многие
                                        исследователи объединяют с кобанской в колхидо-кобанскую культуру. Кроме
                                        единства
                                        материальной культуры здесь наблюдаются и одинаковые этнонимы. В конце I тыс. до
                                        н.э.
                                        колхидские племена переселяются на Центральный Кавказ. Во второй половине I тыс.
                                        до н.э.
                                        кобанскими племенами было создано предгосударственное объединение племен «Малх»,
                                        которое было разгромлено во II в. до н.э. в результате похода селевкидского царя
                                        Антиоха
                                        III.
                                    </p>
                                </div>
                                <div className="tab-content" id="content-2">
                                    <p>
                                        По данным античных, грузинских, армянских письменных источников в I тыс. до н.э.
                                        — I
                                        тыс. н.э. известны этнонимы малхи, махалоны, кавкасиане, хамекиты, дурдзуки,
                                        глигвы,
                                        двалы, дигоры, колхи, халибы, санары, махалы, ганахи, халы, сьербы, троглодиты,
                                        кисты и
                                        др., под которыми в различные периоды различным авторам были известны племена
                                        далеких
                                        предков ингушей. Часто древние авторы называли северокавказские племена (в том
                                        числе и
                                        праингушские) скифами и сарматами.
                                    </p>
                                    <p>
                                        С начала I тыс. н.э. на все праингушские племена Северного Кавказа
                                        распространяется
                                        этноним аланы. В IV-V вв., в период великого переселения народов, аланы
                                        участвуют в
                                        походах на Западную Европу. В 411-429 гг. в Испании существует алано-вандальское
                                        королевство. В 435-533 гг. существует алано-вандальское королевство в Северной
                                        Африке. В
                                        VI-VII вв. аланы участвуют в ирано-византийских войнах. В VII-X вв. аланы
                                        находятся в
                                        политической зависимости от Хазарского каганата. В VII-IX вв. аланы участвуют в
                                        арабо-хазарских войнах на стороне хазар.
                                    </p>
                                </div>
                                <div className="tab-content" id="content-3">
                                    <p>
                                        В Х в. складывается государство алан со столицей г. Магас («Город солнца»). В
                                        первой
                                        половине XIII в. Аланское государство было разгромлено в результате монгольских
                                        завоевательных походов. Территория Алании была включена в состав Золотой Орды.
                                        Источники
                                        сообщают о мужественной борьбе алан против завоевателей. Горную часть
                                        современной
                                        Ингушетии они так и не смогли покорить. Аланы сохранили свой язык и культуру в
                                        горах
                                        Ингушетии и в прилегающих горных районах Чечни.
                                    </p>
                                    <p>
                                        В конце XIV в. аланы подверглись нашествию войска среднеазиатского завоевателя
                                        Тамерлана. Тамерлан проник в предгорья Ингушетии в районе современных селений
                                        Галашки-Мужичи-Даттых-Ангушт.
                                    </p>
                                    <p>
                                        В начале XV в. ингуши возвращаются на плоскость, селятся по долинам рр. Сунжа,
                                        Назранка,
                                        Камбилеевка, Ачалуки. Но во второй половине XVI в., в результате похода
                                        кабардинского
                                        князя Темрюка (декабрь 1562 г.), поддержанного ногайскими мурзами и русским
                                        царем Иваном
                                        IV Грозным, ингуши вновь вынуждены были, покинув плоскость, уйти в горы.
                                    </p>
                                    <p>
                                        В горах складываются общества, основанные на территориальном принципе — шахары.
                                        Возникает предгосударственное устройство общественной жизни, основанное на
                                        демократических принципах.
                                    </p>
                                    <p>
                                        Новое возвращение ингушей на плоскость начинается с начала XVII в. Миграция шла
                                        по
                                        ущельям рек Фортанга, Асса, Терек Сунжа, Камбилеевка.
                                    </p>

                                    <p>
                                        По свидетельству грузинского географа Вахушти Багратиони уже в XVII в. в Тарской
                                        долине
                                        известно крупное ингушское селение Ангушт, от названия которого и произошел
                                        русский
                                        этноним «ингуши». Миграция на плоскость продолжалась до первой половины XIX в. В
                                        XIX в.
                                        определилась территория современного расселения ингушей.
                                    </p>
                                </div>
                                <div className="tab-content" id="content-4">
                                    <p>
                                        В марте 1770 г. в с. Ангушт ингушами был подписан договор с Россией о вступлении
                                        ингушей
                                        в подданство Российской империи. В 1784 г. вблизи ингушского селения Заур-Ков
                                        была
                                        основана крепость Владикавказ. В 1810 г. на территории Назрани — заложена
                                        крепость
                                        Назрань. П.Г. Бутков писал: «Прежде всего, для связи кавказской линии с Грузией,
                                        в 1784
                                        году построена отрядом войск крепость у Терека, при входе в ущелье Кавказских
                                        гор, при
                                        ингушевской деревне Зауре, и названа Владикавказом».
                                    </p>
                                    <p>
                                        В 40-60 гг. XIX в. русская администрация на Кавказе проводит выселение ингушей
                                        из
                                        селений, расположенных по рекам Фортанга, Асса, Сунжа, Камбилеевка,
                                        переименовывают
                                        освобожденные таким образом селения в станицы и заселяют их казаками. Ингуши из
                                        этих
                                        селений частью были выселены в Турцию, частью погибли от холода, голода и
                                        болезней,
                                        оставшиеся расселились по другим ингушским селениям.
                                    </p>
                                    <p>
                                        В 1860 г. военное управление Кавказом было ликвидировано, и на Северном Кавказе
                                        были
                                        созданы Кубанская и Терская области. Ингуши входили в Ингушский округ Терской
                                        области. В
                                        1871 г. Ингушский округ был объединен с Осетинским округом во Владикавказский
                                        округ. В
                                        1888 г. Ингушетия была подчинена Сунженскому (казачьему) отделу Терской области.
                                        В
                                        результате упорной борьбы в 1905 г. ингуши добились выделения временно Ингушетии
                                        в
                                        самостоятельный Назрановский округ Терской области. В 1909 г. Назрановский округ
                                        был
                                        узаконен.
                                    </p>
                                </div>
                                <div className="tab-content" id="content-5">
                                    <p>
                                        В ноябре 1917 г. была провозглашена Горская Республика. 1 декабря 1917 г. было
                                        создано временное Терское правительство. 3 марта 1918 г. была провозглашена
                                        Терская народная советская республика. С февраля 1919 г. по март 1920 г.
                                        плоскостная Ингушетия была оккупирована армией генерала А.И. Деникина.
                                    </p>
                                    <p>
                                        В период революций 1917 г. и гражданской войны ингуши активно поддержали
                                        большевиков, поверив в их обещания справедливого решения национального вопроса.
                                        Тысячи ингушей погибли в борьбе за Советскую власть в период гражданской войны.
                                        Генерал белой армии А.И. Деникин в своих мемуарах писал, что именно в Ингушетии
                                        захлебнулось его победное шествие по России.
                                    </p>
                                    <p>
                                        В марте 1920 г. была восстановлена Терская народная советская республика. 17
                                        ноября 1920 г. была провозглашена Горская ССР. Декретом ВЦИК от 20 января 1921
                                        г. была создана Горская АССР.
                                    </p>
                                    <p>
                                        В 1921-1924 гг. Ингушетия входила в состав Горской АССР. В 1924 г., в связи с
                                        распадом Горской АССР, была образована Ингушская автономная область с
                                        административным центром в г. Владикавказе.
                                    </p>
                                    <p>
                                        В 1929 г. Сунженский казачий округ, состоящий из станиц, основанных на месте
                                        ингушских селений, был включен в состав Чечни. В июле 1933 г. г. Орджоникидзе
                                        (переименован по инициативе ингушского руководства в 1931 г.) был передан
                                        Осетии, а в начале 1934 г., без учета мнения народа, Ингушетия была присоединена
                                        к Чечне и образована Чечено-Ингушская автономная область (с 1936 г. —
                                        Чечено-Ингушская автономная советская социалистическая республика).
                                    </p>
                                    <p>
                                        С началом Великой Отечественной войны ингуши, наравне с другими народами
                                        Советского Союза, защищали свою родину от немецко-фашистских захватчиков. С
                                        самого первого дня войны несколько десятков ингушей участвовали в защите
                                        Брестской крепости. Ингуши приняли участие в обороне Одессы, Кавказа,
                                        Ленинграда, Москвы, в Сталинградской битве, в битве на Курской дуге, в боях за
                                        освобождение Европы. Более 50 ингушей были представлены к званию Героя
                                        Советского Союза. У ингушского города Малгобек в 1942 г. было остановлено
                                        победное шествие немецкой армии по Северному Кавказу. В 2007 г. Малгобеку по
                                        инициативе Президента РИ М. Зязикова было присвоено почетное звание «Город
                                        воинской славы».

                                    </p>
                                    <p>
                                        В 1944 г. Чечено-Ингушская АССР была ликвидирована, а ингуши вместе с чеченцами
                                        выселены в Казахстан и Среднюю Азию. В ссылке погибло до трети ингушей.
                                        Территория Ингушетии была разделена между Осетией, вновь созданной Грозненской
                                        областью и Грузией.
                                    </p>
                                    <p>
                                        В 1957 г. Чечено-Ингушская АССР была частично восстановлена. Ингушский
                                        Пригородный район, значительная часть которого впоследствии была включена в
                                        состав г. Орджоникидзе (Владикавказа), был оставлен в составе Северной Осетии.
                                    </p>
                                    <p>
                                        В мае 1991 г. Чечено-Ингушская АССР была переименована в Чечено-Ингушскую
                                        Республику. Осенью 1991 г. Чечня отделилась от Ингушетии, было провозглашено
                                        создание Чеченской Республики, избран свой президент. В декабре 1991 г. на
                                        всенародном референдуме ингуши подтвердили, что Ингушетия является частью
                                        Российской Федерации. 26 апреля 1991 г. Верховным Советом РФ был принят Закон «О
                                        реабилитации репрессированных народов», а 4 июня 1992 г. принят Закон «Об
                                        образовании Ингушской Республики в составе РФ».
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="main-right  ml-32">
                        <div className="d-flex flex-column mb-32 region-links">
                            <ul className="region-pager">
                                <li><Link href="/region">О Республике</Link></li>
                                <li className="active"><Link href="/history">История</Link></li>
                                <li><Link href="/economic">Экономика</Link></li>
                                <li><Link href="/municipality">Муниципальные образования</Link></li>
                                <li><Link href="">Социально-экономическое развитие</Link></li>
                                <li><Link href="">Реализация стратегических инициатив Президента РФ</Link></li>
                                <li><Link href="">Поддержка семей военнослужащих</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </Guest>
)
}
