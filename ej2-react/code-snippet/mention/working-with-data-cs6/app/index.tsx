

import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App (){
  let mentionTarget: string = '#mentionElement';
  let countriesData: { [key: string]: Object }[] = [
    { Country: { Name: 'Australia' }, Code: { ID: 'AU' } },
    { Country: { Name: 'Bermuda' }, Code: { ID: 'BM' } },
    { Country: { Name: 'Canada' }, Code: { ID: 'CA' } },
    { Country: { Name: 'Cameroon' }, Code: { ID: 'CM' } },
    { Country: { Name: 'Denmark' }, Code: { ID: 'DK' } },
    { Country: { Name: 'France' }, Code: { ID: 'FR' } },
  ];
  let fields: Object = { text: 'Country.Name',value: 'Code.ID'};
    return (
      <div id='mention_default'>
        <table>
            <tr>
                <td>
                   <label id="comment">Comments</label>
                    <div id="mentionElement" placeholder='Type @ and tag country'></div>
                </td>
            </tr>
        </table>
        <MentionComponent target={mentionTarget} dataSource={countriesData} fields={fields} ></MentionComponent>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('sample'));



