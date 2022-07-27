import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid container>
      <h1>Home</h1>
      {/* <div className={classes.navBtn}>
        {Cookies.getJSON("login") ? (
          <button className={`${classes.btnAccount} ${classes.btn}`}>
            <img src={account} alt="account-svg" />
            <Link to={{ pathname: "/dashboard", data: false }}>
              حساب کاربری
            </Link>
          </button>
        ) : (
          <>
            <button className={`${classes.btnSignIn} ${classes.btn}`}>
              <Link to={{ pathname: "/login", data: true }}> ورود</Link>
            </button>
            <button className={`${classes.btnSignUp} ${classes.btn}`}>
              <Link to={{ pathname: "/signUp", data: false }}> ثبت نام</Link>
            </button>
          </>
        )}
      </div> */}
    </Grid>
  );
};
export default Home;
