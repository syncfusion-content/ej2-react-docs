

import * as React from "react";
import * as ReactDOM from "react-dom";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
export default class App extends React.Component<{}, {}> {
        constructor(props: any) {
            super(props);
            this.onKeyup = this.onKeyup.bind(this);
        }
    public onKeyup(e: React.KeyboardEvent) {
      const str = (e.target as HTMLInputElement).value.match(/^[0-9]+$/);
      if (!((str && str.length > 0)) && (e.target as HTMLInputElement).value.length) {
        ((e.target as HTMLInputElement).parentNode as HTMLElement).classList.add('e-error');
      } else {
        ((e.target as HTMLInputElement).parentNode as HTMLElement).classList.remove('e-error');
      }
    }

        public render() {
        return (
            <div className="wrap">
            <label> Normal Input </label>
                <TextBoxComponent  id="numericOnly" placeholder="Enter numeric values" onKeyUp={this.onKeyup}/>
            <label> Floating Input </label>
                <TextBoxComponent placeholder="Enter numeric values" floatLabelType="Auto" onKeyUp={this.onKeyup} required = {true}/>
            </div>
        )
    }
};
ReactDOM.render(<App />, document.getElementById('input-container'));



