---
layout: post
title: Navigation in React Breadcrumb component | Syncfusion
description: Learn here all about Navigation in Syncfusion React Breadcrumb component of Syncfusion Essential JS 2 and more.
control: Breadcrumb 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Navigation in React Breadcrumb component

The Breadcrumb component enables navigation to specific paths when users click breadcrumb items. To enable navigation functionality, bind the [`url`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/breadcrumbItem/#url) property to the breadcrumb items.

## URL

In the Breadcrumb component, each item represents a URL destination. Breadcrumb items can be configured with either relative or absolute URLs to define navigation paths.

### Relative URL

Breadcrumb items with relative URLs contain only the path segment without specifying the complete location or server details. The following example demonstrates breadcrumb items configured with relative URLs.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/getting-started-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/getting-started-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs7" %}

### Absolute URL

Breadcrumb items with absolute URLs contain the complete path and navigate directly to the specified resource when the absolute URL is bound to the breadcrumb item. The following example demonstrates breadcrumb items configured with absolute URLs.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/getting-started-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/getting-started-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs8" %}

## Enable navigation for last Breadcrumb item

By default, the last breadcrumb item (active item) is not clickable. To enable navigation for the last item, set the [`enableActiveItemNavigation`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#enableactiveitemnavigation) property to `true`. The following example demonstrates enabling navigation for the last breadcrumb item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/getting-started-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/getting-started-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs9" %}

## Open URL in new page or tab

To open the breadcrumb item in a new page or tab, set the target property of the required item url to blank in the Breadcrumb component. In the following example, the target property of items url was set to blank by using the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#beforeitemrender) event which locates to the path in the new tab.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/getting-started-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/getting-started-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs10" %}