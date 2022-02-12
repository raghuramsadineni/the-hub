import { RouteComponentProps } from "react-router-dom";

export interface ISplitPaneData {
    name: string;
    ios: string;
    md: string;
    value: string;
}

export interface ISplitPaneProps extends RouteComponentProps {
    data: ISplitPaneData[];
}