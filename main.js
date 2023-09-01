const sources = [
    { data: 'res/theme.svg', href: 'https://github.com/catppuccin/catppuccin' },
    { data: 'res/anilist.svg', href: 'https://anilist.co/user/arutonee/' },
    { data: 'res/youtube.svg', href:'https://www.youtube.com/@arutonee5434' },
    { data: 'res/steam.svg', href: 'https://steamcommunity.com/profiles/76561199436675295/' },
];

function main() {
    add_sources();
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
        el.appendChild(svg);
        source_list_el.appendChild(el);
    }
}
