{% raw %}



import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    // define the JSON of data
    private sportsData: { [key: string]: Object }[] = [
        { Id: 'game1', Game: 'Badminton' },
        { Id: 'game2', Game: 'Football' },
        { Id: 'game3', Game: 'Tennis' }
    ];
    private dropDownListObject: any;
    // maps the appropriate column to fields property
    private fields: object = { text: 'Game', value: 'Id' };
    public onclickfirst(){
    this.dropDownListObject.addItem({Id: 'game0', Game: 'Hockey'}, 0);
    }
    public onclick(){
    this.dropDownListObject.addItem({Id: 'game4', Game: 'Golf'}, 2);
    }
    public onclicklast(){
    this.dropDownListObject.addItem({Id: 'game5', Game: 'Cricket'});
    }
    public render() {
        return (
             // specifies the tag for render the DropDownList component
            <div>
                <DropDownListComponent id="ddlelement" ref={(scope) => { this.dropDownListObject = scope; }}dataSource={this.sportsData} fields={this.fields} placeholder="Select a game" />
                <div id="btn1Div">
                <button id='btn' className="e-control e-btn" onClick={this.onclickfirst = this.onclickfirst.bind(this)}>
                add item (Hockey) in first</button>
            </div>
            <div id="btn2Div">
                <button id='btn2' className="e-control e-btn" onClick={ this.onclick = this.onclick.bind(this)}> add item (Golf) in between</button>
            </div>
            <div id="btn3Div">
                <button id='btn3' className="e-control e-btn" onClick={this.onclicklast = this.onclicklast.bind(this)}>
                  add item (Cricket) in last</button>
            </div>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));



{% endraw %}