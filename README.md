## Note for the test

Run test:

```bash
npm run test
```

## What I have done

1. I have create an api endpoint which will call getUsers endpoint and based on user_name, it will return the data related to that user - Reason: ideally, we should have an api endpoint which allow us to query a specific user.
2. I did not do the 5s delay logic, as we are using SSR. However, I have created a loading component which is used for displaing a loading Skelton
3. Added unit tests for username.tsx
4. TODO: error handling. i.e. display a notification when error happens

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Instructions

Please clone this project and modify it. Once you finish, send us your cloned repo so we can review it.

We need to build a page for different users. New users will be created very often, so we initially require
you to build a page using Nextjs and its `dynamic routes`.

There's already a dynamic route (also known as slugs) on:

```
/pages/user/[user_name].tsx
```

That page needs to check an API which returns a list of current users on our Backend.

The API is:

```
GET https://jsonplaceholder.typicode.com/users/
```

This is a sample response from the endpoint:

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
]
```

You're being asked to add functionality to `[user_name].tsx` with the following requirements:

- Users will visit the following url `http://localhost:3000/user/[username]`
- `[username]` can be ANY name. i.e., `http://localhost:3000/user/john`, `http://localhost:3000/user/bret`
- You will need to verify if `[username]` exists on the API response.
  - (please validate the existence of `[username]` against the `username` attribute on the API response object)
  - if a user enters `[username]` with CAPITALS, you should make a case-insensitive comparison (Bret is equal to bret).
- You should return a message with the `[username]`, and text indicating if the user exists on the API response or not.

**IMPORTANT:** the API returns a lot of data. The attribute you need to validate is `username`.
ie:

```json
{
  "id": 2,
  "name": "...",
  "username": "THIS_IS_THE_NAME_YOU_NEED_TO_CHECK",
  "email": "...",
  "address": {
    "street": "...",
    "suite": "...",
    "city": "...",
    "zipcode": "...",
    "geo": {
      "lat": "...",
      "lng": "..."
    }
  },
  "phone": "...",
  "website": "...",
  "company": {
    "name": "...",
    "catchPhrase": "...",
    "bs": "..."
  }
}
```

Take a look at `[user_name].tsx` and there will be more instructions... you can follow the instructions or ignore them if you
think there is a more elegant solution for what you are trying to achieve.

## Implement A User Details Card

Screen width: 0 - 599px  
User details margin left: 2rem  
User details margin right: 2rem

```
┌───────────────────────────┐
│                           │
│                           │
│   User Details:           │
│  ┌─────────────────────┐  │
│  │                     │  │
│  │  Name:              │  │
│  │  Leanne Graham      │  │
│  │                     │  │
│  │  Email:             │  │
│  │  Sincere@april.biz  │  │
│  │                     │  │
│  │                     │  │
│  │  Website:           │  │
│  │  hildegard.org      │  │
│  │                     │  │
│  └─────────────────────┘  │
│                           │
│                           │
└───────────────────────────┘
```

Screen width: 600px - infinite  
User details width: 30rem  
User details is horizontal centered  
Bonus: User details is vertical centered

```
┌──────────────────────────────────────────────┐
│                                              │
│                                              │
│        User Details:                         │
│       ┌──────────────────────────────┐       │
│       │                              │       │
│       │  Name:    Leanne Graham      │       │
│       │                              │       │
│       │  Email:   Sincere@april.biz  │       │
│       │                              │       │
│       │                              │       │
│       │  Website: hildegard.org      │       │
│       │                              │       │
│       └──────────────────────────────┘       │
│                                              │
└──────────────────────────────────────────────┘
```

### Additional Styling task

At Vidzing one of our main products is live streams which are heavily reliant on time schedules. We require you to add a timeout feature of 5 seconds
before displaying the response. During this timeout we would like to see a well styled custom loading animation/progress bar that displays in the browser.

### Final Coding task

As you might already know, unit testing is always a great way of catching errors ourselves before real users do.
Please implement your own unit testing for the [user_name].tsx file, and it's functionalities? This would include installing a test library of your choice
and coding/mocking it however you see fit to best test your code.

## Questions

After coding, we have the following questions. At Vidzing, we usually face problems such as concurrency, caching and using resources in a secure and productive manner, etc.
You will have a team to discuss those problems with and make decisions as a group. We don't like pointing fingers and if one of us fails, we ALL fail. We share success and we support each other.

- Where would you deploy this website? We currently have the following options:

  - Hosting the website on Amazon S3.
  - Hosting the website on Heroku.
  - Hosting the website on Netlify or Vercel.
  - let us know if you think of these are suitable candidates or if you prefer one over the other and WHY.

  Answer: for my understanding Amazon S3 is only used to store the static file compare with other tools which also include the infrasture for building/deploying our applications (i.e. netlify).
  So for s3, we may also need to setup a CICD pipeline which will push the bundle file into S3 bucket.
  I haven't used Heroku or Vercel before, but I assume they should be simiar as netlify.

  Netlify provide lots of good features that help us easily deploy our code to different environment. it enables you to set up your software faster and ship better products more often.
  it is also really easy to setup and use.
  However, setup AWS, may require lots of specific knowledge around aws tech stacks.

  Moreover, the cost for using netifly will be cheaper than user aws.

  For me a good CICD tool should support following features

  1. Easy to build and deploy our FE code with less amount of configuration
  2. Support mulitple environments deployment. i.e. during the build pipeline, we are able to deploy our code to lots of different environment, such as qa, staging, demo & prod
  3. Can run unit tests, integration test & e2e tests during the build, and will failed the build if the tests are failed

- At Vidzing we are currently a small team of developers, but we are planning to expand fast! One of our Developers likes Linux,
  others like MacOS... We are sure you've heard this quote before "But, it works on MY COMPUTER!". Sometimes something works on one computer
  and not on others because they might be using a different OS, different libraries, etc. \* What would you propose to avoid such problems as mentioned above? Can you propose at least TWO options?

Answer: Those issues are usually caused by different oS, browser version between the team members.
so to solve this:

1. We should agreed on what libraries we should use, and also need to list all the OS, browser (IE, Chrome etc) & browser version we should support.
2. We ca use tool like "browserstack" to help debug. i.e Mac user can use browserstack to test his work on Windows.

- As you can already see, our project contains a `package.json` and a `package-lock.json` file.

  - Would you track these files on GIT? would you ignore them? in any case, can you please explain WHY?

  1. I will check package.json, as it may have some configuration issues and also, we need to make sure we add the libraries into the correct dependecy section. For example, library like React should be placed under 'dependecies', but for '@types/react', we may just need add it to the 'devDependencies' as it just used for local dev only
  2. For package-lock.json, I also will check it, but mostly in my local, as it maybe too big for git to display the whole file. What I care about is to make sure we doesn't install some libraries which have the vulnerability issues.

## That's It!

Thank you for your time! I hope you found this test fun and productive.

Good Luck!
