import { useState } from "react";
import {
  Button,
  IconButton,
  Input,
  InputAdornment,
  Switch,
  Collapse,
} from "@mui/material";
import "../forgotPassword/forgotPassword.css";
import "../inputStyles.css";
import { RemoveRedEye } from "@mui/icons-material";

const ResetPassword = () => {
  const [code, setCode] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const history = useHistory();

  // useEffect(() => {
  //   setErrorMessage("");
  // }, []);

  // const changeHandler = () => {
  //   setShowPassword((prevState) => !prevState);
  // };
  // const backwardHandler = () => {
  //   history.push("/login");
  //   window.location.reload();
  // };

  // const resetPasswordHandler = (
  //   e,
  //   code,
  //   userName,
  //   newPassword,
  //   newPasswordConfirmation
  // ) => {
  //   e.preventDefault();
  //   console.log(code, userName, newPassword, newPasswordConfirmation);
  //   if (newPassword === newPasswordConfirmation) {
  //     http
  //       .post("/Account/ResetPassword", {
  //         code,
  //         userName,
  //         newPassword,
  //         newPasswordConfirmation,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   } else {
  //     setErrorMessage("رمز عبور جدید یکسان نیست");
  //   }
  // };
  return (
    <>
      <h3 className="titel">change Password</h3>
      <form className="form-forgotPassword">
        <Input
          className="input_style"
          type="text"
          required
          // value={code}
          // onChange={(e) => setCode(e.target.value)}
          disableUnderline={true}
          placeholder="Enter Auth Code"
        />

        <Input
          className="input_style"
          type="text"
          required
          // value={userName}
          // onChange={(e) => setUserName(e.target.value)}
          disableUnderline={true}
          placeholder="Enter your email or phone number"
        />

        <label htmlFor="input_email" className="resetPassLabel">
          <p style={{ margin: "0" }}>New password</p>
          <Collapse in={errorMessage !== "" ? true : false}>
            {/* <div>{errorMessage}</div> */}
          </Collapse>
        </label>

        <Input
          className="input_style"
          type={showPassword ? "text" : "password"}
          required
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          disableUnderline={true}
          placeholder="Enter your password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => changeHandler((prevState) => !prevState)}
              >
                <RemoveRedEye />
              </IconButton>
            </InputAdornment>
          }
        />

        <label htmlFor="input_email" className="resetPassLabel">
          <p style={{ margin: "0" }}> Repeat the new password</p>
          <Collapse in={errorMessage !== "" ? true : false}>
            {/* <div>{errorMessage}</div> */}
          </Collapse>
        </label>

        <Input
          className="input_style"
          type={showPassword ? "text" : "password"}
          required
          // value={confirmPassword}
          // onChange={(e) => setConfirmPassword(e.target.value)}
          disableUnderline={true}
          placeholder="  Repeat the new password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => changeHandler((prevState) => !prevState)}
              >
                <RemoveRedEye />
              </IconButton>
            </InputAdornment>
          }
        />
        <Button
          className="auth"
          type="submit"
          // onClick={(e) =>
          //   resetPasswordHandler(e, code, userName, password, confirmPassword)
          // }
        >
          Register a new password
        </Button>
        <div
          className="link-signIn"
          // onClick={() => backwardHandler()}
        >
          <span style={{ fontSize: ".95rem" }}> back</span>
        </div>
      </form>
    </>
  );
};
export default ResetPassword;
