import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
function App() {
    const genderData = ['Male', 'Female'];
    const dateModel = { showTodayButton: true, placeholder: 'Select date of birth' };
    const dateValue = new Date('04/12/2018');
    const elementModel = { placeholder: 'Enter your name' };
    const genderModel = { dataSource: genderData, placeholder: 'Select gender' };
    return (<div id='container'>
        <div className="control-group">
            <div className="e-heading">
              <h3> Modify Basic Details </h3>
              </div>
              <table>
                  <tr>
                      <td>Name</td>
                      <td className='left'>
                          <InPlaceEditorComponent id='element' mode='Inline' value='Andrew' model={elementModel}/>
                      </td>
                  </tr>
                  <tr>
                      <td>Date of Birth</td>
                      <td className='left'>
                          <InPlaceEditorComponent id='dateofbirth' type="Date" mode='Inline' value={dateValue} model={dateModel}/>
                      </td>
                  </tr>
                  <tr>
                      <td>Gender</td>
                      <td className='left'>
                          <InPlaceEditorComponent id='gender' type="DropDownList" mode='Inline' value='Male' model={genderModel}/>
                      </td>
                  </tr>
              </table>
          </div>
          </div>);
}
export default App;
