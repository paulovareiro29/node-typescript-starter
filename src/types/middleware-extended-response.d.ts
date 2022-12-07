declare namespace Express {
  export interface Response {
    success(data?: any, code?: number, message?: string);
    error(errors?: any, code?: number, message?: string);
    badrequest(errors?: any, message?: string);
    unauthorized(errors?: any, message?: string);
    forbidden(errors?: any, message?: string);
    internal(errors?: any, message?: string);
  }
}
