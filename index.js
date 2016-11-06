var google = require("googleapis");

function googleGmailManager(mainSpecs) {
    "use strict";
    var service = google.gmail("v1");
    var auth;

    function getProfile(specs) {
        return new Promise(function (resolve, reject) {
            service.users.getProfile({
                auth: auth,
                userId: "me"
            }, function (err, response) {
                if (err) {
                    reject("The API returned an error: " + err);
                    return;
                }
                resolve(response);
            });
        });
    }

    auth = mainSpecs.auth;

    return {
        getProfile: getProfile
    };
}

module.exports = googleGmailManager;