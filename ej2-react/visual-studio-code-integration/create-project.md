---
layout: post
title: Create React project in Visual Studio Code | Syncfusion
description: Learn how to create a Syncfusion React project using Visual Studio Code project templates and the Syncfusion Web Template Studio.
control: Create project 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Visual Studio Code Extensions

## Create project

Syncfusion<sup style="font-size:70%">&reg;</sup> provides project templates for Visual Studio Code to streamline the creation of Syncfusion<sup style="font-size:70%">&reg;</sup> React applications. These templates automatically configure the project with required Syncfusion NPM packages, component render code for Grid, Chart, and Scheduler components, and appropriate styling to accelerate development with Syncfusion components.

> The Syncfusion Visual Studio Code project template provides support for web project templates from v18.3.0.47.

Follow the steps below to create a Syncfusion Web Application using Visual Studio Code:

1. In Visual Studio Code, open the command palette by pressing **Ctrl+Shift+P**. In the palette, search for **Syncfusion** to view the available templates.

    ![CreateProjectPalette](images/CreateProjectPalette.png)

2. Select **Syncfusion Web Template Studio: Launch** and press Enter. The Template Studio wizard appears for configuring the Syncfusion Web app. Provide the required project name and path, then choose a framework (React, Pure React, Angular, or Vue).

    ![ProjectLocation](images/ProjectLocationName.png)

3. Click **Next** or open the **Framework** tab to select a framework:

   * React
   * Pure React
   * Angular
   * Vue

    ![Framework](images/frameworktype.png)

    If you choose React, it will appear in the **Project Details** section and you can proceed to create the React application.

    ![React](images/reactframework.png)

4. Click **Next** or open the **Configuration** tab to choose the preferred theme and other options, then click **Create**. The project will be created.

    ![Themes](images/Themes.png)

5. The created Syncfusion Web App is configured with Syncfusion NPM packages, styles, and component render code for the selected Syncfusion components.

    ![NPM Packages](images/react-npm-install.png)

    ![Styles](images/react-styles.png)

    ![Components](images/react-components.png)

## Run the application

1. Press **F5** or navigate to **Run > Start Debugging**.

    ![Run](images/run.png)

2. After compilation completes, open the localhost URL shown in the terminal or browser to view the output.

    ![Output](images/react-compilation.png)

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the application

The template showcases Chart, Grid, and Schedule components. To use other Syncfusion components, install the required component package and import it in your application. For npm package details, see [Installation with npm packages](https://ej2.syncfusion.com/react/documentation/installation/npm-package).

## Upgrading npm packages

When creating a new Syncfusion web app, the template installs the latest package versions. To update packages in an existing project without uninstalling, see [Update npm packages](https://ej2.syncfusion.com/react/documentation/upgrade/update-npm-package).