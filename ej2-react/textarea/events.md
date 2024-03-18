---
layout: post
title: Events in React TextArea control | Syncfusion
description: Handling events triggered by user interactions or changes in the React TextArea control of Syncfusion Essential JS 2 and more.
control: Events
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events in React TextArea control

This section describes the TextArea events that will be triggered when appropriate actions are performed. The following events are available in the TextArea control.

## created

The TextArea control triggers the [created](https://ej2.syncfusion.com/react/documentation/api/textarea/#created) event when the TextArea component is created. This event provides users with an opportunity to perform actions immediately after the TextArea has been created and initialized.

```ts
{/* Import the TextArea. */}
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render TextArea.*/}
function App() {
    function created(){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <TextAreaComponent id="default" created={ created }></TextAreaComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
```

## input

The TextArea control triggers the [input](https://ej2.syncfusion.com/react/documentation/api/textarea/#input) each time when the value of TextArea has changed. This event provides users with an opportunity to perform actions in response to real-time changes in the TextArea's content.
The [InputEventArgs](https://ej2.syncfusion.com/react/documentation/api/textbox/InputEventArgs/) passed as an event argument provides the details about the input event in the TextArea.

```ts
{/* Import the TextArea. */}
import { TextAreaComponent, InputEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render TextArea.*/}
function App() {
    function inputHandler(args: InputEventArgs){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <TextAreaComponent id="default" input={ inputHandler }></TextAreaComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
```

## change

The TextArea control triggers the [change](https://ej2.syncfusion.com/react/documentation/api/textarea/#change) event when the content of TextArea has changed and gets focus-out. This event provides users with an opportunity to execute specific actions in response to changes made by the user.
The [ChangedEventArgs](https://ej2.syncfusion.com/react/documentation/api/textbox/ChangedEventArgs/) passed as an event argument provides the details about the changes in the TextArea's value.

```ts
{/* Import the TextArea. */}
import { TextAreaComponent, ChangedEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render TextArea.*/}
function App() {
    function changeHandler(args: ChangedEventArgs){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <TextAreaComponent id="default" change={ changeHandler }></TextAreaComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
```

## focus 

The TextArea control triggers the [focus](https://ej2.syncfusion.com/react/documentation/api/textarea/#focus ) when the TextArea gains focus. This event allows developers to execute specific actions when the user interacts with the TextArea by focusing on it.
The [FocusInEventArgs](https://ej2.syncfusion.com/react/documentation/api/textbox/FocusInEventArgs/) passed as an argument provides details about the focus event in the TextArea.

```ts
{/* Import the TextArea. */}
import { TextAreaComponent, FocusInEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render TextArea.*/}
function App() {
    function focusHandler(args: FocusInEventArgs){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <TextAreaComponent id="default" focus={ focusHandler }></TextAreaComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
```

## blur 

The TextArea control triggers the [blur](https://ej2.syncfusion.com/react/documentation/api/textarea/#blur) when the TextArea loses focus. This event allows users to execute specific actions when the user interacts with the TextArea by moving focus away from it.
The [FocusOutEventArgs](https://ej2.syncfusion.com/react/documentation/api/textbox/FocusOutEventArgs/) passed as an argument provides details about the blur event in the TextArea.

```ts
{/* Import the TextArea. */}
import { TextAreaComponent, FocusOutEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render TextArea.*/}
function App() {
    function blurHandler(args: FocusOutEventArgs){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <TextAreaComponent id="default" blur={ blurHandler }></TextAreaComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
```

## destroyed 

The TextArea control triggers the [destroyed](https://ej2.syncfusion.com/react/documentation/api/textarea/#destroyed) when the TextArea component is destroyed.

```ts
{/* Import the TextArea. */}
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render TextArea.*/}
function App() {
    function destroyed(){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <TextAreaComponent id="default" destroyed={ destroyed }></TextAreaComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
```
