


import { InPlaceEditorComponent } from "@syncfusion/ej2-react-inplace-editor";
import * as React from 'react';

function App () {
  
  let validationRules = { Number: { maxLength: 5 } };

    return (
      <div id="container">
        <table className="table-section">
          <tbody>
            <tr>
              <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <InPlaceEditorComponent
                  mode="Inline"
                  type="Numeric"
                  name="Number"
                  validationRules={validationRules}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
export default App;



