---
layout: post
title: Filter in React Image Editor | Syncfusion
description: Apply pre-defined effects like chrome, cold, warm, sepia, and invert to images in the React Image Editor using the applyImageFilter method.
platform: ej2-react
control: Filter
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filter in React Image Editor

Filters are pre-defined effects that can be applied to an image to alter its appearance or mood. Image filters can be used to add visual interest or to enhance certain features of the image. Some common types of image filters include cold, warm, chrome, sepia, and invert. This can be done by using the toolbar or the [`applyImageFilter`](https://ej2.syncfusion.com/react/documentation/api/image-editor#applyimagefilter) method, which takes a single parameter: the filter to apply to the image.

## Apply filter effect

The [`applyImageFilter`](https://ej2.syncfusion.com/react/documentation/api/image-editor#applyimagefilter) method applies a predefined filter to the image.

ImageFilterOption enumeration:

- `Chrome` - Chrome filter.
- `Cold` - Cold filter.
- `Default` - Default filter.
- `Grayscale` - Grayscale filter.
- `Invert` - Invert filter.
- `Sepia` - Sepia filter.
- `Warm` - Warm filter.

In the following example, you can use the `applyImageFilter` method in the button click event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs27/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs27/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs27/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs27" %}

## Image filtering event 

The [`imageFiltering`](https://ej2.syncfusion.com/react/documentation/api/image-editor#imagefiltering) event is triggered when applying a filter to the image. This event receives an [`ImageFilterEventArgs`](https://ej2.syncfusion.com/react/documentation/api/image-editor/imageFilterEventArgs) object with the following properties:

- `filter` : The filter option being applied.

- `cancel` : Set to `true` to cancel the filtering action.
