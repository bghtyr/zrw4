export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/6fc1fbb5-87c4-4be2-b082-e9e3b9a76ace-vmess')) {
      url.hostname = 'kluvfrdce4.herokuapp.com'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
