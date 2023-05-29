---
layout: post
title: Print in React Maps component | Syncfusion
description: Learn here all about Print in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Print 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Print in React Maps component

## Print

The rendered Maps can be printed directly from the browser by calling the [`print`](https://ej2.syncfusion.com/react/documentation/api/maps/#print) method. To use the print functionality, the **Print** module must be injected into the Maps using **Inject services={[]}** tag and set the [`allowPrint`](https://ej2.syncfusion.com/react/documentation/api/maps/#allowprint) property to **true**.

```ts
<MapsComponent id="maps">
    <Inject services={[Print]}/>
<MapsComponent>
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs79/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs79/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs79" %}

## Export

### Image Export

To use the image export functionality in Maps, **ImageExport** module must be injected into the Maps using **Inject services={[ImageExport]}** tag and set the [`allowImageExport`](https://ej2.syncfusion.com/react/documentation/api/maps/#allowimageexport) property to **true**.

```ts
<MapsComponent id="maps">
    <Inject services={[ImageExport]}/>
<MapsComponent>
```

The rendered Maps can be exported as an image using the [`export`](https://ej2.syncfusion.com/react/documentation/api/maps/#export) method. This method requires two parameters: image type and file name. The Maps can be exported as an image in the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs80/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs80/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs80" %}

### Exporting Maps as base 64 string of the file

The image can be exported as base64 string for the JPEG and PNG formats. The rendered Maps can be exported to image as a base64 string using the [`export`](https://ej2.syncfusion.com/react/documentation/api/maps/#export) method. There are four parameters required: image type, file name, orientation of the exported PDF document which must be set as **null** for image export and finally **allowDownload** which should be set as **false** to return base64 string.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs81/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs81/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs81" %}

### PDF Export

To use the PDF export functionality, **PdfExport** module must be injected into the Maps using **Inject services={[PdfExport]}** method and set the [`allowPdfExport`](https://ej2.syncfusion.com/react/documentation/api/maps/#allowpdfexport) property to **true**.

```ts
<MapsComponent id="maps">
    <Inject services={[PdfExport]}/>
<MapsComponent>
```

The rendered Maps can be exported as PDF using the [`export`](https://ej2.syncfusion.com/react/documentation/api/maps/#export) method. The [`export`](https://ej2.syncfusion.com/react/documentation/api/maps/#export) method requires three parameters: file type, file name and orientation of the PDF document. The orientation setting is optional and **0** indicates portrait and **1** indicates landscape.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs82/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs82/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs82" %}

>The exporting of the Maps as base64 string is not supported for the PDF export.

### Export the tile Maps

The rendered Maps with providers such as OSM, Bing and Google static Maps can be exported using the [`export`](https://ej2.syncfusion.com/react/documentation/api/maps/#export) method. It supports the following export formats.

* JPEG
* PNG
* PDF

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs83/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs83/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs83" %}