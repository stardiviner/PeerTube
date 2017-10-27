import { Routes } from '@angular/router'

import { UserRightGuard } from '../../core'
import { UserRight } from '../../../../../shared'
import { UsersComponent } from './users.component'
import { UserAddComponent, UserUpdateComponent } from './user-edit'
import { UserListComponent } from './user-list'

export const UsersRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [ UserRightGuard ],
    data: {
      userRight: UserRight.MANAGE_USERS
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: UserListComponent,
        data: {
          meta: {
            title: 'Users list'
          }
        }
      },
      {
        path: 'add',
        component: UserAddComponent,
        data: {
          meta: {
            title: 'Add a user'
          }
        }
      },
      {
        path: ':id/update',
        component: UserUpdateComponent,
        data: {
          meta: {
            title: 'Update a user'
          }
        }
      }
    ]
  }
]
