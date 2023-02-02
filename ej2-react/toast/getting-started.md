---
layout: post
title: Getting started with React Toast component | Syncfusion
description:  Checkout and learn about Getting started with React Toast component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section briefly explains you the steps required to create a simple Toast and demonstrate the basic usage of the Toast component.

## Dependencies

The following list of dependencies are required to use the Toast component in your application.

```javascript
|-- @syncfusion/ej2-react-notifications
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-notifications
      |-- @syncfusion/ej2-base
      |-- @syncfusion/ej2-buttons
      |-- @syncfusion/ej2-react-buttons
      |-- @syncfusion/ej2-popups
```

## Installation and configuration

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

```bash
npm install -g create-react-app
```

Start a new project using create-react-app command as follows

<div class='tsx'>

```bash
create-react-app quickstart --scripts-version=react-scripts-ts

cd quickstart

```

</div>

<div class='jsx'>

```

create-react-app quickstart

cd quickstart

```

</div>

Install the below required dependency package in order to use the `Toast` component in your application.

```bash
npm install @syncfusion/ej2-react-notifications –save
```

The above package installs [Toast dependencies](#dependencies) which are required to render the Toast component in React environment.

* Toast CSS files are available in the `ej2-react-notifications` package folder.
Import the Toast component's required CSS references as follows in `src/App.css`.

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-react-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-react-notifications/styles/material.css';
```

## Initialize the Toast with message

The Toast message can be rendered by defining an `title` or `content`.

* Import the Toast component to your `src/App.tsx` file using following code.

`[Class-component]`



```ts
import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public toastInstance:ToastComponent;

  public toastCreated(): void {
    this.toastInstance.show();
  }

  public render() {
    return (
      <ToastComponent ref={toast => this.toastInstance = toast!} title="Sample Toast Title" content="Sample Toast Content" created={this.toastCreated = this.toastCreated.bind(this)} />
    );
  }
};
ReactDOM.render(<App />, document.getElementById('element'));

```



`[Functional-component]`



```ts
import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App() {
    let toastInstance:ToastComponent;

    function toastCreated(): void {
      toastInstance.show();
    }

    return (
      <ToastComponent ref={toast => toastInstance = toast!} title="Sample Toast Title" content="Sample Toast Content" created={toastCreated.bind(this)} />
    );
  
};
ReactDOM.render(<App />, document.getElementById('element'));

```



* Run the application in the browser using the following command.

```
npm start
```

Output will be as follows:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs15/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs15" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs16/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs16/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs16" %}

## Initialize the Toast with target

By default toast can be rendered in document body, we can change the target position for toast rendering using `target` property.

> In the above sample code, `#element` is the `id` of the HTML element in a page to which the Toast is initialized.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs17/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs17/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs17" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs18/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs18/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs18" %}

## See Also

* [Render different types of toast](./how-to/show-different-types-of-toast/)

N> You can refer to our [React Toast](https://www.syncfusion.com/react-components/react-toast) feature tour page for its groundbreaking feature representations. You can also explore our [React Toast Example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/toast/default) that shows you how to render the Toast in React.