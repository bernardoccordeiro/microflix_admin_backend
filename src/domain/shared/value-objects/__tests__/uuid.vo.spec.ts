import { InvalidUuidError, Uuid } from "../uuid.vo"

describe("Uuid Unit Tests", () => {
    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');

    test('should throw error when uuid is invalid', () => {
        expect(() => {
            new Uuid("invalid-uuid");
        }).toThrow(new InvalidUuidError())
        expect(validateSpy).toHaveBeenCalledTimes(1);
    })

    test('should create a valid uuid', () => {
        const uuid = new Uuid();
        expect(uuid.id).toBeDefined();
        expect(validateSpy).toHaveBeenCalledTimes(1);
    })

    test('should accept a valid uuid', () => {
        const uuid = new Uuid('c3e9b0d1-7cf8-3b5d-99ae-3f7692bc83fd');
        expect(uuid.id).toBe('c3e9b0d1-7cf8-3b5d-99ae-3f7692bc83fd');
        expect(validateSpy).toHaveBeenCalledTimes(1);
    })
})