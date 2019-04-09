import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { TodayComponent } from './today/today.component';
import { SharedModule } from '../shared/shared.module';
import { ChallengeActionsComponent } from './challenge-actions/challenge-actions.component';

@NgModule({
    declarations: [
        ChallengeEditComponent,
        ChallengeTabsComponent,
        CurrentChallengeComponent,
        TodayComponent,
        ChallengeActionsComponent
    ],
    imports: [
        NativeScriptCommonModule,
        ChallengesRoutingModule,
        SharedModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengesModule {}
