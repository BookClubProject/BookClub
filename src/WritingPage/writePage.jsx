import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import EditorComponent from "./Component/EditorMainComponent";
import EditorRightTopComponent from "./Component/EditorRightTopComponent"
import Address from "./Component/AddressSearchComponent";
import Search from "./Component/SearchConent";
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
        <div style = {{display : "flex", flexWrap: "wrap"}}>
        <EditorComponent value={desc} onChange={onEditorChange}/>
        <EditorRightTopComponent/>
        </div>
        <Bottom />
        </div>
    );
}

export default WritePage;