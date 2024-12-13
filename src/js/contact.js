var address = document.getElementById('address');
var rev_cl = 'reveal'; // reveal class

var obs_email, obs_phone, obs_phone_href, obs_address;
obs_email = ['gag', 'esw', 'ens', 'on@', 'gma', 'il.', 'com'];
obs_phone_href = ['+18', '08-', '756', '-63', '50'];
obs_phone = ['+1 ', '(80', '8) ', '756', '-63', '50'];
obs_address = [
    'Gag', 'e S', 'wen', 'son', '<br>',
//    'PO ', 'Box', ' 12', '11<', 'br>',
//    'Kai', 'lua', '-Ko', 'na,', ' HI', ' 96', '745', '<br>',
//    'PO ', 'Box', ' 86', '148', '4<b', 'r>',
//    'Wah', 'iaw', 'a, ', 'HI ', '967', '86<', 'br>',
//    '175', '0 K', 'ala', 'kau', 'a A', 've', '<br>',
//    'Hon', 'olu', 'lu,', ' HI', ' 96', '826',
      'PO ', 'Box', ' 22', '402', '<br', '>',
      'Hon', 'olu', 'lu,', ' HI', ' 96', '823', '<br', '>',
];

const deobfuscate = function(arr) {
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
};

const email = deobfuscate(obs_email);
const email_href = 'mailto: ' + email;

const reveal_gmail = function(elem) {
    elem.onclick = null;
    elem.href = email_href;
};

const reveal_email = function(elem) {
    elem.onclick = null;
    elem.innerHTML = email;
    elem.href = email_href;
    elem.classList.remove(rev_cl);
};

const reveal_phone = function(elem) {
    elem.onclick = null;
    elem.innerHTML = deobfuscate(obs_phone);
    elem.href = 'tel: ' + deobfuscate(obs_phone_href);
    elem.classList.remove(rev_cl);
};

const reveal_address = function(elem) {
    elem.remove();
    address.innerHTML = deobfuscate(obs_address);
};
