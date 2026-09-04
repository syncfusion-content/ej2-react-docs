---
layout: post
title: How to create a wizard in React Accordion | Syncfusion
description: Build a multi-step form wizard by enabling, disabling, and expanding Syncfusion React Accordion items as the user progresses.
control: Create wizard using accordion 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to create a wizard in React Accordion

React Accordion items can be disabled dynamically by passing the index and boolean value with the ['enableItem'](https://ej2.syncfusion.com/react/documentation/api/accordion#enableitem) method and also dynamically expand the item using [`expandItem`](https://ej2.syncfusion.com/react/documentation/api/accordion#expanditem) method.

The below Wizard sample is designed for Online Shopping model. In this,  each Accordion item is integrated with required components to fill the details and designed for getting user details and making payment at the end. Each field is provided with validation for all mandatory option to enable/disable to next Accordion.  In below sample, Accordion items can be disabled dynamically with [`enableItem`](https://ej2.syncfusion.com/react/documentation/api/accordion#enableitem) method using [`created`](https://ej2.syncfusion.com/react/documentation/api/accordion#created) event.

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
