import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import EditorComponent from "./Component/EditorMainComponent";
import EditorRightTopComponent from "./Component/EditorRightTopComponent";
import EditorRightBottomComponent from "./Component/EditorRightBottomComponent";
import EditorLeftComponent from "./Component/EditorLeftComponent"
import Test from "./Component/test";
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
    line : {
        border : "1px solid black",
    }
};


function WritePage(){

    const [desc, setDesc] = useState('');
    function onEditorChange(value) {
        setDesc(value)
    }

    return(
        <div style = {styles.wrapper}>
        <TopMenuBarComponent />
        <div style = {styles.line}/>
        <div style = {{display : "flex", flexWrap: "wrap"}}>
        <div style = {{display : "flex", flex : "1.7",}}>
        <EditorLeftComponent />{/**왼쪽 공백 색깔 */}
            <EditorComponent value={desc} onChange={onEditorChange}/>
        </div>
            <div style = {{border : "1px solid #dee2e6", backgroundColor: "rgb(245, 245, 245)", height : "5000px"}}>
                <EditorRightTopComponent/>
                <EditorRightBottomComponent/>
            </div>
        </div>
        <Bottom />
        <Test />
        </div>
    );
}

export default WritePage;