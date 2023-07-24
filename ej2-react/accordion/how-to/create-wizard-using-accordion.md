---
layout: post
title: Create wizard using accordion in React Accordion component | Syncfusion
description: Learn here all about Create wizard using accordion in Syncfusion React Accordion component of Syncfusion Essential JS 2 and more.
control: Create wizard using accordion 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Create wizard using accordion in React Accordion component

Accordion items can be disabled dynamically by passing the index and boolean value with the ['enableItem'](https://ej2.syncfusion.com/react/documentation/api/accordion#enableitem) method and also dynamically expand the item using [`expandItem`](https://ej2.syncfusion.com/react/documentation/api/accordion#expanditem) method.

The below Wizard sample is designed for Online Shopping model. In this,  each Accordion item is integrated with required components to fill the details and designed for getting user details and making payment at the end. Each field is provided with validation for all mandatory option to enable/disable to next Accordion.  In below sample, accordion items can be disabled dynamically with [`enableItem`](https://ej2.syncfusion.com/react/documentation/api/accordion#enableitem) method using [`created`](https://ej2.syncfusion.com/react/documentation/api/accordion#created) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/accordion/accordion-disable-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/accordion/accordion-disable-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-disable-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/accordion/accordion-disable-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-disable-cs1" %}
