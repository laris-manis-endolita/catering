// Link

const link = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT4ju0tv2OnB4VHdEQ26HU4u14WkrjQRzW1yM6aqk1dzR4rAEwnNTDTI49K_lzju_-kWQEL21Euj8wJ/pub?gid=0&single=true&output=csv";

// Elements

const mondayMenuLabel = document.querySelector("#monday-div").querySelector("#monday-menu");
const tuesdayMenuLabel = document.querySelector("#tuesday-div").querySelector("#tuesday-menu");
const wednesdayMenuLabel = document.querySelector("#wednesday-div").querySelector("#wednesday-menu");
const thursdayMenuLabel = document.querySelector("#thursday-div").querySelector("#thursday-menu");
const fridayMenuLabel = document.querySelector("#friday-div").querySelector("#friday-menu");

// Code

// return `${day.trim()}: ${menuItems}`;

fetch(link)
    .then(res => res.text())
    .then(csv => {
        const rows = csv.split('\n').slice(1);
        
        rows.map(row => {
            const [day, ...items] = row.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
            const menuItems = items.join(',').trim().replace(/^"|"$/g, '');
            
            switch (day.trim())
            {
                case "Senin":
                    mondayMenuLabel.textContent = menuItems;
                    
                    break;
                case "Selasa":
                    tuesdayMenuLabel.textContent = menuItems;

                    break;
                case "Rabu":
                    wednesdayMenuLabel.textContent = menuItems;

                    break;
                case "Kamis":
                    thursdayMenuLabel.textContent = menuItems;

                    break;
                case "Jum'at":
                    fridayMenuLabel.textContent = menuItems;

                    break;
                default: break;
            }
        });
    });