# Create Design System

This is a design system skeleton project.

## Why this project?

The purpose of this project is to create a minimal design system tooling.

It should cover those tools:

    * React
    * React-Hot-Reload
    * Parcel
    * styled-components


## Project structure


* components
    * Please grouping your components in `components`
* components/App.js
    * Compose our components to demo.
* pub
    * Files you need to access in the code like images or fonts.
* themes
    * We will create different themes.
* index.js
    * The entry point of this project, and it also apply hot-module loader to  update result when saving files.

## Install

Please install [Node.js](https://nodejs.org/en/) first, and clone this project.

You also need to [install yarn](https://yarnpkg.com/en/docs/install).

After installation, change your working directory into this project and execute this command.

```
yarn install
```

It will install packages automactically.

## Run with hot module reloading

```
npm start
```

## Git Commands

### git add
    If you change your code, please use `git add <filename>` to add your changes in git's staging.

### git commit
    After adding files in git's staging, you can use `git commit -m <your messages>` to compose a git commit change.

### git push
    Once your commit is ready. You need to upload your changes to remote repository.
    Please try `git push origin <branch name>`.

### git checkout
    You can use `git checkout <branch name>` to change your working branch.
    If you use this command `git checkout -b <branch name>`, it will create a new branch name and switch to it.

### git branch
    git shows your current branch name.



## Styling ##

Since we have known CSS and JavaScript (just understand the basic syntax), the fundamental of nowdays technology.
We use [styled-components](https://www.styled-components.com) to styling our design system.
styled-components is a solid and popular css-in-js solution. It connects CSS and JavaScript in the same place.
With styled-components, you can use CSS syntax in JavaScript via [tagged template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates).

### Define a component via styled-components

```jsx
// always remember to import react and styled-components in the beginning
import React from 'react';
import styled from 'styled-components';

/* declare a styled-component named Pantone, its HTML tag would be div.
 * styled-component supports tag template literals. Put your css rules inside the pair of back-tick.
 * It can support template's placeholder to embed JavaScript like ${props => props.color || "#fff"};
*/
const Pantone = styled.div`
    padding: 1em;
    display: inline-block;
    margin: 0.5em;
    color: ${props => props.color || "#fff"};
    background: ${props => props.bgColor || "#00b3e3"};
    border: none;
    text-transform: uppercase;
`;

export { Pantone };
// Remember to export your component
```




## Reference

* [Nodejs](https://nodejs.org/en/)
* [React](https://reactjs.org/docs/getting-started.html)
* [CSS](https://developer.mozilla.org/zh-TW/docs/Web/CSS)
* Git Tutorial
    * [Git Chinese](https://backlog.com/git-tutorial/tw/intro/intro2_1.html)
    * [Git English](https://www.atlassian.com/git/tutorials)
* [Visual Studio Code](https://code.visualstudio.com)
* GitHub PR
    * [About Pull Requests English](https://help.github.com/en/articles/about-pull-requests)
    * [Pull Requests Chinese](https://gitbook.tw/chapters/github/pull-request.html)
* [React Developer Tool](https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation)
