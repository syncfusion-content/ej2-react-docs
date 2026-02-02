---
layout: post
title: Convert project in Visual Studio (Syncfusion) | Syncfusion
description: Learn how to convert an existing React application into a Syncfusion React Web application using the Visual Studio Syncfusion Project Conversion wizard.
control: Convert project 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Convert Project

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Project Conversion is a Visual Studio add-in that converts an existing React application into a Syncfusion<sup style="font-size:70%">&reg;</sup> React Web application.

> Project conversion support is available from v17.3.0.9 onward.

Follow these steps to convert a React application to a Syncfusion React application using Visual Studio:

1. Open your existing React application or create a new React application.

2. Launch the Syncfusion Project Conversion wizard using one of these methods:

    **Option 1:**  
    Choose **Extensions → Syncfusion → Essential Studio<sup style="font-size:70%">&reg;</sup> for ASP.NET Core → Convert Project…** from the Visual Studio menu.

    ![convert project](images/convert-react-menu.png)

    > In Visual Studio 2017, the Syncfusion menu may appear directly in the Visual Studio menu.

    **Option 2:**  
    Right-click the React project in Solution Explorer, select **Syncfusion Web**, then choose **Convert to Syncfusion React application...**.

    ![convert to syncfusion](images/Convert-react-context.png)

3. The **Syncfusion React Project Conversion** window will appear. Choose the required Syncfusion React version, the source for assets, and the themes to apply to the application.

    ![project-conversion-wizard](images/react-conversion-window.PNG)

    > Syncfusion React versions are loaded from published Syncfusion React NPM package versions; this requires an internet connection.

    Configuration options in the Project Conversion wizard:

    * **Assets From:** Load Syncfusion EJ2 assets into the React project from NPM, CDN, or an Installed Location.  
      > The Installed Location option is available only when the Syncfusion EJ2 setup is installed on the machine.

    * **Choose the Theme:** Select the required theme(s).

4. (Optional) Check **Enable a backup before converting** and choose a backup location if you want the original project preserved.

5. After the conversion completes, a success message is displayed.

    ![project-backup](images/react-convertion-confirmation.png)

    If a backup was enabled, the original project is saved to the specified backup path.

    ![BackupLocation](images/BackupLocation.png)

6. The required Syncfusion React NPM packages for the selected version, scripts, and styles are added to the application. Verify `package.json` and installed files to confirm the conversion is complete.