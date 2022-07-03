/**
 * @author WMXPY
 * @namespace Pattern_Structure
 * @description Return
 */

import { createAnyPattern, createExactPattern, createListPattern, createMapPattern, createOrPattern, createStringPattern, Pattern } from "@sudoo/pattern";

export const createSudoRPCReturnPattern = (): Pattern => {

    return createOrPattern([

        createMapPattern({

            version: createExactPattern("1.0"),
            identifier: createStringPattern(),

            success: createExactPattern(true),

            result: createAnyPattern(),
        }),
        createMapPattern({

            version: createExactPattern("1.0"),
            identifier: createStringPattern(),

            success: createExactPattern(false),

            errors: createListPattern(
                createOrPattern([

                    createMapPattern({

                        isInternalError: createExactPattern(true),

                        error: createStringPattern(),
                        message: createStringPattern(),
                    }),
                    createMapPattern({

                        isInternalError: createExactPattern(false),

                        return: createAnyPattern(),

                        error: createStringPattern(),
                        message: createStringPattern(),
                    }),
                ]),
            ),
        }),
    ]);
};
