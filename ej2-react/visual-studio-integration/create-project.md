---
layout: post
title: Create React Project with Visual Studio Integration | Syncfusion
description: Learn how to create a Syncfusion React project using Visual Studio project templates and starter configuration.
control: Create project 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Visual Studio Integration

## Create project

Syncfusion<sup style="font-size:70%">&reg;</sup> provides Visual Studio project templates for creating Syncfusion<sup style="font-size:70%">&reg;</sup> React applications. The template generates a new project configured with the required Syncfusion references, packages, and CDN links to accelerate development with Syncfusion components.

> The Syncfusion<sup style="font-size:70%">&reg;</sup> React project templates are available from v17.1.0.47.

Follow these steps to create a Syncfusion<sup style="font-size:70%">&reg;</sup> React application using Visual Studio:

1. Open Visual Studio 2022 (or Visual Studio 2017/2019 where supported).
2. To create a Syncfusion React project, choose one of the options below:

    **Option 1:**  
    Choose **Extensions → Syncfusion → Essential Studio<sup style="font-size:70%">&reg;</sup> for ASP.NET Core → Create New Syncfusion Project…** from the Visual Studio menu.

    ![new project](images/new-project.png)

    > In some Visual Studio versions, the **Syncfusion** menu may appear directly in the main menu.

    **Option 2:**  
    Choose **File → New → Project**. In the Create a new project dialog, filter by "Syncfusion" or search for "Syncfusion" to list the Syncfusion-provided templates for ASP.NET Core.

    ![Syncfusion template](images/create-new-project.png)

    > In Visual Studio 2017, navigate to **Syncfusion > .NET Core > Syncfusion ASP.NET Core (Essential JS 2) Web Application**.

3. Select the **Syncfusion ASP.NET Core Web Application** template and click **Next**.

    ![project configuration](images/syncfusion-template.png)

4. Enter the project name and destination, then click **Create**. The Syncfusion project configuration wizard appears.

    ![project configuration](images/react-project-wizard.png)

    Choose the **Syncfusion React.js** template, then select the required theme, authentication type, and asset options.

    > Syncfusion React project templates support .NET 6.0 and .NET 7.0 project types.

5. Click **Create** to generate the project. The Syncfusion React application is created and configured.

6. The generated project is preconfigured with Syncfusion packages and starter code.

7. Verify that the required Syncfusion React NPM packages, scripts, and selected styles are added to the application (check package.json and installed files).