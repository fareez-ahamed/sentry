import { ApiInternalServerErrorResponse,
         ApiSuccessResponse,
         ApiValidationFailedResponse,
         ValidationResult } from '../common/interfaces/api';

export function success(message: string): ApiSuccessResponse {
  return {
    code: 200,
    message,
    status: 'success',
  }
}

export function error(message: string): ApiInternalServerErrorResponse {
  return {
    code: 500,
    message,
    status: 'failure',
  }
}

export function validationError(result: ValidationResult): ApiValidationFailedResponse {
  return {
    code: 422,
    status: 'failure',
    validation: result,
  }
}
