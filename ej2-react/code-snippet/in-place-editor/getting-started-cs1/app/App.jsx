import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
function App() {
    const frameWorkList = ['Andrew Fuller', 'Janet Leverling', 'Laura Callahan', 'Margaret Hamilt', 'Michael Suyama', 'Nancy Davloio', 'Robert King'];
    const model = { dataSource: frameWorkList, placeholder: 'Select employee', popupHeight: '200px' };
    const url = "https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData";
    const actionSuccess = (e) => {
        const newEle = document.getElementById('newValue');
        const oldEle = document.getElementById('oldValue');
        oldEle.textContent = newEle.textContent;
        newEle.textContent = e.value;
    };
    return (<div id='container'>
        <div className="control-group">
              Best Employee of the year: <InPlaceEditorComponent id='element' type="DropDownList" mode='Inline' value='Andrew Fuller' name='Employee' url={url} primaryKey="Employee" adaptor="UrlAdaptor" model={model} actionSuccess={actionSuccess}/>
        </div>
        <table style={{ 'margin': 'auto', 'width': '50%' }}>
            <tr>
                <td style={{ textAlign: 'left' }}>
                  Old Value :
                </td>
                <td id="oldValue" style={{ textAlign: 'left' }}/>
            </tr>
            <tr>
                <td style={{ textAlign: 'left' }}>
                      New Value :
                </td>
                <td id="newValue" style={{ textAlign: 'left' }}>
                      Andrew Fuller
                </td>
              </tr>
          </table>
    </div>);
}
export default App;