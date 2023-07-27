---
layout: post
title: Toolbar in React Image editor component | Syncfusion
description: Learn here all about Toolbar in Syncfusion React Image editor component of Syncfusion Essential JS 2 and more.
control: Toolbar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in the React Image Editor component

The toolbars in the Image Editor are a key component for interacting with and editing images. They provide a range of tools and options that can be customized to suit the needs and preferences. Add or remove items from the toolbar to create a personalized set of tools, or they can even create their own custom toolbar from scratch. This flexibility and customization allow them to create a unique image editing experience that is tailored to their specific needs and workflow. 

In the Image Editor, the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property provides the ability to customize the toolbar by adding or removing items, as well as defining a completely custom toolbar. This feature is valuable for creating a personalized image editing experience that aligns with specific requirements and workflows. 

## Built-in toolbar items

Specifies the toolbar items to perform UI interactions. Refer to the built-in toolbar items for the default value.

* Crop
* Transform
* Annotate
* ZoomIn
* ZoomOut
* Open
* Reset
* Save
* Pan

## Add a custom toolbar items

The [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property in the Image Editor allows to add or remove toolbar items to include only the tools they frequently use, streamlining the editing process and reducing clutter. 

Here is an example of adding custom toolbar items to rotate and flip transformation using [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property. 

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs16/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs16/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs16" %}

## Show or hide a toolbar 

The [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property controls the visibility of the toolbar in the Image Editor. When the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property is set to an empty list, the toolbar is hidden. Conversely, if the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property contains a list of items, the toolbar is shown, displaying the specified items. This feature provides flexibility for users to personalize their image editing experience. 

Here is an example of hiding the toolbar of the image editor using [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs33/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs33/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs33/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs33" %}

## Show or hide a toolbar item

The [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property is utilized to control the visibility of toolbar items in the Image Editor. By default, the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property includes the default toolbar items. So, if you wish to hide the default toolbar items then you need to explicitly define the required items using [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property. This allows you to customize the toolbar by displaying only the specific items you require, tailoring the editing experience to your preferences.

Here is an example of hiding the cropping and selection toolbar items using [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs32/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs32/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs32/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs32" %}

## Enable or disable a toolbar item

The [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property is employed to enable or disable toolbar items in the Image Editor. By default, the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property includes the default toolbar items, and these items cannot be disabled. However, if you have defined custom toolbar items using the toolbarItemModel, you can enable or disable them by configuring their respective properties within the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property. This provides the flexibility to control the availability and functionality of custom toolbar items based on your specific requirements. 

Here is an example of disabling the custom toolbar item using [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbar) property.

## Toolbar template

The [`toolbarTemplate`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbartemplate) property in the Image Editor provides the capability to fully customize the toolbar by supplying a custom template. This feature is valuable when you want to create a distinct and personalized image editing experience that goes beyond the default toolbar or the customizable toolbar options offered by the Image Editor. By defining a custom template for the toolbar, you have complete control over its layout, appearance, and functionality. This empowers you to design a unique and tailored toolbar that aligns perfectly with your specific requirements and desired user experience. 

Here is an example of using [`toolbarTemplate`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbartemplate) to render only the button to toggle the freehand draw option. 
The toolbar of the Image Editor can be replaced with the user specific UI using the [`toolbarTemplate`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbartemplate) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs17/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs17/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs17" %}

## Customize Contextual Toolbar

The [`toolbarUpdating`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbarupdating) event is triggered when inserting or selecting annotations, which opens the contextual toolbar in the Image Editor. Within this event, the [`toolbarItems`](https://helpej2.syncfusion.com/react/documentation/api/image-editor/toolbarEventArgs/#toolbaritems) property in the [`ToolbarEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/image-editor/toolbarEventArgs/) is utilized to add or remove contextual toolbar items.

In the following example, the contextual toolbar for rectangle will be rendered with only stroke color by excluding fill color and stroke width using [`toolbarUpdating`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbarupdating) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs18/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs18/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs18" %}

## Toolbar item clicked event 

The [`toolbarItemClicked`](https://helpej2.syncfusion.com/react/documentation/api/image-editor/#toolbaritemclicked) event is triggered when a toolbar item is clicked in the Image Editor. This event is particularly useful when you have added custom options to both the main toolbar and contextual toolbar, as it allows you to capture the user's interaction with those custom options. By subscribing to the [`toolbarItemClicked`](https://helpej2.syncfusion.com/react/documentation/api/image-editor/#toolbaritemclicked) event, you can execute specific actions or handle logic based on the toolbar item that was clicked.

Here is an example of toolbar item clicking event using [`toolbarItemClicked`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#toolbarItemClicked) property. 

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs31/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs31/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs31/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs31" %}