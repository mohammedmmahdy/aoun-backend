import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AuthController::login_form
* @see app/Http/Controllers/Admin/AuthController.php:11
* @route '/login'
*/
export const login_form = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login_form.url(options),
    method: 'get',
})

login_form.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AuthController::login_form
* @see app/Http/Controllers/Admin/AuthController.php:11
* @route '/login'
*/
login_form.url = (options?: RouteQueryOptions) => {
    return login_form.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AuthController::login_form
* @see app/Http/Controllers/Admin/AuthController.php:11
* @route '/login'
*/
login_form.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login_form.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\AuthController::login_form
* @see app/Http/Controllers/Admin/AuthController.php:11
* @route '/login'
*/
login_form.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login_form.url(options),
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

const AuthController = { login_form, login, logout }

export default AuthController