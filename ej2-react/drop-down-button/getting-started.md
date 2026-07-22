---
layout: post
title: Getting started with React Dropdown button component | Syncfusion
description:  Checkout and learn about Getting started with React Drop down button component of Syncfusion Essential JS 2 and more details.
control: Dropdown button 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React DropDownButton component

This section explains the steps required to create a simple React DropDownButton component and demonstrate its basic usage in a React environment.

> **Ready to streamline React development with Syncfusion<sup style="font-size:70%">&reg;</sup>?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Integration, configuration, and enhancement of projects is supported through intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Set up the Vite project

To create a new `Vite` project, use one of the commands that are specific to either NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm create vite@latest my-project -- --template react
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn create vite my-project --template react
{% endhighlight %}
{% endtabs %}

After running the command, you will be prompted with a series of interactive questions to configure your project. Select the appropriate options for each prompt:

1. **Select a linter to use**: Choose the linter for your project (for example, `ESLint`).
2. **Install with npm and start now?**: Type `Yes` to proceed with installing the dependencies and automatically start the development server, or `No` to install dependencies manually later.

Navigate into the project directory with:

```
cd my-project
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

To install the React DropDownButton component package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-react-splitbuttons

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-react-splitbuttons

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

By default, Vite projects include default styles in the `src/index.css` and `src/App.css` files. These default styles may conflict with Syncfusion component styles. Clear all content from `src/index.css` and `src/App.css` to prevent style conflicts.

The required styles for the DropDownButton component are imported in the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "@syncfusion/ej2-tailwind3-theme/styles/tailwind3.css";

{% endhighlight %}
{% endtabs %}

> You can also refer to the combined CSS file for all Syncfusion components in your application. For more information, see the documentation on [referring themes through npm packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#refer-themes-through-npm-packages).

## Adding DropDownButton component

Add the DropDownButton component to the **src/App.jsx** file using the following code.

```js
import { DropDownButtonComponent} from '@syncfusion/ej2-react-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';
import * as React from 'react';
import './App.css';

enableRipple(true);

function App() {
  let items = [
    {
      text: 'Cut',
    },
    {
      text: 'Copy',
    },
    {
      text: 'Paste',
    }];
    return (
      <div>
        <DropDownButtonComponent id="element" items={items}> Clipboard </DropDownButtonComponent>
      </div>
    );
}
export default App;
```

## Run the application

To run the project, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/getting-started-cs1" %}

> Refer to the [React DropDownButton](https://www.syncfusion.com/react-components/react-dropdown-menu) feature tour page for its groundbreaking feature representations. The [React DropDownButton component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/button/dropdown-button) shows how to render the DropDownButton in React.

## See Also

* [DropDownButton with icons](./icons#dropdownbutton-icons)
* [How to hide dropdown arrow](./how-to/hide-dropdown-arrow)
* [Dropdown popup with separator](./popup-items#separator)