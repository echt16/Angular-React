import './Ex3.css';

function Ingredients() {
    return (
        <ul>
            <li>
                Спагетти — 400 г
            </li>
            <li>
                Панчетта или гуанчале — 150 г

            </li>
            <li>
                Яйца — 4 шт. (3 желтка и 1 целое яйцо)

            </li>
            <li>
                Пармезан — 100 г (натертый)

            </li>
            <li>
                Пекорино романо — 50 г (натертый)

            </li>
            <li>
                Чеснок — 1 зубчик (по желанию)

            </li>
            <li>
                Оливковое масло — 1 ст. ложка

            </li>
            <li>
                Соль — по вкусу

            </li>
            <li>
                Черный перец — по вкусу

            </li>
        </ul>
    );
}

function Recipe() {
    return (
        <ol>
            <li>Приготовление пасты:
                <ul>
                    <li>В большой кастрюле доведите до кипения воду, добавьте соль и варите спагетти согласно инструкции на упаковке до состояния аль денте (немного недоваренными, чтобы они оставались немного твердыми).</li>
                </ul>
            </li>
            <li>Приготовление соуса:
                <ul>
                    <li>Пока паста варится, нарежьте панчетту или гуанчале кубиками.</li>
                    <li>В большой сковороде нагрейте оливковое масло на среднем огне. Если вы используете чеснок, добавьте его в масло и обжаривайте до золотистого цвета, затем уберите чеснок.</li>
                    <li>Добавьте нарезанную панчетту или гуанчале и обжаривайте до хрустящего состояния, примерно 5-7 минут. Уменьшите огонь до минимального.</li>
                </ul>
            </li>
            <li>Смешивание яиц и сыра:
                <ul>
                    <li>В миске взбейте 3 желтка и 1 целое яйцо.</li>
                    <li>Добавьте натертые пармезан и пекорино романо, хорошо перемешайте до однородной массы. Добавьте немного свежемолотого черного перца.</li>
                </ul>
            </li>
        </ol>
    );
}

function Ex3() {
    return (
        <div className='container'>
            <h3>Паста Карбонара</h3>
            <h2>Ингрeдиенты</h2>
            <Ingredients />
            <Recipe />
            <img style={{ height: '100px', width: 'auto' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjA97bQHjHAUGFT46evtuhLTiD-dz-Hp_ugQ&s' />
        </div>
    );
}

export default Ex3;