---
layout: post
title: File system provider in React File Manager component | Syncfusion
description: Learn here all about File system provider in Syncfusion React File Manager component of Syncfusion Essential JS 2 and more.
control: File system provider 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# File system provider in React File Manager component

The file system provider allows the File Manager component to manage the files and folders in a physical or cloud-based file system. It provides the methods for performing various file actions like creating a new folder, copying and moving of files or folders, deleting, uploading, and downloading the files or folders in the file system.

The following file providers are added in Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 File Manager component.

* [Physical file system provider](#physical-file-system-provider)
* [Azure cloud file system Provider](#azure-cloud-file-system-provider)
* [Amazon S3 cloud file provider](#amazon-s3-cloud-file-provider)
* [SharePoint file provider](#SharePoint-file-provider)
* [File Transfer Protocol file system provider](#file-transfer-protocol-file-system-provider)
* [SQL database file system provider](#sql-database-file-system-provider)
* [NodeJS file system provider](#nodejs-file-system-provider)
* [Google Drive file system provider](#google-drive-file-system-provider)
* [Firebase Realtime Database file system provider](#firebase-file-system-provider)
* [IBM Cloud Object Storage provider](#ibm-cloud-object-storage-file-provider)

## Physical file system provider

The Physical file system provider allows the users to access and manage the physical file system. To get started, clone the [ej2-aspcore-file-provider](https://github.com/SyncfusionExamples/ej2-aspcore-file-provider) using the following command.

   ```ts
    git clone https://github.com/SyncfusionExamples/ej2-aspcore-file-provider  ej2-aspcore-file-provider
    cd ej2-aspcore-file-provider
   ```

After cloning, just open the project in Visual Studio and restore the NuGet packages. Now, set the root directory of the physical file system in the File Manager controller.

After setting the root directory of the file system, just build and run the project. Now, the project will be hosted in `http://localhost:{port}` and just mapping the **ajaxSettings** property of the File Manager component to the appropriate controller methods allows to manage the files in the physical file system.

   {% raw %}

   ```ts

    // Initializing File Manager Physical service.
   <div>
     <div className="control-section">
        <FileManagerComponent  id="file"
            ajaxSettings = {{
                // Replace the hosted port number in the place of "{port}"
                url="http://localhost:{port}/api/FileManager/FileOperations",
                downloadUrl="http://localhost:{port}/api/FileManager/Download",
                uploadUrl="http://localhost:{port}/api/FileManager/Upload",
                getImageUrl="http://localhost:{port}/api/FileManager/GetImage"
            }} >
        </FileManagerComponent>
     </div>
   </div>
  ```
  {% endraw %}

>Note: To learn more about file actions that can be performed with Physical file system provider, refer to this [link](https://github.com/SyncfusionExamples/ej2-aspcore-file-provider#key-features)

## Azure cloud file system provider

The Azure cloud file system provider allows the users to access and manage the blobs in the Azure blob storage. To get started, clone the [azure-aspcore-file-provider](https://github.com/SyncfusionExamples/azure-aspcore-file-provider) using the following command

   ```ts

   git clone https://github.com/SyncfusionExamples/azure-aspcore-file-provider  azure-aspcore-file-provider

  ```

After cloning, just open the project in Visual Studio and restore the NuGet packages. Now, register the Azure storage by passing details like name, password, and blob name to the Register Azure method in the File Manager controller.

   ```ts

   void RegisterAzure(string accountName, string accountKey, string blobName)

  ```

Then, set the blob container and the root blob directory by passing the corresponding URLs as parameters in the setBlobContainer method as follows.

   ```ts
    void setBlobContainer(string blobPath, string filePath)
  ```

> **Note:** Also, assign the same *blobPath URL* and *filePath URL* in [**AzureFileOperations** and **AzureUpload**](https://github.com/SyncfusionExamples/azure-aspcore-file-provider/blob/master/Controllers/AzureProviderController.cs) methods in the File Manager controller to determine the original path of the Azure blob.

After setting the blob container references, just build and run the project. Now, the project will be hosted in `http://localhost:{port}` and just mapping the **ajaxSettings** property of the File Manager component to the appropriate controller methods allows to manage the Azure blob storage.

  {% raw %}

  ```ts
  // Initializing File Manager Azure cloud file system service.
   <div>
        <div className="control-section">
            <FileManagerComponent  id="file"
                ajaxSettings = {{
                    // Replace the hosted port number in the place of "{port}"
                    url="http://localhost:{port}/api/AzureProvider/AzureFileOperations",
                    downloadUrl="http://localhost:{port}/api/AzureProvider/AzureDownload",
                    uploadUrl="http://localhost:{port}/api/AzureProvider/AzureUpload",
                    getImageUrl="http://localhost:{port}/api/AzureProvider/AzureGetImage"
                }} >
            </FileManagerComponent>
        </div>
    </div>
 ```
  {% endraw %}

> **NuGet:** Additionally, we have created a [**NuGet**](https://www.nuget.org/packages/Syncfusion.EJ2.FileManager.AzureFileProvider.AspNet.Core) package of **ASP.NET Core Azure file system provider**.

Please, use the following command to install the NuGet package in an application.

   ```ts

    dotnet add package Syncfusion.EJ2.FileManager.AzureFileProvider.AspNet.Core
   ```

> **Note:** To learn more about file actions that can be performed with Azure cloud file system Provider, refer to this [link](https://github.com/SyncfusionExamples/azure-aspcore-file-provider#key-features)

## Amazon S3 cloud file provider

The Amazon ***S3*** (*Simple Storage Service*) cloud file provider allows the users to access and manage a server hosted file system as collection of objects stored in the Amazon S3 Bucket. To get started, clone the [amazon-s3-aspcore-file-provider](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider) using the following command

   ```ts
   git clone https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider.git  amazon-s3-aspcore-file-provider.git
  ```

> **Note:** To learn more about creating and configuring an Amazon S3 bucket, refer to this [link](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-configure-bucket.html).

After cloning, open the project in Visual Studio and restore the NuGet packages. Now, register Amazon S3 client account details like *awsAccessKeyId*, *awsSecretKeyId* and *awsRegion* details in **RegisterAmazonS3** method in the File Manager controller to perform the file operations.

  ```ts
   void RegisterAmazonS3(string bucketName, string awsAccessKeyId, string awsSecretAccessKey, string bucketRegion)
  ```

After registering the Amazon client account details, just build and run the project. Now, the project will be hosted in `http://localhost:{port}` and just mapping the **ajaxSettings** property of the File Manager component to the appropriate controller methods allows to manage the Amazon ***S3*** (*Simple Storage Service*) bucket's objects storage.

  {% raw %}

 ```ts
  // Initializing File Manager Amazon S3 cloud file system service.
   <div>
        <div className="control-section">
            <FileManagerComponent  id="file"
                ajaxSettings = {{
                    // Replace the hosted port number in the place of "{port}"
                    url="http://localhost:{port}/api/AmazonS3Provider/AmazonS3FileOperations",
                    downloadUrl="http://localhost:{port}/api/AmazonS3Provider/AmazonS3Download",
                    uploadUrl="http://localhost:{port}/api/AmazonS3Provider/AmazonS3Upload",
                    getImageUrl="http://localhost:{port}/api/AmazonS3Provider/AmazonS3GetImage"
                }} >
            </FileManagerComponent>
        </div>
    </div>
 ```
 {% endraw %}

> **Note:** To learn more about the file actions that can be performed with Amazon S3 cloud file provider, refer to this [link](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider#key-features)

## SharePoint file provider

The SharePoint file provider allows users to access and manage files within Microsoft SharePoint. To get started, clone the [SharePoint-aspcore-file-provider](https://github.com/SyncfusionExamples/sharepoint-aspcore-file-provider) using the following command.

```typescript

git clone https://github.com/SyncfusionExamples/sharepoint-aspcore-file-provider  sharepoint-aspcore-file-provider

cd sharepoint-aspcore-file-provider

```

**Prerequisites**

To set up the SharePoint service provider, follow these steps:

1. **Create an App Registration in Azure Active Directory (AAD):** 
   - Navigate to the Azure portal and create a new app registration under Azure Active Directory.
   - Note down the **Tenant ID**, **Client ID**, and **Client Secret** from the app registration.

2. **Use Microsoft Graph Instance:** 
   - With the obtained Tenant ID, Client ID, and Client Secret, you can create a Microsoft Graph instance.
   - This instance will be used to interact with the SharePoint document library.

3. **Use Details from `appsettings.json`:**
   - The `SharePointController` is already configured to use the credentials provided in the `appsettings.json` file.
   - You only need to provide your `Tenant ID`, `Client ID`, `Client Secret`, `User Site Name`, and `User Drive ID` in the `appsettings.json` file, and the application will automatically initialize the SharePoint service.

**Example `appsettings.json` Configuration**

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "SharePointSettings": {
    "TenantId": "<--Tenant Id-->",
    "ClientId": "<--Client Id-->",
    "ClientSecret": "<--Client Secret-->",
    "UserSiteName": "<--User Site Name-->",
    "UserDriveId": "<--User Drive ID-->"
  },
  "AllowedHosts": "*"
}
```

Replace "<--User Site Name-->", "<--User Drive ID-->", "tenantId", "clientId", and "clientSecret" with your actual values.

After configuring the SharePoint file provider, build and run the project. Now, the project will be hosted in `http://localhost:{port}` and just mapping the **ajaxSettings** property of the File Manager component to the appropriate controller methods allows to manage the files in the Microsoft SharePoint.

{% raw %}
  ```ts
   <div>
        <div className="control-section">
            <FileManagerComponent  id="file"
                ajaxSettings = {{
                    // Replace the hosted port number in the place of "{port}"
                    url: hostUrl + 'api/SharePointProvider/SharePointFileOperations',
                    downloadUrl: hostUrl + 'api/SharePointProvider/SharePointDownload',
                    uploadUrl: hostUrl + 'api/SharePointProvider/SharePointUpload',
                    getImageUrl: hostUrl + 'api/SharePointProvider/SharePointGetImage'
                }} >
            </FileManagerComponent>
        </div>
    </div>
  ```
{% endraw %}

> **Note:** To learn more about the file actions that can be performed with SharePoint file provider, refer to this [link](https://github.com/SyncfusionExamples/sharepoint-aspcore-file-provider#key-features)

## File Transfer Protocol file system provider

In ASP.NET Core, File Transfer Protocol file system provider allows the users to access to the hosted file system as collection of objects stored in the file storage using File Transfer Protocol. To get started, clone the [ftp-aspcore-file-provider](https://github.com/SyncfusionExamples/ftp-aspcore-file-provider) using the following command

  ```ts
  git clone https://github.com/SyncfusionExamples/ftp-aspcore-file-provider.git  ftp-aspcore-file-provider.git
  ```

After cloning, open the project in Visual Studio and restore the NuGet packages. Now, register File Transfer Protocol details like *hostName*, *userName* and *password* in **SetFTPConnection** method in the File Manager controller to perform the file operations.

  ```ts
  void SetFTPConnection(string hostName, string userName, string password)
  ```

After registering the File Transfer Protocol details, just build and run the project. Now, the project will be hosted in `http://localhost:{port}` and just mapping the **ajaxSettings** property of the File Manager component to the appropriate controller methods allows you to manage the FTP’s objects storage.

   {% raw %}

  ```ts
  // Initializing File Manager file transfer protocol file system service.
   <div>
        <div className="control-section">
            <FileManagerComponent  id="file"
                ajaxSettings = {{
                    // Replace the hosted port number in the place of "{port}"
                    url="http://localhost:{port}/api/FTPProvider/FTPFileOperations",
                    downloadUrl="http://localhost:{port}/api/FTPProvider/FTPDownload",
                    uploadUrl="http://localhost:{port}/api/FTPProvider/FTPUpload",
                    getImageUrl="http://localhost:{port}/api/FTPProvider/FTPGetImage"
                }} >
            </FileManagerComponent>
        </div>
    </div>
 ```
  {% endraw %}

> **Note:** To learn more about the file actions that can be performed with File Transfer Protocol file system provider, refer to this [link](https://github.com/SyncfusionExamples/ftp-aspcore-file-provider#key-features)

## SQL database file system provider

In ASP.NET Core, SQL database file system provider allows the users to manage the file system being maintained in a SQL database table. Unlike the other file system providers, the SQL database file system provider works on ID basis. Here, each file and folder have a unique ID based on which all the file operations will be performed. To get started, clone the [sql-server-database-aspcore-file-provider](https://github.com/SyncfusionExamples/sql-server-database-aspcore-file-provider) using the following command.

  ```ts

  <add name="FileExplorerConnection" connectionString="Data Source=(LocalDB)\v11.0;AttachDbFilename=|DataDirectory|\FileManager.mdf;Integrated Security=True;Trusted_Connection=true" />

  ```

After cloning, just open the project in Visual Studio and restore the NuGet packages. To establish the SQL server connection with the database file (for eg: File Manager.mdf), specify the connection string in the web config file as follows.

  ```ts

  <add name="FileExplorerConnection" connectionString="Data Source=(LocalDB)\v11.0;AttachDbFilename=|DataDirectory|\FileManager.mdf;Integrated Security=True;Trusted_Connection=true" />

 ```

Then, make an entry for the connection string in `appsettings.json` file as follows.

  ```ts

  "ConnectionStrings": {
    "FileManagerConnection": "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\App_Data\\FileManager.mdf;Integrated Security=True;Connect Timeout=30"
  }

  ```

Now, to configure the database connection, set the connection name, table name and root folder ID value by passing these values to the SetSQLConnection method.

  ```ts
  void SetSQLConnection(string name, string tableName, string tableID)
  ```

> Refer to this [File Manager.mdf](https://github.com/SyncfusionExamples/sql-server-database-aspcore-file-provider/blob/master/App_Data/FileManager.mdf), to learn about the pre-defined file system SQL database for the EJ2 File Manager.

After configuring the connection, just build and run the project. Now, the project will be hosted in `http://localhost:{port}` and just mapping the **ajaxSettings** property of the File Manager component to the appropriate controller methods allows to manage the files in the SQL database table.

  {% raw %}

  ```ts

  // Initializing File Manager with SQL Server Database service configuration.
  <div>
    <div className="control-section">
        <FileManagerComponent  id="file"
            ajaxSettings = {{
                // Replace the hosted port number in the place of "{port}"
                url="http://localhost:{port}/api/SQLProvider/SQLFileOperations",
                downloadUrl="http://localhost:{port}/api/SQLProvider/SQLDownload",
                uploadUrl="http://localhost:{port}/api/SQLProvider/SQLUpload",
                getImageUrl="http://localhost:{port}/api/SQLProvider/SQLGetImage"
            }} >
        </FileManagerComponent>
    </div>
  </div>

  ```
   {% endraw %}

> **Note:** To learn more about file actions that can be performed with SQL database file system provider, refer to this [link](https://github.com/SyncfusionExamples/sql-server-database-aspcore-file-provider#key-features)

## NodeJS file system provider

The NodeJS file system provider allows the users to manage the files and folders in a physical file system. It provides methods for performing all basic file operations like creating a folder, copy, move, delete, and download files and folders in the file system. We can use of the NodeJS file system provider either by installing the [ej2-filemanager-node-filesystem](https://www.npmjs.com/package/@syncfusion/ej2-filemanager-node-filesystem) package or by cloning the [file system provider](https://github.com/SyncfusionExamples/ej2-filemanager-node-filesystem) from the GitHub.

### Using ej2-filemanager-node-filesystem package

* Install the ej2-filemanager-node-filesystem package by running the below command.

 ```ts

  npm install @syncfusion/ej2-filemanager-node-filesystem

  ```

* After installing the package, navigate to the ej2-filemanager-node-filesystem package folder within the node-modules
* Run the command **npm install** command.

### Cloning the ej2-filemanager-node-filesystem from GitHub

* Clone the ej2-filemanager-node-filesystem using the following command.

  ```ts

  git clone  https://github.com/SyncfusionExamples/ej2-filemanager-node-filesystem.git node-filesystem-provider

  ```

* After cloning, open the root folder and run the command **npm install** command.

After installing the packages, set the root folder directory of the physical file system in the package JSON under scripts sections as follows.

  ```ts

   "start": "node filesystem-server.js -d D:/Projects"

   ```

> **Note:** By default, the root directory will be configured to set `C:/Users` as the root directory.

To set the port in which the project to be hosted and the root directory of the file system. Run the following command.

  ```ts

   set PORT=3000 && node filesystem-server.js -d D:/Projects

   ```

> **Note:** By default, the service will run `8090` port.

Now, just mapping the **ajaxSettings** property of the File Manager component to the appropriate file operation methods in the filesystem-server.js file will allow to manage the physical file system with NodeJS file system provider.

  {% raw %}

  ```ts

  // File Manager sample with nodejs service.
   <div>
    <div className="control-section">
        <FileManagerComponent  id="file"
            ajaxSettings = {{
                url="http://localhost:{port}/",
                downloadUrl="http://localhost:{port}/Download",
                uploadUrl="http://localhost:{port}/Upload",
                getImageUrl="http://localhost:{port}/GetImage"
            }} >
        </FileManagerComponent>
      </div>
  </div>

  ```
  {% endraw %}

> **Note:** To learn more about file actions that can be performed with NodeJS file system provider, refer to this [link](https://github.com/SyncfusionExamples/ej2-filemanager-node-filesystem#key-features)

## Google Drive file system provider

In ASP.NET Core, Google Drive file system provider allows the users to manage the files and folders in a Google Drive account. The Google Drive file system provider works on ID basis where each file and folder have a unique ID. To get started,  clone the [google-drive-aspcore-file-provider](https://github.com/SyncfusionExamples/google-drive-aspcore-file-provider) using the following command.

  ```ts

   git clone https://github.com/SyncfusionExamples/google-drive-aspcore-file-provider  google-drive-aspcore-file-provider

 cd google-drive-aspcore-file-provider

  ```

Google Drive file system provider use the [Google Drive APIs](https://developers.google.com/drive/api/v3/reference/) to read the file in the file system and uses the [OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) protocol for authentication and authorization. To authenticate from the client end, obtain OAuth 2.0 client credentials from the `Google API Console`. To learn more about generating the client credentials from the from Google API Console, refer to this [link](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow).

After generating the client secret data, copy the JSON data to the following specified JSON files in the cloned location.

  * EJ2GoogleDriveFileProvider > credentials > client_secret.json
  * GoogleOAuth2.0Base > credentials > client_secret.json

After updating the credentials, just build and run the project. Now, the project will be hosted in `http://localhost:{port}`, and it will ask to log on to the Gmail account created the client secret credentials. Then, provide permission to access the Google Drive files by clicking the allow access button in the page. Now, just mapping the **ajaxSettings** property of the File Manager component to the appropriate controller methods will allows to manage the files from the Google Drive.

   {% raw %}

   ```ts

   // File Manager sample with Google Drive service.
  <div>
    <div className="control-section">
        <FileManagerComponent id="file"
            ajaxSettings = {{
                // Replace the hosted port number in the place of "{port}"
                url="http://localhost:{port}/api/GoogleDriveProvider/GoogleDriveFileOperations",
                downloadUrl="http://localhost:{port}/api/GoogleDriveProvider/GoogleDriveDownload",
                uploadUrl="http://localhost:{port}/api/GoogleDriveProvider/GoogleDriveUpload",
                getImageUrl="http://localhost:{port}/api/GoogleDriveProvider/GoogleDriveGetImage"
            }} >
        </FileManagerComponent>
      </div>
   </div>

 ```
 {% endraw %}

> **Note:** To learn more about file actions that can be performed with Google Drive file system provider, refer to this [link](https://github.com/SyncfusionExamples/google-drive-aspcore-file-provider#key-features)

## Firebase Realtime Database file system provider

The [Firebase Realtime Database](https://firebase.google.com/) file system provider in **ASP.NET Core** provides the efficient way to store the File Manager file system in a cloud database as JSON representation.

### Generate Secret access key from service account

Follow the given steps to generate the secret access key:

* To access the Firebase console, please click on this [link](https://console.firebase.google.com/). Once you have accessed the console, you can create a new project by filling in the necessary fields and clicking on the relevant buttons.

![create-project](images/create-project.png)

* Within the Firebase console, navigate to the **Build** tab. Under this tab, select the option for **Realtime Database**. From there, you can create a new database by clicking on the **Create Database** button.

![database-creation](images/database-creation.png)

* To get started, create a root node and add any desired children to it. Please refer to the following code snippet for guidance on the structure of the JSON:

```ts

{
  "Files" : [ {
    "caseSensitive" : false,
    "dateCreated" : "8/22/2019 5:17:55 PM",
    "dateModified" : "8/22/2019 5:17:55 PM",
    "filterId" : "0/",
    "filterPath" : "/",
    "hasChild" : false,
    "id" : "5",
    "isFile" : false,
    "isRoot" : true,
    "name" : "Music",
    "parentId" : "0",
    "selected" : false,
    "showHiddenItems" : false,
    "size" : 0,
    "type" : "folder"
  },
   {
    "caseSensitive" : false,
    "dateCreated" : "8/22/2019 5:18:03 PM",
    "dateModified" : "8/22/2019 5:18:03 PM",
    "filterId" : "0/",
    "filterPath" : "/",
    "hasChild" : false,
    "id" : "6",
    "isFile" : false,
    "isRoot" : true,
    "name" : "videos",
    "parentId" : "0",
    "selected" : false,
    "showHiddenItems" : false,
    "size" : 0,
    "type" : ""
  }]
 }

```

Here, the `Files` denotes the `rootNode` and the subsequent object refers to the children of the root node. `rootNode` will be taken as the root folder of the file system loaded which will be loaded in File Manager component.

* To import a JSON file into the Firebase Realtime Database, navigate to the **Data** tab and click on the action icon shown in the accompanying image. From there, select the **Import JSON** option and upload the JSON file that was created using the code provided above.

![import-json](images/import-json.png)

* To interact with the Firebase Realtime Database through your application, it is necessary to grant read and write permissions by defining appropriate rules in the Firebase project's **Rules tab**, as shown in the following code snippet. Once you have specified the rules, you can publish them by clicking the **Publish** button to enable the necessary authentication.

```ts

{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    ".read": "auth!=null",
    ".write": "auth!=null"
  }
}

```

> **Note:** By default, rules of a Firebase project will be **false**. To read and write the data, configure the  **Rules** as given in the following code snippet in the *Rules* tab in the Firebase Realtime Database project.

* Navigate to the project settings as instructed and then click on the **Service Account** tab.

![service](images/service.png)

* To obtain the access key JSON file, simply click on the `Generate new private key` button and then confirm by clicking the `Generate key` button in the pop-up window that appears.

![generate_key](images/generate_key.png)

* Next, you will need to clone the [`firebase-realtime-database-apscore-file-provider`](https://github.com/SyncfusionExamples/firebase-realtime-database-aspcore-file-provider) repository. Once cloned, simply open the project in Visual Studio and restore the NuGet package.

* Once you have generated the secret key, you will need to replace the JSON in the `access_key.json` file in the Firebase Realtime Database provider project with the newly generated key. This will enable authentication and allow you to perform read and write operations.

* In the **Data** tab, locate the project API URL and then paste it into the below mentioned section.

![api_url](images/api_url.png)

Register the Firebase Realtime Database by assigning *Firebase Realtime Database REST API link*, *rootNode*, and *serviceAccountKeyPath* parameters in the `RegisterFirebaseRealtimeDB` method of class `FirebaseRealtimeDBFileProvider` in the controller part of the ASP.NET Core application.

```ts

this.operation.RegisterFirebaseRealtimeDB(string apiUrl, string rootNode, string serviceAccountKeyPath)

```

**Example:**

```ts

this.operation.RegisterFirebaseRealtimeDB("{copy your API URL here}", "Files", hostingEnvironment.ContentRootPath + \\FirebaseRealtimeDBHelper\\access_key.json);

```

In the above code,

* `{copy your API URL here}` denotes Firebase Realtime Database REST API link.

* `Files` denotes newly created root node in Firebase Realtime  Database.

* `hostingEnvironment.ContentRootPath + \\FirebaseRealtimeDBHelper\\access_key.json` denotes service account key path which has authentication key for the Firebase Realtime Database data.

After configuring the Firebase Realtime Database service link, build and run the project. Now, the project will be hosted in `http://localhost:{port}` and just mapping the **ajaxSettings** property of the File Manager component to the appropriate controller methods allows to manage the files in the Firebase Realtime Database.

{% raw %}

```ts
// File Manager sample with IBM COS service.
<div>
    <div className="control-section">
        <FileManagerComponent  id="file"
            ajaxSettings = {{
                // Replace the hosted port number in the place of "{port}"
                url="http://localhost:{port}/api/FirebaseProvider/FirebaseRealtimeFileOperations",
                downloadUrl="http://localhost:{port}/api/FirebaseProvider/FirebaseRealtimeDownload",
                uploadUrl="http://localhost:{port}/api/FirebaseProvider/FirebaseRealtimeUpload",
                getImageUrl="http://localhost:{port}/api/FirebaseProvider/FirebaseRealtimeGetImage"
            }} >
        </FileManagerComponent>
    </div>
</div>

```
{% endraw %}

>> **Note:** To learn more about the file actions that can be performed with Firebase Realtime Database file system provider, refer to this [link](https://github.com/SyncfusionExamples/firebase-realtime-database-aspcore-file-provider#key-features)

## IBM Cloud Object Storage file provider

The IBM Cloud Object Storage file provider module allows you work with the IBM Cloud Object Storage. It also provides the methods for performing various file actions such as creating a new folder, renaming files, and deleting files. The IBM Cloud Object Storage file provider serves the file provider support for the File Manager component with the IBM Cloud Object Storage. We can make use of IBM Cloud Object Storage file provider by installing the[ej2-filemanager-ibm-cos-node-file-provider](https://www.npmjs.com/package/@syncfusion/ej2-filemanager-ibm-cos-node-file-provider)npm package or by cloning the [file provider](https://github.com/SyncfusionExamples/filemanager-ibm-cos-node-file-provider) from the GitHub.

### Using ej2-filemanager-ibm-cos-node-file-provider npm package

* Install the ej2-filemanager-ibm-cos-node-file-provider npm package by running the below command.

   ```ts

   npm install @syncfusion/ej2-filemanager-ibm-cos-node-file-provider

   ```

* After installing the package, navigate to the ej2-filemanager-ibm-cos-node-file-provider package folder within the node-modules.

* Run the  **npm install** command to install the dependent packages for file provider.

### Cloning the filemanager-ibm-cos-node-file-provider from GitHub

* Clone the filemanager-ibm-cos-node-file-provider using the following command.

  ```ts

    git clone  https://github.com/SyncfusionExamples/filemanager-ibm-cos-node-file-provider.git

  ```

* After cloning, open the root folder and run the command **npm install** command.

To set the port in which the project to be hosted. Run the following command.

   ```ts

   set PORT=3000 && node index.js

   ```

> **Note:** By default, the service will run `8090` port.

Now, just mapping the **ajaxSettings** property of the File Manager component to the appropriate file operation methods in the index.js file will allow to manage the IBM Cloud Object Storage.

{% raw %}

```ts
// File Manager sample with IBM COS service.
<div>
    <div className="control-section">
        <FileManagerComponent  id="file"
            ajaxSettings = {{
                url="http://localhost:{port}/",
                downloadUrl="http://localhost:{port}/Download",
                uploadUrl="http://localhost:{port}/Upload",
                getImageUrl="http://localhost:{port}/GetImage"
            }} >
        </FileManagerComponent>
    </div>
</div>

```
{% endraw %}

> **Note:** To learn more about the file actions that can be performed with IBM Cloud Object Storage file provider, refer to this [link]( https://github.com/SyncfusionExamples/filemanager-ibm-cos-node-file-provider#key-features)