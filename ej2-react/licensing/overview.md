---
layout: post
title: Syncfusion Licensing Overview for React | Syncfusion
description: Learn about Syncfusion licensing requirements, license key validation, and registration for React applications.
control: Overview 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion<sup style="font-size:70%">&reg;</sup> Licensing Overview

License key validation for Essential<sup style="font-size:70%">&reg;</sup> JS2 platforms was introduced in the 2022 Volume 1 release. This licensing key validation requires developers to register a valid license key in an application when referencing any of the latest JavaScript packages, whether from npm, CDN, or build.

License keys can be obtained from the [My Account >> License and Downloads](https://www.syncfusion.com/account/downloads) section of the Syncfusion<sup style="font-size:70%">&reg;</sup> website. To obtain a license key, you must have an active trial, license, or community license.

Before using any Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls, the obtained license key must be registered in the application code. Otherwise, a license validation error message will be displayed as follows:

> This application was built using a trial version of Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup>. Please include a valid license to permanently remove this license validation message. You can also obtain a free 30 day evaluation license to temporarily remove this message during the evaluation period. Please refer to this [help topic](https://ej2.syncfusion.com/react/documentation/licensing/licensing-errors/#trial-expired) for more information.

## Difference between unlock key and license key

Please note that the license key is different from the installer unlock key that may have been used in the past and must be generated separately from the Syncfusion<sup style="font-size:70%">&reg;</sup> website.

* **Unlock Key** - The Syncfusion<sup style="font-size:70%">&reg;</sup> Unlock Key is used to unlock Syncfusion<sup style="font-size:70%">&reg;</sup> installers only.

* **License Key** - The Syncfusion<sup style="font-size:70%">&reg;</sup> License Key is a string that must be registered in your script to avoid licensing warnings.

> Refer to [this KB article](https://www.syncfusion.com/kb/8950/difference-between-the-unlock-key-and-licensing-key) to learn more about the difference between the Syncfusion<sup style="font-size:70%">&reg;</sup> Unlock Key and the Syncfusion<sup style="font-size:70%">&reg;</sup> License Key.

## Registering Syncfusion<sup style="font-size:70%">&reg;</sup> license keys in Build server

| Source of Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies | Details | License Key needs to be registered? | Where to get license key from |
| ------------- | ------------- | ------------- | ------------- |
| **npm/NuGet package** | If the Syncfusion<sup style="font-size:70%">&reg;</sup> packages used in the Build Server are from npm ([npmjs.com](https://www.npmjs.com/~syncfusionorg)) or NuGet ([nuget.org](http://nuget.org/)), no Syncfusion<sup style="font-size:70%">&reg;</sup> installer needs to be installed. The required Syncfusion<sup style="font-size:70%">&reg;</sup> packages can be directly used from these sources. <br><br>However, when using packages from npm or NuGet, the Syncfusion<sup style="font-size:70%">&reg;</sup> license key must be registered in the application.| Yes | Use any developer license to [generate](https://ej2.syncfusion.com/react/documentation/licensing/license-key-generation) keys for Build Environments as well. |
| **Trial installer** | If the Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies used in the Build Server are from the Trial Installer, the license key must be registered in the application for the corresponding version and platform to avoid trial license warnings. | Yes | Use any developer trial license to [generate](https://ej2.syncfusion.com/react/documentation/licensing/license-key-generation) keys for Build Environments as well. |
| **Licensed installer** |If the Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies used in the Build Server are from the Licensed Installer, there is no need to register license keys.<br><br>You can [download](https://ej2.syncfusion.com/react/documentation/installation/web-installer/download#download-the-license-version) and [install](https://ej2.syncfusion.com/react/documentation/installation/web-installer/installation-using-web-installer) the licensed version of the installer. | No | Not applicable |

## See Also

* [How to generate Syncfusion<sup style="font-size:70%">&reg;</sup> ReactJS license key?](https://ej2.syncfusion.com/react/documentation/licensing/license-key-generation/)
* [How to register Syncfusion<sup style="font-size:70%">&reg;</sup> license key in ReactJS application?](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration/)
* [Licensing FAQ](https://ej2.syncfusion.com/react/documentation/licensing/licensing-troubleshoot/)