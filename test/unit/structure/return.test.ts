/**
 * @author WMXPY
 * @namespace Pattern_Structure
 * @description Return
 * @override Unit Test
 */

import { Pattern, validatePatternSchema } from "@sudoo/pattern";
import { expect } from "chai";
import * as Chance from "chance";
import { createSudoRPCReturnPattern } from "../../../src";

describe('Given [Return] helper functions', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('pattern-structure-return');

    it('should be able to create pattern object', (): void => {

        const pattern: Pattern = createSudoRPCReturnPattern();
        const validation: boolean = validatePatternSchema(pattern);

        expect(validation).to.be.true;
    });
});
