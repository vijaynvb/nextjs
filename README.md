
templates
error handlings
API Routes  
Typescript for Next.js 


Architecture -> react evolved as framework nextjs 
data fetching -> data stroes api, db, even files / seo 

comments -> CRUD -> 

Get all commnets -> get  http://ip:port/v1/api/commnets 
Get all commnets with filter -> get  http://ip:port/v1/api/commnets?filter=somevalue
Get all commnets with pagination -> get  http://ip:port/v1/api/commnets?page=1&limit=10
Get a commnet    -> get  http://ip:port/v1/api/commnets/[id] 

create a comment -> post   http://ip:port/v1/api/commnets 
update a comment -> put    http://ip:port/v1/api/commnets/[id] 
delete a comment -> delete http://ip:port/v1/api/commnets/[id] 
update specific value in a comment -> patch http://ip:port/v1/api/commnets/[id]


users -> CRUD -> 

Get all commnets -> get  http://ip:port/v1/api/users 
Get all commnets with filter -> get  http://ip:port/v1/api/users?filter=somevalue
Get all commnets with pagination -> get  http://ip:port/v1/api/users?page=1&limit=10
 

create a comment -> post   http://ip:port/v1/api/users 
Get a commnet    -> get  http://ip:port/v1/api/users/[id]
update a comment -> put    http://ip:port/v1/api/users/[id] 
delete a comment -> delete http://ip:port/v1/api/users/[id] 
update specific value in a comment -> patch http://ip:port/v1/api/users/[id]


Roles -> CRUD -> 

Get all comments -> get  http://ip:port/v1/api/Roles 
get all user of a given role -> get  http://ip:port/v1/api/Roles/[id]/users
Get all comments with filter -> get  http://ip:port/v1/api/Roles?filter=somevalue
Get all comments with pagination -> get  http://ip:port/v1/api/users?page=1&limit=10
Get a comment    -> get  http://ip:port/v1/api/users/[id] 

create a comment -> post   http://ip:port/v1/api/users 
update a comment -> put    http://ip:port/v1/api/users/[id] 
delete a comment -> delete http://ip:port/v1/api/users/[id] 
update specific value in a comment -> patch http://ip:port/v1/api/users/[id]

Curl Requests:

curl --location 'http://localhost:3000/v1/api/comments'

curl --location 'http://localhost:3000/v1/api/comments/1'

curl --location --request PUT 'http://localhost:3000/v1/api/comments/1' \
--header 'Content-Type: application/json' \
--data '{
    "id": 1,
    "text": "updated comment"
}'

curl --location --request DELETE 'http://localhost:3000/v1/api/comments/1' \
--header 'Content-Type: application/json' \
--data '{
    "id": 1,
    "text": "updated comment"
}'

curl --location 'http://localhost:3000/v1/api/comments' \
--header 'Content-Type: application/json' \
--data '{
    "text" : "New comment from the user"
}'