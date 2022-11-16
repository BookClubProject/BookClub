import React from 'react'
import "../../CompoCSS/Account.css"
import { Button } from "@material-ui/core";
import { fontStyle } from '@mui/system';

const styles = {
    wrapper : {
        background : "#8ec657",
        color : "white",
        padding : "10px 100px",
        fontSize : "1.2rem",
    },
}
function Account() {
  return (
    <div className='account_wrap'>
      <div className='account_content_wap'>
          <div className='account_introduction'>
              <div className='account_nickname'>
                  <p className='account_main_title'>닉네임</p>
                  <input className='account_input'  type="text" placeholder ="변경할 닉네임을 입력해주세요"></input>
              </div>
              <div className='account_self_introduction'>
                  <p className='account_main_title'>자기소개</p>
                  <input className='account_self_input' rows="4" type="text" placeholder ="자기소개를 해보세요!"></input>
              </div>
              <div className='account_introduction_button'>
                    <Button style={styles.wrapper}>저장하기</Button>
              </div>
          </div>
          <div className='account_email'>이메일, 수정칸</div>
          <div className='account_password'>비밀번호, 변경칸</div>
          <div className='account_delete'>탈퇴 칸</div>
      </div>
    </div>
  )
}

export default Account
