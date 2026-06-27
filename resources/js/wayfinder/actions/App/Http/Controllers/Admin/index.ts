import AuthController from './AuthController'
import DashboardController from './DashboardController'
import UserController from './UserController'

const Admin = {
    AuthController: Object.assign(AuthController, AuthController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    UserController: Object.assign(UserController, UserController),
}

export default Admin