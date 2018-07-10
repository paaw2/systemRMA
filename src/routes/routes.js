import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import TableList2 from 'src/components/Dashboard/Views/TableList2.vue'
import Wizard from 'src/components/Dashboard/Views/Wizard.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import UserProfile2 from 'src/components/Dashboard/Views/NewUserForm.vue'
import RegularForms from 'src/components/Dashboard/Views/RegularForms.vue'
import ExtendedForms from 'src/components/Dashboard/Views/ExtendedForms.vue'
import ValidationForms from 'src/components/Dashboard/Views/ValidationForms.vue'




const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'table-list2',
        name: 'Table List2',
        component: TableList2
      },
      {
        path: 'wizard',
        name: 'Wizard',
        component: Wizard
      },
     
      {
        path: 'regular',
        name: 'Regular Forms',
        component: RegularForms
      },
      {
        path: 'extended',
        name: 'Extended Forms',
        component: ExtendedForms
      },
      {
        path: 'validation',
        name: 'Validation Forms',
        component: ValidationForms
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
