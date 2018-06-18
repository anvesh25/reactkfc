import * as React from 'react';

// Changed react component to react.SFC
// class About extends React.Component{
    const About: React.SFC<{}> =() =>
    {
        // public render(){
            return (
                <div>
                    About Page
                </div>
            )
        // }
    }

export default About;