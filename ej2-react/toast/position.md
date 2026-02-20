---
layout: post
title: Position in React Toast component | Syncfusion
description: Learn here all about Position in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Toast position

Configure where toasts appear on the screen using predefined positions or custom coordinate values. Position settings determine toast placement relative to the viewport or target container, affecting user attention and notification visibility.

## Predefined positions

Toast supports nine predefined position combinations using the [`position`](https://ej2.syncfusion.com/react/documentation/api/toast/toastPositionModel/) property:

**Horizontal alignment (X):**
* **Left** - Aligns toast to the left edge
* **Center** - Centers toast horizontally
* **Right** - Aligns toast to the right edge

**Vertical alignment (Y):**
* **Top** - Positions toast at the top
* **Bottom** - Positions toast at the bottom

Combine X and Y values to create position combinations (e.g., Top-Left, Center-Bottom).

> **Note:** When multiple toasts display simultaneously, position changes only apply to newly displayed toasts. Existing toasts retain their original positions until dismissed. If toast width is set to 100%, X position values have no effect.

## Custom positions

For non-standard positioning, specify custom X and Y coordinates using pixels, numbers, or percentages. Numeric values are interpreted as pixels, while percentage values calculate relative to the container. Custom positioning provides precise control over toast placement for specialized layouts or responsive requirements.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs37/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs37/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs37" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs38/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs38/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs38" %}

## See Also

* [Render toast with different positions](./how-to/show-multiple-toasts-in-various-positions/)