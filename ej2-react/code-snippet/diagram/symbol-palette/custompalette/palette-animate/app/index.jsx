import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import '../index.css';
import { SymbolPaletteComponent } from "@syncfusion/ej2-react-diagrams";

// Initialize the basic shapes for the symbol palette
const getBasicShapes = () => [
    {
        id: 'rectangle',
        shape: { type: 'Basic', shape: 'Rectangle' },
    },
    {
        id: 'plus',
        shape: { type: 'Basic', shape: 'Plus' },
    },
    {
        id: 'triangle',
        shape: { type: 'Basic', shape: 'RightTriangle' },
    },
];

function App() {
    const symbolPaletteRef = useRef(null);
    const [enableAnimation, setEnableAnimation] = useState(true);
    // Toggle animation function
    const toggleAnimation = (event) => {
        setEnableAnimation(event.target.checked);
        if (symbolPaletteRef.current) {
            symbolPaletteRef.current.refresh();
        }
    };
    // Palettes array with basic shapes
    const palettes = [
        {
            id: 'basic',
            symbols: getBasicShapes(),
            title: 'Basic Shapes',
            iconCss: 'e-ddb-icons e-basic'
        },
    ];
    return (
        <div>
            <label htmlFor="enableAnimation">Enable Animation</label>
            <input id="enableAnimation" type="checkbox" checked={enableAnimation}
                onChange={toggleAnimation} />
            <SymbolPaletteComponent id="symbolpalette" ref={symbolPaletteRef}
                palettes={palettes} enableAnimation={enableAnimation} />
        </div>
    );
}

// Rendering the App component
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
