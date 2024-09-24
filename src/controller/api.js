import {ApiResponse} from '../utility/ApiRespoense.js'
import {asyncHandler} from "../utility/AsyncHandler.js"


const userResponse = asyncHandler(async(req,res,next)=>{
    const Response = {
        "login": "codax69",
        "id": 128021116,
        "node_id": "U_kgDOB6FyfA",
        "avatar_url": "https://avatars.githubusercontent.com/u/128021116?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/codax69",
        "html_url": "https://github.com/codax69",
        "followers_url": "https://api.github.com/users/codax69/followers",
        "following_url": "https://api.github.com/users/codax69/following{/other_user}",
        "gists_url": "https://api.github.com/users/codax69/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/codax69/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/codax69/subscriptions",
        "organizations_url": "https://api.github.com/users/codax69/orgs",
        "repos_url": "https://api.github.com/users/codax69/repos",
        "events_url": "https://api.github.com/users/codax69/events{/privacy}",
        "received_events_url": "https://api.github.com/users/codax69/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Pritesh Patel",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 15,
        "public_gists": 0,
        "followers": 2,
        "following": 2,
        "created_at": "2023-03-16T05:59:33Z",
        "updated_at": "2024-09-10T12:55:36Z"
    }
    res.status(200).json(new ApiResponse(200,Response,"Response Send successfully"))
})

export {userResponse}