import { getUniqueID } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    const path = {
        saveUrl: '/api/FileUploader/Save'
    };
    function onSuccessHandler(args) {
        if (args.e !== null) // Check if the event argument is not null 
        {
            var responseText = args.e.target.responseText;
            if (responseText.trim() !== "") {

                // for JSON and File Datas
                var jsonResponse = JSON.parse(responseText);
                if (jsonResponse !== null && jsonResponse.hasOwnProperty("Success"))
                {
                    var isSuccess = jsonResponse["Success"];
                    if (isSuccess) {
                        // File upload success
                        var message = jsonResponse.hasOwnProperty("Message") ? jsonResponse["Message"] : "File uploaded successfully";
                        // Additional processing as needed
                    }
                }

                // for string Data
                var message = responseText;
                // Additional processing as needed
            }
        }
    }
    return (<UploaderComponent asyncSettings={path} success={onSuccessHandler = onSuccessHandler.bind(this)}/>);
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
