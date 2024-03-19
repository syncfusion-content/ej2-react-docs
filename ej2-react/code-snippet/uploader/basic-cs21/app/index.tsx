


import { L10n } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
    public uploadObj: UploaderComponent;
  public path: object = {
    removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
    saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
  }
  public componentWillMount(): void {
    L10n.load({
        "fr-CH": {
            "uploader": {
                "Browse"  : "Feuilleter",
                "Clear" : "Clair",
                "Upload" : "Télécharger",
                "cancel": "Annuler",
                "delete": "Supprimer le fichier",
                "totalFiles": "Total des fichiers",
                "size": "taille",
                "dropFilesHint" : "ou Déposer des fichiers ici",
                "inProgress": "Téléchargement",
                "invalidFileType" : "Le type de fichier n'est pas autorisé",
                "invalidMaxFileSize" : "La taille du fichier dépasse 28 Mo",
                "invalidMinFileSize" : "La taille du fichier est trop petite! S'il vous plaît télécharger des fichiers avec une taille minimale de 10 Ko",
                "readyToUploadMessage": "Prêt à télécharger",
                "remove": "Retirer",
                "removedFailedMessage": "Le fichier n'a pas pu être supprimé",
                "removedSuccessMessage": "Fichier supprimé avec succès",
                "uploadFailedMessage" : "Impossible d'importer le fichier",
                "uploadSuccessMessage" : "Fichier téléchargé avec succès",
            }
        }
    })
}

    public render(): JSX.Element {
        return (
            <UploaderComponent asyncSettings = {this.path} locale = 'fr-CH'/>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


