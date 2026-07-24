import AuthController from './AuthController'
import DashboardController from './DashboardController'
import ProfileController from './ProfileController'
import UserController from './UserController'
import ProviderController from './ProviderController'
import ServiceCategoryController from './ServiceCategoryController'
import ServiceController from './ServiceController'

const Admin = {
    AuthController: Object.assign(AuthController, AuthController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    UserController: Object.assign(UserController, UserController),
    ProviderController: Object.assign(ProviderController, ProviderController),
    ServiceCategoryController: Object.assign(ServiceCategoryController, ServiceCategoryController),
    ServiceController: Object.assign(ServiceController, ServiceController),
}

export default Admin