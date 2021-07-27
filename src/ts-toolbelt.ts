import { Function } from 'ts-toolbelt';
import { Falsy, Primitive, OptionalKeys, RequiredKeys, Optional, PickByValue } from "utility-types";


type UserLoggedIn = Function.Promisify<(user: string, password: string) => boolean>;

// Usual way
const isUserLoggedIn1: (user: string, password: string) => Promise<boolean> = (user: string, password: string): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    resolve(true);
  })
}

// Using ts-toolbelt
const isUserLoggedIn2: UserLoggedIn = (user: string, password: string): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    resolve(true);
  })
}

// Using Utility types
const aNumber: Primitive = 1;
const aString: Primitive = "a random string";
const falsyValue1: Falsy = null;
const falsyValue2: Falsy = undefined;
const falsyValue3: Falsy = "";

// Object types
interface PersonalInfo {
  id: string;
  name: string;
  email: string;
  company?: string;
  age?: number;
  height?: number;
  weight?: number;
}

// Object types

// Return Union type keys
type OptionalInfoKeys = OptionalKeys<PersonalInfo>;
type RequiredInfoKeys = RequiredKeys<PersonalInfo>;
type StringInfoKeys = PickByValue<PersonalInfo, string>;
type NumberInfoKeys = PickByValue<PersonalInfo, number>;

type RequiredStringInfoKeys = RequiredKeys<StringInfoKeys>;
type OptionalStringInfoKeys = OptionalKeys<StringInfoKeys>;