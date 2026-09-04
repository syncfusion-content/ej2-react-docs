---
layout: post
title: How to embed other components in React Accordion | Syncfusion
description: Embed other React components inside a Syncfusion React Accordion pane by assigning a JSX template to the item.
control: Render other components in accordion using template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to embed other components in React Accordion

You can render other components inside React Accordion using React **template**. Through this, we can add content as other components directly with all functionalities to our React Accordion. Follow the below guidelines for using the other components as template in React Accordion.

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
