import { Types } from 'mongoose'

import { REQUIRED } from '../../../support/validations/messages'

export default {
  name: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true
  },
  start: {
    type: Date,
    required: [true, REQUIRED]
  },
  end: {
    type: Date,
    required: [true, REQUIRED]
  },
  rounds: [
    {
      name: String,
      games: [
        {
          home: {
            type: Types.ObjectId,
            ref: 'teams',
            index: true
          },
          away: {
            type: Types.ObjectId,
            ref: 'teams',
            index: true
          },
          winner: {
            type: Types.ObjectId,
            ref: 'teams',
            index: true
          },
          schedule: Date,
          status: {
            type: String,
            enum: [ 'pending', 'started', 'finished' ],
            default: 'pending'
          }
        }
      ],
      date: Date,
      status: {
        type: String,
        enum: [ 'pending', 'started', 'finished' ],
        default: 'pending'
      }
    }
  ],
  status: {
    type: String,
    enum: [ 'pending', 'started', 'finished' ],
    default: 'pending'
  }
}
