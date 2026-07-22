---
layout: post
title: Getting started with React Dropdown Tree component | Syncfusion
description: Checkout and learn about Getting started with React Dropdown Tree component of Syncfusion Essential JS 2 and more details.
control: Dropdown Tree
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Dropdown Tree component

This section explains how to create a simple Dropdown Tree component and demonstrate its basic usage.

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

To install the React component package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-react-dropdowns

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-react-dropdowns

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

By default, Vite projects include a `src/index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `src/index.css` file to prevent style conflicts.

The required styles for the Dropdown Tree component are imported in the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "@syncfusion/ej2-tailwind3-theme/styles/drop-down-tree/index.css";

{% endhighlight %}
{% endtabs %}

> You can also refer to the combined CSS file for all Syncfusion components in your application. For more information, see the documentation on [referring themes through npm packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#refer-themes-through-npm-packages).

## Add the Dropdown Tree component

Now, you can add the React Dropdown Tree component to your **src/App.jsx** file by importing and defining it within your application. Then, populate the Dropdown Tree component with data using the [dataSource](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/fieldsmodel#datasource) property that is a member of the [fields](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/fields) property. Use the following code:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import './App.css';

function App() {
    // defining the dataSource
    let data = [
        {
            nodeId: '01', nodeText: 'Music',
            nodeChild: [
                { nodeId: '01-01', nodeText: 'Gouttes.mp3' }
            ]
        },
        {
            nodeId: '02', nodeText: 'Videos', expanded: true,
            nodeChild: [
                { nodeId: '02-01', nodeText: 'Naturals.mp4' },
                { nodeId: '02-02', nodeText: 'Wild.mpeg' },
            ]
        },
        {
            nodeId: '03', nodeText: 'Documents',
            nodeChild: [
                { nodeId: '03-01', nodeText: 'Environment Pollution.docx' },
                { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx' },
                { nodeId: '03-03', nodeText: 'Global Warming.ppt' },
                { nodeId: '03-04', nodeText: 'Social Network.pdf' },
                { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf' },
            ]
        },
    ];
    let fields = { dataSource: data, value: 'nodeId', text: 'nodeText', child: 'nodeChild' };
    return (
        // specifies the tag for rendering the Dropdown Tree component
        <DropDownTreeComponent id="dropdowntree" fields={fields} />
    );
}

export default App;

{% endhighlight %}
{% endtabs %}

## Run the application

Run the `npm run dev` command in the console to start the development server. This command compiles the application and serves it locally in the browser.

```bash
npm run dev
```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dropdowntree/basic-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dropdowntree/basic-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/basic-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/basic-cs1" %}

> Refer to the [React Dropdown Tree](https://www.syncfusion.com/react-components/react-dropdown-tree) feature tour page for its groundbreaking feature representations. You can also explore our [React Dropdown Tree component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/drop-down-tree/default) that shows how to render the Dropdown Tree in React.