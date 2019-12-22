import UsersSchema from '../../users/models/schema'

import passport from 'passport'
import passportLocal from 'passport-local'

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

const onError = { status: 401, message: 'Dados de acesso inválidos. Tente novamente.' }

export default ({ field }) => {
  passport.use(
    'local.user',
    new passportLocal.Strategy(
      { field },
      async (value, password, done) => {
        const user = await UsersSchema
          .findOne({ [field]: value, status: 'active' })
        if (!user) return done(onError, false)
        if (!user.comparePassword(password)) return done(onError, false)
        return done(null, user)
      }
    )
  )
}
