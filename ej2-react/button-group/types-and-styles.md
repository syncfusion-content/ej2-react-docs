---
layout: post
title: Types and styles in React Button Group | Syncfusion
description: Explore React Button Group types (outline) and styles (primary, success, info, warning, danger) applied through the cssClass property.
control: Types and styles 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Types and styles in React Button Group

This section explains the different types and styles available in the Syncfusion React Button Group component.

## React Button Group types

### Outline React Button Group

An outline React Button Group displays buttons with borders and transparent backgrounds. To create an outline React Button Group, add the `e-outline` class to the target element and to individual button elements using the `cssClass` property.

The following example demonstrates how to create an outline React Button Group:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/default-cs10/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/default-cs10/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/default-cs10" %}

> The React Button Group component does not support `flat` and `round` button types. Use predefined styles for visual customization.

## React Button Group styles

The React Button Group component provides predefined styles to convey different actions and meanings. Apply these styles by adding the corresponding class name to each button element using the `cssClass` property.

| Class | Description |
| -------- | -------- |
| e-primary | Represents a primary action. |
| e-success | Represents a positive action. |
| e-info | Represents an informative action. |
| e-warning | Represents an action requiring caution. |
| e-danger | Represents a negative action. |

The following example demonstrates how to apply predefined styles to a React Button Group:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/default-cs11/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/default-cs11/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/default-cs11" %}

> Predefined React Button Group styles provide visual indication only. Ensure button content clearly describes the button's purpose for users of assistive technologies such as screen readers.

## See Also

* [React Button Group with icons](./how-to/create-buttongroup-with-icons)
* [Create React Button Group with rounded corner](./how-to/create-buttongroup-with-rounded-corner)