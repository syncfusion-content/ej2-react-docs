---
layout: post
title: Template in React Breadcrumb component | Syncfusion
description: Learn here all about Template in Syncfusion React Breadcrumb component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Breadcrumb component

The Breadcrumb component provides a way to customize the items using [`itemTemplate`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#itemtemplate) and the separators using [`separatorTemplate`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#separatortemplate) properties.

## Item Template

In the following example, Shopping Cart details are used as breadcrumb Items and the items are customized by the chips component using [`itemTemplate`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#itemtemplate).

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

In the  following example, the separators are customized with icons using [`separatorTemplate`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#separatortemplate).

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

The specific breadcrumb item can be customizable using itemTemplate with conditional rendering. In the following example, added the span element only for the `breadcrumb` text in breadcrumb item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/getting-started-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/getting-started-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs12" %}