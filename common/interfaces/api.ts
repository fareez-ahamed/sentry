
export interface IUser {
  firstName: string,
  lastName: string,
  password: string,
  email: string
}

export interface ValidationResult {
  valid: boolean,
  details: Array<{
    fieldName: string,
    messages: string[],
  }>
}

type ApiResponseStatus = 'success' | 'failure'

export class ApiResponse {
  public message ?: string
  public status: ApiResponseStatus
  public validation?: ValidationResult

  constructor(message: string, status?: ApiResponseStatus, validationResult?: ValidationResult) {
    this.message = message
    this.status = status ? status : 'success'
    this.validation = validationResult
  }
}
