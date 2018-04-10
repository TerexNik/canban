export default function createRequest(url, callback, method = "GET") {
         const httpRequest = new XMLHttpRequest();
         httpRequest.onreadystatechange = () => {
             if (httpRequest.readyState === 4 && httpRequest.status === 200)
                 callback(httpRequest.responseText);
         };

         httpRequest.open(method, url, true);
         httpRequest.send(null);
 }
