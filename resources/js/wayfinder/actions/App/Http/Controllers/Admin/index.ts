import AuthController from './AuthController'
import DashboardController from './DashboardController'
import UserController from './UserController'
import ProviderController from './ProviderController'

const Admin = {
    AuthController: Object.assign(AuthController, AuthController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    UserController: Object.assign(UserController, UserController),
    ProviderController: Object.assign(ProviderController, ProviderController),
}

export default Admin
