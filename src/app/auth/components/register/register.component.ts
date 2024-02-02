import { Component, OnInit } from '@angular/core'
import {
    FormBuilder,
    FormGroup,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms'
import { Store } from '@ngrx/store'
import { registerActon } from '../../store/actions/register.action'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule],
})
export class RegisterComponent implements OnInit {
    form: FormGroup

    constructor(private fb: FormBuilder, private store: Store) {}

    ngOnInit(): void {
        this.initializeForm()
    }

    initializeForm() {
        this.form = this.fb.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
        })
    }

    onSubmit() {
        this.store.dispatch(registerActon(this.form.value))
    }
}
