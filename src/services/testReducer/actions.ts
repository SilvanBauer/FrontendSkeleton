import { IAction } from "..";
import { ITestModel } from ".";

export const TestModel_LOAD = "TestModel_LOAD";
export const loadTestModel = (testModel: ITestModel) => ({ type: TestModel_LOAD, params: { testModel } } as IAction);
