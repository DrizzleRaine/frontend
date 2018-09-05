const uri = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8080'

// Promisify XHR Requests
export default function(method, url, data, token) {
  return new Promise((res, rej) => {
    let oReq = new XMLHttpRequest()
    oReq.addEventListener("load", function(resp) {
      try {
        if(resp.target.status === 204) res({})
        let data = JSON.parse(this.responseText)
        if(resp.target.status >= 400) throw data
        res(data)
      } catch (e) {
        rej(e)
      }
    });
    oReq.withCredentials = true
    if(url.startsWith('/')) {
      url = uri + url
    }
    oReq.open(method, url, true)
    if(token) {
      oReq.setRequestHeader("Content-type", "application/json")
      oReq.setRequestHeader("Authorization", "Bearer " + token)
    }
    oReq.send(JSON.stringify(data));
  })
}
