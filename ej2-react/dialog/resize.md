---
layout: post
title: Resize in React Dialog Component | Syncfusion
description: Learn here all about resize support in Syncfusion Essential React Dialog component, it's elements and more.
control: Resize 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resize in React Dialog Component

The Dialog supports resizing feature. To resize the dialog, we have to select and resize it by using its handle (grip) or hovering on any of the edges or borders of the dialog within the sample container.

The resizable dialog can be created by setting the [enableResize](https://ej2.syncfusion.com/react/documentation/api/dialog/#enableresize) property to true, which is used to change the size of a dialog dynamically and view its content with expanded mode. The [resizeHandles](https://ej2.syncfusion.com/react/documentation/api/dialog/#resizehandles) property can also be configured for all the which directions in which the dialog should be resized. When you configure the target property along with the [enableResize](https://ej2.syncfusion.com/react/documentation/api/dialog/#enableresize) property, the dialog can be resized within its specified target container.

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
