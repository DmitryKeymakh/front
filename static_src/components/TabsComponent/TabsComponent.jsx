import 'react-tabs/style/react-tabs.css';
import './_tabs-component.scss'
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default class TabsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabsData:[
                {
                    title: "",
                    tabPanel: {
                        text: "",
                        picture: ""
                    }
                }
            ]
        };
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(result => {this.setState({tabsData: result})});
    }

    render() {
        const { tabsData } = this.state;

        const titles = tabsData.map((tabs) =>
                            <Tab
                                key={tabs.title}>
                                    {tabs.title}
                            </Tab>
                        );

        const tabsContent = tabsData.map((tabs) =>
                                <TabPanel
                                    key={tabs.title}>
                                        <p>{tabs.tabPanel.text}</p>
                                        <img src={tabs.tabPanel.picture} alt="tabs-picture"/>
                                </TabPanel>
                            );

        return (
            <>
                <Tabs forceRenderTabPanel>
                    <TabList>
                        {titles}
                    </TabList>
                    {tabsContent}
                </Tabs>
            </>
        )
    }
}