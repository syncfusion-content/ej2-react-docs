---
layout: post
title: Getting started with React Range slider component | Syncfusion
description:  Checkout and learn about Getting started with React Range slider component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the simple Slider component with its basic usage in step by step procedure.

To get start quickly with React Range Slider, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=B0rPxt5tOSE" %}

## Dependencies

Install the below required dependent packages to render the Slider component.

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

You can use [`create-react-app`](https://github.com/facebook/create-react-app) to setup the
applications.

To install `create-react-app` run the following command.

```bash
npm install -g create-react-app
```

To set-up a React application in TypeScript environment, run the following command.

```
npx create-react-app my-app --template typescript

cd my-app

npm start
```

To set-up a React application in JavaScript environment, run the following command.

```
npx create-react-app my-app

cd my-app

npm start
```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. Now, we are going to render `Slider` component from these packages.

To install `Slider` component, use the following command.

```bash
npm install @syncfusion/ej2-react-inputs --save
```

The above command installs [Slider dependencies](#dependencies) which are required to render the component in the `React` environment.

## Adding CSS Reference

Import `Slider` component required theme references at the top of `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
```

> We can also use [CRG](https://crg.syncfusion.com/) to generate combined component styles.

## Adding Slider component

Now, you can add `Slider` component in the application. For getting started, add `Slider` component in `src/App.tsx` file using the following code snippet.

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

## Run the Application

The Essential JS 2 quickstart application project is configured to compile and run the application in browser. Use the following command to run the application.

```
npm start
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
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

The types of Slider are as follows:

| **Types** | **Usage** |
| --- | --- |
| Default | Shows a default Slider to select a single value. |
| MinRange | Displays the shadow from the start value to the current selected value. |
| Range | Selects a range of values. It also displays the shadow in-between the selection range. |

>Both the Default Slider and Min-Range Slider have same behavior that is used to select a single value.
In Min-Range Slider, a shadow is considered from the start value to current handle position. But the Range Slider
contains two handles that is used to select a range of values and a shadow is considered in between the two handles.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
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

The Slider can be displayed, either in horizontal or vertical orientation. By default, the Slider renders in horizontal orientation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/orientation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
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

The Slider displays the tooltip to indicate the current value by clicking the Slider bar or drag the Slider handle. The Tooltip position can be customized by using the `placement` property.
Also decides the tooltip display mode on a page, i.e., on hovering, focusing, or clicking on the Slider handle and it always remains/displays on the page.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs7" %}


### Buttons

The Slider value can be changed by using the Increase and Decrease buttons. In Range Slider, by default the first handle value will be changed while clicking the button. Change the handle focus and press the button to change the last focused handle value.

> After enabling the slider buttons if the 'Tab' key is pressed, the focus goes to the handle
and not to the button.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
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
