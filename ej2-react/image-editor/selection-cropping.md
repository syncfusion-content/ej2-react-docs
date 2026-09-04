---
layout: post
title: Selection and Cropping in React Image Editor | Syncfusion
description: Select custom, square, circle, or ratio regions and crop images in the React Image Editor with built-in 2:3, 4:3, 16:9 presets.
control: Selection Cropping 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Selection and Cropping in React Image Editor

The cropping feature in the React Image Editor allows you to select and crop specific regions of an image. It offers different selection options, including custom shapes, squares, circles, and various aspect ratios such as 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 5:7, 7:5, 9:16, and 16:9.

To perform a selection, you can use the [`select`](https://ej2.syncfusion.com/react/documentation/api/image-editor#select) method, which allows you to define the desired selection area within the image. Once the selection is made, you can then use the [`crop`](https://ej2.syncfusion.com/react/documentation/api/image-editor#crop) method to crop the image based on the selected region. This enables you to extract and focus on specific parts of the image while discarding the rest.

## Insert custom / square / circle region 

The [`select`](https://ej2.syncfusion.com/react/documentation/api/image-editor#select) method allows you to perform a selection based on the type of selection. Here, the `select` method is used to perform a selection as custom, circle, or square. The selection region can also be customized using the `select` method based on the parameters below.

* type - Specify the type of selection 

* startX - Specify the x-coordinate of the selection region’s starting point 

* startY - Specify the y-coordinate of the selection region’s starting point 

* width - Specify the width of the selection region 

* height - Specify the height of the selection region 

Example — square selection:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs12/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs12/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs12" %}

## Insert selection based on aspect ratio 

The [`select`](https://ej2.syncfusion.com/react/documentation/api/image-editor#select) method is used to perform the selection with the various aspect ratios such as 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 5:7, 7:5, 9:16, and 16:9. The selection region can also be customized using the `select` method based on the parameters below. 

* type - Specify the type of selection 

* startX - Specify the x-coordinate of the selection region’s starting point 

* startY - Specify the y-coordinate of the selection region’s starting point 

Example — ratio selection:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs14/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs14/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs14" %}

## Crop an image 

The [`crop`](https://ej2.syncfusion.com/react/documentation/api/image-editor#crop) method allows cropping based on the selected region.

Example — crop selection (including circle crop):

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs15/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs15/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs15" %}

## Cropping event

The [`cropping`](https://ej2.syncfusion.com/react/documentation/api/image-editor#cropping) event is triggered when performing cropping on the image. This event provides an object containing details about the cropping action (start/end points). The event uses `CropEventArgs` to handle the cropping action.

CropEventArgs.startPoint – The x and y coordinates of the start point as an `ImageEditorPoint` for the selection region.

CropEventArgs.endPoint – The x and y coordinates of the end point as an `ImageEditorPoint` for the selection region.

CropEventArgs.cancel – A boolean value to cancel the cropping action.

### Maintaining original image size during cropping

In the React Image Editor, when an image is cropped, it is often enlarged or scaled to improve visibility within the UI. To prevent this scaling and maintain the original cropping size, bind to the `cropping` event and set `args.preventScaling = true` (boolean) inside the handler; this prevents the editor from enlarging the selection during the crop operation and preserves the original cropping size when saved.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs43/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs43/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs43/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs43" %}

## SelectionChanging event

The selection region can be changed programmatically by using [`selectionChanging`](https://ej2.syncfusion.com/react/documentation/api/image-editor#selectionchanging) event. This event is activated during resizing the selection using mouse, and it allows for alterations to the selection region by adjusting the specified properties. 

The [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/react/documentation/api/image-editor/selectionchangeeventargs) is used in this event to customize the selection and it has the following parameters. 

SelectionChangeEventArgs.action - The type of action such as inserting or resizing.

SelectionChangeEventArgs.currentSelectionPoint - Represents all the details of the selection including its type, position, width, and height after the current action as CropSelectionSettings.

SelectionChangeEventArgs.previousSelectionPoint - Represents all the details of the selection including its type, position, width, and height before this current action as CropSelectionSettings.

### Locking selection area during cropping

When selecting an area for cropping, users can resize the selection from corners and edges. To lock the selection area during resizing, handle the `selectionChanging` event; if `args.action === 'resize'`, set `args.previousSelectionPoint = args.currentSelectionPoint` to prevent changes to the selection size.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs41/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs41/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs41/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs41" %}

### Cropping with custom ratio selection

Users can perform cropping either through the toolbar or by using our public methods. While predefined ratio selections are available in the toolbar, users can also crop with custom ratios using our public method, [`select`](https://ej2.syncfusion.com/react/documentation/api/image-editor#select). Regardless of the ratio type used, the selection will adhere to the specified ratio, even when resizing the selection area.

Example — custom ratio cropping using `selectionChanging` event:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs52/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs52/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs52/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs52" %}