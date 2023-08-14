

export default async function sendData(uri,body){

    var myHeaders = new Headers();
    myHeaders.append("accept", "text/plain");
    myHeaders.append("Content-Type", "application/json"); 

    fetch("http://api.caliskandent.com/" + uri,
    {
        method:"POST",
        body:JSON.stringify(body),
        headers:myHeaders,
        redirect: 'follow'
    }
    )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}