let users = [
    {'name': 'Михаил Иванов', 'login': 'Michael'}, {'name': 'Николай Михайлов', 'login': 'Mishiko'}, {'name': 'Иван Михайлов', 'login': 'Ivan'}, {'name': 'Юлия Николаенко', 'login': 'Julie'}, {'name': 'Станислав Коган', 'login': 'Cohen'}, {'name': 'Дмитрий Иваненко', 'login': 'duma'}, {'name': 'Георгий Иванишвили', 'login': 'goga'}, {'name': 'Андроник Степанян', 'login': 'andrew'}, {'name': 'Рафаэль Шарафутдинов', 'login': 'rafa'}, {'name': 'Сара Аванесова', 'login': 'zara'},
]
let rights = ['Можно открывать страницу админа', 'Можно добавлять пользователя', 'Можно смотреть любые страницы сайта', 'Можно добавлять данные в любой раздел сайта', 'Можно изменять добавленные объекты на сайте', 'Можно подписаться на обновления любых данных', 'Можно изменять и удалять любые данные (объекты) на сайте', 'Можно управлять составом компонентов раздела', 'Можно подписаться на выбранную рассылку', 'Имеет права на управление списками (город, пол, регион и т.д.)',]

function groupOne() {

    function buildTable(data) {
        let table = document.getElementsByClassName('myTable');
        Array.from(table).forEach((el) => {
            for (let i = 0; i < data.length; i++)  {
                let row =  `<tr>
                                <td>${data[i].name} (login: ${data[i].login})</td>
                            </tr>`
                el.innerHTML += row
            }
        })
    }
    buildTable(users)

    function buildRights(data) {
        let rights_list = document.getElementsByClassName('myRights')
        Array.from(rights_list).forEach((el) => {
            for(let i = 0; i < data.length; i++) {
                let row = `<tr>
                                <td>${data[i]}</td>
                            </tr>`
                el.innerHTML += row
            }
        })
    }
    buildRights(rights)

    function populateRights() {
        let items = document.querySelectorAll('.card-body .left li'),
            tab = [], index;
        for (let i = 0; i < items.length; i++) {
            tab.push(items[i].innerHTML)
        }
        for (let i = 0; i < items.length; i++) {
            items[i].onclick = function() {
                index = tab.indexOf(this.innerHTML);
                // console.log(this.innerHTML + " INDEX = " + index)
                items[index].parentNode.removeChild(items[index])
            }
        }

        let rightsAll = document.querySelectorAll('.myRights td'),
            rightsTab = [], rightsIndex;
        for (let i = 0; i < rightsAll.length; i++) {
            rightsTab.push(rightsAll[i].innerHTML)
        }

        for (let i = 0; i < rightsAll.length; i++) {
            rightsAll[i].onclick = function() {
                rightsIndex = rightsTab.indexOf(this.innerHTML);
                let rightsLi = document.createElement('li')
                rightsLi.innerHTML = rightsAll[rightsIndex].innerHTML
                items[0].parentNode.appendChild(rightsLi)
                tab.push(rightsLi.innerHTML)
                tab = tab.filter(function(item, pos) {
                    return tab.indexOf(item) == pos;
                })        

                let itemsAdded = document.querySelectorAll('.card-body .left li'), index;

                function removeDuplicates() {
                    const st = new Set();
                    for (const div of itemsAdded) {
                        if (st.has(div.textContent.trim())) {
                            div.parentNode.removeChild(div);
                        }
                        st.add(div.textContent.trim());
                    }
                }
                removeDuplicates()
                        
                for (let i = 0; i < itemsAdded.length; i++) {
                    itemsAdded[i].onclick = function() {
                        index = tab.indexOf(this.innerHTML);
                        // console.log(this.innerHTML + " INDEX = " + index)
                        this.parentNode.removeChild(this)
                    }
                }
            }
        }
    }
    populateRights()


    function populateUsers() {
        let items = document.querySelectorAll('.card-body .right li'),
            tab = [], index;
        for (let i = 0; i < items.length; i++) {
            tab.push(items[i].innerHTML)
        }
        for (let i = 0; i < items.length; i++) {
            items[i].onclick = function() {
                index = tab.indexOf(this.innerHTML);
                items[index].parentNode.removeChild(items[index])
            }
        }

        let rightsAll = document.querySelectorAll('.myTable td'),
            rightsTab = [], rightsIndex;
        for (let i = 0; i < rightsAll.length; i++) {
            rightsTab.push(rightsAll[i].innerHTML)
        }

        for (let i = 0; i < rightsAll.length; i++) {
            rightsAll[i].onclick = function() {
                rightsIndex = rightsTab.indexOf(this.innerHTML);
                let rightsLi = document.createElement('li')
                rightsLi.innerHTML = rightsAll[rightsIndex].innerHTML
                items[0].parentNode.appendChild(rightsLi)
                tab.push(rightsLi.innerHTML)
                tab = tab.filter(function(item, pos) {
                    return tab.indexOf(item) == pos;
                })        

                let itemsAdded = document.querySelectorAll('.card-body .right li'), index;

                function removeDuplicates() {
                    const st = new Set();
                    for (const div of itemsAdded) {
                        if (st.has(div.textContent.trim())) {
                            div.parentNode.removeChild(div);
                        }
                        st.add(div.textContent.trim());
                    }
                }
                removeDuplicates()
                        
                for (let i = 0; i < itemsAdded.length; i++) {
                    itemsAdded[i].onclick = function() {
                        index = tab.indexOf(this.innerHTML);
                        this.parentNode.removeChild(this)
                    }
                }
            }
        }
    }
    populateUsers()
}
groupOne()

function groupTwo() {
    function buildTableSecond(data) {
        let table = document.getElementsByClassName('myTable_second');
        Array.from(table).forEach((el) => {
            for (let i = 0; i < data.length; i++)  {
                let row =  `<tr>
                                <td>${data[i].name} (login: ${data[i].login})</td>
                            </tr>`
                el.innerHTML += row
            }
        })
    }
    buildTableSecond(users)

    function buildRightsSecond(data) {
        let rights_list = document.getElementsByClassName('myRights_second')
        Array.from(rights_list).forEach((el) => {
            for(let i = 0; i < data.length; i++) {
                let row = `<tr>
                                <td>${data[i]}</td>
                            </tr>`
                el.innerHTML += row
            }
        })
    }
    buildRightsSecond(rights)

    function populateRightsSecond() {
        let items = document.querySelectorAll('.card-body .left_second li'),
            tab = [], index;
        for (let i = 0; i < items.length; i++) {
            tab.push(items[i].innerHTML)
        }
        for (let i = 0; i < items.length; i++) {
            items[i].onclick = function() {
                index = tab.indexOf(this.innerHTML);
                items[index].parentNode.removeChild(items[index])
            }
        }

        let rightsAll = document.querySelectorAll('.myRights_second td'),
            rightsTab = [], rightsIndex;
        for (let i = 0; i < rightsAll.length; i++) {
            rightsTab.push(rightsAll[i].innerHTML)
        }
        
        for (let i = 0; i < rightsAll.length; i++) {
            rightsAll[i].onclick = function() {
                rightsIndex = rightsTab.indexOf(this.innerHTML);
                let rightsLi = document.createElement('li')
                rightsLi.innerHTML = rightsAll[rightsIndex].innerHTML
                items[0].parentNode.appendChild(rightsLi)
                tab.push(rightsLi.innerHTML)
                tab = tab.filter(function(item, pos) {
                    return tab.indexOf(item) == pos;
                })        

                let itemsAdded = document.querySelectorAll('.card-body .left_second li'), index;
                function removeDuplicates() {
                    const st = new Set();
                    for (const div of itemsAdded) {
                        if (st.has(div.textContent.trim())) {
                            div.parentNode.removeChild(div);
                        }
                        st.add(div.textContent.trim());
                    }
                }
                removeDuplicates()
                        
                for (let i = 0; i < itemsAdded.length; i++) {
                    itemsAdded[i].onclick = function() {
                        index = tab.indexOf(this.innerHTML);
                        this.parentNode.removeChild(this)
                    }
                }
            }
        }
    }
    populateRightsSecond()


    function populateUsersSecond() {
        let items = document.querySelectorAll('.card-body .right_second li'),
            tab = [], index;
        for (let i = 0; i < items.length; i++) {
            tab.push(items[i].innerHTML)
        }
        for (let i = 0; i < items.length; i++) {
            items[i].onclick = function() {
                index = tab.indexOf(this.innerHTML);
                items[index].parentNode.removeChild(items[index])
            }
        }

        let rightsAll = document.querySelectorAll('.myTable_second td'),
            rightsTab = [], rightsIndex;
        for (let i = 0; i < rightsAll.length; i++) {
            rightsTab.push(rightsAll[i].innerHTML)
        }

        for (let i = 0; i < rightsAll.length; i++) {
            rightsAll[i].onclick = function() {
                rightsIndex = rightsTab.indexOf(this.innerHTML);
                let rightsLi = document.createElement('li')
                rightsLi.innerHTML = rightsAll[rightsIndex].innerHTML
                items[0].parentNode.appendChild(rightsLi)
                tab.push(rightsLi.innerHTML)
                tab = tab.filter(function(item, pos) {
                    return tab.indexOf(item) == pos;
                })        

                let itemsAdded = document.querySelectorAll('.card-body .right_second li'), index;

                function removeDuplicates() {
                    const st = new Set();
                    for (const div of itemsAdded) {
                        if (st.has(div.textContent.trim())) {
                            div.parentNode.removeChild(div);
                        }
                        st.add(div.textContent.trim());
                    }
                }
                removeDuplicates()
                        
                for (let i = 0; i < itemsAdded.length; i++) {
                    itemsAdded[i].onclick = function() {
                        index = tab.indexOf(this.innerHTML);
                        this.parentNode.removeChild(this)
                    }
                }
            }
        }
    }
    populateUsersSecond()
}
groupTwo()


function groupThree() {
    function buildTableThird(data) {
        let table = document.getElementsByClassName('myTable_third');
        Array.from(table).forEach((el) => {
            for (let i = 0; i < data.length; i++)  {
                let row =  `<tr>
                                <td>${data[i].name} (login: ${data[i].login})</td>
                            </tr>`
                el.innerHTML += row
            }
        })
    }
    buildTableThird(users)

    function buildRightsThird(data) {
        let rights_list = document.getElementsByClassName('myRights_third')
        Array.from(rights_list).forEach((el) => {
            for(let i = 0; i < data.length; i++) {
                let row = `<tr>
                                <td>${data[i]}</td>
                            </tr>`
                el.innerHTML += row
            }
        })
    }
    buildRightsThird(rights)

    function populateRightsThird() {
        let items = document.querySelectorAll('.card-body .left_third li'),
            tab = [], index;
        for (let i = 0; i < items.length; i++) {
            tab.push(items[i].innerHTML)
        }
        for (let i = 0; i < items.length; i++) {
            items[i].onclick = function() {
                index = tab.indexOf(this.innerHTML);
                items[index].parentNode.removeChild(items[index])
            }
        }

        let rightsAll = document.querySelectorAll('.myRights_third td'),
            rightsTab = [], rightsIndex;
        for (let i = 0; i < rightsAll.length; i++) {
            rightsTab.push(rightsAll[i].innerHTML)
        }
        
        for (let i = 0; i < rightsAll.length; i++) {
            rightsAll[i].onclick = function() {
                rightsIndex = rightsTab.indexOf(this.innerHTML);
                let rightsLi = document.createElement('li')
                rightsLi.innerHTML = rightsAll[rightsIndex].innerHTML
                items[0].parentNode.appendChild(rightsLi)
                tab.push(rightsLi.innerHTML)
                tab = tab.filter(function(item, pos) {
                    return tab.indexOf(item) == pos;
                })        

                let itemsAdded = document.querySelectorAll('.card-body .left_third li'), index;
                function removeDuplicates() {
                    const st = new Set();
                    for (const div of itemsAdded) {
                        if (st.has(div.textContent.trim())) {
                            div.parentNode.removeChild(div);
                        }
                        st.add(div.textContent.trim());
                    }
                }
                removeDuplicates()
                        
                for (let i = 0; i < itemsAdded.length; i++) {
                    itemsAdded[i].onclick = function() {
                        index = tab.indexOf(this.innerHTML);
                        this.parentNode.removeChild(this)
                    }
                }
            }
        }
    }
    populateRightsThird()

    function populateUsersThird() {
        let items = document.querySelectorAll('.card-body .right_third li'),
            tab = [], index;
        for (let i = 0; i < items.length; i++) {
            tab.push(items[i].innerHTML)
        }
        for (let i = 0; i < items.length; i++) {
            items[i].onclick = function() {
                index = tab.indexOf(this.innerHTML);
                items[index].parentNode.removeChild(items[index])
            }
        }

        let rightsAll = document.querySelectorAll('.myTable_third td'),
            rightsTab = [], rightsIndex;
        for (let i = 0; i < rightsAll.length; i++) {
            rightsTab.push(rightsAll[i].innerHTML)
        }

        for (let i = 0; i < rightsAll.length; i++) {
            rightsAll[i].onclick = function() {
                rightsIndex = rightsTab.indexOf(this.innerHTML);
                let rightsLi = document.createElement('li')
                rightsLi.innerHTML = rightsAll[rightsIndex].innerHTML
                items[0].parentNode.appendChild(rightsLi)
                tab.push(rightsLi.innerHTML)
                tab = tab.filter(function(item, pos) {
                    return tab.indexOf(item) == pos;
                })        

                let itemsAdded = document.querySelectorAll('.card-body .right_third li'), index;

                function removeDuplicates() {
                    const st = new Set();
                    for (const div of itemsAdded) {
                        if (st.has(div.textContent.trim())) {
                            div.parentNode.removeChild(div);
                        }
                        st.add(div.textContent.trim());
                    }
                }
                removeDuplicates()
                        
                for (let i = 0; i < itemsAdded.length; i++) {
                    itemsAdded[i].onclick = function() {
                        index = tab.indexOf(this.innerHTML);
                        this.parentNode.removeChild(this)
                    }
                }
            }
        }
    }
    populateUsersThird()
}
groupThree()