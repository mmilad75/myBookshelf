import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface Reducer {
  user: FirebaseAuthTypes.User | null,
  error: any
}

interface ActionSetUser {
  type: string,
  payload: FirebaseAuthTypes.User | null
}

export interface ActionLogOut {
  type: string
}

export type Action = ActionSetUser
