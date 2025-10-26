import React from 'react'

type IProps={
    isLoggedIn: boolean;
    defaultProp?: boolean;
};
const ConditionalRendering = (props: IProps) =>{
    const { isLoggedIn, defaultProp ="No Val from Parent"} = props;
    console.log("defaultProp", defaultProp);

    const checkIfUserHasAccount = (hasAccount: boolean)=>{
        if (hasAccount) return <h1>User Can Login</h1>;
        return <h1> User Need to Register</h1>;
    };
    return(
        <div>
            {isLoggedIn? <h1>Yes , Login</h1> : checkIfUserHasAccount(false)}
        </div>
    );
}

export default ConditionalRendering

