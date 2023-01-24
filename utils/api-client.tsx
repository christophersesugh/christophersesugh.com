import * as auth from "./auth-provider";

const appUrl = process.env.NEXT_PUBLIC_APP_URL;

async function client(
  endpoint: string,
  { data, token, headers: customHeaders, ...customConfig } = {} as {
    data: any;
    token: string;
    headers: any;
  }
) {
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return fetch(`${appUrl}/${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      await auth.logout();
      // refresh the page for them
      window.location.assign(window.location as any);
      return Promise.reject({ message: "Please re-authenticate." });
    }
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export { client };
