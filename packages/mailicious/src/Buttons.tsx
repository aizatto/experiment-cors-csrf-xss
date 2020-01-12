import React, { useState, useEffect } from "react"
import { Button, FormGroup, Label, Input } from "reactstrap";
import * as querystring from 'querystring';
import uuid from 'uuid';

interface ResponseWrapper {
  uuid: string,
  response?: Response,
  body?: string,
  error?: Error,
}

const catchResponse = async (fn: () => Promise<Response>): Promise<ResponseWrapper> => {
  let response;
  let body;
  let error;

  try {
    response = await fn();
    body = await response.text();
  } catch (newError) {
    error = newError;
  }

  return {
    uuid: uuid(),
    response,
    body,
    error,
  };
}

export const SetCookie: React.FC = () => {
  const [server, setServer] = useState('http://localhost:2999/');
  const [serverPath, setServerPath] = useState('set-cookie');
  const [fetchPath, setFetchPath] = useState('');
  const serverFetchPath = server + fetchPath;

  const [name, setName] = useState('cookieName');
  const [value, setValue] = useState('cookie value');
  const [path, setPath] = useState('');
  const [url, setURL] = useState(server);
  const [responses, setResponses] = useState<ResponseWrapper[]>([]);

  useEffect(() => {
    const newUrl = server + serverPath + "?" + querystring.stringify({
      name,
      value,
      path,
    });
    setURL(newUrl);
  }, [server, name, value, path])

  const onSubmit = async () => {
    const value = await catchResponse(() => {
      return fetch(url)
    })
    setResponses([value].concat(responses));
  }

  const onFetch = async () => {
    const value = await catchResponse(() => {
      return fetch(
        serverFetchPath,
        {
          credentials: 'include'
        },
      )
    })
    setResponses([value].concat(responses));
  }

  const responsesElements = responses.map(responseWrapped => {
    const { response, uuid, body, error } = responseWrapped;

    if (!response || error) {
      return (
        <li key={uuid}>
          <code>{error?.message}</code>
        </li>
      )
    }

    const entries = Array.from(response.headers.entries()).map(([key, value], index) => {
      return (
        <li key={`${uuid}:${index}`}>
          <code>{key}</code>: <code>{value}</code>
        </li>
      )
    });

    return (
      <li key={uuid}>
        <code>{response.url}</code>

        <div>Status:</div>
        <code>{response.status}</code>

        <div>Some Response Headers:</div>
        <ul>
          {entries}
        </ul>

        <div>Body:</div>
        <pre>{body}</pre>
      </li>
    );
  });

  return (
    <>
      <h1>Set Cookie</h1>
      <ul>
        <li><a href={server} target="_blank" rel="noopener noreferrer">{server}</a></li>
        <li><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
      </ul>
      <FormGroup>
        <Label for="server">Server</Label>
        <Input
          type="text"
          server="server"
          id="server"
          placeholder="Server"
          defaultValue={server}
          onChange={(event) => setServer(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="serverPath">Server Path</Label>
        <Input
          type="text"
          name="serverPath"
          id="serverPath"
          placeholder="Server"
          defaultValue={serverPath}
          onChange={(event) => setServerPath(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          defaultValue={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="value">Value</Label>
        <Input
          type="text"
          namee="value"
          id="value"
          placeholder="Value"
          defaultValue={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="path">Path</Label>
        <Input
          type="text"
          path="path"
          id="path"
          placeholder="Path"
          defaultValue={path}
          onChange={(event) => setPath(event.target.value)}
        />
      </FormGroup>
      <Button onClick={() => onSubmit()}>
        Set Cookie
      </Button>
      {' '}
      <h2 className="mt-5">Fetch</h2>
      <ul>
        <li><a href={serverFetchPath} target="_blank" rel="noopener noreferrer">{serverFetchPath}</a></li>
      </ul>
      <FormGroup>
        <Label for="fetchPath">Fetch Path</Label>
        <Input
          type="text"
          name="fetchPath"
          id="fetchPath"
          placeholder="Path"
          defaultValue={fetchPath}
          onChange={(event) => setFetchPath(event.target.value)}
        />
      </FormGroup>
      <Button onClick={() => onFetch()}>
        Fetch
      </Button>
      <ul>
        {responsesElements}
      </ul>
    </>
  );
}