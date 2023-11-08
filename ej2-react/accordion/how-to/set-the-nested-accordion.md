---
layout: post
title: Set the nested accordion in React Accordion Component | Syncfusion
description: Learn here all about set the nested accordion in Syncfusion Essential React Accordion component, it's elements and more details.
control: Set the nested accordion 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set the nested accordion in React Accordion Component

Accordion supports to render `nested` level of Accordion by using [`content`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionItemModel/#content) property. You can give nested Accordion content inside the parent Accordion content property by using `id` of nested element. The nested Accordion can be rendered with the use of provided events, such as [`clicked`](https://ej2.syncfusion.com/react/documentation/api/accordion/#clicked) and [`expanding`](https://ej2.syncfusion.com/react/documentation/api/accordion/#expanding).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/accordion/accordion-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/accordion/accordion-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-cs7" %}