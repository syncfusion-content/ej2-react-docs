---
layout: post
title: Export in React Barcode component | Syncfusion®
description: Learn here all about Export in Syncfusion® React Barcode component of Syncfusion Essential® JS 2 and more.
control: Export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Export in React Barcode component

Export barcode as an image and base64 string is common for barcode,QRCode and datamatrix. The following code samples explain how to export the barcode as an image and base64 string.

## Export

Barcode provides the support to export its content as an image in the specified image type and downloads it in the browser.
The following code example shows how to export the barcode as an image

```ts

let barcodeInstance;
ReactDOM.render(
  <BarcodeGeneratorComponent
  id="barcode"
  ref={barcode => (barcodeInstance = barcode)}
  width={"200px"}
  height={"150px"}
  type='Code39'
  value='SYNCFUSION'
  ></BarcodeGeneratorComponent>,
document.getElementById("barcode")
);
let filename = 'Export';
barcodeInstance.exportImage(filename,'JPG');

```

The filename specifies the name of the file to be downloaded

### Export As Base64String

Barcode provides support to export its content as an image in the specified image type and returns it as base64 string.
The following code example illustrates how to export the barcode as a base64 string

```ts

let barcodeInstance;
ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    ref={barcode => (barcodeInstance = barcode)}
    width={"200px"}
    height={"150px"}
    type='Code39'
    value='SYNCFUSION'
    ></BarcodeGeneratorComponent>,
document.getElementById("barcode")
);
base64string();
async function base64string() {
let base64 = await barcodeInstance.exportAsBase64Image('JPG');
console.log(base64);
};

```

>**Note:**
>Format is to specify the type or format of the exported file. You can export the barcode to the following formats:
>* JPG.
>* PNG.