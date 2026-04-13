---
layout: post
title: Resize in React Dialog component | Syncfusion
description: Learn here all about Resize in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Resize 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resize in React Dialog component

The Dialog supports resizing functionality. To resize the dialog, select and drag it using the resize handle (grip) or hover on any of the edges or borders of the dialog within the sample container.

A resizable dialog can be created by setting the [enableResize](https://ej2.syncfusion.com/react/documentation/api/dialog/#enableresize) property to `true`. This allows the dialog size to be changed dynamically, enabling users to view content in expanded mode. The [resizeHandles](https://ej2.syncfusion.com/react/documentation/api/dialog/#resizehandles) property can be configured to specify all directions in which the dialog can be resized. When the target property is configured along with [enableResize](https://ej2.syncfusion.com/react/documentation/api/dialog/#enableresize), the dialog can be resized only within its specified target container.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs19/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs19/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs19" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs20/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs20/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs20" %}
