{% raw %}
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    dropDownListObject;
    // define the data with category
    sportsData = [
        'Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'
    ];
    constructor(props) {
        super(props);
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    // on scroll event
    handleScroll() {
        this.dropDownListObject.hidePopup();
    }
    render() {
        return (
        // specifies the tag for render the DropDownList component
        <DropDownListComponent id="ddlelement" ref={(scope) => { this.dropDownListObject = scope; }} dataSource={this.sportsData} placeholder="Select a game"/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}