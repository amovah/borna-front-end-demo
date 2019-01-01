import store from 'Root/store';
import types from 'Root/redux/actions';

/* eslint-disable */

const generateQueryString = (data) => {
  const ret = [];
  for (let d in data) {
		if (data[d]) {
			ret.push(encodeURIComponent(d) +
				'=' + encodeURIComponent(data[d]));
		}
	}
	return ret.join('&');
}

/* eslint-enable */

export default async ({
  url, options, token, query = {},
}) => {
  store.dispatch({
    type: types.progressing.START,
  });

  const queryString = generateQueryString({
    access_token: token,
    ...query,
  });

  let modifiedUrl = url;
  let next = '?';
  if (queryString) {
    modifiedUrl = `${url}?${queryString}`;
    next = '&';
  }

  if (options.filter) {
    modifiedUrl = `${modifiedUrl}${next}filter=${JSON.stringify(options.filter)}`;
  }

  const res = await global.fetch(modifiedUrl, {
    // headers: query ? {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // } : {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/x-www-form-urlencoded',
    // },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...options,
  });

  store.dispatch({
    type: types.progressing.STOP,
  });

  return {
    res,
    data: await res.json(),
  };
};
