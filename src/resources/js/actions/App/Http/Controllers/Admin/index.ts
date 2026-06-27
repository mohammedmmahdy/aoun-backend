import AuthController from './AuthController'
import DashboardController from './DashboardController'
import ProfileController from './ProfileController'
import UserController from './UserController'

const Admin = {
    AuthController: Object.assign(AuthController, AuthController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    UserController: Object.assign(UserController, UserController),
}

export default Admin