import { Routes } from '@angular/router';
import { MonstersListComponent } from './pages/monsters-list/monsters-list.component';
import { MonsterComponent } from './pages/monster/monster.component';
import { NotFindComponent } from './pages/not-find/not-find.component';

// export const routes: Routes = [{
//         path:'', 
//         redirectTo: 'home',pathMatch: 'full'
// },{
//         path: "home",
//         component:MonstersListComponent
// },{
//         path: "monster", 
//         component: MonsterComponent
// },{
//         path:'monster/:id',
//         component: MonsterComponent
// },{
//         path:'**',
//         component: NotFindComponent
// }];
//regrouper toutes les routes du compsant Monster dans un seul bloc
export const routes: Routes = [{
        path:'', 
        redirectTo: 'home',pathMatch: 'full'},
        {
        path: "home",component:MonstersListComponent},
        {
        path: "monster", 
        children: [
            {path:'',component: MonsterComponent},
            {path:':id',component: MonsterComponent}
        ]},
        {
        path:'**',component: NotFindComponent}
    ];
