import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ResultCanDeactivateService } from '../auth/result-can-deactivate.service';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'form', pathMatch: 'prefix' },
            // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'form', loadChildren: './form/form.module#FormModule' },
            // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            // { path: 'result', loadChildren: './result/result.module#ResultModule' },
            // { path: 'aboutus', loadChildren: './about-us/about-us.module#AboutUsModule' },
            // { path: 'contactus', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
            {   path: 'result'
                , loadChildren: './result/result.module#ResultModule'
                // , canDeactivate: [ResultCanDeactivateService]
                 },
            { path: 'result/:id'
            , loadChildren: './result/result.module#ResultModule'
            // , canDeactivate: [ResultCanDeactivateService] 
            }
            // ,{ path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
