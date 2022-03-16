import { useState } from 'react';

import { CirclePicker } from 'react-color';
import DrawingPanel from './DrawingPanel';
import '../styles/editor.scss';

const Editor = () => {

    const [ panelWidth, setPanelWidth ] = useState(16);
    const [ panelHeight, setPanelHeight ] = useState(16);
    const [ hideOptions, setHideOptions ] = useState(false);
    const [ hideDrawingPanel, setHideDrawingPanel ] = useState(true);
    const [ buttonText, setButtonText ] = useState("Start Drawing");
    const [ selectedColor, setSelectedColor ] = useState("#f44336");

    const initializeDrawingPanel = () => {
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);

        buttonText === "Start Drawing" ? setButtonText("reset") : setButtonText("Start Drawing");
    }

    const changeColor = (color) => {
        setSelectedColor(color.hex);
    }

    return (
        <div id="editor">
            <h1>Pixel Editor</h1>
            { hideDrawingPanel && <h2>Enter Panel Demisions</h2> }
            { hideDrawingPanel && (
                <div id="options">
                    <div className="option">
                        <input
                            type="number"
                            className="panelInput"
                            defaultValue={panelWidth}
                            onChange={(e) => {setPanelWidth(e.target.value)}}
                        />
                        <span>Width</span>
                    </div>
                    <div className="option">
                        <input
                            type="number"
                            className="panelInput"
                            defaultValue={panelHeight}
                            onChange={(e) => {setPanelHeight(e.target.value)}}
                        />
                        <span>Height</span>
                    </div>
                </div>
            ) }
            <button className="button" onClick={initializeDrawingPanel}>
                {buttonText}
            </button>
            {
                hideOptions && (
                    <CirclePicker
                        color={selectedColor}
                        onChangeComplete={changeColor}
                    />
                )
            }
            {
                hideOptions && (
                    <DrawingPanel
                        width={panelWidth}
                        height={panelHeight}
                        selectedColor={selectedColor}
                    />
                )
            }
        </div>
    )
}

export default Editor;