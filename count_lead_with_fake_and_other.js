var fakeLeadWithLeadCount = 0;

db.person.find({"leads.status": "FAKE"}).forEach(function(person) {
	if (person.leads.length > 1 && hasAnotherLead(person)) {
		fakeLeadWithLeadCount += 1;
	}
});

function hasAnotherLead(person) {
	var leadsWithoutFake = person.leads.filter(function(lead) {
		return lead.status !== 'FAKE';
	});

	var leadCheckList = leadsWithoutFake.filter(function(leadNotFake) {
		return ((leadNotFake.status === 'LEAD') && (leadNotFake.ownerSalesConsultantId !== undefined)) ||
		(leadNotFake.status === 'UNSUCCESSFUL') ||
		(leadNotFake.status === 'LOST_SALES') ||
		(leadNotFake.status === 'SUCCESSFUL');
	});
	return leadCheckList.length > 0;
}

print(fakeLeadWithLeadCount);
