---
layout: post
title: Views in React File Manager component | Syncfusion
description: Learn here all about Views in Syncfusion React File Manager component of Syncfusion Essential JS 2 and more.
control: Views 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Views in React File Manager component

View is the section where the files and folders are displayed for the user to browse. The [view](https://ej2.syncfusion.com/react/documentation/api/file-manager/index-default#view) API can also be used to change the initial view of the File Manager.

 The File Manager has two types of [views](https://ej2.syncfusion.com/react/documentation/api/file-manager/index-default#view) to display the files and folders.

* [LargeIcons View](#largeicons-view)
* [Details View](#details-view)

## LargeIcons View

By default, File Manager is rendered with **largeicons** view. The following example demonstrate this.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/large-icon-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/large-icon-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/large-icon-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/large-icon-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/large-icon-cs1" %}

 ### Customize existing Large Icons View

The large icons view layout can be customized using the `largeIconsTemplate` property, which allows you to display file or folder information, apply custom formatting, and use conditional rendering based on item type. You can customize it further based on your application requirements.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/large-icon-view-template/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/large-icon-view-template/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/large-icon-view-template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/large-icon-view-template/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/large-icon-view-template" %}

## Details View

**Details view** is an injectable module in the File Manager so, it should be injected before rendering the File Manager to avail its functionality. The default appearance of the File Manager can be changed from largeicons to details view by using the [view](https://ej2.syncfusion.com/react/documentation/api/file-manager/index-default#view) property. The following example demonstrate the File Manager with details view.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/details-view-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/details-view-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/details-view-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/details-view-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/details-view-cs1" %}