import { ITestModel, TestModel_LOAD, TestModel } from ".";
import { IAction } from "..";

const initialState = null;

export function testReducer(sliceState: TestModel = initialState, action: IAction): TestModel {
    const params = action.params;

    switch (action.type) {
        case TestModel_LOAD:
            return buildTestModel(params.testModel)
        default:
            return sliceState;
    }
}

const buildTestModel = (testModel: ITestModel): TestModel => {
    return new TestModel(testModel);
};
