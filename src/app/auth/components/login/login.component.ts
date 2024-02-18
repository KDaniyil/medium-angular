import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms'
import { RouterLink } from '@angular/router'
import { Store } from '@ngrx/store'
import { combineLatest } from 'rxjs'
import { BackendErrorsComponent } from 'src/app/shared/components/backend-errors/backend-errors.component'
import { authActions } from '../../store/actions'
import {
    selectIsSubmitting,
    selectValidationErrors,
} from '../../store/reducers'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'
import { LoginRequestInterface } from '../../types/loginRequest.interface'

@Component({
    selector: 'mc-login',
    standalone: true,
    imports: [
        RouterLink,
        ReactiveFormsModule,
        CommonModule,
        BackendErrorsComponent,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    form: FormGroup

    // isSubmitting$ = this.store.select(selectIsSubmitting)
    // backendErrors$ = this.store.select(selectValidationErrors)

    data$ = combineLatest({
        isSubmitting: this.store.select(selectIsSubmitting),
        backendErrors: this.store.select(selectValidationErrors),
    })

    constructor(private fb: FormBuilder, private store: Store) {}

    ngOnInit(): void {
        this.initializeForm()
    }

    initializeForm() {
        this.form = this.fb.nonNullable.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        })
    }

    onSubmit() {
        if (this.form.valid) {
            const request: LoginRequestInterface = {
                user: this.form.value,
            }
            this.store.dispatch(authActions.login({ request }))
        }
    }
}
