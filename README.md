<div align="center">
    <img width="200px" alt="logo" src="/public/images/logo.png" />
</div>

## About the Project

Home cooks are our heroes—it's as simple as that. GoodEats is a community built by and for kitchen lovers. Most importantly, GoodEats aims to connect home cooks with their greatest sources of inspiration — other home cooks. Our mission is to build a platform that enables everyone interested in cooking, to share their experiences and stay connected.

GoodEats is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started to Dev

1. Install Node.js 18 or higher.
2. Install Yarn package manager.
3. Install Eslint extension on your VS code, then copy and paste this block of code into your VS code settings.
    ```JSON
    
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
    },
    "eslint.validate": ["javascript"]

    ```
4. Install the dependencies of both UI and server:
    ```bash
    
    yarn installs

    ```
5. Start UI and server both:
    ```bash

    yarn dev

    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Brief Structure of the Project
```
good-eats
├── server
│   ├── api
│   │   ├── app.js
│   │   ├── controllers
│   │   │   ├── recipe.js
│   │   │   └── user.js
│   │   ├── middleware.js
│   │   ├── models
│   │   │   ├── recipe.js
│   │   │   └── user.js
│   │   ├── routes
│   │   │   ├── config.js
│   │   │   ├── recipe.js
│   │   │   └── user.js
│   │   ├── services
│   │   │   ├── recipe.js
│   │   │   └── user.js
│   │   └── utils.js
├── src
│   ├── api
│   │   ├── addrecipe.js
│   │   ├── config.js
│   │   ├── profile.js
│   │   ├── recipe.js
│   │   ├── security.js
│   │   └── user.js
│   ├── app
│   │   ├── (main)
│   │   │   ├── aboutus
│   │   │   │   ├── about-us.module.scss
│   │   │   │   └── page.js
│   │   │   ├── home
│   │   │   │   └── page.js
│   │   │   └── layout.js
│   │   ├── (profile)
│   │   │   ├── author
│   │   │   │   └── [authorId]
│   │   │   │       ├── author.module.scss
│   │   │   │       └── page.js
│   │   │   ├── layout.js
│   │   │   ├── posted-recipes
│   │   │   │   ├── page.js
│   │   │   │   └── posted.module.scss
│   │   │   └── saved-recipes
│   │   │       └── page.js
│   │   ├── addrecipe
│   │   │   ├── addrecipe.module.scss
│   │   │   └── page.js
│   │   ├── components
│   │   │   ├── Accordion
│   │   │   │   ├── accordion.js
│   │   │   │   └── accordion.module.scss
│   │   │   ├── Badge
│   │   │   │   └── badge.js
│   │   │   ├── Button
│   │   │   │   ├── button.js
│   │   │   │   └── button.module.scss
│   │   │   ├── Card
│   │   │   │   ├── card.js
│   │   │   │   └── card.module.scss
│   │   │   ├── Carousel
│   │   │   │   └── carousel.js
│   │   │   ├── Confirm
│   │   │   │   └── index.js
│   │   │   ├── Empty
│   │   │   │   └── index.js
│   │   │   ├── Errors
│   │   │   │   └── not-found.scss
│   │   │   ├── Footer
│   │   │   │   ├── footer.js
│   │   │   │   ├── footer.module.scss
│   │   │   │   └── images
│   │   │   │       ├── Icons
│   │   │   │       │   ├── facebook.png
│   │   │   │       │   ├── Instagram.png
│   │   │   │       │   ├── pinterest.png
│   │   │   │       │   ├── subscribebutton.png
│   │   │   │       │   ├── tiktok.png
│   │   │   │       │   ├── twitter.png
│   │   │   │       │   └── Youtube.png
│   │   │   │       └── magazine.jpg
│   │   │   ├── FormInput
│   │   │   │   └── formInput.js
│   │   │   ├── Header
│   │   │   │   ├── header.js
│   │   │   │   └── header.module.scss
│   │   │   ├── LinkMenu
│   │   │   │   ├── index.js
│   │   │   │   └── LinkMenu.module.scss
│   │   │   ├── Loading
│   │   │   │   └── index.js
│   │   │   ├── Offcanvas
│   │   │   │   └── offcanvas.js
│   │   │   └── Table
│   │   │       ├── index.js
│   │   │       └── table.module.scss
│   │   ├── favicon.ico
│   │   ├── globals.scss
│   │   ├── layout.js
│   │   ├── loading.js
│   │   ├── login
│   │   │   ├── login.module.scss
│   │   │   └── page.js
│   │   ├── management
│   │   │   ├── layout.js
│   │   │   ├── recipes
│   │   │   │   └── page.js
│   │   │   └── users
│   │   │       └── page.js
│   │   ├── not-found.js
│   │   ├── page.js
│   │   ├── recipe
│   │   │   └── [recipeId]
│   │   │       ├── detail.module.scss
│   │   │       └── page.js
│   │   ├── settings
│   │   │   ├── layout.js
│   │   │   ├── profile
│   │   │   │   ├── page.js
│   │   │   │   └── profile.module.scss
│   │   │   └── security
│   │   │       ├── page.js
│   │   │       └── security.module.scss
│   │   └── styles
│   │       └── base
│   │           ├── _base.scss
│   │           ├── _index.scss
│   │           └── _mixins.scss
│   ├── middleware.js
│   └── store
│       └── user.js
└── yarn.lock
```