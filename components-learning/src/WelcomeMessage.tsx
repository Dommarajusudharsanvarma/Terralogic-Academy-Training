function WelcomeMessage(props: any){
    const isLoggenIn = props.isLoggedIn;
    if(isLoggenIn){
        return<h1>Welcome back!</h1>;
    }
    return<h1>Please log in.</h1>;
}
export default WelcomeMessage