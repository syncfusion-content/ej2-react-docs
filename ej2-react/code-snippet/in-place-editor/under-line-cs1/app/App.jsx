import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
class App extends React.Component {
    model = { placeholder: 'Enter some text' };
    render() {
        return (<div id='container'>
         <h4>Example of data-underline attribute</h4>
         <table className="table-section">
            <tbody>
             <tr>
                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> Intractable UI </td>
                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <InPlaceEditorComponent id='default' mode='Inline' value='Andrew' model={this.model}/>
                </td>
             </tr>
             <tr>
                 <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> Normal UI </td>
                 <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <InPlaceEditorComponent id='element' data-underline='false' mode='Inline' value='Andrew' model={this.model}/>
                 </td>
              </tr>
              </tbody>
           </table>
     </div>);
    }
}
export default App;
