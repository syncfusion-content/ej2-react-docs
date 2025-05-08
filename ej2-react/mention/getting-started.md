---
layout: post
title: Getting started with React Mention component | Syncfusion
description:  Checkout and learn about Getting started with React Mention component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple **Mention** component and configure its available functionalities in React.

To get start quickly with React Mention, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=n_AIrumqQsw" %}

## Dependencies

The following list of dependencies are required to use the `Mention` component in your application.

```javascript
|-- @syncfusion/ej2-react-dropdowns
|-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
|-- @syncfusion/ej2-react-base
```

## Setup your development environment

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

## Adding syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install Mention component, use the following command

   ```bash
    npm install @syncfusion/ej2-react-dropdowns --save
   ```

The above command installs [Mention dependencies](./getting-started#dependencies) which are required to render the component in the `React` environment.

## Adding Style sheet to the Application

To render Mention component, need to import dropdowns and its dependent components styles as given below in `src/App.css`.

```css

/* import the Mention dependency styles */

@import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-react-buttons/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-react-popups/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-react-list/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/bootstrap5.css";

```

## Adding Mention component

Now, you can add the `Mention` component in the application. To use the Mention component properly, the [`target`](https://ej2.syncfusion.com/react/documentation/api/mention/#target) property should be configured so that it renders the Mention component in the configured element. Add `Mention` component in `src/App.tsx` file using the following code snippet.

`[Class-component]`



```ts

import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  // Defines the target in which the Mention component is rendered.
  private mentionTarget: string = '#mentionElement';
  public render() {
    return (
      <div id='mention_default'>
        <table>
            <tr>
                <td>
                    <label style="font-size: 15px; font-weight: 600;">Comments</label>
                    <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
                </td>
            </tr>
        </table>

        <MentionComponent target={this.mentionTarget} ></MentionComponent>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('sample'));

```

```ts
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    // Defines the target in which the Mention component is rendered.
    mentionTarget = '#mentionElement';
    render() {
        return (<div id='mention_default'>
        <table>
            <tr>
                <td>
                    <label style="font-size: 15px; font-weight: 600;">Comments</label>
                    <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
                </td>
            </tr>
        </table>

        <MentionComponent target={this.mentionTarget}></MentionComponent>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

`[Functional-component]`



```ts

import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App (){
  // Defines the target in which the Mention component is rendered.
  let mentionTarget: string = '#mentionElement';
    return (
      <div id='mention_default'>
        <table>
            <tr>
                <td>
                    <label style="font-size: 15px; font-weight: 600;">Comments</label>
                    <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
                </td>
            </tr>
        </table>

        <MentionComponent target={mentionTarget} ></MentionComponent>
      </div>
    );

}

ReactDOM.render(<App />, document.getElementById('sample'));

```

```ts
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    // Defines the target in which the Mention component is rendered.
    let mentionTarget = '#mentionElement';
    return (<div id='mention_default'>
        <table>
            <tr>
                <td>
                    <label style="font-size: 15px; font-weight: 600;">Comments</label>
                    <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
                </td>
            </tr>
        </table>

        <MentionComponent target={mentionTarget}></MentionComponent>
      </div>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

## Binding data source

After initialization, populate the data using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/mention/#datasource) property. Here, an array of string values is passed to the Mention component.

`[Class-component]`



```ts

import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  // Defines the target in which the Mention component is rendered.
  private mentionTarget: string = '#mentionElement';

  // Defines the array of data.
  private userData: string[] = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];

  public render() {
    return (
      <div id='mention_default'>
        <table>
            <tr>
                <td>
                    <label style="font-size: 15px; font-weight: 600;">Comments</label>
                    <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
                </td>
            </tr>
        </table>

        <MentionComponent target={this.mentionTarget} dataSource={this.userData}></MentionComponent>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('sample'));

```

```ts
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    // Defines the target in which the Mention component is rendered.
    mentionTarget = '#mentionElement';
    // Defines the array of data.
    userData = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];
    render() {
        return (<div id='mention_default'>
        <table>
            <tr>
                <td>
                    <label style="font-size: 15px; font-weight: 600;">Comments</label>
                    <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
                </td>
            </tr>
        </table>

        <MentionComponent target={this.mentionTarget} dataSource={this.userData}></MentionComponent>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

`[Functional-component]`



```ts

import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App () {
  // Defines the target in which the Mention component is rendered.
  let mentionTarget: string = '#mentionElement';

  // Defines the array of data.
  let userData: string[] = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];
  return (
      <div id='mention_default'>
        <table>
            <tr>
                <td>
                    <label style="font-size: 15px; font-weight: 600;">Comments</label>
                    <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
                </td>
            </tr>
        </table>

        <MentionComponent target={mentionTarget} dataSource={userData}></MentionComponent>
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById('sample'));

```

```ts
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    // Defines the target in which the Mention component is rendered.
    let mentionTarget = '#mentionElement';
    // Defines the array of data.
    let userData = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];
    return (<div id='mention_default'>
        <table>
            <tr>
                <td>
                    <label style="font-size: 15px; font-weight: 600;">Comments</label>
                    <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
                </td>
            </tr>
        </table>

        <MentionComponent target={mentionTarget} dataSource={userData}></MentionComponent>
      </div>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows a basic Mention component.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/mention/basic-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/mention/basic-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/basic-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/mention/basic-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/mention/basic-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/basic-cs2" %}

## Display Mention character

By using the [showMentionChar](https://ej2.syncfusion.com/react/documentation/api/mention/#showMentionChar) property, the text content can be displayed along with the mention character. You can customize the mention character by using the [mentionChar](https://ej2.syncfusion.com/react/documentation/api/mention/#mentionChar) property in the Mention component.

> By default, the [mentionChar](https://ej2.syncfusion.com/react/documentation/api/mention/#mentionChar) is `@` and the [showMentionChar](https://ej2.syncfusion.com/react/documentation/api/mention/#showMentionChar) property is disabled.

The following example displays the text content along with the mention character configured as `#`.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/mention/basic-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/mention/basic-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/basic-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/mention/basic-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/mention/basic-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/basic-cs4" %}