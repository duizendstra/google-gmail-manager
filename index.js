var google = require("googleapis");

function googleGmailManager() {
    "use strict";
    var service = google.gmail("v1");

    function getProfile(specs) {
        return new Promise(function (resolve, reject) {
            service.gmail.users.getProfile({
                auth: specs.auth,
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

    return {
        getProfile: getProfile
    };
}

module.exports = googleGmailManager;