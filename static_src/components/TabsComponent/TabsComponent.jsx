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

        const titles = tabsData.map((tab) =>
                            <Tab
                                key={tab.title}>
                                    {tab.title}
                            </Tab>
                        );

        const tabsContent = tabsData.map((tabContent) =>
                                <TabPanel
                                    key={tabContent.title}>
                                        <p className="tab-panel-text">{tabContent.tabPanel.text}</p>
                                        <img
                                            className={tabContent.tabPanel.picture ? ('tab-panel-image') : ('tab-panel-image tab-image-disable')}
                                            src={tabContent.tabPanel.picture}
                                            alt="tabs-picture"
                                        />
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