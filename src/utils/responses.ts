/**
 * @openapi
 * components:
 *   noContent:
 *     description: Successful request
 */
export const NO_CONTENT = { code: 204 }

/**
 * @openapi
 * components:
 *   notFound:
 *     description: Not found
 *     content:
 *       application/json:
 *         schema:
 *           example:
 *             code: 404
 *             message: Not found.
 */
export const NOT_FOUND = { code: 404, message: 'Not found.' }

/**
 * @openapi
 * components:
 *   internalServerError:
 *     description: Internal server error
 *     content:
 *       application/json:
 *         schema:
 *           example:
 *             code: 500
 *             message: Internal server error.
 */
export const INTERNAL_SERVER_ERROR = { code: 500, message: 'Internal server error.' }
