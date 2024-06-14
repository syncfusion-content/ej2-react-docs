

import { UploaderComponent, SuccessEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const path: object = {
        saveUrl: '/api/FileUploader/Save'
    }
    function onSuccessHandler(args: SuccessEventArgs): void {
        if (args.e !== null) // Check if the event argument is not null
        { 
            const responseText: string = args.e.target.responseText;
            if (responseText.trim() !== "") {

                // for JSON and File Datas
                var jsonResponse = JSON.parse(responseText);
                if (jsonResponse !== null && jsonResponse.hasOwnProperty("Success"))
                {
                    var isSuccess = jsonResponse["Success"];
                    if (isSuccess) {
                        // File upload success
                        const message: string = jsonResponse.hasOwnProperty("Message") ? jsonResponse["Message"] : "File uploaded successfully";
                        // Additional processing as needed
                    }
                }

                // for string Data
                const message: string = responseText;
                // Additional processing as needed
            }
        }
    }
        return (
            <UploaderComponent asyncSettings={path} success={onSuccessHandler = onSuccessHandler.bind(this)} />);
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


