import { L10n } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    uploadObj;
    path = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    };
    componentWillMount() {
        L10n.load({
            "fr-CH": {
                "uploader": {
                    "Browse": "Feuilleter",
                    "Clear": "Clair",
                    "Upload": "Télécharger",
                    "cancel": "Annuler",
                    "delete": "Supprimer le fichier",
                    "totalFiles": "Total des fichiers",
                    "size": "taille",
                    "dropFilesHint": "ou Déposer des fichiers ici",
                    "inProgress": "Téléchargement",
                    "invalidFileType": "Le type de fichier n'est pas autorisé",
                    "invalidMaxFileSize": "La taille du fichier dépasse 28 Mo",
                    "invalidMinFileSize": "La taille du fichier est trop petite! S'il vous plaît télécharger des fichiers avec une taille minimale de 10 Ko",
                    "readyToUploadMessage": "Prêt à télécharger",
                    "remove": "Retirer",
                    "removedFailedMessage": "Le fichier n'a pas pu être supprimé",
                    "removedSuccessMessage": "Fichier supprimé avec succès",
                    "uploadFailedMessage": "Impossible d'importer le fichier",
                    "uploadSuccessMessage": "Fichier téléchargé avec succès",
                }
            }
        });
    }
    render() {
        return (<UploaderComponent asyncSettings={this.path} locale='fr-CH'/>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
