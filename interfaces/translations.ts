// place it where you store your types
// import all namespaces for default language only
import common from '../public/locales/en/common.json'
//import common from '../public/locales/en/header.json'

export interface Resources {
  common: typeof common
  //header: typeof header
  // as many as files you have
}