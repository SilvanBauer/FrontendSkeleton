import { Record } from "immutable";

export interface ITestModel {
    name: string;
    number: number;
}

export const TestModelRecord = Record({
    name: undefined,
    number: undefined
});

export class TestModel extends TestModelRecord {
    public name: string;
    public number: number;
}
