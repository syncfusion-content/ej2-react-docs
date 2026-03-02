---
layout: post
title: Types and styles in React Button group component | Syncfusion
description: Learn here all about Types and styles in Syncfusion React Button group component of Syncfusion Essential JS 2 and more.
control: Types and styles 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Types and styles in React Button group component

This section explains the different types and styles available in the Syncfusion ButtonGroup component.

## ButtonGroup types

### Outline ButtonGroup

An outline ButtonGroup displays buttons with borders and transparent backgrounds. To create an outline ButtonGroup, add the `e-outline` class to the target element and to individual button elements using the `cssClass` property.

The following example demonstrates how to create an outline ButtonGroup:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/default-cs10/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/default-cs10/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/default-cs10" %}

> The ButtonGroup component does not support `flat` and `round` button types. Use predefined styles for visual customization.

## ButtonGroup styles

The ButtonGroup component provides predefined styles to convey different actions and meanings. Apply these styles by adding the corresponding class name to each button element using the `cssClass` property.

| Class | Description |
| -------- | -------- |
| e-primary | Represents a primary action. |
| e-success | Represents a positive action. |
| e-info | Represents an informative action. |
| e-warning | Represents an action requiring caution. |
| e-danger | Represents a negative action. |

The following example demonstrates how to apply predefined styles to a ButtonGroup:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/default-cs11/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/default-cs11/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/default-cs11" %}

> Predefined ButtonGroup styles provide visual indication only. Ensure button content clearly describes the button's purpose for users of assistive technologies such as screen readers.

## See Also

* [ButtonGroup with icons](./how-to/create-buttongroup-with-icons)
* [Create ButtonGroup with rounded corner](./how-to/create-buttongroup-with-rounded-corner)