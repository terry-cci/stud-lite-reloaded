import { Link } from "react-router-dom";
import "./index.scss";

import lhIcon from "../../assets/lh.svg";

const Login = () => {
  return (
    <div className="login">
      <div className="login-card">
        <h1>進入 StudLite</h1>
        <div className="hr-text">使用以下方式</div>
        <div className="login-btn-container">
          <button>
            <img src={lhIcon} alt="" className="btn-icon" id="lh-icon" />
            勞校中學帳號
          </button>
          <button disabled>更多登入方式開發中</button>
        </div>
        <p className="muted-text">
          使用以上登入方式即表示閣下已同意
          <Link to="/">使用條款</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;