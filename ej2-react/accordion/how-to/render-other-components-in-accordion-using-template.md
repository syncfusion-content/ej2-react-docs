---
layout: post
title: Render other components in accordion using template in React Accordion component | Syncfusion
description: Learn here all about Render other components in accordion using template in Syncfusion React Accordion component of Syncfusion Essential JS 2 and more.
control: Render other components in accordion using template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Render other components in accordion using template in React Accordion component

You can render other components inside Accordion using React **template**. Through this, we can add content as other components directly with all functionalities to our Accordion. Follow the below guidelines for using the other components as template in Accordion.

* Declare a template within the function returns jsx element. If the template does not need arguments no need to pass the properties.

* Assign the function as value for the template property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/accordion/direct-components-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/accordion/direct-components-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/direct-components-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/direct-components-cs1" %}
