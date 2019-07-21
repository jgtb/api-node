import LocalPassport from '../helpers/localPassport'

import { generateToken } from '../../../support/token'

import passport from 'passport'

const onError = (err, res, next) => {
  res.status(401).json(err)
  next()
}

export default async (req, res, next) => {
  LocalPassport({ usernameField: 'email' })
  passport.authenticate('local.user', (err, user) => {
    if (err || !user) onError(err, res, next)
    req.logIn(user, err, async () => {
      if (err) onError(err, res, next)
      const token = await generateToken({ id: user._id })
      res.status(200).json({ token })
      next()
    })
  })(req, res, next)
}
