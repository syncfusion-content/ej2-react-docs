---
layout: post
title: Getting started with React Accordion component | Syncfusion
description:  Checkout and learn about Getting started with React Accordion component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section briefly explains you the steps required to create a simple [React Accordion](https://www.syncfusion.com/react-ui-components/react-accordion) and demonstrate the basic usage of the Accordion control.

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

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

```
npm install -g create-react-app
```

* To setup basic `React` sample use following commands.


```
create-react-app quickstart --scripts-version=react-scripts-ts
cd quickstart
```





```
create-react-app quickstart
cd quickstart
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

> To refer `App.css` in the application then import it in the `src/App.tsx` file.

## Initialize the Accordion using Items

The React Accordion can be rendered by defining an array of [`items`](https://ej2.syncfusion.com/react/documentation/api/accordion#items).

* Import the Accordion component to your `src/App.tsx` file using following code.



```ts
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function ReactApp() {
  function content0() {
    return (<div>
      Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.
    </div>);
  }
  function content1() {
    return <div>
      The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.
    </div>;
  }
  function content2() {
    return (<div>
      JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.
    </div>);
  }
  return (
    <AccordionComponent>
      <AccordionItemsDirective>
        <AccordionItemDirective header='ASP.NET' content={content0} />
        <AccordionItemDirective header='ASP.NET MVC' content={content1} />
        <AccordionItemDirective header='JavaScript' content={content2} />
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

> You can add the custom class into Accordion component using [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionItem#cssclass) property which is used to customize the Accordion component.

## See Also

* [How to load accordion items dynamically](./how-to/load-accordion-items-dynamically/)

N> You can also explore our [React Accordion example](https://ej2.syncfusion.com/react/demos/#/fabric/accordion/default) that shows you how to configure the Accordion in React.