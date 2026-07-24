import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::index
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:21
* @route '/service-categories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/service-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::index
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:21
* @route '/service-categories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::index
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:21
* @route '/service-categories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::index
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:21
* @route '/service-categories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::create
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:34
* @route '/service-categories/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/service-categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::create
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:34
* @route '/service-categories/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::create
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:34
* @route '/service-categories/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::create
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:34
* @route '/service-categories/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::store
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:39
* @route '/service-categories'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/service-categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::store
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:39
* @route '/service-categories'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::store
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:39
* @route '/service-categories'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::show
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:48
* @route '/service-categories/{service_category}'
*/
export const show = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/service-categories/{service_category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::show
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:48
* @route '/service-categories/{service_category}'
*/
show.url = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service_category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { service_category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            service_category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        service_category: typeof args.service_category === 'object'
        ? args.service_category.id
        : args.service_category,
    }

    return show.definition.url
            .replace('{service_category}', parsedArgs.service_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::show
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:48
* @route '/service-categories/{service_category}'
*/
show.get = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::show
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:48
* @route '/service-categories/{service_category}'
*/
show.head = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::edit
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:55
* @route '/service-categories/{service_category}/edit'
*/
export const edit = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/service-categories/{service_category}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::edit
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:55
* @route '/service-categories/{service_category}/edit'
*/
edit.url = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service_category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { service_category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            service_category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        service_category: typeof args.service_category === 'object'
        ? args.service_category.id
        : args.service_category,
    }

    return edit.definition.url
            .replace('{service_category}', parsedArgs.service_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::edit
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:55
* @route '/service-categories/{service_category}/edit'
*/
edit.get = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::edit
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:55
* @route '/service-categories/{service_category}/edit'
*/
edit.head = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::update
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:62
* @route '/service-categories/{service_category}'
*/
export const update = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/service-categories/{service_category}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::update
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:62
* @route '/service-categories/{service_category}'
*/
update.url = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service_category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { service_category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            service_category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        service_category: typeof args.service_category === 'object'
        ? args.service_category.id
        : args.service_category,
    }

    return update.definition.url
            .replace('{service_category}', parsedArgs.service_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::update
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:62
* @route '/service-categories/{service_category}'
*/
update.put = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::update
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:62
* @route '/service-categories/{service_category}'
*/
update.patch = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::destroy
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:71
* @route '/service-categories/{service_category}'
*/
export const destroy = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/service-categories/{service_category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::destroy
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:71
* @route '/service-categories/{service_category}'
*/
destroy.url = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service_category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { service_category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            service_category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        service_category: typeof args.service_category === 'object'
        ? args.service_category.id
        : args.service_category,
    }

    return destroy.definition.url
            .replace('{service_category}', parsedArgs.service_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceCategoryController::destroy
* @see app/Http/Controllers/Admin/ServiceCategoryController.php:71
* @route '/service-categories/{service_category}'
*/
destroy.delete = (args: { service_category: number | { id: number } } | [service_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const ServiceCategoryController = { index, create, store, show, edit, update, destroy }

export default ServiceCategoryController