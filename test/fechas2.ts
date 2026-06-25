import { PDate } from '../src/index'

PDate.defaultMask = '@y-@mm-@dd @hh:@ii:@ss'

console.log(JSON.stringify({ asd: new PDate() }))