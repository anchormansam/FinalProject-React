function handleClick() {
  axios
    .post("http://127.0.0.1:8000/api/login", this.state.credentials)
    .then(res => {
      const d = res.data.data;

      this.setState({
        token: d.token,
        user: d.user,
        profile: d.user_profile
      });

      localStorage.setItem("token", JSON.stringify(this.state.token));
      localStorage.setItem("user", JSON.stringify(this.state.user));
      localStorage.setItem("profile", JSON.stringify(this.state.profile));
      this.props.setToken(d.token);
    });
}

function setup(event) {
  handleClick();
  event.preventDefault();
}
