/**
 * @author WMXPY
 * @namespace Pattern_Structure
 * @description Call
 */

import { createAnyPattern, createExactPattern, createMapPattern, createStringPattern, Pattern } from "@sudoo/pattern";

export const createSudoRPCCallPattern = (): Pattern => {

    return createMapPattern({

        version: createExactPattern("1.0"),

        resource: createStringPattern(),
        identifier: createStringPattern(),

        metadata: createAnyPattern(),
        payload: createAnyPattern(),
    });
};
