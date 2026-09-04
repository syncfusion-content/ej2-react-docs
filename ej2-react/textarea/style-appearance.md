---
layout: post
title: Style and Appearance in React TextArea | Syncfusion
description: Customize the React TextArea size and styling by adding e-small or e-bigger CSS classes to render compact or larger inputs.
control: Style and Appearance
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in React TextArea

You can adjust the React TextArea size by applying specific classes:

| Property  | Description |
| -- | -- |
| Small  | Add the `e-small` class to the input element or its container to render a smaller-sized TextArea. |
| Bigger | Add the `e-bigger` class to the input element or its container to render a larger-sized TextArea. |

By applying these classes, users can easily customize the appearance of the TextArea to better fit their application's design requirements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/style-appearance-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textarea/style-appearance-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs1" %}

## Filled and outline mode

Enable Filled or Outline modes by adding the `e-outline` or `e-filled` class to the [cssClass](https://ej2.syncfusion.com/react/documentation/api/textarea/#cssClass) API. This allows you to choose between filled or outline appearance, aligning with your application's design.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/style-appearance-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textarea/style-appearance-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs2" %}

>Note: Filled and Outline theme customization are available only with Material themes.

## Custom styling with cssClass API in React TextArea

The `cssClass` API provides a powerful way to apply custom styling to the React TextArea component. Apply custom CSS classes to control styling properties such as color, padding, margins, borders, and more according to your design requirements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/style-appearance-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textarea/style-appearance-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs3" %}

## Setting the disabled state in React TextArea

To disable the React TextArea, you can utilize the [enabled](https://ej2.syncfusion.com/react/documentation/api/textarea/#enabled) property. When set to `false`, the TextArea becomes disabled, preventing user interaction.

```ts
{/* Import the React TextArea. */}
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render React TextArea.*/}
function App() {
  
    return (
        <div className='wrap'>
            <TextAreaComponent id="default" enabled={false}></TextAreaComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
```

## Set the readonly React TextArea

To make the React TextArea read-only , you can use the [readonly](https://ej2.syncfusion.com/react/documentation/api/textarea/#readonly) property. When set to `true`, it prevents users from editing the content of the React TextArea.

```ts
{/* Import the React TextArea. */}
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render React TextArea.*/}
function App() {
  
    return (
        <div className='wrap'>
            <TextAreaComponent id="default" readonly={true}></TextAreaComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
```

## Set the rounded corner in React TextArea

Render the React TextArea with `rounded corner` by adding the `e-corner` class to the input parent element.

>This rounded corner is visible only in box model input component

```ts
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render React TextArea.*/}
function App() {
  
    return (
        <div class="e-input-group e-corner">
            <textarea class="e-input" placeholder="Enter your comments"></textarea>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
```

## Static clear button in React TextArea

To display a static clear button in the TextArea component, you can add the `e-static-clear` class to the `cssClass` property. This class ensures that the clear button remains visible at all times, providing users with the ability to easily clear the React TextArea content without needing to focus on the control.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/style-appearance-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textarea/style-appearance-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs4" %}

## Customize the React TextArea background color and text color

You can customize the React TextArea styles such as background-color, text-color and border-color by overriding its default styles to achieve the desired appearance for the React TextArea.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/style-appearance-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textarea/style-appearance-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs5" %}

## Change the floating label color of the React TextArea

You can change the floating label color of the React TextArea for both `success` and `warning` validation states by applying the following CSS styles.

```css

    /* For Success state */
    .e-float-input.e-success label.e-float-text,
    .e-float-input.e-success input:focus ~ label.e-float-text,
    .e-float-input.e-success input:valid ~ label.e-float-text {
      color: #22b24b;
    }

    /* For Warning state */
    .e-float-input.e-warning label.e-float-text,
    .e-float-input.e-warning input:focus ~ label.e-float-text,
    .e-float-input.e-warning input:valid ~ label.e-float-text {
      color: #ffca1c;
    }

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/style-appearance-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textarea/style-appearance-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs6" %}

## Adding mandatory asterisk to placeholder

To add a mandatory asterisk (*) to the placeholder in the React TextArea component, you can utilize CSS to append the asterisk after the placeholder text.

```css

/* To add asterick to float label in textarea */ 
.e-float-input.e-control-wrapper .e-float-text::after {
  content: '*'; /* Add asterisk after the placeholder */
  color: red; /* Customize asterisk color */
}

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/style-appearance-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textarea/style-appearance-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/style-appearance-cs7" %}
