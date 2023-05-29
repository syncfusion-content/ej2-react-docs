import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
class App extends React.Component {
    model = { placeholder: 'Select date' };
    textboxvalidation = { Today: { required: true } };
    datevalidation = { TodayCustom: { required: true } };
    validating(e) {
        e.errorMessage = 'Field should not be empty';
    }
    render() {
        return (<div id='container'>
          <table className="table-section">
            <tbody>
              <tr>
                  <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> Default Error Message </td>
                  <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <InPlaceEditorComponent id='textBox' mode='Inline' type='Date' name='Today' emptyText='dd/mm/yyyy' model={this.model} validationRules={this.textboxvalidation}/>
                  </td>
              </tr>
              <tr>
                  <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> Customized Error Message </td>
                  <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <InPlaceEditorComponent id='date' mode='Inline' type='Date' name='TodayCustom' emptyText='dd/mm/yyyy' model={this.model} validationRules={this.datevalidation} validating={this.validating = this.validating.bind(this)}/>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>);
    }
}
export default App;
