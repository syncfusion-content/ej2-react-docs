---
layout: post
title: Integrate treeview inside the accordion in React Accordion component | Syncfusion
description: Learn here all about Integrate treeview inside the accordion in Syncfusion React Accordion component of Syncfusion Essential JS 2 and more.
control: Integrate treeview inside the accordion 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Integrate treeview inside the accordion in React Accordion component

Accordion supports to render other Essential JS 2 Components by using content property.
You can give content as an element string like below, for initializing the component.

```js
content: '<div id="element"> </div>'
```

The other component can be rendered with the use of provided events, such as [`clicked`](https://ej2.syncfusion.com/react/documentation/api/accordion#clicked) and [`expanding`](https://ej2.syncfusion.com/react/documentation/api/accordion#expanding).
The following procedure is to render a TreeView within the Accordion,

* Import the `TreeView` module from `ej2-navigations`, for adding TreeView. Please refer the [TreeView initialization steps](../../../treeview/getting-started.html)

* You can initialize the TreeView component in [`expanding`](https://ej2.syncfusion.com/react/documentation/api/accordion#expanding) event, by getting the element and defining the required TreeView properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/accordion/accordion-treeview-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/accordion/accordion-treeview-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-treeview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-treeview-cs1" %}