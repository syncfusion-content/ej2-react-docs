---
layout: post
title: Template in React Breadcrumb component | Syncfusion
description: Learn here all about Template in Syncfusion React Breadcrumb component of Syncfusion Essential JS 2 and more.
control: Breadcrumb 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Breadcrumb component

The Breadcrumb component provides flexible template customization options to create rich, interactive navigation experiences. Use the [`itemTemplate`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#itemtemplate) property to customize individual breadcrumb items and the [`separatorTemplate`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#separatortemplate) property to customize the separators between items, enabling full control over the visual presentation and functionality.

## Item Template

The following example demonstrates customizing breadcrumb items using the [`itemTemplate`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#itemtemplate) property. This shopping cart navigation scenario shows how breadcrumb items can be enhanced with chip components to create a more engaging user interface.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/getting-started-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/getting-started-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs11" %}

## Separator Template

The following example shows how to customize separators between breadcrumb items using the [`separatorTemplate`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#separatortemplate) property. Custom icons replace the default separator to create a more visually distinctive navigation path.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/separator-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/separator-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/separator-template-cs1" %}

## Customize Specific Item Template

Individual breadcrumb items can be customized selectively using [`itemTemplate`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#itemtemplate) with conditional rendering logic. The following example demonstrates how to apply custom styling with a span element specifically to items containing "Breadcrumb" in their text, while leaving other items with default styling.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/getting-started-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/getting-started-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs12" %}