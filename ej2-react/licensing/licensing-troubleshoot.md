---
layout: post
title: Licensing troubleshoot in React Licensing component | Syncfusion
description: Learn here all about Licensing troubleshoot in Syncfusion React Licensing component of Syncfusion Essential JS 2 and more.
control: Licensing troubleshoot 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Licensing troubleshoot 

## Is an internet connection required for license validation

No, Internet connection is not required for the Syncfusion Essential Studio license validation. The Syncfusion license validation is done offline during application execution. Apps registered with a Syncfusion license key can be deployed on any system that does not have an internet connection.

## Upgrade from the trial version after purchasing a license

To upgrade from the trial version, there are two possible solutions:

* Uninstall the trial version and install the fully licensed build from the [License & Downloads](https://www.syncfusion.com/account/downloads) section of the Syncfusion website.

* If you are using Syncfusion controls from the [npm](https://www.npmjs.com/search?q=scope:syncfusion), replace the currently used trial license key with a paid license key that can be generated from the [License & Downloads](https://www.syncfusion.com/account/downloads) section of Syncfusion website. Refer to [this](https://help.syncfusion.com/common/essential-studio/licensing/license-key#how-to-register-the-syncfusion-license-key) topic for more information regarding registering the license in the application.

> The license registration is not required if you reference Syncfusion scripts from the Licensed installer. These licensing changes apply to all evaluators who refer to the Syncfusion scripts from the evaluation installer and those who use the npm packages form [npm](https://www.npmjs.com/~syncfusionorg)

## Where can I get a License key

License keys can be generated from the [License & Downloads](https://syncfusion.com/account/downloads) or the [Trial & Downloads](https://www.syncfusion.com/account/manage-trials/downloads) section of the Syncfusion website.

![Get Community License](images/get-community-license-key.png)

The Syncfusion license keys are the **version and platform-specific**, refer to the [KB](https://www.syncfusion.com/kb/8976/how-to-generate-license-key-for-licensed-products) to generate the license key for the required version and platform. Also, refer to this [KB](https://www.syncfusion.com/kb/8951/which-version-syncfusion-license-key-should-i-use-in-my-application) to know which version of the Syncfusion license key should be used in the application.

> While using the ASP.NET Core controls with the Javascript(ES5) components, you need to register the license key in both the Javascript(ES5) and the [ASP.NET core](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/license-key-registration). Since the license is validated at the client side for Javascript(ES5) components and server-side for the ASP.NET core components.

## Will the registered license key expire

No, the Syncfusion license keys won't expire for a particular version and you can continue to use it. So, you won't face any problems on the live site. If you have used the trial key, it will expire in 30 days and we don't recommend using it in production.

> If you upgrade to newer versions of the Syncfusion packages, you have to generate new license keys and use them.

## When to generate new license key while upgrading

You don't have to generate and change license keys for minor version upgrades. If you upgrade from one major version and another major version, you have to generate new license keys and register in the application.

For example,
* If you upgrade to weekly releases or the SP release in the same major version, you don't have to change license such as if you upgrade from the `20.1.47` version to `20.1.*` you don't have to change the license keys.
* If you upgrade from one major version to another major version, you have to generate new license keys for the latest version and change in the application, such as if you upgrade from the `20.1.*` version to `20.2.*,` you have to generate new license keys for the latest version and change in the application.

## License registration for multiple developers on your project

Syncfusion license key is a version based and it’s not based on the developer. You don’t have to register different keys for each developer. Just register one valid license key when developing and publishing the software.

## Can I use the same key for all the web apps under the project

Yes, you can use the same license key for all the web apps.

## Does the license registration access any resources or data

No, the license registration doesn't access any data or resources.

## License & Downloads shows the "Essential Studio Enterprise Edition Binary with Test Studio" and the "Project License". Which license to use

Use any licenses shown on the [accounts & downloads](https://www.syncfusion.com/account/downloads) page. It shows two licenses because if you are part of your company's enterprise portal Global license and an individual license is also assigned to your account, on your account & downloads page, the individual license and your enterprise portal Global license are shown.

 ![Project License](images/project-license.png)

Refer to the [KB](https://www.syncfusion.com/kb/11532/definition-of-terms-for-syncfusion-licenses) article which explains the Licenses offered by Syncfusion.

## If I registered the license key in both the application and the license text file

The application registered license key is set priority and used for license validation.
