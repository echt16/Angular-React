function Reviews() {
    const style = {
        textAlign: 'justify'
    };
    return (
        <ul>
            <li style={style}>
                "Гордость и предубеждение" — это классический роман, написанный Джейн Остин, впервые опубликованный в 1813 году. Книга повествует о жизни и отношениях Элизабет Беннет, одной из пяти дочерей среднеобеспеченной семьи, и мистера Дарси, богатого и высокомерного джентльмена.
            </li>
            <li style={style}>
                Одна из центральных тем романа — это преодоление предвзятости и гордости, которые мешают главным героям увидеть истинную сущность друг друга. Элизабет Беннет, умная и независимая молодая женщина, первоначально видит в мистере Дарси лишь высокомерие и презрение. Мистер Дарси, в свою очередь, борется со своими собственными предрассудками и социальными предубеждениями.
            </li>
        </ul>
    );
}

function Ex1() {
    const style = {
        textAlign: "left"
    };
    return (
        <div className="App">
            <h1>Гордость и предубеждение (Джейн Остин)</h1>
            <p>432 pages</p>
            <h2 style={style}>Reviews</h2>
            <Reviews />
        </div>
    );
}

export default Ex1;