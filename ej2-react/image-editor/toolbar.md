---
layout: post
title: Toolbar in React Image editor component | Syncfusion
description: Learn here all about Toolbar in Syncfusion React Image editor component of Syncfusion Essential JS 2 and more.
control: Toolbar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in React Image editor component

Toolbars are used to interact and edit images with customization. Users can define their own toolbars for an image editor by customizing the items or the entire toolbar.

## Built-in Toolbar Items

Specifies the toolbar items to perform UI interactions. Refer to the built-in toolbar items for the default value.

* Crop,
* Transform,
* Annotate,
* ZoomIn,
* ZoomOut,
* Open,
* Reset,
* Save,
* Pan

## Custom Toolbar items

Users can define their own toolbars for an image editor by customizing the items or the entire toolbar. Users can achieve this by using the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property.

The built-in toolbar can be customized using the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property, so the specified toolbar items can be enabled in the Image Editor toolbar. And the contextual toolbar which is enabled while inserting annotations can also be customized in the toolbarUpdating event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/image-editor/default-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/image-editor/default-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs16" %}

## Toolbar template

Specifies template to the Image Editor Toolbar. If you want to customize the entire toolbar in your own way use this property. The property depends on the ‘toolbar’.

The toolbar of the Image Editor can be replaced with the user specific UI using the [`toolbarTemplate`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbartemplate) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/image-editor/default-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/image-editor/default-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs17" %}

## Customize Contextual Toolbar

The built-in contextual toolbar can be customized using the toolbar property, so the specified toolbar items can be enabled in the Image Editor toolbar. And the contextual toolbar which is enabled while inserting annotations can  be customized in the [`toolbarUpdating`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbarupdating) event

In the following example, the contextual toolbar for rectangle will be rendered with only stroke color by excluding fill color and stroke width using toolbarUpdating event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/image-editor/default-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/image-editor/default-cs18/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs18" %}
