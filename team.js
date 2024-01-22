function authenticateUser(teamFunction) {
    // Prompt user for username and password
    const username = prompt('Enter your username:');
    const password = prompt('Enter your password:');

    // Check if the provided username and password are correct
    const isAuthenticationSuccessful = checkCredentials(username, password);

    if (isAuthenticationSuccessful) {
        // If authentication is successful, call the team-specific function
        teamFunction();
    } else {
        // If authentication fails, display an error message or take appropriate action
        alert('dai swantham group aano nokkunne');
    }
}

function checkCredentials(username, password) {
    // Replace these static values with your actual username and password for each team
    const teamOneCredentials = { username: '1', password: '1' };
    const teamTwoCredentials = { username: '2', password: '2' };
    const teamThreeCredentials = { username: '3', password: '3' };
    const teamFourCredentials = { username: '4', password: '4' };

    // Check if the provided username and password match the credentials for the respective team
    if (username === teamOneCredentials.username && password === teamOneCredentials.password) {
        return true;
    } else if (username === teamTwoCredentials.username && password === teamTwoCredentials.password) {
        return true;
    } else if (username === teamThreeCredentials.username && password === teamThreeCredentials.password) {
        return true;
    } else if (username === teamFourCredentials.username && password === teamFourCredentials.password) {
        return true;
    } else {
        return false;
    }
}

//-----------------------------------------------TEAM-A START---------------------------------------------------------------

function groupOne(obj) {
    authenticateUser(() => {
    highlightButton(obj);
    let divElement1 = document.getElementById('team-a');//parentdiv of  div , which displays names of student of team 1
    let container1 = document.getElementById('content1');
    let container2 = document.getElementById('content2');
    let container3 = document.getElementById('content3');
    let container4 = document.getElementById('content4');
    container1.style.display = 'block';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';

    let team_space = document.getElementById('team');//space on the card where the name of team is shown
    let nameOfTeam = obj.textContent;
    team_space.innerHTML = nameOfTeam;

    //-----------------------------------------------TEAM-A AL START---------------------------------------------------------------
    let SHEET_ID_ = '1U9sExd3ImkNR325OOD9QLcpr_1HRgbWSi3Ammc6Lstw';
    let SHEET_TITLE_ = 'Sheet1';
    let SHEET_RANGE_ = 'B3:BS31';

    let FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

    fetch(FULL_URL_)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            var rowLength = data.table.rows.length;

            for (let i = 0; i < rowLength; i++) {
                if (data.table.rows[i].c[0].v != null) {
                    let newDiv = document.createElement('div');
                    newDiv.id = ("box" + i);
                    newDiv.className = "aal";
                    divElement1.appendChild(newDiv);
                    newDiv.innerHTML = data.table.rows[i].c[0].v;


                    newDiv.onclick = function () {

                        displayValue_al_on(this.textContent);

                    }
                } else {
                    continue;
                }
            }

            let name_space = document.getElementById('name');// h1 to show name of the students
            let onstage_div = document.getElementById("items-div");// div to show the participating items
            let num_admit = document.getElementById('num-admit');
            let category = document.getElementById('cate');
            let class_space = document.getElementById('class');

            var colLength = data.table.cols.length;




            function displayValue_al_on(name_div) {
                // Clear the existing content in onstage_div
                const onstage_div = document.getElementById("items-div");
                onstage_div.innerHTML = '';

                for (let i = 0; i < rowLength; i++) {
                    if (data.table.rows[i].c[0].v == name_div) {
                        name_space.innerHTML = data.table.rows[i].c[0].v;
                        num_admit.innerHTML = data.table.rows[i].c[69].v;
                        category.innerHTML = data.table.rows[i].c[68].v;
                        class_space.innerHTML = data.table.rows[i].c[67].v;
                        dataSearch_al_on(i);
                        showContainerBox();
                        return i;
                    }
                }
            }

            function showContainerBox() {
                // Display the container-box
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Disable scrolling
            }

            function hideContainerBox() {
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }

            function closeContainerBox() {
                hideContainerBox();
            }

            // Add an event listener to close the container box on overlay click
            const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
            overlay.addEventListener('click', closeContainerBox);

            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    closeContainerBox();
                }
            });



            function dataSearch_al_on(index) {
                let colLength_items = colLength - 5
                for (let i = 1; i < colLength_items; i++) {
                    if (i == 23 || i == 24 || i == 49 || i == 50 || i == 51) {//add
                        console.log("continued : " + i);
                        continue;
                    } else {
                        if (data.table.rows[index].c[i].v == true) {
                            insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                            console.log("inserted : " + i)
                        }
                    }
                }
            }

            function insertElement_al_on(div, data) {
                let newElement = document.createElement('p');
                let signBlock = document.createElement('p');
                newElement.className = 'programs';
                signBlock.className = 'programs';
                div.append(newElement);
                div.append(signBlock);
                newElement.innerHTML = data;
            }

        }
        )
    //-----------------------------------------------TEAM-A AL END---------------------------------------------------------------    
    //-----------------------------------------------TEAM-A TH START---------------------------------------------------------------    
    SHEET_ID_ = '1U9sExd3ImkNR325OOD9QLcpr_1HRgbWSi3Ammc6Lstw';
    SHEET_TITLE_ = 'Sheet1';
    SHEET_RANGE_ = 'B34:BS47';

    FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

    fetch(FULL_URL_)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            var rowLength = data.table.rows.length;//parent div containin the card div

            console.log(data.table)

            for (let i = 0; i < rowLength; i++) {
                if (data.table.rows[i].c[0].v != null) {
                    let newDiv = document.createElement('div');
                    newDiv.id = ("box" + i);
                    newDiv.className = "aal";
                    divElement1.appendChild(newDiv);
                    newDiv.innerHTML = data.table.rows[i].c[0].v;


                    newDiv.onclick = function () {
                        displayValue_al_on(this.textContent);

                    }
                } else {
                    continue;
                }
            }

            let name_space = document.getElementById('name');// h1 to show name of the students
            let onstage_div = document.getElementById("items-div");// div to show the participating items
            let num_admit = document.getElementById('num-admit');
            let category = document.getElementById('cate');
            let class_space = document.getElementById('class');

            var colLength = data.table.cols.length;

            function displayValue_al_on(name_div) {
                // Clear the existing content in onstage_div
                const onstage_div = document.getElementById("items-div");
                onstage_div.innerHTML = '';
                for (let i = 0; i < rowLength; i++) {
                    if (data.table.rows[i].c[0].v == name_div) {
                        name_space.innerHTML = data.table.rows[i].c[0].v;
                        num_admit.innerHTML = data.table.rows[i].c[69].v;
                        category.innerHTML = data.table.rows[i].c[68].v;
                        class_space.innerHTML = data.table.rows[i].c[67].v;
                        dataSearch_al_on(i);

                        showContainerBox();
                        return i;
                    }
                }
            }

            function showContainerBox() {
                // Display the container-box
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Disable scrolling
            }

            function hideContainerBox() {
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }

            function closeContainerBox() {
                hideContainerBox();
            }

            // Add an event listener to close the container box on overlay click
            const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
            overlay.addEventListener('click', closeContainerBox);

            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    closeContainerBox();
                }
            });

            function dataSearch_al_on(index) {
                let colLength_items = colLength - 5
                for (let i = 1; i < colLength_items; i++) {
                    if (i == 21 || i == 22 || i == 38 || i == 39 || i == 53 || i == 54 || i == 55 || i == 56 || i == 57 || i == 58 || i == 59 || i == 60 || i == 61 || i == 62 || i == 63 || i == 64 || i == 65 || i == 53 || i == 54 || i == 55 || i == 56 || i == 57 || i == 58 || i == 59 || i == 60 || i == 61 || i == 62 || i == 63 || i == 64 || i == 65) {//add
                        console.log("continued : " + i);
                        continue;
                    } else {
                        if (data.table.rows[index].c[i].v == true) {
                            insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                            console.log("inserted : " + i)
                        }
                    }
                }
            }

            function insertElement_al_on(div, data) {
                let newElement = document.createElement('p');
                let signBlock = document.createElement('p');
                newElement.className = 'programs';
                signBlock.className = 'programs';
                div.append(newElement);
                div.append(signBlock);
                newElement.innerHTML = data;
            }
        }
        )
    })
}
//-----------------------------------------------TEAM-A TH END---------------------------------------------------------------

//-----------------------------------------------TEAM-A END---------------------------------------------------------------

//-----------------------------------------------TEAM-B START---------------------------------------------------------------

function groupTwo(obj) {
    authenticateUser(() => {
    highlightButton(obj);
    let divElement2 = document.getElementById('team-b');//parentdiv of  div , which displays names of student of team 2
    let container1 = document.getElementById('content1');
    let container2 = document.getElementById('content2');
    let container3 = document.getElementById('content3');
    let container4 = document.getElementById('content4');
    container1.style.display = 'none';
    container2.style.display = 'block';
    container3.style.display = 'none';
    container4.style.display = 'none';

    let team_space = document.getElementById('team');//space on the card where the name of team is shown
    let nameOfTeam = obj.textContent;
    team_space.innerHTML = nameOfTeam;

    //-----------------------------------------------TEAM-B AL START---------------------------------------------------------------    

    let SHEET_ID_ = '1fy4PgnXgTnX9LeADb3v-Qp57Caz0C4tGjwRfbF1slQk';
    let SHEET_TITLE_ = 'Sheet1';
    let SHEET_RANGE_ = 'B3:BS30';

    let FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

    fetch(FULL_URL_)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            var rowLength = data.table.rows.length;

            for (let i = 0; i < rowLength; i++) {
                if (data.table.rows[i].c[0].v != null) {
                    let newDiv = document.createElement('div');
                    newDiv.id = ("box" + i);
                    newDiv.className = "aal";
                    divElement2.appendChild(newDiv);
                    newDiv.innerHTML = data.table.rows[i].c[0].v;


                    newDiv.onclick = function () {
                        displayValue_al_on(this.textContent);

                    }
                } else {
                    continue;
                }
            }

            let name_space = document.getElementById('name');// h1 to show name of the students
            let onstage_div = document.getElementById("items-div");// div to show the participating items
            let num_admit = document.getElementById('num-admit');
            let category = document.getElementById('cate');
            let class_space = document.getElementById('class');

            var colLength = data.table.cols.length;




            function displayValue_al_on(name_div) {
                // Clear the existing content in onstage_div
                const onstage_div = document.getElementById("items-div");
                onstage_div.innerHTML = '';
                for (let i = 0; i < rowLength; i++) {
                    if (data.table.rows[i].c[0].v == name_div) {
                        name_space.innerHTML = data.table.rows[i].c[0].v;
                        num_admit.innerHTML = data.table.rows[i].c[69].v;
                        category.innerHTML = data.table.rows[i].c[68].v;
                        class_space.innerHTML = data.table.rows[i].c[67].v;
                        dataSearch_al_on(i);
                        showContainerBox();
                        return i;
                    }
                }
            }

            function showContainerBox() {
                // Display the container-box
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Disable scrolling
            }

            function hideContainerBox() {
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }

            function closeContainerBox() {
                hideContainerBox();
            }

            // Add an event listener to close the container box on overlay click
            const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
            overlay.addEventListener('click', closeContainerBox);

            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    closeContainerBox();
                }
            });

            function dataSearch_al_on(index) {
                let colLength_items = colLength - 5;
                console.log(data.table)
                for (let i = 1; i < colLength_items; i++) {
                    console.log(i)
                    if (i == 23 || i == 24 || i == 49 || i == 50 || i == 64 || i == 65) {//add
                        console.log("continued : " + i);
                        continue;
                    } else {
                        if (data.table.rows[index].c[i].v == true) {
                            insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                            console.log("inserted : " + i)
                        }
                    }
                }
            }

            function insertElement_al_on(div, data) {
                let newElement = document.createElement('p');
                let signBlock = document.createElement('p');
                newElement.className = 'programs';
                signBlock.className = 'programs';
                div.append(newElement);
                div.append(signBlock);
                newElement.innerHTML = data;
            }
        }
        )
    //-----------------------------------------------TEAM-B AL END--------------------------------------------------------------- 

    //-----------------------------------------------TEAM-B TH START---------------------------------------------------------------    

    SHEET_ID_ = '1fy4PgnXgTnX9LeADb3v-Qp57Caz0C4tGjwRfbF1slQk';
    SHEET_TITLE_ = 'Sheet1';
    SHEET_RANGE_ = 'B34:BS47';
    FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

    fetch(FULL_URL_)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            var rowLength = data.table.rows.length;


            for (let i = 0; i < rowLength; i++) {
                if (data.table.rows[i].c[0].v != null) {
                    let newDiv = document.createElement('div');
                    newDiv.id = ("box" + i);
                    newDiv.className = "aal";
                    divElement2.appendChild(newDiv);
                    newDiv.innerHTML = data.table.rows[i].c[0].v;


                    newDiv.onclick = function () {
                        displayValue_al_on(this.textContent);

                    }
                } else {
                    continue;
                }
            }

            let name_space = document.getElementById('name');// h1 to show name of the students
            let onstage_div = document.getElementById("items-div");// div to show the participating items
            let num_admit = document.getElementById('num-admit');
            let category = document.getElementById('cate');
            let class_space = document.getElementById('class');

            var colLength = data.table.cols.length;




            function displayValue_al_on(name_div) {
                // Clear the existing content in onstage_div
                const onstage_div = document.getElementById("items-div");
                onstage_div.innerHTML = '';
                for (let i = 0; i < rowLength; i++) {
                    if (data.table.rows[i].c[0].v == name_div) {
                        name_space.innerHTML = data.table.rows[i].c[0].v;
                        num_admit.innerHTML = data.table.rows[i].c[69].v;
                        category.innerHTML = data.table.rows[i].c[68].v;
                        class_space.innerHTML = data.table.rows[i].c[67].v;
                        dataSearch_al_on(i);
                        showContainerBox();
                        return i;
                    }
                }
            }

            function showContainerBox() {
                // Display the container-box
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Disable scrolling
            }

            function hideContainerBox() {
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }

            function closeContainerBox() {
                hideContainerBox();
            }

            // Add an event listener to close the container box on overlay click
            const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
            overlay.addEventListener('click', closeContainerBox);

            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    closeContainerBox();
                }
            });

            function dataSearch_al_on(index) {
                let colLength_items = colLength - 5
                for (let i = 1; i < colLength_items; i++) {
                    if (i == 21 || i == 22 || i == 38 || i == 39 || i == 53 || i == 54 || i == 55 || i == 56 || i == 57 || i == 58 || i == 59 || i == 60 || i == 61 || i == 62 || i == 63 || i == 64 || i == 65) {//add
                        console.log("continued : " + i);
                        continue;
                    } else {
                        if (data.table.rows[index].c[i].v == true) {
                            insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                            console.log("inserted : " + i)
                        }
                    }
                }
            }

            function insertElement_al_on(div, data) {
                let newElement = document.createElement('p');
                let signBlock = document.createElement('p');
                newElement.className = 'programs';
                signBlock.className = 'programs';
                div.append(newElement);
                div.append(signBlock);
                newElement.innerHTML = data;
            }
        }
        )
    })
}
//-----------------------------------------------TEAM-B TH END---------------------------------------------------------------

//-----------------------------------------------TEAM-B END---------------------------------------------------------------

//-----------------------------------------------TEAM-C START---------------------------------------------------------------

function groupThree(obj) {
    authenticateUser(() =>{
    highlightButton(obj);
    let divElement3 = document.getElementById('team-c');//parentdiv of  div , which displays names of student of team 3
    let container1 = document.getElementById('content1');
    let container2 = document.getElementById('content2');
    let container3 = document.getElementById('content3');
    let container4 = document.getElementById('content4');
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'block';
    container4.style.display = 'none';

    let team_space = document.getElementById('team');//space on the card where the name of team is shown
    let nameOfTeam = obj.textContent;

    team_space.innerHTML = nameOfTeam;
    //-----------------------------------------------TEAM-C AL START---------------------------------------------------------------
    let SHEET_ID_ = '1mhz_L4pnpQH_Z90LrDYh4e2Lj_GHEx-_M2GCd-GJwCo';
    let SHEET_TITLE_ = 'Sheet1';
    let SHEET_RANGE_ = 'B3:BS31';

    let FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

    fetch(FULL_URL_)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            var rowLength = data.table.rows.length;

            for (let i = 0; i < rowLength; i++) {

                if (data.table.rows[i].c[0].v != null) {
                    let newDiv = document.createElement('div');
                    newDiv.id = ("box" + i);
                    newDiv.className = "aal";
                    divElement3.appendChild(newDiv);
                    newDiv.innerHTML = data.table.rows[i].c[0].v;


                    newDiv.onclick = function () {
                        displayValue_al_on(this.textContent);

                    }
                } else {
                    continue;
                }
            }

            let name_space = document.getElementById('name');// h1 to show name of the students
            let onstage_div = document.getElementById("items-div");// div to show the participating items
            let num_admit = document.getElementById('num-admit');
            let category = document.getElementById('cate');
            let class_space = document.getElementById('class');

            var colLength = data.table.cols.length;




            function displayValue_al_on(name_div) {
                // Clear the existing content in onstage_div
                const onstage_div = document.getElementById("items-div");
                onstage_div.innerHTML = '';
                console.log(data.table)
                for (let i = 0; i < rowLength; i++) {
                    if (data.table.rows[i].c[0].v == name_div) {
                        name_space.innerHTML = data.table.rows[i].c[0].v;
                        num_admit.innerHTML = data.table.rows[i].c[69].v;
                        category.innerHTML = data.table.rows[i].c[68].v;
                        class_space.innerHTML = data.table.rows[i].c[67].v;
                        dataSearch_al_on(i);
                        showContainerBox();
                        return i;
                    }
                }
            }

            function showContainerBox() {
                // Display the container-box
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Disable scrolling
            }

            function hideContainerBox() {
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }

            function closeContainerBox() {
                hideContainerBox();
            }

            // Add an event listener to close the container box on overlay click
            const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
            overlay.addEventListener('click', closeContainerBox);

            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    closeContainerBox();
                }
            });

            function dataSearch_al_on(index) {
                let colLength_items = colLength - 5
                for (let i = 1; i < colLength_items; i++) {
                    if (i == 23 || i == 24 || i == 49 || i == 50 || i == 64 || i == 65) {//add
                        console.log("continued : " + i);
                        continue;
                    } else {
                        if (data.table.rows[index].c[i].v == true) {
                            insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                            console.log("inserted : " + i)
                        }
                    }
                }
            }

            function insertElement_al_on(div, data) {
                let newElement = document.createElement('p');
                let signBlock = document.createElement('p');
                newElement.className = 'programs';
                signBlock.className = 'programs';
                div.append(newElement);
                div.append(signBlock);
                newElement.innerHTML = data;
            }
        }
        )
    //-----------------------------------------------TEAM-C AL END---------------------------------------------------------------

    //-----------------------------------------------TEAM-C TH START---------------------------------------------------------------
    SHEET_ID_ = '1mhz_L4pnpQH_Z90LrDYh4e2Lj_GHEx-_M2GCd-GJwCo';
    SHEET_TITLE_ = 'Sheet1';
    SHEET_RANGE_ = 'B34:BS47';

    FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

    fetch(FULL_URL_)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            var rowLength = data.table.rows.length;

            for (let i = 0; i < rowLength; i++) {

                if (data.table.rows[i].c[0].v != null) {
                    let newDiv = document.createElement('div');
                    newDiv.id = ("box" + i);
                    newDiv.className = "aal";
                    divElement3.appendChild(newDiv);
                    newDiv.innerHTML = data.table.rows[i].c[0].v;


                    newDiv.onclick = function () {
                        displayValue_al_on(this.textContent);

                    }
                } else {
                    continue;
                }
            }

            let name_space = document.getElementById('name');// h1 to show name of the students
            let onstage_div = document.getElementById("items-div");// div to show the participating items
            let num_admit = document.getElementById('num-admit');
            let category = document.getElementById('cate');
            let class_space = document.getElementById('class');

            var colLength = data.table.cols.length;




            function displayValue_al_on(name_div) {
                // Clear the existing content in onstage_div
                const onstage_div = document.getElementById("items-div");
                onstage_div.innerHTML = '';
                for (let i = 0; i < rowLength; i++) {
                    if (data.table.rows[i].c[0].v == name_div) {
                        name_space.innerHTML = data.table.rows[i].c[0].v;
                        num_admit.innerHTML = data.table.rows[i].c[69].v;
                        category.innerHTML = data.table.rows[i].c[68].v;
                        class_space.innerHTML = data.table.rows[i].c[67].v;
                        dataSearch_al_on(i);
                        showContainerBox();
                        return i;
                    }
                }
            }

            function showContainerBox() {
                // Display the container-box
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Disable scrolling
            }

            function hideContainerBox() {
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }

            function closeContainerBox() {
                hideContainerBox();
            }

            // Add an event listener to close the container box on overlay click
            const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
            overlay.addEventListener('click', closeContainerBox);

            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    closeContainerBox();
                }
            });

            function dataSearch_al_on(index) {
                let colLength_items = colLength - 5
                for (let i = 1; i < colLength_items; i++) {
                    if (i == 21 || i == 22 || i == 38 || i == 39 || i == 53 || i == 54 || i == 55 || i == 56 || i == 57 || i == 58 || i == 59 || i == 60 || i == 61 || i == 62 || i == 63 || i == 64 || i == 65) {//add
                        console.log("continued : " + i);
                        continue;
                    } else {
                        if (data.table.rows[index].c[i].v == true) {
                            insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                            console.log("inserted : " + i)
                        }
                    }
                }
            }

            function insertElement_al_on(div, data) {
                let newElement = document.createElement('p');
                let signBlock = document.createElement('p');
                newElement.className = 'programs';
                signBlock.className = 'programs';
                div.append(newElement);
                div.append(signBlock);
                newElement.innerHTML = data;
            }
        }
        )
    })
}
//-----------------------------------------------TEAM-C TH END---------------------------------------------------------------

//-----------------------------------------------TEAM-C END---------------------------------------------------------------

//-----------------------------------------------TEAM-D START---------------------------------------------------------------

function groupFour(obj) {
    authenticateUser(() => {
    highlightButton(obj);
    let divElement4 = document.getElementById('team-d');//parentdiv of  div , which displays names of student of team 4
    let container1 = document.getElementById('content1');
    let container2 = document.getElementById('content2');
    let container3 = document.getElementById('content3');
    let container4 = document.getElementById('content4');
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'block';

    let team_space = document.getElementById('team');//space on the card where the name of team is shown
    let nameOfTeam = obj.textContent;

    team_space.innerHTML = nameOfTeam;

    //-----------------------------------------------TEAM-D AL START---------------------------------------------------------------
    let SHEET_ID_ = '13C4Rrjs30ZthjizAnBIsUIojjV88LbwKpCRSW4RXja4';
    let SHEET_TITLE_ = 'Sheet1';
    let SHEET_RANGE_ = 'B3:BS31';

    let FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

    fetch(FULL_URL_)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            var rowLength = data.table.rows.length;
            console.log(rowLength);
            for (let i = 0; i < rowLength; i++) {
                console.log(i)
                if (data.table.rows[i].c[0].v != null) {
                    let newDiv = document.createElement('div');
                    newDiv.id = ("box" + i);
                    newDiv.className = "aal";
                    divElement4.appendChild(newDiv);
                    newDiv.innerHTML = data.table.rows[i].c[0].v;


                    newDiv.onclick = function () {
                        displayValue_al_on(this.textContent);

                    }
                } else {
                    continue;
                }
            }

            let name_space = document.getElementById('name');// h1 to show name of the students
            let onstage_div = document.getElementById("items-div");// div to show the participating items
            let num_admit = document.getElementById('num-admit');
            let category = document.getElementById('cate');
            let class_space = document.getElementById('class');

            var colLength = data.table.cols.length;




            function displayValue_al_on(name_div) {
                // Clear the existing content in onstage_div
                const onstage_div = document.getElementById("items-div");
                onstage_div.innerHTML = '';
                for (let i = 0; i < rowLength; i++) {
                    if (data.table.rows[i].c[0].v == name_div) {
                        name_space.innerHTML = data.table.rows[i].c[0].v;
                        num_admit.innerHTML = data.table.rows[i].c[69].v;
                        category.innerHTML = data.table.rows[i].c[68].v;
                        class_space.innerHTML = data.table.rows[i].c[67].v;
                        dataSearch_al_on(i);
                        showContainerBox();
                        return i;
                    }
                }
            }

            function showContainerBox() {
                // Display the container-box
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Disable scrolling
            }

            function hideContainerBox() {
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }

            function closeContainerBox() {
                hideContainerBox();
            }

            // Add an event listener to close the container box on overlay click
            const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
            overlay.addEventListener('click', closeContainerBox);

            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    closeContainerBox();
                }
            });

            function dataSearch_al_on(index) {
                let colLength_items = colLength - 5
                for (let i = 1; i < colLength_items; i++) {
                    if (i == 23 || i == 24 || i == 49 || i == 50 || i == 51) {//add
                        console.log("continued : " + i);
                        continue;
                    } else {
                        if (data.table.rows[index].c[i].v == true) {
                            insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                            console.log("inserted : " + i)
                        }
                    }
                }
            }

            function insertElement_al_on(div, data) {
                let newElement = document.createElement('p');
                let signBlock = document.createElement('p');
                newElement.className = 'programs';
                signBlock.className = 'programs';
                div.append(newElement);
                div.append(signBlock);
                newElement.innerHTML = data;
            }
        }
        )
    //-----------------------------------------------TEAM-D AL END---------------------------------------------------------------
    //-----------------------------------------------TEAM-D TH START---------------------------------------------------------------
    SHEET_ID_ = '13C4Rrjs30ZthjizAnBIsUIojjV88LbwKpCRSW4RXja4';
    SHEET_TITLE_ = 'Sheet1';
    SHEET_RANGE_ = 'B34:BS46';

    FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

    fetch(FULL_URL_)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            var rowLength = data.table.rows.length;

            for (let i = 0; i < rowLength; i++) {
                if (data.table.rows[i].c[0].v != null) {
                    let newDiv = document.createElement('div');
                    newDiv.id = ("box" + i);
                    newDiv.className = "aal";
                    divElement4.appendChild(newDiv);
                    newDiv.innerHTML = data.table.rows[i].c[0].v;


                    newDiv.onclick = function () {
                        displayValue_al_on(this.textContent);

                    }
                } else {
                    continue;
                }
            }

            let name_space = document.getElementById('name');// h1 to show name of the students
            let onstage_div = document.getElementById("items-div");// div to show the participating items
            let num_admit = document.getElementById('num-admit');
            let category = document.getElementById('cate');
            let class_space = document.getElementById('class');

            var colLength = data.table.cols.length;




            function displayValue_al_on(name_div) {
                // Clear the existing content in onstage_div
                const onstage_div = document.getElementById("items-div");
                onstage_div.innerHTML = '';
                for (let i = 0; i < rowLength; i++) {
                    if (data.table.rows[i].c[0].v == name_div) {
                        name_space.innerHTML = data.table.rows[i].c[0].v;
                        num_admit.innerHTML = data.table.rows[i].c[69].v;
                        category.innerHTML = data.table.rows[i].c[68].v;
                        class_space.innerHTML = data.table.rows[i].c[67].v;
                        dataSearch_al_on(i);
                        showContainerBox();
                        return i;
                    }
                }
            }

            function showContainerBox() {
                // Display the container-box
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Disable scrolling
            }

            function hideContainerBox() {
                const containerBox = document.querySelector('.container-box');
                containerBox.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }

            function closeContainerBox() {
                hideContainerBox();
            }

            // Add an event listener to close the container box on overlay click
            const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
            overlay.addEventListener('click', closeContainerBox);

            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    closeContainerBox();
                }
            });

            function dataSearch_al_on(index) {
                let colLength_items = colLength - 5
                for (let i = 1; i < colLength_items; i++) {
                    if (i == 21 || i == 22 || i == 38 || i == 39 || i == 53 || i == 54 || i == 55 || i == 56 || i == 57 || i == 58 || i == 59 || i == 60 || i == 61 || i == 62 || i == 63 || i == 64 || i == 65) {//add
                        console.log("continued : " + i);
                        continue;
                    } else {
                        if (data.table.rows[index].c[i].v == true) {
                            insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                            console.log("inserted : " + i)
                        }
                    }
                }
            }

            function insertElement_al_on(div, data) {
                let newElement = document.createElement('p');
                let signBlock = document.createElement('p');
                newElement.className = 'programs';
                signBlock.className = 'programs';
                div.append(newElement);
                div.append(signBlock);
                newElement.innerHTML = data;
            }
        }
        )
    })
}
//-----------------------------------------------TEAM-D TH END---------------------------------------------------------------

//-----------------------------------------------TEAM-D END---------------------------------------------------------------
function highlightButton(obj) {
    // Remove "active" class from all buttons
    const buttons = document.querySelectorAll('.team-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Add "active" class to the clicked button
    obj.classList.add('active');
}

const btn = document.getElementById('bttn');
btn.addEventListener('click', function () {
    print();
})
// Ensure that the print functionality is not affected
window.onbeforeprint = function () {
    hideContainerBox();
};

window.onafterprint = function () {
    showContainerBox();
};
