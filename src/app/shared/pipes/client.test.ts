import { PhonePipe } from "./client";

describe("PhonePipe", () => {
    const pipe = new PhonePipe();

    it("56912345678 => 5691 234 5678", () => {
        expect(pipe.transform("56912345678")).toBe("5691 234 5678");
    });
});
