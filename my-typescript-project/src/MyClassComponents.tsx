import React, {Component} from 'react';
import First from './First';
import Second from './Second';
class MyClassComponents extends React.Component{
    render(){
        return(
            <>
            <First />
            <Second />

            </>
        )
    }
}
export default MyClassComponents;