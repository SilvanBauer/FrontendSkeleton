import { connect } from "react-redux";
import { IDispatchProps } from "./IDispatchProps";

const mapDispatchToProps = (dispatch: any): IDispatchProps => {
    return {
        dispatch
    };
}

export const connectComponent = (mapStateToProps: (store: any) => any, component: any): any =>
    connect(mapStateToProps, mapDispatchToProps)(component);
