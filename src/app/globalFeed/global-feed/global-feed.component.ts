import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FeedComponent } from 'src/app/shared/components/feed/feed.component'

@Component({
    selector: 'mc-global-feed',
    standalone: true,
    imports: [CommonModule, FeedComponent],
    templateUrl: './global-feed.component.html',
    styleUrl: './global-feed.component.scss',
})
export class GlobalFeedComponent {}
