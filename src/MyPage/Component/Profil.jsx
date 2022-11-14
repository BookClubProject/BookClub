import "../CompoCSS/Profil.css";
const styles = {
  wrapper: {
    background: "blue",
  },
};
function Profil() {
  return (
    <div className="wrap">
      <div className="inner_wrap">
        <div className="introduction">
          <div className="introduction_top">
            <p className="title">소개</p>
            <button className="change_btn">편집</button>
          </div>
          <div></div>
        </div>
        <div className="review">
          <p className="title">토론후기</p>
          <div className="list"> 토론리스트</div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
