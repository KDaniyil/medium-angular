import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { combineLatest } from 'rxjs'
import { selectCurrentUser } from 'src/app/auth/store/reducers'

@Component({
    selector: 'mc-topbar',
    standalone: true,
    imports: [],
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
    //currentUser$ = this.store.select(selectCurrentUser)
    data$ = combineLatest({ currentUser: this.store.select(selectCurrentUser) })
    constructor(private store: Store) {}
}
