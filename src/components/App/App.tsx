import * as React from "react";
import { ITestModel, IDispatchProps, loadTestModel, connectComponent, TestModel } from "../../services";

import "./App.scss";

interface IAppStateProps {
    testModel: TestModel;
}
type IAppProps = IAppStateProps & IDispatchProps;

export class App extends React.Component<IAppProps> {
    constructor(props, context) {
        super(props, context);
    }

    public componentDidMount() {
        const { dispatch } = this.props;

        dispatch(loadTestModel({ name: "Test", number: 10 } as ITestModel));
    }

    public render() {
        return (
            <div>
                <h1>Welcome to</h1>
                <div style={{ paddingLeft: 30 }}>
                    <h2>React!!!</h2>
                    <h2>Redux!!!</h2>
                    <h2>Typescript!!!</h2>
                    <h2>Immutable!!!</h2>
                    <h2>Sass!!!</h2>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (store: any): IAppStateProps => {
    return {
        testModel: store.testModel
    };
}
export const $App = connectComponent(mapStateToProps, App);
