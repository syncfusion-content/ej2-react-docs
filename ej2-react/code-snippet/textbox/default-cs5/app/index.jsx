import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    render() {
        return (<div>
                <textarea className="e-input" placeholder="Address"/>
                <div className="e-float-input">
                    <textarea required={true}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text"> Address</label>
                </div>
            </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('input-container'));
