import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

const Image = ({ src }) => (
    <img src={ src } className="img-circle elevation-2 mb-4" width="100" height="100" />
);

const Banner = ({ src }) => (
    <img src={src} className="elevation-2 mb-4 img-fluid" style={{ maxHeight: '100px' }} />
); 


const Progress = (props) => {
    return(
        <div>
            { props.percentage }
        </div>
    );
}

const FileUpload = ({ name, filePath, setFieldValue, responseCallback, endpoint, banner, setActiveBtn }) => {
  
    let [progress, setProgress] = useState(-1);
    let [file, setFile] = useState(filePath);
    let [blob, setBlob] = useState(undefined);
    let PreviewComponent = Image;
    if (banner) {
        PreviewComponent = Banner;
    }

    useEffect(() => {
        setFile(filePath)
    }, [filePath]);
    
    let fileInput = React.createRef();

    const handleFileChange = (e) => {
        if (!e.target.files) {
            return;
        }
        let file = e.target.files[0];
        // Preview file before upload.
        setBlob(URL.createObjectURL(file));

        let data = new FormData();
        // field name of the file input field. 
        data.append(name, file);

        let config = {
            onUploadProgress: (p) => {
                setProgress({ progress: Math.round(p.loaded * 100 / p.total) });
            },
        };

        setProgress(0);

        (async () => {
            try {
                // disable
                if (typeof setActiveBtn === "function") {
                    setActiveBtn(true);
                }
                let res = await axios.post(endpoint, data, config);    
                if (res && typeof setActiveBtn === "function") {
                    setActiveBtn(false);
                }
                console.log(res.data.file);
                setProgress(-1);
                setFile(res.data?.data?.file)
                responseCallback(res.data);
                setFieldValue(name, res.data?.data?.file);
            } catch(error) {
                console.error(error);
                if (typeof setActiveBtn === "function") {
                    setActiveBtn(false);
                }
            }
        })();
    }

    return (
        <React.Fragment>
            { file !== undefined &&
                <div>
                    <PreviewComponent src={blob ? blob : file} />
                </div>
            }
                
            <div style={{ maxWidth: 144 }}>
                { progress > -1 &&
                <Progress percentage={ progress } />}
            </div>    
            
                <input
                    ref={ fileInput }
                    type="file"
                    name={ name }
                    onChange={ handleFileChange }
                    style={{display: "none"}}
                />
            
            <Button onClick={ () => fileInput?.current.click() }>Browse</Button>
        </React.Fragment>
    );
}

export default FileUpload;