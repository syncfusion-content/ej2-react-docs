{% raw %}
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    dropDownListObject;
    sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    onclick() {
        this.dropDownListObject.value = null;
    }
    render() {
        return (
        // specifies the tag for render the DropDownList component
        <div>
        <DropDownListComponent id="ddlelement" ref={(scope) => { this.dropDownListObject = scope; }} dataSource={this.sportsData} placeholder="Select a game"/>
        <button id='btn' className="e-control e-btn" onClick={this.onclick = this.onclick.bind(this)}> Set null to value property</button>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}