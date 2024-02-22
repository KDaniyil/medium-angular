import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'mc-feed',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './feed.component.html',
    styleUrl: './feed.component.scss',
})
export class FeedComponent {
    constructor() {}
}
