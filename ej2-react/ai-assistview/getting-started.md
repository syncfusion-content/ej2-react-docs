---
layout: post
title: Getting started with React AI AssistView component | Syncfusion
description:  Checkout and learn about Getting started with React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in React AI AssistView component

This section explains how to create a simple **AI AssistView** component and configure its available functionalities in React.

## Dependencies

The list of dependencies required to use the `AI AssistView` component in your application is given as follows:

```javascript
|-- @syncfusion/ej2-react-interactive-chat
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
```

## Installation and configuration

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

```bash
npm install -g create-react-app
```

Start a new project using create-react-app command as follows

```bash
  create-react-app quickstart --scripts-version=react-scripts-ts
  cd quickstart
```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install AI AssistView component, use the following command

```bash
npm install @syncfusion/ej2-react-interactive-chat
```

## Adding AI AssistView component

Now, you can start adding AI AssistView component in the application. For getting started, add the AI AssistView component by using `<AIAssistViewComponent>` tag directive in `src/App.tsx` file using following code. Now place the below AI AssistView code in the `src/App.tsx`.

`[Class-component]`

```ts

import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
        // specifies the tag for render the AI AssistView omponent
        <AIAssistViewComponent id="aiAssistView"></AIAssistViewComponent>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('aiAssistView'));
```

`[Functional-component]`

```ts
import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView"></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('aiAssistView'));
```

## Run the application

After completing the configuration required to render a basic AI AssistView, run the following command to display the output in your default browser.

```
npm start
```

`[Class-componnet]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/getting-started-class/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/getting-started-class/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/getting-started-class" %}

`[Functional-componnet]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/getting-started/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/getting-started/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/getting-started" %}

## Configure suggestions and responses

You can use the `promptSuggestions` property to add prompt suggestions and the `promptRequest` event to add responses when the prompt matches the specified prompts data otherwise, the default response will be displayed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/defaultPrompts/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/defaultPrompts/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/defaultPrompts" %}
