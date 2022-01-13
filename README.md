## reference code: https://github.com/strapi/strapi-template-blog
## reference documentation: https://strapi.io/blog/build-a-blog-with-next-react-js-strapi

to run the app: 
<br>
`cd my-blog`
<br>
`yarn develop`

### If you get error related with babel:

- Create file called .babelrc in your root directory and add this code:

`
{
  "presets": ["next/babel"],
  "plugins": []
}
`
<br>

- And in .eslintrc, replace the following existing lines 

`
"extends": [
    "next",
    "prettier"
  ]
`
<br>
  with     
`
  "extends": [
    "next/babel",
    "prettier"
  ]
`

<br>
