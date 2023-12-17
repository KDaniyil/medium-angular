import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'

export const registerActon = createAction(
    ActionTypes.REGISTER,
    props<{ username: string; email: string; password: string }>()
)