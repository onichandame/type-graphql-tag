## Type Graphql Tag

## Example Usage

```typescript
import {Field,Type,createSchema} from '@onichandame/type-graphql-tag'

@Type()
class User {
@Field()
name!:string
}

@Type()
class Post {
@Field()
author!:User
}

/* Same as below
const schema = gql`
  mutation {
    getPost{
      author {
        name
      }
    }
  }
`
*/
const schema=createSchema({operation:`query`,endpoint:`getPost`,output:Post})
```
