---
layout: post
title: Center the dialog on page scroll in React Dialog | Syncfusion
description: Keep the React Dialog centered in the viewport while the page scrolls by applying the e-fixed CSS class to the dialog element.
control: Position the dialog on center of the page on scrolling 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Center the dialog on page scroll in React Dialog

By default, the React Dialog scrolls along with the page or container. To keep the React Dialog fixed in the center of the viewport while the page scrolls, apply the `e-fixed` class to the React Dialog element. This prevents the React Dialog from moving when the user scrolls the page, maintaining its centered position in the viewport.

`e-fixed` is a built-in CSS class provided by the React Dialog component. It can be applied via the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/dialog#cssclass) property, either at render time or dynamically (for example, in a button click handler or the `open` event). In the following sample, the `e-fixed` class is applied to the React Dialog when the "Prevent React Dialog Scroll" button is clicked.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/scrollposition-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/scrollposition-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/scrollposition-cs2" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/scrollposition-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/scrollposition-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/scrollposition-cs3" %}
