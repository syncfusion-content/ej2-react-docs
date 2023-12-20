import { AutoCompleteComponent, Inject, VirtualScroll } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        for (let i = 1; i <= 150; i++) {
            let item = {};
            item.id = 'id' + i;
            item.text = `Item ${i}`;
            // Generate a random number between 1 and 4 to determine the group
            const randomGroup = Math.floor(Math.random() * 4) + 1;
            switch (randomGroup) {
                case 1:
                    item.group = 'Group A';
                    break;
                case 2:
                    item.group = 'Group B';
                    break;
                case 3:
                    item.group = 'Group C';
                    break;
                case 4:
                    item.group = 'Group D';
                    break;
                default:
                    break;
            }
            this.records.push(item);
        }
    }
    fields = { groupBy: 'group', value: 'text' };
    render() {
        return (
            // specifies the tag for render the AutoComplete component
            <AutoCompleteComponent id="datas" dataSource={this.records} placeholder="e.g. Item 1" enableVirtualization={true} fields={this.fields} allowFiltering={true} popupHeight="200px">
                <Inject services={[VirtualScroll]} />
            </AutoCompleteComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
