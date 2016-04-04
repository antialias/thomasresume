const system = require('system');
const page = require('webpage').create();
const address = "thomas_hallock_resume.html";
const output = "thomas_hallock_resume.pdf";

page.viewportSize = {
    width: 600,
    height: 600
};
page.paperSize = {
    format: 'Letter',
    orientation: 'portrait',
    margin: '1cm'
};
page.open(address, function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
    } else {
        page.render(output);
    }
    phantom.exit();
});
