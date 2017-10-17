var fakeLeadCount = 0;

db.person.find({"leads.status": "FAKE"}).forEach(function(person) {
	person.leads.forEach(function(lead) {
        if (lead.status === 'FAKE') {
         fakeLeadCount += 1;
        }
	});
});

print(fakeLeadCount);