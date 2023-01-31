


import { isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';
import { ActionEventArgs, InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';

function App () {
  let inplaceEditorObj: InPlaceEditorComponent;

  let model = { placeholder: 'Enter some text' };

  function actionSuccess(e: ActionEventArgs): void {
    const keyVal = 'PrimaryKey';
    const primeKey: string = e.data[keyVal];
    if (isNOU(primeKey) || primeKey === '') {
      ((document.querySelector('.e-editable-value') as any)).classList.add('e-send-error');
    }
  }

    return (
    <div id='container'>
        <span className="content-title"> Enter your name: </span>
        <InPlaceEditorComponent id='customtextbox' mode='Inline' value='Andrew' model={model} actionSuccess={ actionSuccess = actionSuccess.bind(this) } />
     </div>
    );

}

export default App;


