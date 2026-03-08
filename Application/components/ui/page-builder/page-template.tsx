import React from "react";

export default class PageTemplate {
    private metaData: {
        title: string;
        description: string
    };
    constructor() {
        this.metaData = {
            title: "ODN | Home",
            description: "ODN Discord Integration Sample App"
        };
    }
    getMetaData() {
        return this.metaData;
    }
    render() {
        return (<>
            <title>{this.metaData.title}</title>
            <meta name="description" content={this.metaData.description} />
        </>)
    }


    setMetaData(title: string, description: string) {
        this.metaData = {
            title,
            description
        };
    }
}