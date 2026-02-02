---
layout: post
title: Upgrade project in React Visual studio integration component | Syncfusion
description: Learn here all about Upgrade project in Syncfusion React Visual studio integration component of Syncfusion Essential JS 2 and more.
control: Upgrade project 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Upgrade Project

The Syncfusion<sup style="font-size:70%">&reg;</sup> React migration add-in for Visual Studio allows migration of an existing Syncfusion<sup style="font-size:70%">&reg;</sup> React application from one Essential Studio<sup style="font-size:70%">&reg;</sup> version to another. This tool significantly reduces the manual effort involved in upgrading an application.

> The Syncfusion<sup style="font-size:70%">&reg;</sup> React project migration feature is available from v17.3.0.9.

Follow the steps below to upgrade the Syncfusion<sup style="font-size:70%">&reg;</sup> version in a Syncfusion<sup style="font-size:70%">&reg;</sup> React application using Visual Studio:

1. Open the Syncfusion<sup style="font-size:70%">&reg;</sup> React application that uses Syncfusion components.

2. To open the Migration Wizard, use one of the options below:

    **Option 1:**  
    Choose **Extensions → Syncfusion → Essential Studio for ASP.NET Core → Migrate Project…** from the Visual Studio menu.

    ![menu](images/migrate-menu.png)

    > In Visual Studio 2017, the **Syncfusion** menu may appear directly in the Visual Studio menu.

    **Option 2:**  
    Right-click the project in **Solution Explorer**, select **Syncfusion Web**, then choose **Migrate the Syncfusion ASP.NET Core Project to Another version…**.

    ![Context menu](images/migrate-context-menu.png)

3. The Syncfusion<sup style="font-size:70%">&reg;</sup> Project Migration window appears. Choose the target Syncfusion React version to migrate to.

    > Available Syncfusion React versions are loaded from published Syncfusion NPM packages and require an internet connection.

    ![Migration Window](images/migration-window.PNG)

    **Assets From:** Load Syncfusion EJ2 assets into the React project from NPM, CDN, or Installed Location.

    > The *Installed Location* option is available only when the Syncfusion EJ2 setup is installed locally.

4. (Optional) Check **Enable a backup before migrating** and choose the backup location if you want to preserve the original project.

5. After the migration completes, a success message is displayed.

    ![project Success](images/Confirmation-window.PNG)

    If a backup was enabled, the original project is saved to the specified backup path.

    ![BackupLocation](images/BackupLocation.png)

6. The Syncfusion<sup style="font-size:70%">&reg;</sup> React NPM packages and CSS are updated to the selected version in the project. Verify `package.json` and project files to confirm the migration is complete.