
/**
 * IUser
 */
export interface IUser {
  firstName: string,
  lastName: string,
  password: string,
  email: string
}

/**
 * ValidationResult
 */
export interface ValidationResult {
  valid: boolean,
  details: Array<{
    fieldName: string,
    messages: string[],
  }>
}

/**
 * ApiResponse
 */
export type ApiResponse = ApiSuccessResponse | ApiValidationFailedResponse | ApiInternalServerErrorResponse

/**
 * ApiSuccessResponse
 */
export interface ApiSuccessResponse {
  code: 200,
  status: 'success',
  message: string
}

/**
 * ApiValidationFailedResponse
 */
export interface ApiValidationFailedResponse {
  code: 422,
  status: 'failure',
  validation: ValidationResult
}

/**
 * ApiInternalServerErrorResponse
 */
export interface ApiInternalServerErrorResponse {
  code: 500,
  status: 'failure',
  message: string
}
