//directory structure should be be
/*

/var/www/html
    -firebase-messaging-sw.js
    -notification
        -index.html
        -send_notification.html

*/

//file name should not be changed
//keep this javascript file in the root of the domain
//eg: site is hosted on https://3.137.162.168, then this file content should be visible when accessing https://3.137.162.168/firebase-messaging-sw.js 

importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyA8IYhffI_8FfFmK_aDsifm5T-_VQmAsrI",
    authDomain: "web-push-notifications-c77c2.firebaseapp.com",
    projectId: "web-push-notifications-c77c2",
    storageBucket: "web-push-notifications-c77c2.appspot.com",
    messagingSenderId: "463854387476",
    appId: "1:463854387476:web:ac4e2df2aa5e95496e4201",
    measurementId: "G-1LLPGDZ1QK"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});
