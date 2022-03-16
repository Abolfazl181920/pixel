import Pixel from './Pixel';
import '../styles/row.scss';

const Row = ({ selectedColor, width }) => {

    let pixels = [];

    for (let i = 0; i < width; i++) {
        pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
    }
    
    return (
        <div className="row"> {pixels} </div>
    )
}

export default Row;