import { create } from 'apisauce';
import { mapWithKeys } from '~/utils';

let token = null;

const client = create({
  baseURL: 'https://null',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export function setToken(newToken) {
  token = newToken;
}

/**
 * Sends HTTP request
 */
export function request(method, path, params = {}, customHeaders = {}) {
  const headers = token ? { Authorization: `Bearer ${token}` } : null;

  return client[method](path, params, {
    headers: {
      ...headers,
      ...customHeaders,
    },
  }).then(response => {
    if (response.ok) {
      return Promise.resolve(response.data);
    } else {
      const { violations, message, title, ...others } = response.data;
      if (violations) {
        return Promise.reject({
          error: message || title,
          errors: mapWithKeys(violations, violation => {
            return [violation.propertyPath, violation.message];
          }),
          ...others,
          status: response.status,
        });
      }
      return Promise.reject({
        error: message,
        errors: [],
        ...others,
        status: response.status,
      });
    }
  });
}
