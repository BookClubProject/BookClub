import React from "react";
import "../LoginPage.css"
import {Link} from "react-router-dom";

const styles = {
    loginText:{
        fontWeight:"bold",
        marginTop:"10px",
        marginBottom:"10px",
        textAlign : "center",
        fontSize: "30px",
    },
    textbox:{
        display : "flex",
        justifyContent: "center",
    },
    joinText:{
        marginLeft:"10px",
        color:"green",
        fontWeight:"bold",
        textDecoration: "none",
    },
    image:{
        marginLeft:"6px",
        width: "40px",
        height: "40px",
    }
}
function login(){

    return(
        <div class = "login-container">
            <div class = "login-box">
                <form class = "login-input">

                <div style = {styles.loginText}>로그인</div>
                <div style = {styles.textbox}>아직 계정이 없으신가요?
                    <Link to = {`/join/`} style = {styles.joinText}>회원가입</Link>
                </div>

                    <div class = "email-text">이메일</div>
                        <input type="email" className="email" />

                    <div class = "password-text">비밀번호</div>
                        <input type="password" className="password" />
                    <div>
                        <input type="submit" value="로그인" class = "login-button"/>
                    </div>
                    <div class="login-line">
                        간편 로그인
                    </div>
                    <img style = {styles.image} src = "data:image/png;base64,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"/>
                </form>
            </div>
        </div>
    );
}

export default login;