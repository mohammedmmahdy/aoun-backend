import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
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

const admin = {
    loginForm: Object.assign(loginForm, loginForm),
    login: Object.assign(login, login),
    dashboard: Object.assign(dashboard, dashboard),
}

export default admin