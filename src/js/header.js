const nav_bgc = '#0000A0'; // navigation background color
const active_link = document.getElementById('active');

var switch_back = true;

const nav_m_e = function(elem) { // navigation mouse enter
    if (elem.id !== 'active') {
        active_link.style.backgroundColor = nav_bgc;
        active_link.style.color = 'white';

        elem.style.backgroundColor = 'white';
        elem.style.color = 'black';
    }
};

const nav_m_l = function(elem) { // navigation mouse leave
    if (elem.id !== 'active' && switch_back) {
        active_link.style.backgroundColor = 'white';
        active_link.style.color = 'black';

        elem.style.backgroundColor = nav_bgc;
        elem.style.color = 'white';
    }
};

// keep selected tab highlighted during reroute
const nav_m_u = function() { // navigation mouse up
    switch_back = false;
};
