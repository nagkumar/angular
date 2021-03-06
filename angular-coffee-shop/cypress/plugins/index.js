const {lighthouse, pa11y, prepareAudit} = require('cypress-audit');

module.exports = (on, config) =>
{
    on('before:browser:launch', (browser = {}, launchOptions) =>
    {
	prepareAudit(launchOptions);
    });

    on('task', {
	lighthouse: lighthouse(),
	pa11y: pa11y(),
    });
};
