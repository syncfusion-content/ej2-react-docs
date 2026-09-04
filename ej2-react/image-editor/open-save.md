---
layout: post
title: Open and Save in React Image Editor | Syncfusion
description: Open images from URL, base64, blob, file uploader, or file manager, and export to PNG, JPEG, SVG, or WEBP in the React Image Editor.
control: Open and Save
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Open and Save in React Image Editor

To import an image into the canvas, it must first be converted into a blob object. The Uploader component can be used to facilitate the process of uploading an image from the user interface. Once the image has been uploaded, it can then be converted into a blob and drawn onto the canvas. 

To save an edited image in the React Image Editor component, use the `getImageData` method (or the `export` API for direct file download) to retrieve the edited image as a base64 string, Blob, or byte array. This will include any annotations or filters that have been applied during the editing process.

## Supported image formats

The React Image Editor control supports five common image formats: PNG, JPEG, SVG, WEBP, and BMP. These formats allow you to work with a wide range of image files within the React Image Editor.

When it comes to saving the edited image, the default file type is set as PNG. This means that when you save the edited image without specifying a different file type, it will be saved as a PNG file. However, it's important to note that the React Image Editor typically provides options or methods to specify a different file type if desired. This allows you to save the edited image in formats other than the default PNG, such as JPEG, SVG, or WEBP, based on your specific requirements or preferences.

## Open an image

The [`open`](https://ej2.syncfusion.com/react/documentation/api/image-editor#open) method in the React Image Editor control offers the capability to open an image by providing it in different formats. This method accepts various types of arguments, such as a base64-encoded string, raw image data, or a hosted/online URL. You can pass either the file name or the actual image data as an argument to the `open` method, and it will load the specified image into the React Image Editor control. This flexibility allows you to work with images from different sources and formats, making it easier to integrate and manipulate images within the React Image Editor control.

### Opening local images in the React Image Editor 

Users can easily open local images in the React Image Editor. Simply place the image in the same folder as the sample. By specifying the local file name directly in the `open` method, the image will be loaded seamlessly into the editor.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs9/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs9/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs9" %}

### Open an image from base64 format

Users can open images in the React Image Editor using a Base64-encoded string. Simply pass the Base64 string to the `open` method, and the image will be loaded into the editor.

**Note:** You can obtain the Base64 representation of an image from the React Image Editor using the [`getImageData`](https://ej2.syncfusion.com/react/documentation/api/image-editor#getimagedata) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs42/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs42/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs42/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs42" %}

### Open an image from Blob storage

Users can open images in the React Image Editor from Blob storage. Retrieve the image Blob from storage and pass it to the `open` method to load the image into the editor.

**Note:** You can obtain the Blob representation of an image from the React Image Editor using the [`getImageData`](https://ej2.syncfusion.com/react/documentation/api/image-editor#getimagedata) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs44/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs44/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs44/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs44" %}

### Open an image from File Uploader

Users can open images in the React Image Editor using a file uploader. Once the image is selected through the file uploader, pass the File/Blob to the `open` method to load it into the editor.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs49/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs49/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs49/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs49" %}

### Open an image from File Manager

Users can open images in the React Image Editor using the File Manager. Browse and select an image file, then pass the File/Blob to the `open` method to load it into the editor.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs55/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs55/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs55/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs55" %}

### Open an image from Treeview

Users can open images in the Syncfusion React Image Editor by selecting a node from a tree view. When a user clicks on an image node, the corresponding image is loaded into the editor using the `open` method. This allows for a seamless image editing experience directly from the TreeView component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs53/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs53/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs53/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/default-cs53" %}

### Add watermarks while opening an image

You can utilize the [`fileOpened`](https://ej2.syncfusion.com/react/documentation/api/image-editor#fileopened) event, which triggers once the image is loaded into the React Image Editor. After this event, you can use the `drawText` method to add a watermark.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs45/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs45/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs45/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs45" %}

### Opening Images with Custom Width and Height

Users can now open images with specific width and height values using the [`imageSettings`](https://ej2.syncfusion.com/react/documentation/api/image-editor/imageSettings) parameter in the `open` method. This enhancement introduces three additional properties: `width`, `height`, and `isAspectRatio`. These options allow precise control over the image dimensions, with the flexibility to preserve the original aspect ratio if needed. This feature is especially useful when rendering high-resolution images or when fitting images into fixed-size layouts or canvas areas.
 
The following behaviors are supported through these properties:
- Contains behavior: By specifying only one dimension (either `width` or `height`) and enabling `isAspectRatio`, the other dimension is automatically calculated to maintain the image’s original proportions.
- Cover behavior: When both `width` and `height` are specified with `isAspectRatio` set to `true`, the image scales proportionally to fit within the given dimensions while preserving its aspect ratio.
- Stretch or Shrink behavior: Setting `isAspectRatio` to `false` forces the image to strictly follow the specified `width` and `height`, allowing it to stretch or shrink regardless of its original aspect ratio.

The following example showcases how all three behaviors can be achieved using the open method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs63/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs63/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs63/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs63" %}

## Export (Save)

The [`export`](https://ej2.syncfusion.com/react/documentation/api/image-editor#export) method is used to save the modified image as a file; it accepts a file name and file type as parameters. The file type parameter supports PNG, JPEG, SVG, and WEBP; the default file type is PNG. Users can specify file name, file type, and image quality when exporting.

In the following example, the `export` method is used in the button click event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs10/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs10/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs10" %}

### Save the image as base64 format

To save an image as a base64 string, use the [`getImageData`](https://ej2.syncfusion.com/react/documentation/api/image-editor#getimagedata) method of the editor to retrieve the image data as a Data URL (base64-encoded string).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs50/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs50/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs50/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs50" %}

### Save the image as byte[]

To save an image as a byte array, use the [`getImageData`](https://ej2.syncfusion.com/react/documentation/api/image-editor#getimagedata) method and convert the returned data to the desired byte[] representation for storage.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs59/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs59/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs59/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs59" %}

### Save the image as Blob

To save an image as a Blob, use the [`getImageData`](https://ej2.syncfusion.com/react/documentation/api/image-editor#getimagedata) method to retrieve a Blob representation of the edited image.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs51/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs51/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs51/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs51" %}

### Add watermarks while saving the image

You can utilize the [`fileOpened`](https://ej2.syncfusion.com/react/documentation/api/image-editor#fileopened) event, which triggers once the image is loaded into the React Image Editor. After this event, you can use the [`drawText`](https://ej2.syncfusion.com/react/documentation/api/image-editor#drawtext) method to add a watermark.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs46/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs46/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs46/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs46" %}

### Remove default save button and add custom button to save the image to server

Users can leverage the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor#toolbar) property to replace the default save button with a custom one. By doing so, you can use the [`getImageData`](https://ej2.syncfusion.com/react/documentation/api/image-editor#getimagedata) method to retrieve the image data, convert it to base64 format, and then save it to the server.

### Prevent default save option and save the image to specific location

Users can make use of the [`beforeSave`](https://ej2.syncfusion.com/react/documentation/api/image-editor#beforesave) event, which triggers just before the image is downloaded, to override the default save option by setting `args.cancel = true`. Afterward, you can utilize `getImageData` to retrieve the current image data and convert it into a format like byte[], Blob, or base64 for further processing.

## Events to handle save actions 

The React Image Editor provides several events related to opening and saving images. These events offer detailed control over the image handling process. For comprehensive information about these events, see the Events section on this page.

### File opened event 

The [`fileOpened`](https://ej2.syncfusion.com/react/documentation/api/image-editor#fileopened) event is triggered after an image is successfully loaded. It provides the `OpenEventArgs` object as the event argument, which includes:

- `fileName` — The file name of the opened image.

- `fileType` — The format/type of the opened image (PNG, JPEG, SVG, WEBP, or BMP).

Access these properties in your `fileOpened` handler to inspect the loaded image.

### Saving event 

The [`saving`](https://ej2.syncfusion.com/react/documentation/api/image-editor#saving) event is triggered when an image is being saved. It provides the `SaveEventArgs` object as the event argument, which includes:

- `fileName` — The file name that will be used when saving the image.

- `fileType` — The format/type the image will be saved in (PNG, JPEG, SVG, or WEBP).

- `cancel` — Set to `true` to cancel the saving action.

Use these properties in the `saving` handler to inspect or cancel the save.

### Created event 

The [`created`](https://ej2.syncfusion.com/react/documentation/api/image-editor#created) event is triggered once the React Image Editor component is created and initialized.

### Destroyed event 

The [`destroyed`](https://ej2.syncfusion.com/react/documentation/api/image-editor#destroyed) event is triggered once the React Image Editor component is destroyed or removed from the application.

## See Also

* [Set a Custom File Name in Save Dialog](https://support.syncfusion.com/kb/article/20962/how-to-set-a-custom-file-name-in-react-image-editor-save-dialog)