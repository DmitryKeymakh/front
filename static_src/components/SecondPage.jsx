import React from 'react';
// import TestForm from './Forms/TestForm';
import TabsComponent from './TabsComponent/TabsComponent';


export default class SecondPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                {/*<TestForm />*/}
                <TabsComponent url='https://raw.githubusercontent.com/DmitryKeymakh/front/test/api/tabs.json' />
            </>
        )
    }
}