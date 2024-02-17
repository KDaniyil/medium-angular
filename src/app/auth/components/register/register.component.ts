import { Component, OnInit } from '@angular/core'
import {
    FormBuilder,
    FormGroup,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms'
import { Store } from '@ngrx/store'
import { RouterLink } from '@angular/router'
import { registerAction } from '../../store/actions'
import { selectIsSubmitting } from '../../store/reducers'
import { AuthStateInterface } from '../../types/authState.interface'
import { CommonModule } from '@angular/common'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule, CommonModule],
})
export class RegisterComponent implements OnInit {
    form: FormGroup

    isSubmitting$ = this.store.select(selectIsSubmitting)

    constructor(
        private fb: FormBuilder,
        private store: Store<{ auth: AuthStateInterface }>
    ) {}

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
            this.store.dispatch(registerAction({ request }))
        }
    }
}
