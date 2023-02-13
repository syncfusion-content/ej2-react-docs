{% raw %}
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the array of data
    sportsData = [
        { Id: 'game1', Game: 'Badminton' },
        { Id: 'game2', Game: 'Football' },
        { Id: 'game3', Game: 'Tennis' }
    ];
    // maps the appropriate column to fields property
    fields = { text: 'Game', value: 'Id' };
    dropDownListObject;
    onclick() {
        if (this.dropDownListObject.list) {
            // Remove the selected value if 0th index selected
            if (this.dropDownListObject.index === 0) {
                this.dropDownListObject.value = null;
                this.dropDownListObject.dataBind();
            }
            // remove first item in list
            (this.dropDownListObject.list.querySelectorAll('li')[0]).remove();
            if (!this.dropDownListObject.list.querySelectorAll('li')[0]) {
                this.dropDownListObject.dataSource = [];
                // enable the nodata template when no data source is empty.
                this.dropDownListObject.list.classList.add('e-nodata');
            }
        }
        else {
            // remove first item in list
            this.dropDownListObject.dataSource.splice(0, 1);
        }
    }
    render() {
        return (
        // specifies the tag for render the DropDownList component
        <div>
            <DropDownListComponent id="ddlelement" ref={(scope) => { this.dropDownListObject = scope; }} dataSource={this.sportsData} fields={this.fields} placeholder="Select a game"/>
            <button id='btn' className="e-control e-btn" onClick={this.onclick = this.onclick.bind(this)}>
            Remove 0th item </button>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}