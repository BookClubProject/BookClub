import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import EditorComponent from "./Component/EditorComponent";
import Bottom from "../PublicComponent/BottomComponent";
import {useState} from "react";


const styles = {
    wrapper : {
        height : "100%",
        width : "100%",
    },
    messageText : {
        color: "black",
        fontSize: 16,
    },
};


function WritePage(){

    const [desc, setDesc] = useState('');
    function onEditorChange(value) {
        setDesc(value)
    }

    return(
        <div style = {styles.wrapper}>
        <TopMenuBarComponent />
        <EditorComponent value={desc} onChange={onEditorChange} />
        <Bottom />
        </div>
    );
}

export default WritePage;