Goal:
- Prototype thin clients
- Test hypothesis about XHR, XSS, CSRF against a CORS site

What to test:
- httpOnly
- Cookie Path

# Notes

Cookies:
- https://flaviocopes.com/cookies/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

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