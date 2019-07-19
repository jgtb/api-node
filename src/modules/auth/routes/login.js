import LocalPassport from '../helpers/localPassport'

import { generateToken } from '../../../support/token'

import passport from 'passport'

export default async (req, res, next) => {
  LocalPassport({ usernameField: 'login' })
  passport.authenticate('local.user', (err, user) => {
    if (err || !user) return res.status(401).json(err)
    req.logIn(user, err, async () => {
      if (err) return res.status(401).json(err)
      const token = await generateToken({ id: user._id })
      res.status(200).json({ token })
      next()
    })
  })(req, res, next)
}
