import type { Response } from "express";

export function createSuccessResponse(
  res: Response,
  code: number = 200,
  data: any = {}
) {
  res.status(code).json({status: 'success', data})
}

export function createErrorResponse(
  res: Response,
  code: number = 400,
  message: string = "",
  error: any = {}
) {
  res.status(code).json({status: 'fail', message, error})
}

export function createFailureResponse(
  res: Response,
  code: number = 500,
  message: string = "",
  error: any = {}
) {
  res.status(code).json({status: 'fail', message, error})
}
