const loadData = () => {
    fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
        .then(response => response.json())
        .then(data => {
            const item = data.sports;
            const section = document.getElementById('section');
            item.forEach(items => {
                const div = document.createElement('div');
                div.classList.add('box');
                if (items.strSport === undefined && items.strSportThumb === true) {
                    div.style.display = 'none';
                }
                else {
                    div.innerHTML = `
                    <div class="img">
                        <img src="${items.strSportThumb}">
                    </div>
                    <div class = "text">
                        <div class = "team">
                            <img src = "${items.strSportIconGreen}">
                            <h5>${items.strSport}</h5>
                        </div>
                        <h6>${items.strSportDescription.slice(0,150)}</h6 >
                    </div>
                `
                }

                section.appendChild(div)
            })
        })
};
loadData();