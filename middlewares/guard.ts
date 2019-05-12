
const guardedRoutes = [
  '/',
  '/admin',
  '/home',
];

/**
 * This middleware is for the purpose of guarding the routes
 * that require authentication/authorization
 * @param req
 * @param res
 * @param next
 */
export const nextGuard = (req, res, next) => {
  // console.log("Guard Middleware running")
  // console.log(`Request URL: ${req.url}`)
  if (guardedRoutes.indexOf(req.url) >= 0) {
    // console.log(`Requested URL requires Guarding`)
    if (req.session.user) {
      // console.log(`Session has User Object`)
      // console.log(req.session.user)
      next()
    } else {
      res.redirect('/login')
    }
  } else {
    next()
  }
}
