---
layout: post
title: Navigation in React Breadcrumb component | Syncfusion
description: Learn here all about Navigation in Syncfusion React Breadcrumb component of Syncfusion Essential JS 2 and more.
control: Navigation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Navigation in React Breadcrumb component

The breadcrumb item navigates to the path while clicking the item. To enable navigation, [`url`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/breadcrumbItem/#url) property was bound to the items.

## URL

In the Breadcrumb component, the item represents the url. The breadcrumb items can be provided with either relative or absolute URL.

### Relative URL

The breadcrumb items with relative URL contain only the path but do not locate the path or server. The following example represents the breadcrumb items with relative url.

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

The breadcrumb items with Absolute URL contain the path and locate to the resource if the static url is bound to the breadcrumb item. The following example represents the breadcrumb items with static url.

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

The feature enables the last item of the Breadcrumb component by setting the [`enableActiveItemNavigation`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#enableactiveitemnavigation) property to true. In the following example, the last item of the `Breadcrumb` was enabled.

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