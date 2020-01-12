import React from 'react';
import { SetCookie } from './Buttons';
import './styles.scss';
import { Container } from 'reactstrap';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <SetCookie />
        <h1>References</h1>
        <ul>
          <li>
            window.fetch
            <ul>
              <li>
                <a href="https://github.com/github/fetch">GitHub</a>
                <blockquote>
                  For CORS requests, use <code>credentials: 'include'</code> to allow sending credentials to other domains:
                </blockquote>
                <blockquote>
                  As with XMLHttpRequest, the Set-Cookie response header returned from the server is a forbidden header name and therefore can't be programmatically read with response.headers.get(). Instead, it's the browser's responsibility to handle new cookies being set (if applicable to the current URL). Unless they are HTTP-only, new cookies will be available through document.cookie.
                </blockquote>
               </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">MDN</a>
                <blockquote>
                  fetch() won't receive cross-site cookies; you can’t establish a cross site session using fetch. Set-Cookie headers from other sites are silently ignored.
                </blockquote>
                <blockquote>
                  fetch won’t send cookies, unless you set the credentials init option. (Since Aug 25, 2017. The spec changed the default credentials policy to same-origin. Firefox changed since 61.0b13.)
                </blockquote>
                <ul>
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters">fetch#Parameters</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Express
            <ul>
              <li>
                <a href="https://expressjs.com/en/resources/middleware/cookie-parser.html">cookie-parser</a>
              </li>
              <li>
                <a href="http://expressjs.com/en/5x/api.html#req.cookies">req.cookies</a>
              </li>
              <li>
                <a href="http://expressjs.com/en/5x/api.html#res.cookie">res.cookie</a>
                <ul>
                  <li><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0ba1042e325ba18b3b20d5292ed31666ce383ccd/types/express-serve-static-core/index.d.ts#L179">@types/express-serve-static-core/index.d.ts#L179</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            CORS
            <ul>
              <li>
                <code>Access-Control-Allow-Origin: *</code>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">MDN</a>
                <blockquote>
                  Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin. A web application executes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, or port) from its own.
                </blockquote>
              </li>
            </ul>
          </li>
          <li>
            Cookie
            <ul>
              <li>
                <a href="https://tools.ietf.org/html/rfc6265">Spec</a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie">MDN: Set-Cookie</a>
                <blockquote>
                  <code>HttpOnly</code> Optional
                  <p>
                    Forbids JavaScript from accessing the cookie. For example, through the Document.cookie property, the XMLHttpRequest API, or the Request API. This mitigates attacks against cross-site scripting (XSS).
                  </p>
                </blockquote>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/HTTP_cookie">Wikipedia</a>
              </li>
              <li>
                Doesn't like <code>name</code> values with spaces
                <ul>
                  <li>
                    <a href="https://stackoverflow.com/questions/1969232/what-are-allowed-characters-in-cookies">stack overflow: What are allowed characters in cookies?</a>
                    <blockquote>
                      a sequence of characters excluding semi-colon, comma and white space.
                    </blockquote>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            CSRF
            <ul>
              <li>
                <a href="https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)">OWASP</a>
                <blockquote>
                  Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. CSRF attacks specifically target state-changing requests, not theft of data, since the attacker has no way to see the response to the forged request. With a little help of social engineering (such as sending a link via email or chat), an attacker may trick the users of a web application into executing actions of the attacker's choosing. If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an administrative account, CSRF can compromise the entire web application.
                </blockquote>
              </li>
            </ul>
          </li>
          <li>
            JWT
            <ul>
              <li>
                <a href="https://tools.ietf.org/html/rfc7519">Spec</a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/JSON_Web_Token">Wikipedia: JSON Web Token</a>
              </li>
              <li>
                <a href="https://jwt.io/">jwt.io</a>
              </li>
              <li>
                <a href="https://medium.com/@yuliaoletskaya/can-jwt-be-used-for-sessions-4164d124fe23">Can JWT be used for sessions?</a>
              </li>
              <li>
                Why you should not use JWT as session
                <ul>
                  <li>
                    <a href="http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/">Stop using JWT for sessions</a>
                    <blockquote>
                      usecases where JWT is particularly effective are typically usecases where they are used as a single-use authorization token.
                    </blockquote>
                    <blockquote>
                      don't use JWT for persistent, long-lived data.
                    </blockquote>
                  </li>
                  <li>
                    <a href="http://cryto.net/~joepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/">Stop using JWT for sessions, part 2: Why your solution doesn't work
</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            XSS
            <ul>
              <li>
                <a href="https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)">OWASP</a>
                <blockquote>
                  Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.
                </blockquote>
              </li>
            </ul>
          </li>
          <li>
            <code>localStorage</code>
            <ul>
              <li>Vulnerable to XSS</li>
            </ul>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default App;
