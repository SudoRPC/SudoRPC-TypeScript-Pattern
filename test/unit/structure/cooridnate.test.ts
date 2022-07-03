/**
 * @author WMXPY
 * @namespace Pattern_Structure
 * @description Call
 * @override Unit Test
 */

import { Pattern, validatePatternSchema } from "@sudoo/pattern";
import { expect } from "chai";
import * as Chance from "chance";
import { createSudoRPCCallPattern } from "../../../src";

describe('Given [Call] helper functions', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('pattern-geometry-coordinate');

    it('should be able to create pattern object', (): void => {

        const pattern: Pattern = createSudoRPCCallPattern();
        const validation: boolean = validatePatternSchema(pattern);

        expect(validation).to.be.true;
    });
});
