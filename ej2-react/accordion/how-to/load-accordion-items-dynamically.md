---
layout: post
title: How to add items dynamically in React Accordion | Syncfusion
description: Add new items to the Syncfusion React Accordion at runtime using the `addItem` method with a target index.
control: Load accordion items dynamically 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add items dynamically in React Accordion

Accordion items can be added dynamically by passing the item and index value with the [`addItem`](https://ej2.syncfusion.com/react/documentation/api/accordion#additem) method.

In the following demo, you can add the React Accordion content by expanding any React Accordion header content using [`expanded`](https://ej2.syncfusion.com/react/documentation/api/accordion#expanded) event.

* Data is fetched from the data source.

* The data is formatted as a JSON object with [`header`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionItem#header) and [`content`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionItem#content) fields.

* Here last index is calculated to append the new React Accordion at the end.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/accordion/accordion-items-dynamically-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/accordion/accordion-items-dynamically-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-items-dynamically-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-items-dynamically-cs1" %}
