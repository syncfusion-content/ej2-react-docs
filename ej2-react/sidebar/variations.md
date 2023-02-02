---
layout: post
title: Variations in React Sidebar component | Syncfusion
description: Learn here all about Variations in Syncfusion React Sidebar component of Syncfusion Essential JS 2 and more.
control: Variations 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Variations in React Sidebar component

The Sidebar component's expand behavior can be modified based on the purpose of use.

* Expanding types of the Sidebar

## Expanding types of Sidebar

Sidebar can be set to initialize based on four different types that are consistent with the main component as explained below. When `dataBind` is invoked, this applies the pending property changes immediately to the component.

 | Item | Description |
|-----|-----|
| [`Over`](https://ej2.syncfusion.com/react/documentation/api/sidebar#type) | Sidebar floats over the main content area.|
| [`Push`](https://ej2.syncfusion.com/react/documentation/api/sidebar#type) | Sidebar pushes the main content area to appear side-by-side, and shrinks the main content within the screen width.|
| [`Slide`](https://ej2.syncfusion.com/react/documentation/api/sidebar#type) | Sidebar translates the x and y positions of main content area based on the Sidebar width. The main content area will not be adjusted within the screen width. |
| [`Auto`](https://ej2.syncfusion.com/react/documentation/api/sidebar#type) | Sidebar with `Over` type in mobile resolution, and `Push` type in other higher resolutions. |

> `Auto` is the default expand mode.

In the following sample, the types of Sidebar are demonstrated.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sidebar/variations-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sidebar/variations-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sidebar/variations-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sidebar/variations-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sidebar/variations-cs1" %}

## See Also

* [How to add sidebar with custom animation](./how-to/sidebar-with-variation-animation)
* [How to add multiple sidebar](./how-to/multiple-sidebar)