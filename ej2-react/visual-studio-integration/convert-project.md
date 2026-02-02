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

Syncfusion<sup style="font-size:70%">&reg;</sup> React conversion is a Visual Studio add-in that converts an existing React application into a Syncfusion<sup style="font-size:70%">&reg;</sup> React web application.

> The Syncfusion<sup style="font-size:70%">&reg;</sup> React project conversion feature is available from v17.3.0.9.

Follow these steps to convert a React application to a Syncfusion React application using Visual Studio:

1. Open your existing React application or create a new React application.

2. To open the Syncfusion<sup style="font-size:70%">&reg;</sup> Project Conversion Wizard, use one of the options below:

    **Option 1:**  
    Choose **Extensions → Syncfusion → Essential Studio<sup style="font-size:70%">&reg;</sup> for ASP.NET Core → Convert Project…** from the Visual Studio menu.

    ![convert project](images/convert-react-menu.png)

    > In Visual Studio 2017, the **Syncfusion** menu may appear directly in the Visual Studio menu.

    **Option 2:**  
    Right-click the React project in Solution Explorer, select **Syncfusion Web**, then choose **Convert to Syncfusion React application...**.

    ![convert to syncfusion](images/Convert-react-context.png)

3. The **Syncfusion React Project Conversion** window will appear. Choose the target Syncfusion React version, select the asset source, and pick the theme(s) to apply to the application.

    ![project-conversion-wizard](images/react-conversion-window.PNG)

    > Available Syncfusion React versions are loaded from published Syncfusion NPM packages and require an internet connection.

    Configuration options in the Project Conversion wizard:

    * **Assets From:** Load Syncfusion EJ2 assets into the React project from NPM, CDN, or Installed Location.  
      > The *Installed Location* option is available only when the Syncfusion EJ2 setup is installed locally.

    * **Choose the Theme:** Select the required theme(s).

4. (Optional) Check **Enable a backup before converting** and choose a backup location if you want the original project preserved.

5. After the conversion completes, a success message is displayed.

    ![project-backup](images/react-convertion-confirmation.png)

    If a backup was enabled, the original project is saved to the specified backup path.

    ![BackupLocation](images/BackupLocation.png)

6. The required Syncfusion React NPM packages (for the selected version), scripts, and styles are added to the application. Verify `package.json` and installed files to confirm the conversion is complete.