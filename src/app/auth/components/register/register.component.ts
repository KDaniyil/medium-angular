import { Component, OnInit } from '@angular/core'
import {
    FormBuilder,
    FormGroup,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms'
import { Store } from '@ngrx/store'
import { RouterLink } from '@angular/router'
import {
    selectIsSubmitting,
    selectValidationErrors,
} from '../../store/reducers'
import { CommonModule } from '@angular/common'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'
import { authActions } from '../../store/actions'
import { combineLatest } from 'rxjs'
import { BackendErrorsComponent } from 'src/app/shared/components/backend-errors/backend-errors.component'

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    standalone: true,
    imports: [
        RouterLink,
        ReactiveFormsModule,
        CommonModule,
        BackendErrorsComponent,
    ],
})
export class RegisterComponent implements OnInit {
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
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        })
    }

    onSubmit() {
        if (this.form.valid) {
            const request: RegisterRequestInterface = {
                user: this.form.value,
            }
            this.store.dispatch(authActions.register({ request }))
        }
    }
}
