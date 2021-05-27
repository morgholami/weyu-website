export default function ({ app }) {
    app.router.beforeEach((to, from, next) => {
        if (from.query.ref && !to.query.ref) {
            to.query.ref = from.query.ref
            next({name: to.name, query: to.query});
        } else {
            next();
        }
    });
}