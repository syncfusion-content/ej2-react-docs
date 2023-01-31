import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { getComponent } from '@syncfusion/ej2-base';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    const fontData = ['Arial', 'Serif', 'Sans-serif', 'Cursive', 'Fantasy'];
    const sizeData = [20, 30, 40, 50];
    function clickEventHandler() {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        let text = document.getElementById('text').value;
        let font = document.getElementById("font").value;
        let size = document.getElementById("size").value;
        signature.draw(text, font, size);
    }
    return (<div id='container'>
            <div className='signature-control'>
                <SignatureComponent id='signature'/>
            </div>
            <div id='input'>
                <table>
                    <tbody>
                        <tr>
                            <td><div>Enter the Text:</div></td>
                            <td><input type="text" id="text" placeholder="Enter the Text"></input></td>
                        </tr>
                        <tr>
                            <td><div>Font Family:</div></td>
                            <td>
                                <DropDownListComponent id='font' dataSource={fontData} value='Arial' popupHeight='200px'/>
                            </td>
                        </tr>
                        <tr>
                            <td><div>Font Size:</div></td>
                            <td>
                                <DropDownListComponent id='size' dataSource={sizeData} value={20} popupHeight='200px'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <ButtonComponent onClick={clickEventHandler} isPrimary={true}>Draw</ButtonComponent>
            </div>
        </div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
