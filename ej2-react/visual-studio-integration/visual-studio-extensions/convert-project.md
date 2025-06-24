---
layout: post
title: Convert project in React Visual studio integration component | Syncfusion
description: Learn here all about Convert project in Syncfusion React Visual studio integration component of Syncfusion Essential JS 2 and more.
control: Convert project 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Convert Project

Syncfusion<sup style="font-size:70%">&reg;</sup> React conversion is a Visual Studio add-in that converts an existing React application into a Syncfusion<sup style="font-size:70%">&reg;</sup> React Web application.

> The Syncfusion<sup style="font-size:70%">&reg;</sup> React Project conversion are available from v17.3.0.9.

The steps below help you to convert the React application to Syncfusion<sup style="font-size:70%">&reg;</sup> React application through the Visual Studio:

1. Open your existing React application or create a new React application

2. To open the Syncfusion<sup style="font-size:70%">&reg;</sup> Project Conversion Wizard, follow either one of the options below:

    **Option 1:**

    Choose **Extensions-> Syncfusion-> Essential Studio<sup style="font-size:70%">&reg;</sup> for ASP.NET Core ->Convert Project…** in **Visual Studio** menu.

    ![convert project](images/convert-react-menu.png)

    > In Visual Studio 2017, you can see the **SyncfusionSyncfusion<sup style="font-size:70%">&reg;</sup>** menu directly in the Visual Studio menu

    **Option 2:**

    Right-click on the **React Application** from the Solution Explorer and select the **Syncfusion<sup style="font-size:70%">&reg;</sup> Web** and choose the **Convert to Syncfusion<sup style="font-size:70%">&reg;</sup> React application...**

    ![convert to syncfusion](images/Convert-react-context.png)

3. The **Syncfusion<sup style="font-size:70%">&reg;</sup> React Project Conversion** window will appear. You can choose the required version of Syncfusion<sup style="font-size:70%">&reg;</sup> React version, Assets from, and Themes to convert the application.

    ![project-conversion-wizard](images/react-conversion-window.PNG)

    > The Syncfusion<sup style="font-size:70%">&reg;</sup> React versions are loaded from published Syncfusion<sup style="font-size:70%">&reg;</sup> React NPM package versions and it requires the internet connectivity.

    The following configurations are used in the Project conversion wizard.

    **Assets From:** Load the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 assets to React Project, from either NPM, CDN, or Installed Location.

    > Installed location option will be available only when the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 setup has been installed.

    **Choose the Theme:** Choose the required theme.

4. Check the **“Enable a backup before converting”** checkbox if you want to take the project backup and choose the location.

5. Once the conversion process completed, will get the success message window.

    ![project-backup](images/react-convertion-confirmation.png)

    if you enabled project backup before converting, the old project was saved in the specified backup path location, as shown below once the conversion process completed.

    ![BackupLocation](images/BackupLocation.png)

6. The required Syncfusion<sup style="font-size:70%">&reg;</sup> React NPM packages with selected version, scripts and selected style are added in the application.
