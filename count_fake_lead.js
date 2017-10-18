var fakeLeadCount = 0;
var id = [];

db.person.find({"leads.status": "FAKE"}).forEach(function(person) {
	person.leads.forEach(function(lead) {
        if (lead.status === 'FAKE') {
         fakeLeadCount += 1;
         id.push(person._id);
        }
	});
});

print(fakeLeadCount);
printjson(id);