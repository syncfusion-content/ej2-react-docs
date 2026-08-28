---
layout: post
title: Frame in React Image Editor | Syncfusion
description: Add decorative borders and frames like mat, bevel, line, hook, and inset to images in the React Image Editor with custom colors and sizes.
platform: ej2-react
control: Frames
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Frame in React Image Editor

The frame feature in an Image Editor provides users with the capability to add decorative borders or frames around their images. Frames are a visual design element that can enhance the overall appearance and appeal of an image.

## Apply frame to the image

The [`drawFrame`](https://ej2.syncfusion.com/react/documentation/api/image-editor#drawframe) method is a function designed to enable the application of various frame options to an image. This method simplifies the process of adding decorative frames, such as mat, bevel, line, hook, and inset, to an image by allowing users to specify their desired frame type.

Depending on the frame type selected, users may have additional customization options, such as adjusting the frame's thickness, color, texture, or other attributes. This allows for fine-tuning the appearance of the frame to match the image's theme or the user's preferences.

The `drawFrame` method in the Image Editor control takes nine parameters to define the frame properties:

* `frameType` - Specifies the frame type (for example: `mat`, `bevel`, `line`, `hook`, `inset`).

* `color` - Specifies the color for the frame.

* `gradientColor` - Specifies the gradient color for the frame.

* `size` - Specifies the size (thickness) of the frame.

* `inset` - Specifies the inset value for applicable frame types.

* `offset` - Specifies the offset value for line and inset type frames.

* `borderRadius` - Specifies the border radius for line-type frames.

* `frameLineStyle` - Specifies the frame line style for line-type frames (for example: `solid`, `dashed`, `dotted`).

* `lineCount` - Specifies the number of lines for the line-type frame.

In the following example, you can use the drawFrame method in the button click event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs35/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs35/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs35/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs35" %}

## Frame changing event

The [`frameChanging`](https://ej2.syncfusion.com/react/documentation/api/image-editor/index-default#framechange) event is triggered when applying a frame to the image. This event provides information encapsulated within an object that includes details about the frame change, such as the frame type and customization values.

The parameters available in [`FrameChangeEventArgs`](https://ej2.syncfusion.com/react/documentation/api/image-editor/framechangeeventargs) are:

* [`FrameChangeEventArgs.previousFrameSetting`](https://ej2.syncfusion.com/react/documentation/api/image-editor/framechangeeventargs#previousframesetting) - The frame settings (size, color, inset, offset, gradientColor) that were applied before the change.

* [`FrameChangeEventArgs.currentFrameSetting`](https://ej2.syncfusion.com/react/documentation/api/image-editor/framechangeeventargs#currentframesetting) - The frame settings that will be applied after the change.

* [`FrameChangeEventArgs.cancel`](https://ej2.syncfusion.com/react/documentation/api/image-editor/framechangeeventargs#cancel) - A boolean value to cancel the frame-changing action.