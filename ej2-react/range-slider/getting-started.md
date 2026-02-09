---
layout: post
title: Getting Started with React Range Slider | Syncfusion
description: Learn how to get started with the React Range Slider component in Syncfusion, including installation with Vite, configuration, and required styles.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Slider Component

The following section explains the required steps to build the simple Slider component with its basic usage in a step-by-step procedure.

To get started quickly with React Range Slider, you can check this video:

{% youtube "https://www.youtube.com/watch?v=B0rPxt5tOSE" %}

## Dependencies

Install the following dependent packages to render the Slider component.

```javascript
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-react-popups
    |-- @syncfusion/ej2-react-buttons
    |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Installation and Configuration

To easily set up a React application, use Vite, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to tools like Create React App. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide).

> Note: To create a React application using Create React App, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```

To set up a React application in a TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

To set up a React application in a JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Packages

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published on the public npm registry at [npmjs.com](https://www.npmjs.com/~syncfusionorg). This guide uses the `Slider` component from these packages.

To install the `Slider` component, use the following command.

```bash
npm install @syncfusion/ej2-react-inputs --save
```

The above command installs the required [Slider dependencies](#dependencies) to render the component in the React environment.

## Adding CSS Reference

Import the required theme references for the `Slider` component at the top of `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
```

You can check out the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) topic to know more about built-in themes and different ways to refer themes in a React application.

> Note: You can also use the Custom Resource Generator (CRG) at https://crg.syncfusion.com/ to generate combined component styles.

## Adding Slider Component

Now, add the `Slider` component to the application. For getting started, add the `Slider` component in the `src/App.tsx` file using the following code snippet.

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

Add the following styles in the corresponding CSS file (for example, `styles.css`):

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

## See Also

[Slider Formatting](./format)

[Ticks in Slider](./ticks)

[Limits in Slider](./limits)
