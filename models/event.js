const { DateTime } = require("luxon");
const events = [
{
    id: '1',
    category: 'UNCC Event',
    title: 'Mens Basketball vs FSU',
    host: 'Charlotte Athletics',
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details: 'asdpiajdfjaspgjasdfkjasd;lfkja fkjasd f;lasdjf adsf asdf;adfs jjlkajaj;dlf'
},
{
    id: '2',
    category: 'UNCC Event',
    title: 'Mens Basketball vs Bruh Wtf',
    host: 'Charlotte Athletics',
    startDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endDate: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    details: 'asdpiajdfjaspgjasdfkjasd;lfkja fkjasd f;lasdjf adsf asdf;adfs jjlkajaj;dlf'
}
];

exports.find = () => events;

exports.findById = id => events.find(event=>event.id === id);