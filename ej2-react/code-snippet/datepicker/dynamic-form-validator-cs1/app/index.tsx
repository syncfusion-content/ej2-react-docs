


import { data } from './data';
import DynamicForm from './dynamicform';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    public data : any;

    constructor(props: any) {
        super(props);
        this.data = data;
    }

    public render() {
        return (
            <div className = "wrap">
                <div className= "outerbox">
                    <div className = "formValue">
                        <DynamicForm dataObject = {data} />
                    </div>
                </div>
            </div>
        );
     }
 }

ReactDOM.render(<App />, document.getElementById('element'));



