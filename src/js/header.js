const nav_bgc = '#0000A0'; // navigation background color
const active_link = document.getElementById('active');

var switch_back = true;

const nav_m_e = function(e) { // navigation mouse enter
    if (e.id !== 'active') {
        active_link.style.backgroundColor = nav_bgc;
        active_link.style.color = 'white';

        e.style.backgroundColor = 'white';
        e.style.color = 'black';
    }
}

const nav_m_l = function(e) { // navigation mouse leave
    if (e.id !== 'active' && switch_back) {
        active_link.style.backgroundColor = 'white';
        active_link.style.color = 'black';

        e.style.backgroundColor = nav_bgc;
        e.style.color = 'white';
    }
}

// keep selected tab highlighted during reroute
const nav_m_u = function(_) { // navigation mouse up
    switch_back = false;
}
