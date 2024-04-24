import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject{
    constructor(readonly value: string) {
        super();
    }
}

class ComplexValueObject extends ValueObject{
    constructor(readonly value1: string, readonly value2: number) {
        super();
    }
}

describe('ValueObject Unit Tests', () => {
    test("Should be equals", () => {
        const ValueObject1 = new StringValueObject('test');
        const ValueObject2 = new StringValueObject('test');
        expect(ValueObject1.equals(ValueObject2)).toBe(true);
    })

    test("complex objects should be equals", () => {
        const ValueObject1 = new ComplexValueObject('test', 1);
        const ValueObject2 = new ComplexValueObject('test', 1);
        expect(ValueObject1.equals(ValueObject2)).toBe(true);
    })

    test("Should not be equals", () => {
        const ValueObject1 = new StringValueObject('test1');
        const ValueObject2 = new StringValueObject('test2');
        expect(ValueObject1.equals(ValueObject2)).toBe(false);
        expect(ValueObject1.equals(null as any)).toBe(false);
        expect(ValueObject1.equals(undefined as any)).toBe(false);
    })
});