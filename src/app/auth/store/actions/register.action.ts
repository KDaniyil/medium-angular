import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'

export const registerActon = createAction(
    ActionTypes.REGISTER,
    props<RegisterRequestInterface>()
)
