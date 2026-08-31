---
layout: post
title: Resizing in React AutoComplete | Syncfusion
description: Let users dynamically resize the Syncfusion React AutoComplete popup by enabling the allowResize property, with the new size retained across sessions.
control: Resizing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resizing in React AutoComplete

You can dynamically adjust the size of the popup in the AutoComplete component by using the [`allowResize`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#allowresize) property. The default value of `allowResize` is `false`. When enabled, users can resize the popup both horizontally and vertically, improving visibility and control.

## Enabling resize


`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs30/app/index.tsx %}
{% endhighlight %}
{% endtabs %}


 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs30" %}


`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs31/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs31/app/index.tsx %}
{% endhighlight %}
{% endtabs %}


 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs31" %}

The following GIF demonstrates resizing the AutoComplete popup at runtime.

![Resizing the AutoComplete Popup](../images/autocomplete-resize.gif)
