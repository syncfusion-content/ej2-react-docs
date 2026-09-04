---
layout: post
title: How to render using utility functions in React Dialog | Syncfusion
description: Open an alert or confirm React Dialog with minimal code using the built-in utility functions and configure title, content, buttons, and animation.
control: Render a dialog using utility functions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to render using utility functions in React Dialog

The React Dialog component provides built-in utility functions to render alert and confirm dialogs with minimal code.
The following options are used as an argument on calling the utility functions:

| Options   | Description |
|-----------|-------------|
| title | Specifies the title of React Dialog like the [`header`](https://ej2.syncfusion.com/react/documentation/api/dialog#header) property.|
| content | Specifies the value that can be displayed in React Dialog's content area like the [`content`](https://ej2.syncfusion.com/react/documentation/api/dialog#content) property. |
| isModal | A boolean value that determines whether the React Dialog is displayed as modal or non-modal. For more details, refer to the [`isModal`](https://ej2.syncfusion.com/react/documentation/api/dialog#ismodal) property.|
| position | Specifies the position of the alert or confirm React Dialog within the document. For more details, refer to the [`position`](https://ej2.syncfusion.com/react/documentation/api/dialog#position) property. The default value is `{ X: 'center', Y: 'center' }`.|
| okButton | Configures the OK button with properties and click events. The `okButton` object follows the [`ButtonModel`](https://ej2.syncfusion.com/react/documentation/api/button#buttonmodel) interface: `{ icon: 'prefix icon to the button', cssClass: 'custom class to the button', click: 'action for OK button click', text: 'Yes' // Default value is 'OK' }`.|
| cancelButton | Configures the Cancel button with properties and click events. The `cancelButton` object follows the [`ButtonModel`](https://ej2.syncfusion.com/react/documentation/api/button#buttonmodel) interface: `{ icon: 'prefix icon to the button', cssClass: 'custom class to the button', click: 'action for Cancel button click', text: 'No' // Default value is 'Cancel' }`.|
| isDraggable | A boolean value that determines whether the React Dialog can be dragged.|
| showCloseIcon | When set to true, the close icon is shown in the React Dialog component. |
| closeOnEscape | When set to `true`, the React Dialog can be closed by pressing the Esc key.|
| animationSettings | Specifies the animation settings of the React Dialog component. |
| cssClass | Specifies the CSS class name that can be appended to the React Dialog. |
| zIndex | Specifies the z-index of the React Dialog, controlling whether it appears in front of or behind other components. |
| open | Event which is triggered after the React Dialog is opened. |
| close | Event which is triggered after the React Dialog is closed. |

> The `DialogUtility.alert()` and `DialogUtility.confirm()` methods return a React Dialog instance, which can be used to programmatically call `hide()` or access other React Dialog methods.

## Alert dialog

An alert dialog box is used to display warning like messages to the users. Use the following code to render a simple alert dialog in an application.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dialog-utility-alert-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dialog-utility-alert-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-alert-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dialog-utility-alert-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dialog-utility-alert-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-alert-cs2" %}

### Render an alert dialog with options

The `DialogUtility.alert()` method accepts either a content string or an options object. When passing an options object, the function signature is:

```js
DialogUtility.alert({ title, content, okButton, showCloseIcon, ... });
```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-alert1-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-alert1-cs2" %}

## Confirm dialog

A confirm dialog displays a specified message along with OK and Cancel buttons.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dialog-utility-confirm-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dialog-utility-confirm-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-confirm-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dialog-utility-confirm-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dialog-utility-confirm-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-confirm-cs2" %}

### Render a confirmation dialog with options

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-confirm1-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-confirm1-cs2" %}