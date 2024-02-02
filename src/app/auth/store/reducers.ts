import { Action, createReducer, on } from '@ngrx/store'
import { AuthStateInterface } from '../types/authState.interface'
import { registerActon } from './actions/register.action'

const initialState: AuthStateInterface = {
    isSubmiting: false,
}

const authReducer = createReducer(
    initialState,
    on(registerActon, (state: AuthStateInterface) => ({
        ...state,
        isSubmiting: true,
    }))
)

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action)
}
