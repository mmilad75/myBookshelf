import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface Reducer {
  user: FirebaseAuthTypes.User | null,
  error: any
}

interface ActionSetUser {
  type: string,
  payload: FirebaseAuthTypes.User | null
}

export type Action = ActionSetUser
