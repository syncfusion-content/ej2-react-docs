import { InPlaceEditorComponent, ValidateEventArgs } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';

function App () {
  let model : object= { placeholder: 'Select date' };
  let textboxvalidation = { Today: { required: true } };
  let datevalidation = { TodayCustom: { required: true } };

  function validating(e: ValidateEventArgs): void {
    e.errorMessage = 'Field should not be empty';
  }

    return (
        <div id='container'>
          <table className="table-section">
            <tbody>
              <tr>
                  <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> Default Error Message </td>
                  <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <InPlaceEditorComponent id='textBox' mode='Inline' type='Date' name='Today' emptyText='dd/mm/yyyy' model={model} validationRules={textboxvalidation} />
                  </td>
              </tr>
              <tr>
                  <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> Customized Error Message </td>
                  <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <InPlaceEditorComponent id='date' mode='Inline' type='Date' name='TodayCustom' emptyText='dd/mm/yyyy' model={model} validationRules={datevalidation}  validating={ validating = validating.bind(this) } />
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
    );
}

export default App;


