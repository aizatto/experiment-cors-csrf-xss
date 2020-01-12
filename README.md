# experiment-cors-csrf-xss

Goal:
- Prototype thin clients
- Test a bunch of theories about XHR, XSS, CSRF, CORS

What to test:
- httpOnly
- Cookie Path

# Setup

Clone repository

```sh
git clone git@github.com:aizatto/experiment-cors-csrf-xss.git
cd experiment-cors-csrf-xss
yarn
yarn run start
```

# Making changes

This repository is managed by lerna. The directories which interest you are:

- `packages/server`: server side code
- `packages/malicious`: `create-react-app` to manage the frontend

# Notes


Token security & types of access token: https://hackernoon.com/all-you-need-to-know-about-user-session-security-ee5245e6bdad

Best way to securely manage user sessions: 
https://hackernoon.com/the-best-way-to-securely-manage-user-sessions-91f27eeef460

Difference between localStorage, sessionStorage, session and cookies:
https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies

What is CSRF:
https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)

What is XSS:
https://portswigger.net/web-security/cross-site-scripting

How do you prevent CSRF (Rails way):
https://stackoverflow.com/questions/941594/understanding-the-rails-authenticity-token
https://medium.com/rubyinside/a-deep-dive-into-csrf-protection-in-rails-19fa0a42c0ef

Why you should not use JWT as session:
http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/
http://cryto.net/~joepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/
https://developer.okta.com/blog/2017/08/17/why-jwts-suck-as-session-tokens

Can JWT be used for sessions?
https://medium.com/@yuliaoletskaya/can-jwt-be-used-for-sessions-4164d124fe23

JWT authentication: When and how to use it?
https://blog.logrocket.com/jwt-authentication-best-practices/

Why does OAuth has both Access and Refresh Token?
https://stackoverflow.com/questions/3487991/why-does-oauth-v2-have-both-access-and-refresh-tokens?rq=1

Using express server as reverse proxy:
https://hackernoon.com/reverse-proxy-using-express-server-1f1b0b5a6e67

Handling authentication in Single Page Application:
https://medium.com/@jcbaey/authentication-in-spa-reactjs-and-vuejs-the-right-way-e4a9ac5cd9a3
https://medium.com/lightrail/getting-token-authentication-right-in-a-stateless-single-page-application-57d0c6474e3

Where should you keep your access_token:
https://auth0.com/docs/security/store-tokens

## Cookies

- https://flaviocopes.com/cookies/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
- http://www.nczonline.net/blog/2009/05/12/cookies-and-security/

https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

```txt
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

> To help mitigate cross-site scripting (XSS) attacks, HttpOnly cookies are inaccessible to JavaScript's Document.cookie API; they are only sent to the server. For example, cookies that persist server-side sessions don't need to be available to JavaScript, and the HttpOnly flag should be set.



## CORS

https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

> Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin. A web application executes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, or port) from its own.

## CSRF

https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)

> Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. CSRF attacks specifically target state-changing requests, not theft of data, since the attacker has no way to see the response to the forged request. With a little help of social engineering (such as sending a link via email or chat), an attacker may trick the users of a web application into executing actions of the attacker's choosing. If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an administrative account, CSRF can compromise the entire web application.

## XSS

https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)

> Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.