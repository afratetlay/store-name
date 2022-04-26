jQuery('.carousel').slick({
    slidesToShow: 4,
    // dots: true,
    adaptiveHeight: true,
    slidesToScroll: 4,
    infinite: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

var accordion = function accordion() {
    var accordions = document.querySelectorAll('.xgn-accordion');
    accordions.forEach(function (accordion) {
        if (!accordion.classList.contains('xgn-accordion-2')) {

            var items = accordion.querySelectorAll('.xgn-accordion__item');
            items.forEach(function (item) {
                var heading = item.querySelector('.xgn-accordion__heading');
                heading.addEventListener('click', function () {
                    items.forEach(function (i) {
                        if (item !== i) {
                            i.classList.remove('open');
                        }
                    });
                    item.classList.toggle('open');
                });
            });
        }
    });
};

if (!tColours) {
    var tColours = {
        black: 'Black',
        cyan: 'Cyan',
        magenta: 'Magenta',
        yellow: 'Yellow',
        photoBlack: 'Photo Black',
        multi: 'Multipack 3-colours'
    };
}

const productNames = ["Stylus D120","Stylus D120","Stylus DX7400","Stylus DX7400","Stylus DX7400","Stylus DX8400","Stylus DX8400","Stylus DX8400","Stylus DX9400F","Stylus DX9400F","Stylus DX9400F","Stylus SX100","Stylus SX100","Stylus SX100","Stylus SX110","Stylus SX110","Stylus SX110","Stylus SX200","Stylus SX200","Stylus SX200","Stylus SX210","Stylus SX210","Stylus SX210","Stylus SX218","Stylus SX218","Stylus SX218","Stylus SX400","Stylus SX400","Stylus SX400","Stylus SX410","Stylus SX410","Stylus SX410","Stylus SX510W","Stylus SX510W","Stylus SX510W","Stylus SX600FW","Stylus SX600FW","Stylus SX600FW","Stylus SX610FW","Stylus SX610FW","Stylus SX610FW","Stylus Office B40W","Stylus Office B40W","Stylus Office B40W","Stylus Office BX300F","Stylus Office BX300F","Stylus Office BX300F","Stylus Office BX310FN","Stylus Office BX310FN","Stylus Office BX310FN","Stylus SX100","Stylus SX100","Stylus SX100","Stylus SX100","Stylus SX110","Stylus SX110","Stylus SX110","Stylus SX110","Stylus SX200","Stylus SX200","Stylus SX200","Stylus SX200","Stylus SX210","Stylus SX210","Stylus SX210","Stylus SX210","Stylus SX218","Stylus SX218","Stylus SX218","Stylus SX218","Stylus-SX400","Stylus-SX400","Stylus-SX400","Stylus-SX400","Stylus SX410","Stylus SX410","Stylus SX410","Stylus SX410","Stylus Office BX300F","Stylus Office BX300F","Stylus Office BX300F","Stylus Office BX300F","Stylus S22","Stylus S22","Stylus S22","Stylus S22","Stylus SX125","Stylus SX125","Stylus SX125","Stylus SX125","Stylus SX420W","Stylus SX420W","Stylus SX420W","Stylus SX420W","Stylus SX430W","Stylus SX430W","Stylus SX430W","Stylus SX430W","Stylus SX440W","Stylus SX440W","Stylus SX440W","Stylus SX440W","Stylus Office BX305F","Stylus Office BX305F","Stylus Office BX305F","Stylus Office BX305F","Stylus Office BX305FW","Stylus Office BX305FW","Stylus Office BX305FW","Stylus Office BX305FW","Stylus Office BX305FW Plus","Stylus Office BX305FW Plus","Stylus Office BX305FW Plus","Stylus Office BX305FW Plus"];

if (!_approxText) var _approxText = 'Approx. page yield based on ISO/IEC 24711/24712 or ISO/IEC 29102/29103. Actual yield will vary depending on images printed and usage conditions.';
if (!_approxTextOne) var _approxTextOne = 'Yield information for this printer is based on Epson estimated pages using the following colour page test suite.';
if (!_yieldInfoText) var _yieldInfoText = 'Yield info';
if (!_approx) var _approx = 'Approx.';
if (!_seriesF) var _seriesF = '';
if (!_seriesB) var _seriesB = ' Series';
if (!_pages) var _pages = ' pages';


const populate = (data) => {

    const contentElement = document.getElementById('content');
    const cats = Object.entries(data.inkjet);

    let pagesHTML = '';
    cats.forEach((cat, index) => {

        const accID = cat[0]
            .toLowerCase()
            .replace(' ', '-');

        const products = cat[1].devices;
        let accItemsHTML = '';
        products.forEach(product => {

            let tablesHTML = '';
            let tablesPhotoHTML = '';

            if (product.hasOwnProperty('inks')) {

                for (let key in product.inks) {
                    
                    let rowsHTML = '';
                    let rowsPhotoHTML = '';
                    if (product.inks[key].length) {

                        product.inks[key].forEach(c => {
    
                            let colour = '';
                            if (Array.isArray(c.colours)) {
                                
                                switch (c.colours[0]) {
                                    case 'k':
                                        colour = tColours.black;
                                        break;
                                    case 'c':
                                        colour = tColours.cyan
                                        break;
                                    case 'm':
                                        colour = tColours.magenta
                                        break;
                                    case 'y':
                                        colour = tColours.yellow
                                        break;
                                    case 'multi3':
                                        colour = tColours.multi
                                        break;
                                    case 'pk':
                                        colour = tColours.photoBlack
                                        break;
                                    }
                            } else {
                                colour = 'Multipack 3-colours'
                            }
                            
                            const rowHTML = 
                                `<tr>
                                    <td>${key}</td>
                                    <td>${colour}</td>
                                    <td>${_approx} ${c.yield} ${_pages}</td>
                                </tr>`;
    
                            if (c.colours[0] !== 'pk') {
    
                                rowsHTML = rowsHTML + rowHTML;
                            } else {
                                rowsPhotoHTML = rowsPhotoHTML + rowHTML;
                            }
                        });
                    }
                    
                    const tableHTML = 
                        `<div class="tablewrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th colspan="3">${_seriesF + key + _seriesB}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${rowsHTML}
                                </tbody>
                            </table>
                        </div>`;

                    tablesHTML = tablesHTML + tableHTML;

                    if (rowsPhotoHTML != '') {

                        const tablePhotoHTML = 
                            `<table>
                                <thead>
                                    <tr>
                                        <th colspan="3">${key} Series</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${rowsPhotoHTML}
                                </tbody>
                            </table>`;

                            tablesPhotoHTML = tablesPhotoHTML + tablePhotoHTML;
                    }
                }
            }

            const 

            const accItemHTML = 
                `<div class="xgn-accordion__item">
                    <div class="xgn-accordion__heading">
                        ${product.title}
                        <span class="xgn-accordion__toggle"></span>
                    </div>
                    <div class="xgn-accordion__body">
                        <div class="xgn-accordion__content">
                            <div class="cols">
                                <div class="col-1st">
                                    <img src="https:${product.img}" alt="${product.title}" />
                                    <div class="smalltext">${_approxText}</div>
                                    <img src="https://neon.epson-europe.com/files/repo/2017/ISOYield/Images/yield-test-suite.jpg" alt="Yield test suite" />
                                </div>
                                <div class="col-2nd yield-info">
                                    <h6>${_yieldInfoText}</h6>
                                    ${tablesHTML}
                                    ${tablesPhotoHTML != '' ? '<h6 style="padding-top: 30px;">Page Yield Info</h6>' : ''}
                                    ${tablesPhotoHTML != '' ? tablesPhotoHTML : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            
            accItemsHTML = accItemsHTML + accItemHTML;
        });

        const accHTML = `<div id="${accID}" class="xgn-accordion${index === 0 ? ' active' : ''}">${accItemsHTML}</div>`;

        pagesHTML = pagesHTML + accHTML;
    });
    contentElement.innerHTML = pagesHTML;
    accordion();

    const links = document.querySelectorAll('.carousel a');
    const pages = document.querySelectorAll('.xgn-accordion');
    const titleElement = document.getElementById('topTitle');
    const $cont = $('#topTitle');

    links.forEach(link => {

        link.addEventListener('click', () => {

            $('html, body').animate({
                scrollTop: $cont.offset().top
            }, 300);

            const title = link.querySelector('span').innerText;
            titleElement.innerText = title;

            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const linkTo = link.getAttribute('href');

            pages.forEach(p => {

                const pID = `#${p.getAttribute('id')}`;

                document.querySelectorAll('.xgn-accordion__item').forEach(i => i.classList.remove('open'))
                
                if (linkTo === pID) {
                    p.classList.add('active');
                } else {
                    p.classList.remove('active');
                }
            });
        });
    });
}

// if (!cclc) 
var cclc = 'xe-en,gb-en,ru-ru';

const feedURL = 'https://neon.epson-europe.com/frame/interfaces/yieldcoverage.php?locale='+cclc;
const request = new Request(feedURL);

fetch(request)
.then(res => res.json())
.then(data => {
    console.log(data);
    populate(data);
})
.catch(console.error);