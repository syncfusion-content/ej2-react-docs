

import { ColorPickerComponent, ColorPickerEventArgs, PaletteTileEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    let presets: { [key: string]: string[] } = {
        'custom1': ['#ef9a9a', '#e57373', '#ef5350',
                        '#f44336', '#f48fb1', '#f06292',
                        '#ec407a', '#e91e63', '#ce93d8',
                        '#ba68c8', '#ab47bc', '#9c27b0',
                        '#b39ddb', '#9575cd', '#7e57c2', '#673AB7'],
        'custom2': ['#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5',
                        '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3',
                        '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4',
                        '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4'],
        'custom3': ['#80CBC4', '#4DB6AC', '#26A69A', '#009688',
                        '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50',
                        '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#E6EE9C',
                        '#DCE775', '#D4E157', '#CDDC39']
    };

    // Triggers before rendering each palette tile.
    function tileRender(args: PaletteTileEventArgs): void {
        args.element.classList.add("e-icons");
        args.element.classList.add("e-custom-tile");
    }

    // riggers while selecting colors from palette.
    function change(args: ColorPickerEventArgs): void {
        (document.getElementById('preview') as HTMLElement).style.backgroundColor = args.currentValue.hex;
    }

    return (
        <div id='container'>
        <div className='wrap'>
            <div id="preview"/>
            <h4>Select Color</h4>
            <ColorPickerComponent id='element' mode='Palette' modeSwitcher={false} inline={true} showButtons={false} columns={4} presetColors={presets} beforeTileRender={tileRender} change ={change}/>
        </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


