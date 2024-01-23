---
layout: post
title: Use custom helper inside the loop with templates in React Grid component | Syncfusion
description: Learn here all about Use custom helper inside the loop with templates in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Use custom helper inside the loop with templates 
documentation: ug
domainurl: ##DomainURL##
---

# Use custom helper inside the loop with templates in React Grid component

The Syncfusion React Grid allows you to use custom helpers inside the loop with `template` directive of a column. This feature enables you to create complex templates that can incorporate additional helper functions.

The **Customer Rating** column includes a custom template defined using `template`. Inside this template, iterates through the **item** array and generates `<span>` tag, displayed as stars using the CSS below:

```css
.e-grid .rating .star:before {
    content: '★';
}

.e-grid .rating .star {
    font-size: 132%;
    color: lightgrey;
}
```

The dynamically assigns classes based on the result of the **isRatingGreater** method, highlighting the star using the CSS below:

```css
.e-grid .rating .star.checked {
    color: #ffa600;
}
```

This is demonstrated in the following example.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/custom-loop-template/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/custom-loop-template/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/custom-loop-template/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/custom-loop-template/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/custom-loop-template" %}

