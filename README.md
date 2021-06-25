## Type Graphql Tag

## Example Usage

```typescript
import {Field,Type,createSchema} from '@onichandame/type-graphql-tag'

class User {
  @Field()
  name!:string
}

@Type(`PostComment`)
class Comment{
  @Field()
  text!:string
}

class Post {
@Field()
author!:User
  @Field({[Comment]})
  comments!:Comment[]
}

class PostAddCommentsInput{
  @Field({type:()=>[Comment]})
  comments: Comment[]
}

const schema=createSchema({operation:`mutation`,endpoint:`addComments`,output:Post,input:PostAddCommentsInput})
/* Same as below
const schema = gql`
  mutation ($comments: [PostCommentInput]){
    addComments (comments: $comments){
      author {
        name
        comments {
          text
        }
      }
    }
  }
`
*/
```
