---
layout: post
title: Getting started with React Markdown Editor component | Syncfusion
description:  Checkout and learn about Getting started with React Markdown Editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Markdown Editor component

This section explains you the steps required to create a simple Markdown Editor and demonstrate the basic usage of the Markdown Editor component in React environment.

## Setup for Local Development

To set-up a React application, choose any of the following ways. The best and easiest way is to use the [create-react-app](https://github.com/facebook/create-react-app). It sets up your development environment in JavaScript and improvise your application for production. Refer to the [installation instructions](https://github.com/facebook/create-react-app#creating-an-app) of `create-react-app`.

```bash
npx create-react-app my-app
cd my-app
npm start
```

or

```bash
yarn create react-app my-app
cd my-app
yarn start
```

To set-up a React application in `TypeScript` environment, run the following command.

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

Besides using the [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) package runner tool, also create an application from the `npm init`. To begin with the `npm init`, upgrade the `npm` version to `npm 6+`.

```bash
npm init react-app my-app
cd my-app
npm start
```
## Adding Syncfusion Rich Text Editor packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Rich Text Editor component, use the following command

```
npm install @syncfusion/ej2-react-richtexteditor --save
```

> The --save will instruct NPM to include the Rich Text Editor package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in **../node_modules/@syncfusion** package folder. This can be added as reference in **src/App.css**.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding Markdown Editor component

Now, you can start adding React Markdown Editor component in the application. For getting started, add the Markdown Editor component in **src/App.tsx** file using following code.

Place the following Markdown Editor code in the **src/App.tsx**.

```ts
/**
 * Initilaize  Markdown Editor from React element
 */
import { MarkdownEditor, Image, Inject, Link, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import './App.css';

function App() {
    let value: string = `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.`;
  return (
      <RichTextEditorComponent value={value} editorMode={'Markdown'}>
          <Inject services={[Toolbar, Image, Link, MarkdownEditor]} />
      </RichTextEditorComponent>
  );
}

export default App;
```

## Module Injection

To create Markdown Editor with additional features, inject the required modules. The following modules are used to extend Markdown Editor's basic functionality.

* **MarkdownEditor** - Inject this module to use Rich Text Editor as markdown editor.
* **Image** - Inject this module to use image feature in Markdown Editor.
* **Link** - Inject this module to use link feature in Markdown Editor.
* **Toolbar** - Inject this module to use Toolbar feature.

These modules should be injected into the **providers** section of root **NgModule** or component class.

> Additional feature modules are available [here](./module.md).

## Configure the Toolbar

Configure the toolbar with the tools using items field of the [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#toolbarsettings) property as your application.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

> The `|` and `-` can insert a vertical and horizontal separator lines in the toolbar.

## Run the application

All are set. Now, run the application using the following command.

```bash
npm start
```

or

```bash
yarn start
```

The output will appear as follows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/markdown-editor/getting-started-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/markdown-editor/getting-started-cs1" %}

## Retrieve the formatted content

To retrieve the editor contents, use the [value](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#value) property of Rich Text Editor.

```ts

  const rteValue: string = this.rteObj.value;

```

To fetch the Markdown Editor's text content, use [getText](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#gettext) method.

```typescript

const rteValue: string = this.rteObj.contentModule.getText();

```

## See Also

* [Accessibility in Markdown editor](https://ej2.syncfusion.com/react/documentation/markdown-editor/accessibility)
* [Keyboard support in Markdown editor](https://ej2.syncfusion.com/react/documentation/markdown-editor/keyboard-support)

> You can refer to our [React Rich Text Editor](https://www.syncfusion.com/react-components/react-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Markdown example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/markdown-editor/overview) that shows how to render the Markdown tools.