---
layout: post
title: Getting Started with React Range Slider | Syncfusion
description: Learn how to get started with the React Range Slider component in Syncfusion, including installation with Vite, configuration, and required styles.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Slider component

This section explains the steps required to create a simple React Slider component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React Slider, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=B0rPxt5tOSE" %}

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Slider packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Slider component, use the following command

```bash
npm install @syncfusion/ej2-react-inputs --save
```

> The --save will instruct NPM to include the Slider package inside of the **dependencies** section of the package.json.

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

By default, Vite projects include a `index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `index.css` file to prevent style conflicts.

The required styles for the component are imported in the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "@syncfusion/ej2-tailwind3-theme/styles/slider/index.css";

{% endhighlight %}
{% endtabs %}

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding Slider component

The React Slider component can be added to the application by following these steps. To get started, add the Slider component to the **src/App.tsx** file using the following code.

The following slider code should be placed in the **src/App.tsx** file.

```ts
import * as React from 'react';
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

function App() {
  return (
    <div id='container'>
      <div className='wrap'>
        <SliderComponent id='slider' value={30} />
      </div>
    </div>
  );
}
export default App;
```

Add the following CSS to your project's stylesheet:

```css
.wrap {
  box-sizing: border-box;
  height: 100px;
  margin: 0 auto;
  padding: 30px 10px;
  width: 460px;
}
```

## Run the Application

Run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/slider/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/slider/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/getting-started-cs5/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs5" %}

## Types

Slider supports the following types:

| **Types** | **Usage** |
| --- | --- |
| Default | Shows a default Slider to select a single value. |
| MinRange | Displays the shadow from the start value to the current selected value. |
| Range | Selects a range of values. It also displays the shadow in-between the selection range. |

> Both Default and MinRange types select a single value. In MinRange, the selection shadow spans from the start value to the current handle position. The Range type uses two handles to select a range of values, and the shadow spans between the two handles.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/slider/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/slider/getting-started-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/getting-started-cs6/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs6" %}

## Customization

### Orientation

The Slider can be displayed either in horizontal or vertical orientation using the [`orientation`](https://ej2.syncfusion.com/react/documentation/api/slider#orientation) property. By default, the Slider renders in horizontal orientation.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/slider/orientation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/slider/orientation-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/orientation-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/orientation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/orientation-cs1" %}

### Tooltip

The Slider displays a tooltip to indicate the current value when clicking the Slider bar or dragging the Slider handle. The tooltip position can be customized using the [`placement`](https://ej2.syncfusion.com/react/documentation/api/slider/tooltipDataModel#placement) property.
It also controls the tooltip display mode on the page (hover, focus, or click) and whether it remains visible.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/slider/getting-started-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/slider/getting-started-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs7" %}


### Buttons

Change the Slider value using the [`showButtons`](https://ej2.syncfusion.com/react/documentation/api/slider#showbuttons) property to increase and decrease the values. In a Range Slider, the first handle value changes by default when clicking the buttons. Change the handle focus and press the button to change the last focused handle value.

> After enabling the Slider buttons, if the Tab key is pressed, the focus moves to the handle and not to the buttons.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/slider/getting-started-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/slider/getting-started-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/getting-started-cs8/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs8" %}

> Refer to the [React Slider](https://www.syncfusion.com/react-components/react-slider) feature tour page for its groundbreaking feature representations. You can also explore our [React Slider component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/range-slider/default) that shows how to render the Slider in React.

## See Also

[Slider Formatting](./format)
[Ticks in Slider](./ticks)
[Limits in Slider](./limits)