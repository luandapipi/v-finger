#### Finger events plugin for Vue.js. This plugin does not support Vue 1.X.

# Install
  * You can install it via npm:

```cmd
  npm install v-finger
```

# Intro
  * This is a hammerjs based on the gesture library,You can easily support a variety of touch events and gestures in your project.

  * By using vfinger you can listen to the gestures of the element finger operation.
# How to import

  * Using Components

`` import vfinger from 'v-finger';``

``Vue.use(vfinger);``

  * Direct import

``<script src="//cdn.bootcss.com/vue/2.2.4/vue.js"></script>``

``<script src="./vue-tap.js"></script>``

# Usage

  * Using the v-finger directive

  ```html
  <div id="demo" v-finger="{methods:callback,a:123,b:3333}">
  ```

  * add callback method
```javascript
   methods: {
      callback: function (type,e,params) {
          console.log(type)
          console.log(params)
          console.log(e)
      }
  }
```
# Have feedback
In use there are any questions, please give me feedback, you can use the following contact with me

Mail (luandapipi@gmail.com)

# License
   * MIT