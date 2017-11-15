#####Fri Sep 22 11:47:19 2017 CDT
* [How do you handle forms in the context of Vuex? : vuejs](https://www.reddit.com/r/vuejs/comments/5lbw9b/how_do_you_handle_forms_in_the_context_of_vuex/)

#####Tue Sep 26 12:16:10 2017 CDT
* [Write simple unit tests with Vue Test Utils and Jest](https://medium.com/@edward.yerburgh/simple-unit-tests-with-vue-test-utils-and-jest-c384d7abc321)

#####Mon Oct  2 14:40:08 2017 CDT
* [Write the first Vue.js Component Unit Test in Jest | Alex Jover Morales](https://alexjoverm.github.io/2017/08/21/Write-the-first-Vue-js-Component-Unit-Test-in-Jest/)

* [Testing React Applications with Jest](https://auth0.com/blog/testing-react-applications-with-jest/)

#####Tue Oct  3 12:11:07 2017 CDT
* [How To Create a Snackbar / Toast](https://www.w3schools.com/howto/howto_js_snackbar.asp)

* [css3 - CSS transition when class removed - Stack Overflow](https://stackoverflow.com/questions/9509002/css-transition-when-class-removed)

    > CSS transitions work by defining two states for the object using CSS. In your case, you define how the object looks when it has the class "saved" and you define how it looks when it doesn't have the class "saved" (it's normal look). When you remove the class "saved", it will transition to the other state according to the transition settings in place for the object without the "saved" class.

    > If the CSS transition settings apply to the object (without the "saved" class), then they will apply to both transitions.


#####Thu Oct  5 09:15:49 2017 CDT
* [Good Vue testing tips](https://eddyerburgh.me/)

#####Tue Oct 17 15:18:01 2017 CDT
###Example Token Validation Call
```javascript
var url = 'https://accounts.osteopathic.org/api/validatetoken/'

jQuery.ajax(url, {
  method: 'post',
  headers: {
    'AOA_SSO_AUTH': '49645660-06B5-FB82-A06237B0D1F39570'
  },
  data: {
    token: 'QUQ3OUUyRUUtRkFGMi01MzU4LTI3QjUwRDg5NERGNTE0QUJBRDc5RTJFRi05NTkyLTNGNUQtNTRBQUIwNzNGQjZEQUQ0NEFENzlFMkYwLTk3QkQtNjI5OC1DRTQ5OUJDQUYyNjQ0N0Iw',
    ip: '10.1.72.130'
  },
  error: (xhr) => console.log('error'),
  success: (data) => console.dir(data),
})
```

#####Wed Oct 18 12:10:58 2017 CDT
* [Securing API Keys in a JavaScript Single Page App - Bill Patrianakos](http://billpatrianakos.me/blog/2016/02/15/securing-api-keys-in-a-javascript-single-page-app/)

    >As for any functionality in your application that requires you to communicate with a third party API you don’t control, the answer is to make a simple CSRF secured AJAX call to your own back-end and then let your server-side application make the API call on behalf of your front-end then return the response back to your client-side app.
    
    >In this way your API credentials are secured. Your keys can’t be leaked unless you somehow return them back to your front-end or someone hacks into your server and somehow gets a hold of your configuration files or environment variables.


* [thinkingmik/api-proxy-laravel: Laravel proxy helper package for javascript API calls](https://github.com/thinkingmik/api-proxy-laravel)

    > So how can you use OAuth securely in single page web-apps?
    
    > It's simple; proxy all of your API calls via a thin server side component. This component (let's just call it a proxy from here on) will authenticate ajax requests from the user's session. The access and refresh tokens can be stored in an encrypted form in a cookie which only the proxy can decrypt. The application client credentials will also be hardcoded into the proxy so they're not publicly accessible either.


* [WordPress Front End Security: CSRF and Nonces | CSS-Tricks](https://css-tricks.com/wordpress-front-end-security-csrf-and-nonces/)


* [4front/express-request-proxy: Advanced streaming http request proxy middleware for Express with support for custom routes, caching, and response transforms.](https://github.com/4front/express-request-proxy)
    * Old but maybe useful as an example

* Middleman example (Wednesday, October 18, 2017 at 12:32 PM)
    > Hi Patrick,
     
    > I spun up a quick plugin to demonstrate the Ajax call to a helper PHP function, to test SSO validation. You’ll see that the API Key is not exposed in the console.
     
    > http://aoademo.wpengine.com/aoa-sso/
     
    > Plugin source at wp-content/plugins/aoassoapicheck
     
    > The output of the validation is in the console log, for reference.

##### Wed Nov  1 10:08:51 2017 CDT
* Demo URL:
    ```
    https://tracme-demo.osteopathic.org/api/report/GetMember?user=UserGetMemberCredits&pwd=1bQJy3wO5mG4P1mwyNqpRw%3d%3d&memberCode=059678
    ```
    Working now for your review.  This link should only be used for review not for production use.
 
* Production URL: 
    ```
    https://tracme.osteopathic.org/api/report/GetMember?user=UserGetMemberCredits&pwd=1bQJy3wO5mG4P1mwyNqpRw%3d%3d&memberCode=059678
    ``` 
    Will NOT work until code is moved live
 
    ```
    Path: https://tracme.osteopathic.org/api/report/GetMember?user=UserGetMemberCredits
    Password: &pwd=1bQJy3wO5mG4P1mwyNqpRw%3d%3d
    Member Code:  &memberCode=??????
    ``` 

* Board Cert API
    ```
    https://cf.osteopathic.org/cbdb/api/v1/certification.cfc?method=getCertification&aoaid=123456
    ```


##### Thu Nov  2 09:42:10 2017 CDT
* [AJAX in Plugins « WordPress Codex](https://codex.wordpress.org/AJAX_in_Plugins)

* [12. JavaScript and Ajax in WordPress - Professional WordPress® Plugin Development](https://www.safaribooksonline.com/library/view/professional-wordpress-plugin/9780470916223/ch12.html)


##### Fri Nov  3 09:21:36 2017 CDT
* [Everything You Ever Wanted to Know About Secure HTML Forms](https://twilioinc.wpengine.com/2017/09/everything-you-ever-wanted-to-know-about-secure-html-forms.html)

* [Submit Button Concept](https://codepen.io/TazTheManiac/pen/mqVeWW)

##### Mon Nov 13 16:26:05 2017 CST
* [Creating a Loading Placeholder with Sass - Lee Robinson](https://www.leejamesrobinson.com/blog/loading-placeholder-with-sass/)
    * [Creating a Loading Placeholder Like Facebook with Sass : webdev](https://www.reddit.com/r/webdev/comments/7ci3q7/creating_a_loading_placeholder_like_facebook_with/)

##### Wed Nov 15 09:02:38 2017 CST 
* [Advanced CSS-Only Form Styling - Jonathan Harrell | CSS Blogger & Teacher, UI/UX Designer, Front-End Developer](https://jonathan-harrell.com/advanced-css-form-styling/)
