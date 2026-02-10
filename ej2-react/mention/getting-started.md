---
layout: post
title: Getting started with React Mention component | Syncfusion
description:  Checkout and learn about Getting started with React Mention component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Mention component

This section explains the steps required to create a simple React Mention component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React Mention, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=n_AIrumqQsw" %}

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Mention packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Mention component, use the following command

```bash
npm install @syncfusion/ej2-react-dropdowns --save
```

> The --save will instruct NPM to include the Mention package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-list/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/tailwind3.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding Mention component

The React Mention component can be added to the application by following these steps. To get started, add the Mention component to the **src/App.tsx** file using the following code.

The following mention code should be placed in the **src/App.tsx** file.

`[Class-component]`

```ts
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
  // Defines the target in which the Mention component is rendered.
  private mentionTarget: string = '#mentionElement';
  public render() {
    return (
      <div id='mention_default'>
        <table>
            <tr>
                <td>
                  <label style={{ fontSize: "15px", fontWeight: 600 }}>Comments</label>
                  <div id="mentionElement" style={{minHeight: 100, border: "1px solid #D7D7D7", borderRadius: 4, padding: 8, fontSize: 14, width: 600}}></div>
                </td>
            </tr>
        </table>

        <MentionComponent target={this.mentionTarget} ></MentionComponent>
      </div>
    );
  }
}
```

`[Functional-component]`

```ts
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

function App (){
  // Defines the target in which the Mention component is rendered.
  let mentionTarget: string = '#mentionElement';
    return (
      <div id='mention_default'>
        <table>
            <tr>
                <td>
                    <label style={{ fontSize: "15px", fontWeight: 600 }}>Comments</label>
                    <div id="mentionElement" style={{minHeight: 100, border: "1px solid #D7D7D7", borderRadius: 4, padding: 8, fontSize: 14, width: 600}}></div>
                </td>
            </tr>
        </table>

        <MentionComponent target={mentionTarget} ></MentionComponent>
      </div>
    );

}
export default App;
```

## Binding data source

After initialization, populate the data using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/mention/index-default#datasource) property. Here, an array of string values is passed to the Mention component.

`[Class-component]`

```ts
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

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
                    <label style={{ fontSize: "15px", fontWeight: 600 }}>Comments</label>
                    <div id="mentionElement" style={{minHeight: 100, border: "1px solid #D7D7D7", borderRadius: 4, padding: 8, fontSize: 14, width: 600}}></div>
                </td>
            </tr>
        </table>

        <MentionComponent target={this.mentionTarget} dataSource={this.userData}></MentionComponent>
      </div>
    );
  }
}
```

`[Functional-component]`

```ts
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

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
                    <label style={{ fontSize: "15px", fontWeight: 600 }}>Comments</label>
                    <div id="mentionElement" style={{minHeight: 100, border: "1px solid #D7D7D7", borderRadius: 4, padding: 8, fontSize: 14, width: 600}}></div>
                </td>
            </tr>
        </table>

        <MentionComponent target={mentionTarget} dataSource={userData}></MentionComponent>
      </div>
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

By using the [showMentionChar](https://ej2.syncfusion.com/react/documentation/api/mention/index-default#showMentionChar) property, the text content can be displayed along with the mention character. You can customize the mention character by using the [mentionChar](https://ej2.syncfusion.com/react/documentation/api/mention/index-default#mentionChar) property in the Mention component.

> By default, the [mentionChar](https://ej2.syncfusion.com/react/documentation/api/mention/index-default#mentionChar) is `@` and the [showMentionChar](https://ej2.syncfusion.com/react/documentation/api/mention/index-default#showMentionChar) property is disabled.

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

> Refer to the [React Mention](https://www.syncfusion.com/react-components/react-mention) feature tour page for its groundbreaking feature representations. You can also explore our [React Mention component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/mention/default) that shows how to render the Mention in React.