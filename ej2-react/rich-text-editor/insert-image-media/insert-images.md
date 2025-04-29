---
layout: post
title: Images in React Rich Text Editor component | Syncfusion
description: Learn here all about Images in Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Images 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Images in React Rich text editor component

Rich Text Editor allows to insert images in your content from online sources as well as local computer. For inserting an image to the Rich Text Editor, the following list of options have been provided in the [insertImageSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSettingsModel/)

## Configuring Image Tool in the Toolbar

You can add an `Image` tool in the Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettings/#items) property.

> To use Image feature, inject image module using the `<Inject services={[Image]} />`.

To configure the `Image` toolbar item, refer to the below code.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs30/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs30/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs30" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs31/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs31/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs31" %}

## Supported Image Save Formats

The images can be saved as `Blob` or `Base64` URL by using the [insertImageSettings.saveFormat](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSettingsModel/#saveformat) property, which is of enum type, and the generated URL will be set to the `src` attribute of the `<source>` tag.

```javascript
    <img src="blob:http://http.example.com/3ab56a6e-ec0d-490f-85a5-f0aeb0ad8879" >

    <img src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHA" >
```

The code snippet below illustrates the configuration of the [insertImageSettings.saveFormat](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSettingsModel/#saveformat) property in the Rich Text Editor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/save-format-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/save-format-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/save-format-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/save-format-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/save-format-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/save-format-cs2" %}


> The default `saveFormat` property is set to `Blob` format.

## Inserting Images from Web URLs

To insert an image from an online source, click the `Image` tool in the toolbar. By default, this tool opens a dialog box with an input field where you can provide the image URL from the web to insert the image.

## Uploading Images from Local Machine

To insert an image from your local machine, click the `Image` tool in the toolbar. By default, this tool opens a dialog box where you can browse and select an image to insert from your local machine.

## File Manager Integration for Image Insertion

To insert images from a file manager, enable the `FileManager` tool on the editor's toolbar. This tool initiates a dialog where you can upload new images and choose from existing ones, facilitating smooth image insertion into your content.

To integrate the file manager into the Rich Text Editor, follow these steps:

* Configure the `FileManager` toolbar item in the `toolbarSettings` API `items` property.
* Set the [enable](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/fileManagerSettings/#enable) property to `true` in the [fileManagerSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#fileManagerSettings) property to ensure the file browser appears upon clicking the `FileManager` toolbar item.

> To use File Manager feature, inject file manager module using the `<Inject services={[FileManager]} />`.

## Saving Image to Server

Upload the selected image to a specified destination using the controller action specified in [insertImageSettings.saveUrl](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSettingsModel/#saveurl). Ensure to map this method name appropriately and provide the required destination path through the [insertImageSettings.path](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSettingsModel/#path) properties.

Configure [insertImageSettings.removeUrl](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSettingsModel/#removeurl) to point to the endpoint responsible for deleting image files.

Set the [insertImageSettings.saveFormat](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSettingsModel/#saveformat) property to determine whether the image should be saved as Blob or Base64, aligning with your application's requirements.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/image-server-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/image-server-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/image-server-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/image-server-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

```csharp

public class HomeController : Controller
    {
        private IHostingEnvironment hostingEnv;

        public HomeController(IHostingEnvironment env)
        {
            hostingEnv = env;
        }

        public IActionResult Index()
        {
            return View();
        }

        [AcceptVerbs("Post")]
        public void SaveImage(IList<IFormFile> UploadFiles)
        {
            try
            {
                foreach (IFormFile file in UploadFiles)
                {
                    if (UploadFiles != null)
                    {
                        string filename = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                        filename = hostingEnv.WebRootPath + "\\Uploads" + $@"\{filename}";

                        // Create a new directory, if it does not exists
                        if (!Directory.Exists(hostingEnv.WebRootPath + "\\Uploads"))
                        {
                            Directory.CreateDirectory(hostingEnv.WebRootPath + "\\Uploads");
                        }

                        if (!System.IO.File.Exists(filename))
                        {
                            using (FileStream fs = System.IO.File.Create(filename))
                            {
                                file.CopyTo(fs);
                                fs.Flush();
                            }
                            Response.StatusCode = 200;
                        }
                    }
                }
            }
            catch (Exception)
            {
                Response.StatusCode = 204;
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }

```

### Image Renaming Feature

You can use the [insertImageSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#insertimagesettings) property, to specify the server handler to upload the selected image. Then by binding the [fileUploadSuccess](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#fileuploadsuccess) event, you can receive the modified file name from the server and update it in the Rich Text Editor's insert image dialog.

### Size-based Image Restrictions

You can restrict the image uploaded from the local machine when the uploaded image file size is greater than the allowed size by using the [fileUploading](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#fileuploading) event.

> The file size in the argument will be returned in `bytes`.

## Secure Image Upload with Authentication

You can add additional data with the image uploaded from the Rich Text Editor on the client side, which can even be received on the server side. By using the [fileUploading](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#fileuploading) event and its `customFormData` argument, you can pass parameters to the controller action. On the server side, you can fetch the custom headers by accessing the form collection from the current request, which retrieves the values sent using the POST method.

> By default, it doesn't support the `UseDefaultCredentials` property, you can manually append the default credentials with the upload request.


`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/authentication-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/authentication-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/authentication-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/authentication-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

```csharp

public void SaveFiles(IList<IFormFile> UploadFiles)
{
    string currentPath = Request.Form["Authorization"].ToString();
}

```

## Image Replacement Functionality

Once a image file has been inserted, you can replace it using the Rich Text Editor [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quickToolbarSettings/#quicktoolbarsettings) `imageReplace` option. You can replace the image file either by using the web URL or the browse option in the image dialog.

## Deleting Images

To remove an image from the Rich Text Editor content, select the image and click `Remove` tool from the quick toolbar. It will delete the image from the Rich Text Editor content as well as from the service location if the `removeUrl` is given.

Once you select the image from the local machine, the URL for the image will be generate. From there, you can remove the image from the service location by clicking the cross icon.

![Rich Text Editor Image delete](images/image-del.png)

The following sample explains, how to configure `removeUrl` to remove a saved image from the remote service location, when the following image remove actions are performed:

* `delete` key action.
* `backspace` key action.
* Removing uploaded image file from the insert image dialog.
* Deleting image using the quick toolbar `remove` option.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs32/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs32/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs32" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs33/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs33/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs33" %}

## Adjusting Image Dimensions

Sets the default width and height of the image when it is inserted in the Rich Text Editor using [width](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSettingsModel/#width) and [height](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSettingsModel/#height) of the [insertImageSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSettingsModel/) property.

Through the quick toolbar, change the width and height using `Change Size` option. Once you click, the Image Size dialog box will open as follows. In that you can specify the width and height of the image in pixel.

![Rich Text Editor Image dimension](../images/image-size.png)

## Adding Captions and Alt Text to Images

Image caption and alternative text can be specified for the inserted image in the Rich Text Editor through the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#quickToolbarSettings) property. It has following two options,

* Image Caption
* Alternative Text.

Through the Alternative Text option, set the alternative text for the image, when the image is not upload successfully into the Rich Text Editor.

By clicking the Image Caption, the image will get wrapped in an image element with a caption. Then, you can type caption content inside the Rich Text Editor.

## Configuring Image Display Position

Sets the default display for an image when it is inserted in the Rich Text Editor using [display](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSettingsModel/#display) field in [insertImageSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSettingsModel/). It has two possible options: 'inline' and 'block'.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/display-position-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/display-position-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/display-position-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/display-position-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/display-position-cs2" %}

## Hyperlinking Images

The hyperlink itself can be an image in Rich Text Editor. If the image given as hyperlink, remove, edit and open link will be added to the quick toolbar of image. For further details about link, see the [`link documentation`](./link) documentation.

![Rich Text Editor image with link](../images/image-link.png)

## Image Resizing Tools

Rich Text Editor has a built-in image inserting support.  The resize points will be appearing on each corner of image when focus. So, users can resize the image using mouse points or thumb through the resize points easily. Also, the resize calculation will be done based on aspect ratio.

![Rich Text Editor image resize](../images/image-resize.png)

## Configuring Allowed Image Types

You can allow the specific images alone to be uploaded using the the allowedTypes property. By default, the Rich Text Editor allows the JPG, JPEG, and PNG formats. You can configure this formats as follows.

```ts
    insertImageSettings: {
      allowedTypes: ['.jpg']
    }

```

## Drag and Drop Image Insertion

By default, the Rich Text Editor allows you to insert images by drag-and-drop from the local file system such as Windows Explorer into the content editor area. And, you can upload the images to the server before inserting into the editor by configuring the saveUrl property. The images can be repositioned anywhere within the editor area by dragging and dropping the image.

In the following sample, you can see feature demo.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/drag-drop-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/drag-drop-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/drag-drop-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/drag-drop-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/drag-drop-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/drag-drop-cs2" %}


### Disabling Drag and Drop for Images

You can prevent drag-and-drop action by setting the actionBegin argument cancel value to true. The following code shows how to prevent the drag-and-drop.

```ts
    actionBegin: function (args: any): void {
        if(args.type === 'drop' || args.type === 'dragstart') {
            args.cancel =true;
        }
    }

```

## Customizing the Image Quick Toolbar

The Rich Text Editor allows you to customize the image quick toolbar, providing Essential<sup style="font-size:70%">&reg;</sup> tools such as 'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'Display', 'AltText', and 'Dimension'.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quickToolbarSettings/) property, you can enhance the editor's functionality, enabling seamless image management and editing directly within your content. This customization ensures a user-friendly experience for efficiently manipulating image elements.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/customize-image-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/customize-image-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-image-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/customize-image-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/customize-image-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-image-cs2" %}


## See Also

* [Image Quick toolbar](https://ej2.syncfusion.com/react/documentation/rich-text-editor/toolbar#quick-inline-toolbar)
* [Hyperlink Management](https://ej2.syncfusion.com/react/documentation/rich-text-editor/link)