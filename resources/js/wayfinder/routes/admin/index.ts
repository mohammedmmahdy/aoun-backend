import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import profile from './profile'
/**
* @see \App\Http\Controllers\Admin\AuthController::loginForm
* @see app/Http/Controllers/Admin/AuthController.php:11
* @route '/login'
*/
export const loginForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loginForm.url(options),
    method: 'get',
})

loginForm.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AuthController::loginForm
* @see app/Http/Controllers/Admin/AuthController.php:11
* @route '/login'
*/
loginForm.url = (options?: RouteQueryOptions) => {
    return loginForm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AuthController::loginForm
* @see app/Http/Controllers/Admin/AuthController.php:11
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loginForm.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\AuthController::loginForm
* @see app/Http/Controllers/Admin/AuthController.php:11
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: loginForm.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\AuthController::login
* @see app/Http/Controllers/Admin/AuthController.php:15
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AuthController::login
* @see app/Http/Controllers/Admin/AuthController.php:15
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AuthController::login
* @see app/Http/Controllers/Admin/AuthController.php:15
* @route '/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\AuthController::logout
* @see app/Http/Controllers/Admin/AuthController.php:31
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AuthController::logout
* @see app/Http/Controllers/Admin/AuthController.php:31
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AuthController::logout
* @see app/Http/Controllers/Admin/AuthController.php:31
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:10
* @route '/'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:10
* @route '/'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:10
* @route '/'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:10
* @route '/'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:10
* @route '/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:10
* @route '/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:10
* @route '/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
* @see app/Http/Controllers/Admin/DashboardController.php:10
* @route '/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ProfileController::settings
* @see app/Http/Controllers/Admin/ProfileController.php:27
* @route '/settings'
*/
export const settings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProfileController::settings
* @see app/Http/Controllers/Admin/ProfileController.php:27
* @route '/settings'
*/
settings.url = (options?: RouteQueryOptions) => {
    return settings.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProfileController::settings
* @see app/Http/Controllers/Admin/ProfileController.php:27
* @route '/settings'
*/
settings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ProfileController::settings
* @see app/Http/Controllers/Admin/ProfileController.php:27
* @route '/settings'
*/
settings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(options),
    method: 'head',
})

const admin = {
    loginForm: Object.assign(loginForm, loginForm),
    login: Object.assign(login, login),
    logout: Object.assign(logout, logout),
    dashboard: Object.assign(dashboard, dashboard),
    profile: Object.assign(profile, profile),
    settings: Object.assign(settings, settings),
}

export default admin