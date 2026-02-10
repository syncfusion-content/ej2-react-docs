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

This section explains the steps required to create a simple React In-place Editor component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React Inplace editor, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=hr3JVzTgnRI" %}

## Setup for local development

Easily set up a React application using `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](images/Initial-setup.jpg)

To set up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> In-place Editor packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the In-place Editor component, use the following command

```bash
npm install @syncfusion/ej2-react-inplace-editor --save
```

> The --save will instruct NPM to include the In-place Editor package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-react-inplace-editor/styles/tailwind3.css';
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding In-place Editor component

The React Inplace editor component can be added to the application by following these steps. To get started, add the In-place Editor component to the **src/App.tsx** file using the following code.

The following in-place editor code should be placed in the **src/App.tsx** file.

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

You can render Essential<sup style="font-size:70%">&reg;</sup> JS 2 React DropDownList by changing [`type`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/inputtype) property as [`DropDownList`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/index-default) and configure its properties and methods using `model` property.

In the below sample, [`type`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/inputtype) and [`model`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/index-default#model) values are configured to render the [`DropDownList`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/index-default) component.

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

You can render Essential<sup style="font-size:70%">&reg;</sup> JS2 [DatePicker](https://ej2.syncfusion.com/react/documentation/api/datepicker/index-default) by changing [`type`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/inputtype) property as [`Date`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/inputtype) and also configure its properties and methods using [`model`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/index-default#model) property.

In the below sample, [`type`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/inputtype) and [`model`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/index-default#model) values are configured to render the [DatePicker](https://ej2.syncfusion.com/react/documentation/api/datepicker/index-default) component.

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

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

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

You can submit editor value to server by configuring the [`url`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/index-default#url), [`adaptor`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/adaptortype) and [`primaryKey`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/index-default#primarykey) property.

| Property   | Usage                                           |
|------------|---------------------------------------------------------|
| **`url`**        | Gets the url for server submit action.        |
| **`adaptor`**    | Specifies the adaptor type that are used by DataManager to communicate with DataSource.  |
| **`primarykey`** | Defines the unique primary key of editable field which can be used for saving data in data-base. |

> [`primaryKey`](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/index-default#primarykey) property is mandatory. If it's not set, edited data are not sent to the server.

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

> Refer to the [React In-place Editor](https://www.syncfusion.com/react-components/react-in-place-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React In-place Editor component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/inplace-editor/default) that shows how to render the In-place Editor in React.

## See Also

* [Types of rendering the editor](./integration)