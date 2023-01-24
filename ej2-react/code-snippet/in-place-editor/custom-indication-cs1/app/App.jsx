import { isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';
class App extends React.Component {
    inplaceEditorObj;
    model = { placeholder: 'Enter some text' };
    actionSuccess(e) {
        const keyVal = 'PrimaryKey';
        const primeKey = e.data[keyVal];
        if (isNOU(primeKey) || primeKey === '') {
            document.querySelector('.e-editable-value').classList.add('e-send-error');
        }
    }
    render() {
        return (<div id='container'>
        <span className="content-title"> Enter your name: </span>
        <InPlaceEditorComponent id='customtextbox' mode='Inline' value='Andrew' model={this.model} actionSuccess={this.actionSuccess = this.actionSuccess.bind(this)}/>
     </div>);
    }
}
export default App;
