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
      <h3 className="titel">تغییر رمز عبور</h3>
      <form className="form-forgotPassword">
        <label htmlFor="input_email">کد تایید</label>
        <Input
          className="input_style"
          type="text"
          required
          // value={code}
          // onChange={(e) => setCode(e.target.value)}
          disableUnderline={true}
          placeholder="کد تایید را وارد کنید"
        />

        <label htmlFor="input_email">نام کاربری</label>
        <Input
          className="input_style"
          type="text"
          required
          // value={userName}
          // onChange={(e) => setUserName(e.target.value)}
          disableUnderline={true}
          placeholder="ایمیل یا شماره تلفن خود را وارد کنید"
        />

        <label htmlFor="input_email" className="resetPassLabel">
          <p style={{ margin: "0" }}>رمز عبور جدید</p>
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
          placeholder=" رمز عبور جدید را وارد کنید"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
              // onClick={() => changeHandler((prevState) => !prevState)}
              >
                <Switch color="secondary" />
              </IconButton>
            </InputAdornment>
          }
        />

        <label htmlFor="input_email" className="resetPassLabel">
          <p style={{ margin: "0" }}> تکرار رمز عبور جدید</p>
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
          placeholder=" تکرار رمز عبور جدید را وارد کنید "
          endAdornment={
            <InputAdornment position="end">
              <IconButton
              // onClick={() => changeHandler((prevState) => !prevState)}
              >
                <Switch color="secondary" />
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
          ثبت رمز عبور جدید
        </Button>
        <div
          className="link-signIn"
          // onClick={() => backwardHandler()}
        >
          <span style={{ fontSize: ".95rem" }}> بازگشت</span>
        </div>
      </form>
    </>
  );
};
export default ResetPassword;
