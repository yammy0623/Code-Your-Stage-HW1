/* eslint-disable no-shadow */
// import { parseCookies } from "nookies";
import { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import useSWR, { useSWRConfig } from "swr";

export default (url, options) => {
  // const cookies = parseCookies();
  // const { accessToken } = cookies;
  const { mutate } = useSWRConfig();
  const [isSent, setIsSent] = useState(false);
  const { data, error } = useSWR(
    url,
    async (fetchUrl) => {
      const res = await fetch(fetchUrl, {
        // headers: { authorization: `Bearer ${accessToken}` }
      });
      // If the status code is not in the range 200-299,
      // we still try to parse and throw it.
      if (!res.ok) {
        const error = new Error("An error occurred while fetching the data.");
        // Attach extra info to the error object.
        error.info = await res.json();
        error.status = res.status;
        throw error;
      }

      return res.json();
    },
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        console.log(`on error retry: ${key}`);
        // Never retry on 404.
        if (error.status === 404) return;

        // Only retry up to 5 times.
        if (retryCount >= 5) return;

        // Retry after 5 seconds.
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
      onLoadingSlow: (key) => {
        console.log(`on loading slow retry: ${key}`);
        // time out to trigger refetch once
        // note: 3s default, 5s when internet bad
        if (!isSent) mutate(url);
        setIsSent(true);
      },
      ...options
    }
  );
  if (error) {
    console.log(error);
  }
  // console.log(data);

  return { data, error };
};

// (url) => axios({
//     method: 'get',
//     crossDomain: true,
//     async: true,
//     url
// }),
// 'data': res?.data.result
