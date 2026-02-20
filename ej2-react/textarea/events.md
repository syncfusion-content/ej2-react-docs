---
layout: post
title: Events in React TextArea component | Syncfusion
description: Handling events triggered by user interactions or changes in the React TextArea component of Syncfusion Essential JS 2 and more.
control: Events
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events in React TextArea Component

This section describes the TextArea events that will be triggered when appropriate actions are performed. The following events are available in the TextArea component.

## Created event

The TextArea component triggers the [created](https://ej2.syncfusion.com/react/documentation/api/textarea/#created) event when the component is created and initialized, allowing you to perform actions immediately.

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

## Input event

The TextArea component triggers the [input](https://ej2.syncfusion.com/react/documentation/api/textarea/#input) event each time the value changes, allowing you to respond to real-time content modifications.
The [InputEventArgs](https://ej2.syncfusion.com/react/documentation/api/textbox/InputEventArgs/) passed as an event argument provides details about the input event.

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

## Change event

The TextArea component triggers the [change](https://ej2.syncfusion.com/react/documentation/api/textarea/#change) event when the content changes and focus is lost, allowing you to execute actions in response to user changes.
The [ChangedEventArgs](https://ej2.syncfusion.com/react/documentation/api/textbox/ChangedEventArgs/) passed as an event argument provides details about the value changes.

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

## Focus event

The TextArea component triggers the [focus](https://ej2.syncfusion.com/react/documentation/api/textarea/#focus) event when the component gains focus, allowing you to execute actions in response to user interaction.
The [FocusInEventArgs](https://ej2.syncfusion.com/react/documentation/api/textbox/FocusInEventArgs/) passed as an argument provides details about the focus event.

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

## Blur event

The TextArea component triggers the [blur](https://ej2.syncfusion.com/react/documentation/api/textarea/#blur) event when focus is lost, allowing you to execute actions when users move focus away.
The [FocusOutEventArgs](https://ej2.syncfusion.com/react/documentation/api/textbox/FocusOutEventArgs/) passed as an argument provides details about the blur event.

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

## Destroyed event

The TextArea component triggers the [destroyed](https://ej2.syncfusion.com/react/documentation/api/textarea/#destroyed) when the TextArea component is destroyed.

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
