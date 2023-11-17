---
layout: post
title: Getting started with React Accordion Component | Syncfusion
description:  Checkout and learn about Getting started with Syncfusion Essential React Accordion component, its elements and more.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Accordion Component

This section briefly explains you the steps required to create a simple [React Accordion](https://www.syncfusion.com/react-components/react-accordion) and demonstrate the basic usage of the Accordion control.

## Dependencies

The following list of dependencies are required to use the React Accordion component in your application.

```js
|-- @syncfusion/ej2-react-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-popups

```

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

Besides using the [npm](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) package runner tool, also create an application from the `npm init`. To begin with the `npm init`, upgrade the `npm` version to `npm 6+`.

```bash
npm init react-app my-app
cd my-app
npm start
```



## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Accordion component, use the following command

```
npm install @syncfusion/ej2-react-navigations --save
```

## Adding CSS reference

 Add components style as given below in `src/App.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-react-navigations/styles/material.css';

```

> To refer `App.css` in the application then import it in the `src/App.ts` file.

## Initialize the Accordion using Items

The React Accordion can be rendered by defining an array of [`items`](https://ej2.syncfusion.com/react/documentation/api/accordion/#items).

* Import the Accordion component to your `src/App.ts` file using following code.



```ts
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDOM from "react-dom";

const ReactApp = () => {
  const aspContent = () => {
    return (<div>
      Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.
    </div>);
  }

  const mvcContent = () => {
    return (<div>
      The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.
    </div>);
  }

  const jsContent = () => {
    return (<div>
      JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.
    </div>);
  }

  return (
    <AccordionComponent>
      <AccordionItemsDirective>
        <AccordionItemDirective header='ASP.NET' content={aspContent} />
        <AccordionItemDirective header='ASP.NET MVC' content={mvcContent} />
        <AccordionItemDirective header='JavaScript' content={jsContent} />
      </AccordionItemsDirective>
    </AccordionComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);

```



* Run the application in the browser using the following command.

```
npm start
```
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-cs4" %}

> In the above sample code, `#element` is the `id` of the HTML element in a page to which the Accordion is initialized.

## Initialize the Accordion using HTML elements

The React Accordion component can be rendered based on the given HTML element using `id` as `target` property.
You need to follow the below structure of HTML elements to render the Accordion.

```
  <div id='accordion_html_markup'>   --> Root Accordion Element
       <div>      --> Accordion Item Container
            <div>   --> Accordion Header Container
                <div> </div> --> Accordion Header
            </div>
            <div>  --> Accordion Panel Container
                <div> </div> --> Accordion Content
             </div>
        </div>
  </div>
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/accordion/accordion-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/accordion/accordion-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-cs5" %}

> You can add the custom class into Accordion component using [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionItem/#cssclass) property which is used to customize the Accordion component.

## See Also

* [How to load accordion items dynamically](./how-to/load-accordion-items-dynamically)

N> You can also explore our [React Accordion example](https://ej2.syncfusion.com/react/demos/#/fabric/accordion/default) that shows you how to configure the Accordion in React.