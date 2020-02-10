function validator(RequesrObj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (RequesrObj.method===undefined || !validMethods.includes(RequesrObj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (RequesrObj.uri===undefined || !(/^\.*[a-z0-9]+\.*[a-z0-9]*\.*[a-z0-9]*$/.test(RequesrObj.uri))) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (RequesrObj.version===undefined || !validVersions.includes(RequesrObj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (RequesrObj.message===undefined || (/[\<\>\\\&\'\"]/.test(RequesrObj.message))) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return RequesrObj;
}

validator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}
)