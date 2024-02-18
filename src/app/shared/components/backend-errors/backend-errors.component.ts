import { Component, Input, OnInit } from '@angular/core'
import { BackendErrorsInterface } from '../../types/backendErrors.interface'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'mc-backend-errors',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './backend-errors.component.html',
    styleUrl: './backend-errors.component.scss',
})
export class BackendErrorsComponent implements OnInit {
    @Input() backendErrors: BackendErrorsInterface = {}

    errorMessages: string[] = []

    ngOnInit(): void {
        this.errorMessages = Object.keys(this.backendErrors).map((name) => {
            const messages = this.backendErrors[name].join(' ')
            return `${name} ${messages}`
        })
    }
}
