import { useParams } from "react-router";

function FamousPicture() {
    const { width, height } = useParams();
    return <img src="https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg" style={{ width: `${width}px`, height: `${height}px` }}/>
}

export default FamousPicture;