---
layout: post
title: Getting started with React Inplace editor component | Syncfusion
description:  Checkout and learn about Getting started with React Inplace editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Inplace editor component

This section briefly explains about how to create a simple In-place Editor and demonstrate the basic usage of the In-place Editor component.

To get start quickly with React Inplace editor, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=hr3JVzTgnRI" %}

## Dependencies

The following is the list of dependencies required to use the In-place Editor component in your application.

```javascript
|-- @syncfusion/ej2-react-inplace-editor
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-richtexteditor
```

## Set up your development environment

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

Install the below required dependency package in order to use the `In-place Editor` component in your application.

```bash
npm install @syncfusion/ej2-react-inplace-editor –save
```

The above package installs [In-place Editor dependencies](#dependencies) which are required to render the In-place Editor component in React environment.

* In-place Editor CSS files are available in the `ej2-react-inplace-editor` package folder. Import the In-place Editor component's required CSS references as follows in `src/App.css`.

    ```css
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-react-inplace-editor/styles/material.css';
    ```

## Add the In-place Editor with Textbox

By default, Essential<sup style="font-size:70%">&reg;</sup> JS2 React TextBox component is rendered in In-place Editor with [`type`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/inputType/) property sets as Text.

* Import the In-place Editor component to your `src/App.tsx` file using following code.

    `[Class-component]`



    ```ts

    import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
    import * as React from 'react';
    import './App.css';

    class App extends React.Component {
      public model = { placeholder: 'Enter employee name' };
      public render() {
        return (
        <InPlaceEditorComponent id='element' model={this.model} type='Text' value='Andrew'/>
        );
      }
    }

    export default App;

    ```



    `[Functional-component]`



    ```ts

    import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
    import * as React from 'react';
    import './App.css';

    function App () {
      const model = { placeholder: 'Enter employee name' };

        return (
        <InPlaceEditorComponent id='element' model={model} type='Text' value='Andrew'/>
        );
    }

    export default App;

    ```



## Configuring DropDownList

You can render Essential<sup style="font-size:70%">&reg;</sup> JS 2 React DropDownList by changing [`type`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/inputType/) property as [`DropDownList`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list) and configure its properties and methods using `model` property.

In the below sample, [`type`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/inputType/) and [`model`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#model) values are configured to render the [`DropDownList`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list) component.

`[Class-component]`



```ts

import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public genderData = ['Male', 'Female'];
  public model = { placeholder: 'Select gender', dataSource: this.genderData };
  public render() {
    return (
     <InPlaceEditorComponent id='element' model={this.model} type='DropDownList' mode='Inline'/>
    );
  }
}

export default App;

```

`[Functional-component]`

```ts

import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';

function App () {
  const genderData = ['Male', 'Female'];
  const model = { placeholder: 'Select gender', dataSource: genderData };

    return (
     <InPlaceEditorComponent id='element' model={model} type='DropDownList' mode='Inline'/>
    );
}

export default App;

```

## Integrate DatePicker

You can render Essential<sup style="font-size:70%">&reg;</sup> JS2 [DatePicker](https://ej2.syncfusion.com/react/documentation/api/datepicker/) by changing [`type`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/inputType/) property as [`Date`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/inputType/) and also configure its properties and methods using [`model`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#model) property.

In the below sample, [`type`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/inputType/) and [`model`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#model) values are configured to render the [DatePicker](https://ej2.syncfusion.com/react/documentation/api/datepicker) component.

`[Class-component]`



```ts

import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public model = { showTodayButton: true };
  public value = new Date('04/12/2018');
  public render() {
    return (
     <InPlaceEditorComponent id='element' model={this.model} type='Date' value={this.value}/>
    );
  }
}

export default App;

```

`[Functional-component]`

```ts

import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';

function App () {
  const model = { showTodayButton: true };
  const value = new Date('04/12/2018');

    return (
     <InPlaceEditorComponent id='element' model={model} type='Date' value={value}/>
    );

}
export default App;

```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

Output will be as follows:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/getting-started-form-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/getting-started-form-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-form-cs2" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/getting-started-form-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/getting-started-form-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-form-cs3" %}

## Submitting data to the server (save)

You can submit editor value to server by configuring the [`url`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#url), [`adaptor`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/adaptorType/) and [`primaryKey`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#primarykey) property.

| Property   | Usage                                           |
|------------|---------------------------------------------------------|
| **`url`**        | Gets the url for server submit action.        |
| **`adaptor`**    | Specifies the adaptor type that are used by DataManager to communicate with DataSource.  |
| **`primarykey`** | Defines the unique primary key of editable field which can be used for saving data in data-base. |

> [`primaryKey`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#primarykey) property is mandatory. If it's not set, edited data are not sent to the server.

## Refresh with modified value

The edited data is submitted to the server and you can see the new values getting reflected in the In-place Editor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/getting-started-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/getting-started-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs2" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/getting-started-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/getting-started-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs3" %}

## See Also

* [Types of rendering the editor](./integration/)
