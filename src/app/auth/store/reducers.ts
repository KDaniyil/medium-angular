import { createFeature, createReducer, on } from '@ngrx/store'
import { AuthStateInterface } from '../types/authState.interface'
import { authActions } from './actions'
import { routerNavigationAction } from '@ngrx/router-store'

const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoading: false,
    currentUser: undefined,
    validationErrors: null,
}

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(authActions.register, (state: AuthStateInterface) => ({
            ...state,
            isSubmitting: true,
            validationErrors: null,
        })),
        on(
            authActions.registerSuccess,
            (state: AuthStateInterface, action) => ({
                ...state,
                isSubmitting: false,
                currentUser: action.currentUser,
            })
        ),
        on(
            authActions.registerFailure,
            (state: AuthStateInterface, actions) => ({
                ...state,
                isSubmitting: false,
                validationErrors: actions.errors,
            })
        ),
        on(authActions.login, (state: AuthStateInterface) => ({
            ...state,
            isSubmitting: true,
            validationErrors: null,
        })),
        on(authActions.loginSuccess, (state: AuthStateInterface, action) => ({
            ...state,
            isSubmitting: false,
            currentUser: action.currentUser,
        })),
        on(authActions.loginFailure, (state: AuthStateInterface, actions) => ({
            ...state,
            isSubmitting: false,
            validationErrors: actions.errors,
        })),
        on(routerNavigationAction, (state) => ({
            ...state,
            validationErrors: null,
        }))
    ),
})

export const {
    name: authFeatureKey,
    reducer: authReducer,
    selectIsSubmitting,
    selectIsLoading,
    selectCurrentUser,
    selectValidationErrors,
} = authFeature
