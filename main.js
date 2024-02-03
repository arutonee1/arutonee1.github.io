const sources = [
    { data: 'res/theme.svg', href: 'https://github.com/catppuccin/catppuccin' },
    { data: 'res/gitlab.svg', href: 'https://gitlab.com/arutonee1' },
    { data: 'res/github.svg', href: 'https://github.com/arutonee1' },
    { data: 'res/anilist.svg', href: 'https://anilist.co/user/arutonee/' },
    { data: 'res/youtube.svg', href:'https://www.youtube.com/@arutonee5434' },
    { data: 'res/steam.svg', href: 'https://steamcommunity.com/profiles/76561199436675295/' },
];

let special_bg = false;

const names = [
    'Arutonee',
    'aru',
    'waa!!',
    'Luna',
];

let current_name = Math.floor(Math.random() * names.length);

const quotes = [
    "The dumb one",
    `${(new Date(Date.now() - new Date('Feb, 23, 2009'))).getFullYear() - 1970} y.o.`,
    "Absurdist",
];

let current_quote = Math.floor(Math.random() * quotes.length);

function main() {
    add_sources();
    change_name();
    change_quote();
}

function add_sources() {
    const source_list_el = document.querySelector('#sources');
    for (const source of sources) {
        const el = document.createElement('a');
        el.target = '_blank';
        el.href = source.href;
        el.classList.add('source');
        const svg = document.createElement('div');
        svg.style.mask = `url("${source.data}")`;
        svg.style.maskSize = 'contain';
        svg.style.webkitMask = `url("${source.data}")`;
        svg.style.webkitMaskSize = 'contain';
        el.appendChild(svg);
        source_list_el.appendChild(el);
    }
}

function change_background() {
    if (special_bg) {
        document.body.style.background = 'var(--background-color)';
        document.body.style.animation = '';
    } else {
        document.body.style.background = 'linear-gradient(to right, #5bcefa, #f5a9b8, #ffffff, #f5a9b8, #5bcefa, #f5a9b8, #ffffff, #f5a9b8, #5bcefa)';
        document.body.style.backgroundSize = '200%';
        document.body.style.animation = 'background-pan 1s linear infinite';
    }
    special_bg ^= true;
}

function change_name() {
    current_name = (current_name + 1) % names.length;
    document.querySelector('#name').innerText = names[current_name];
}

function change_quote() {
    current_quote = (current_quote + 1) % quotes.length;
    document.querySelector('#quote').innerText = quotes[current_quote];
}
