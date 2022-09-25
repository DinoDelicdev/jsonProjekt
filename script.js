const data = require ('./JUST_DO_IT.json');
const mysql = require ('mysql');

function transformDateInCorrectFormat (dateAsStr) {
    let parts = dateAsStr.split('T');
    //let secondPartSplit = parts[1].split
    //console.log(parts);
    return `${parts[0]} ${parts[1].split('.')[0]}`;
}

function populateContributorsTable() {
    for (let i = 0; i < data.contributors.length; i++) {
        let correctData = transformDateInCorrectFormat(data.contributors[i].lastModified);
        let sql = 'INSERT INTO contributors (contributorID, honorific, firstName, lastName, postNominal, email, company, position, phone, twitter, facebook, linkedIn, instagram, youtube, bio, bio_HTML, headshotURL, headshot2xURL, notes, lastModified) values (?)'
        let values = [data.contributors[i].id, data.contributors[i].honorific, data.contributors[i].firstName, data.contributors[i].lastName, data.contributors[i].postNominal, data.contributors[i].email, data.contributors[i].company, data.contributors[i].position, data.contributors[i].phone, data.contributors[i].twitter, data.contributors[i].facebook, data.contributors[i].linkedin, data.contributors[i].instagram, data.contributors[i].youtube, data.contributors[i].bio, data.contributors[i].bio_HTML, data.contributors[i].headshotURL, data.contributors[i].headshot2xURL,data.contributors[i].notes, correctData];
        con.query(sql, [values], (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log('data inserted' + result.affectedRows);
            }
        })
    }
};

function populateContributorsAvailabilityTable() {
    for (let i = 0; i < data.contributors.length; i++) {
        for (let j = 0; j < data.contributors[i].availability.length; j++) {
            let correctStartDate = transformDateInCorrectFormat(data.contributors[i].availability[j].startDate);
            let correctEndDate = transformDateInCorrectFormat(data.contributors[i].availability[j].endDate);
            let sql = 'INSERT INTO contributorAvailability (contributorID, startdate, endDate) values (?)'
            let values = [data.contributors[i].id, correctStartDate, correctEndDate];
            con.query(sql, [values], (err, result) => {
                if (err) {
                    throw err;
                } else {
                    console.log('data inserted' + result.affectedRows);
                }
            })
        }
        
    }
}

function populateLabelsTable() {
    for (let i = 0; i < data.labels.length; i++) {
        let correctData = transformDateInCorrectFormat(data.labels[i].lastModified);
        let sql = 'INSERT INTO labels (labelID, labelName, labelDescription, description_HTML, lastModified) values (?)'
        let values = [data.labels[i].id, data.labels[i].name, data.labels[i].description, data.labels[i].description_HTML, correctData];
        con.query(sql, [values], (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log('data inserted' + result.affectedRows);
            }
        })
    }
} 

function populateLocationsTable() {
    for (let i = 0; i < data.locations.length; i++) {
        let correctData = transformDateInCorrectFormat(data.locations[i].lastModified);
        let sql = 'INSERT INTO locations (locationID, locationName, locationDescription, description_HTML, lastModified) values (?)'
        let values = [data.locations[i].id, data.locations[i].name, data.locations[i].description, data.locations[i].description_HTML, correctData];
        con.query(sql, [values], (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log('data inserted' + result.affectedRows);
            }
        })
    }
}

function populateLocationsTable() {
    for (let i = 0; i < data.locations.length; i++) {
        let correctData = transformDateInCorrectFormat(data.locations[i].lastModified);
        let sql = 'INSERT INTO locations (locationID, locationName, locationDescription, description_HTML, lastModified) values (?)'
        let values = [data.locations[i].id, data.locations[i].name, data.locations[i].description, data.locations[i].description_HTML, correctData];
        con.query(sql, [values], (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log('data inserted' + result.affectedRows);
            }
        })
    }
}

function populateLocationsAvailabilityTable() {
    for (let i = 0; i < data.locations.length; i++) {
        for (let j = 0; j < data.locations[i].availability.length; j++) {
            let correctStartDate = transformDateInCorrectFormat(data.locations[i].availability[j].startDate);
            let correctEndDate = transformDateInCorrectFormat(data.locations[i].availability[j].endDate);
            let sql = 'INSERT INTO locationAvailability (locationID, startdate, endDate) values (?)'
            let values = [data.locations[i].id, correctStartDate, correctEndDate];
            con.query(sql, [values], (err, result) => {
                if (err) {
                    throw err;
                } else {
                    console.log('data inserted' + result.affectedRows);
                }
            })
        }
        
    }
}

function populateResourcesTable() {
    for (let i = 0; i < data.resources.length; i++) {
        let correctData = transformDateInCorrectFormat(data.resources[i].lastModified);
        let sql = 'INSERT INTO resources (resourceID, resourceName, resourceDescription, description_HTML, lastModified) values (?)'
        let values = [data.resources[i].id, data.resources[i].name, data.resources[i].description, data.resources[i].description_HTML, correctData];
        con.query(sql, [values], (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log('data inserted' + result.affectedRows);
            }
        })
    }
}

function populateTracksTable() {
    for (let i = 0; i < data.tracks.length; i++) {
        let correctData = transformDateInCorrectFormat(data.tracks[i].lastModified);
        let sql = 'INSERT INTO tracks (trackID, trackName, trackDescription, description_HTML, color, lastModified) values (?)'
        let values = [data.tracks[i].id, data.tracks[i].name, data.tracks[i].description, data.tracks[i].description_HTML, data.tracks[i].color, correctData];
        con.query(sql, [values], (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log('data inserted' + result.affectedRows);
            }
        })
    }
}

function populateSessionsTable() {
    for (let i = 0; i < data.sessions.length; i++) {
        let correctData = transformDateInCorrectFormat(data.sessions[i].lastModified);
        let correctStartDate = transformDateInCorrectFormat(data.sessions[i].startDate);
        let correctEndDate = transformDateInCorrectFormat(data.sessions[i].endDate);
        let sql = 'INSERT INTO sessions (sessionID, sessionName, sessionCode, sessionDescription, description_HTML, track, color, startDate, endDate, location, notes, lastModified) values (?)'
        let values = [data.sessions[i].id, data.sessions[i].name, data.sessions[i].code, data.sessions[i].description, data.sessions[i].description_HTML, data.sessions[i].track, data.sessions[i].color, correctStartDate, correctEndDate, data.sessions[i].location, data.sessions[i].notes, correctData];
        con.query(sql, [values], (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log('data inserted' + result.affectedRows);
            }
        })
    }
    let sql = 'INSERT INTO sessions (sessionID) values (?)'
    let values = ['f9d7344f-85ba-4339-a5ed-1e2a8cde01b1'];
    con.query(sql, [values], (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log('data inserted' + result.affectedRows);
        }
    });
}

function populateSessionJoinsTable() {
    for (let i = 0; i < data.contributors.length; i++) {
        for (let j = 0; j < data.contributors[i].sessionJoins.length; j++) {
            let sql = 'INSERT INTO sessionJoins (contributorID, sessionID, contributorRole) values (?)'
            let values = [data.contributors[i].id, data.contributors[i].sessionJoins[j].session, data.contributors[i].sessionJoins[j].role];
            con.query(sql, [values], (err, result) => {
                if (err) {
                    throw err;
                } else {
                    console.log('data inserted' + result.affectedRows);
                }
            })
        }
        
    }
}

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'meetings'
});

con.connect ((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Connected');
        //populateContributorsTable();
        //populateContributorsAvailabilityTable();
        //populateLabelsTable();
        //populateLocationsTable();
        //populateLocationsAvailabilityTable();
        //populateResourcesTable();
        //populateTracksTable();
        //populateSessionsTable();
        //populateSessionJoinsTable();
    }
});
    
