import { useParams } from "react-router";

function Images() {
    const { maxCount } = useParams();
    const images = [
        "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg?w=600&q=60",
        "https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg?w=600&q=60",
        "https://cdn.britannica.com/68/145968-050-01768DAD/Vitruvian-Man-Leonardo-da-Vinci-Gallerie-dellAccademia.jpg?w=600&q=60",
        "https://cdn.britannica.com/75/115475-050-9F9B00CE/Self-portrait-drawing-Leonardo-da-Vinci-Royal-Library.jpg?w=600&q=60",
        "https://cdn.britannica.com/19/26319-004-1D28A47C/Virgin-of-the-Rocks-panel-Leonardo-da.jpg?w=600&q=60",
        "https://cdn.britannica.com/45/198845-050-0555C7C0/Head-Woman-oil-earth-poplar-wood-lead.jpg?w=600&q=60",
        "https://cdn.britannica.com/46/198846-050-82EE84FC/Lady-Ermine-oil-panel-Leonardo-da-Vinci.jpg?w=600&q=60",
        "https://cdn.britannica.com/47/198847-050-49EA5BDE/Salvator-Mundi-oil-walnut-panel-Leonardo-da.jpg?w=600&q=60",
        "https://cdn.britannica.com/81/197981-050-076495E8/Ginevra-de-Benci-oil-panel-Leonardo-da.jpg?w=600&q=60",
        "https://cdn.britannica.com/31/3331-004-59797F9E/The-Virgin-and-Child-with-Saint-Anne.jpg?w=600&q=60"
    ];
    return (
        <div>
            {
                images.slice(0, maxCount).map((src, index) => {
                    return <img key={index} src={src} />
                })
            }
        </div>
    );
}

export default Images;