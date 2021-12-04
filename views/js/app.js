//var apiKey = process.env.API_KEY;
//var sessionId = "1_MX40NzM5NzQyMX5-MTYzODYxNjQyMzE3OH5WOGhtcHJNUitJemVTc09oS2pzSlB5Q09-fg";
//var token = "T1==cGFydG5lcl9pZD00NzM5NzQyMSZzaWc9ODJiZDVhY2FlYzEwMmMxMWJiMDY2MzE3Y2QzMjEzZDNkZDc4Yjk1MDpzZXNzaW9uX2lkPTFfTVg0ME56TTVOelF5TVg1LU1UWXpPRFl4TmpReU16RTNPSDVXT0dodGNISk5VaXRKZW1WVGMwOW9TMnB6U2xCNVEwOS1mZyZjcmVhdGVfdGltZT0xNjM4NjE2NTEwJm5vbmNlPTAuNTY0NDE2ODMyNTc4MTA0JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2Mzg2MjAxMTAmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=";

// (optional) add server code here
// (optional) add server code here
var SERVER_BASE_URL = 'https://khe.herokuapp.com';
fetch(SERVER_BASE_URL + '/room/tanweer').then(function(res) {
  return res.json()
}).then(function(res) {
  apiKey = res.apiKey;
  sessionId = res.sessionId;
  token = res.token;
  initializeSession();
}).catch(handleError);


//initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
}
  
function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);

    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
    });
    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
    }, handleError);

    // Connect to the session
    session.connect(token, function(error) {
        // If the connection is successful, publish to the session
        if (error) {
            handleError(error);
        } else {
            session.publish(publisher, handleError);
        }
    });
  }