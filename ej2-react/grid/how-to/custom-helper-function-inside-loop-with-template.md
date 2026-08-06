---
layout: post
title: React Grid Custom Column Templates | Syncfusion
description: Learn how to create custom column templates in React Data Grid using helper functions, template loops, and dynamic rendering for customized cell content.
platform: ej2-react
control: Use custom helper inside the loop with templates 
documentation: ug
domainurl: ##DomainURL##
---

# Custom Column Templates in React Data Grid

The React Data Grid supports using custom helper functions inside a column's [template](https://ej2.syncfusion.com/react/documentation/api/grid/columnmodel#template), allowing the creation of complex, dynamic UI elements.

In the "Customer Rating" column, a custom template loops through the item array and renders `<span>` elements styled as stars using the following CSS:

```css
.e-grid .rating .star:before {
    content: '★';
}

.e-grid .rating .star {
    font-size: 132%;
    color: lightgrey;
}
```

Classes are assigned conditionally based on the "isRatingGreater" helper method, which highlights selected stars using:

```css
.e-grid .rating .star.checked {
    color: #ffa600;
    }
```

The example below demonstrates the complete implementation.

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
