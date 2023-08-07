


import { expect } from "chai";
import { UserService } from "../src/modules/user/user.service";

describe("User Tests", () => {
    it("should get user", () => {
        const result = new UserService().getUser();
        expect(result).to.be.equal('Sunil Patel');
    });
});