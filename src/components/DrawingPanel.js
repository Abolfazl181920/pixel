import { useRef } from 'react';

import Row from './Row';
import { exportComponentAsPNG } from 'react-component-export-image';
import '../styles/drawingpanel.scss';

const DrawingPanel = ({ width, height, selectedColor }) => {

    const panelRef = useRef();

    let rows = [];
    
    for (let i = 0; i < height; i++) {
        rows.push( <Row key={i} width={width} selectedColor={selectedColor} /> );
    }

    return (
        <div id="drawingPanel">
            <div id="pixels" ref={panelRef}>
                {rows}
            </div>
            <button
                className="button"
                onClick={() => exportComponentAsPNG(panelRef)}
            >
                Export As PNG
            </button>
        </div>
    )
}

export default DrawingPanel;