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

The Syncfusion<sup style="font-size:70%">&reg;</sup> React migration add-in for Visual Studio helps migrate an existing Syncfusion<sup style="font-size:70%">&reg;</sup> React application from one Essential Studio version to another, reducing manual effort.

> Project migration support is available from v17.3.0.9 onward.

To upgrade the Syncfusion version in a Syncfusion React application using Visual Studio:

1. Open the Syncfusion React application in Visual Studio.

2. Open the Migration Wizard using one of these methods:

    **Option 1:**  
    Choose **Extensions → Syncfusion → Essential Studio for ASP.NET Core → Migrate Project…** from the Visual Studio menu.

    ![menu](images/migrate-menu.png)

    **Option 2:**  
    Right-click the project in Solution Explorer, select **Syncfusion Web**, then choose **Migrate the Syncfusion ASP.NET Core Project to Another version…**.

    ![Context menu](images/migrate-context-menu.png)

3. In the Project Migration window, select the target Syncfusion React version, asset source (NPM, CDN, or Installed Location), and themes.

    ![Migration Window](images/migration-window.PNG)

    > The available Syncfusion React versions are loaded from published NPM package versions and require internet connectivity.

    *Installed Location* is available only when the Syncfusion EJ2 setup is installed locally.

4. (Optional) Enable **Enable a backup before migrating** and choose a backup location.

5. Run the migration. After completion, a success message is shown.

    ![project Success](images/Confirmation-window.PNG)

    If backup was enabled, the original project is saved at the specified backup path.

    ![BackupLocation](images/BackupLocation.png)

6. The Syncfusion React NPM packages and CSS are updated to the selected target version in the project. Verify `package.json` and the project files to confirm the migration.
