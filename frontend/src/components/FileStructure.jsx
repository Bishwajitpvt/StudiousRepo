import React from 'react'

const FileStructure = (props) => {
    // const download = async () => {
    //       fetch(props.uploadFIle).then(response => {
    //         response.blob().then(blob => {
    //             // Creating new object of PDF file
    //             const fileURL = window.URL.createObjectURL(blob);
    //             // Setting various property values
    //             let alink = document.createElement('a');
    //             alink.href = fileURL;
    //             alink.download = props.fileName + ".pdf";
    //             alink.click();
    //         })
    //     })
    // }
   return(
       <div class="card" style={{ marginTop: '1rem'}}>
           
           <h5 class="card-header">
               File Name : {props.fileName}
           </h5>
           
           <div class="card-body">
               
               <h5 class="card-title">
                   Branch : {props.branch}
               </h5>

               <h5 class="card-text">
                   Description : {props.description}
               </h5>

            <a href={props.uploadFile} target="_blank" class="btn btn-primary" download="a.pdf">download</a>
 
            </div>
        </div>
    );
};

export default FileStructure;