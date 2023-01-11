---
layout: post
title: Update value in React Rich text editor component | Syncfusion
description: Learn here all about Update value in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Update value 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Update value in React Rich text editor component

To achieve this, we need to bind the `keydown` event to the RTE content and capture the `ctrl + s` key press using its keyCode.
In the `keydown` event handler, the `updateValue` method is called to update the [`value`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#value) property and then we can save the content in the required database using the same.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs24/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs24/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs24" %}

`[functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs25/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs25/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs25" %}