import React from 'react'
import { IUserProps } from './types/IUserProps'

export const User = (d: IUserProps) => {
  return (
    <div>
      {d.index} {d.user.title}
    </div>
  )
}
