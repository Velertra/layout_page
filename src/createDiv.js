class DivCreator {
    createDiv(divPosition, ...divName) {
        for(let i = 0; i < divName.length; i++) {
            let singleDiv = document.createElement('div');
            singleDiv.setAttribute("id", divName[i]);
            singleDiv.classList.add(divName[i]);
            divPosition.appendChild(singleDiv)
        }
    }
}

let makeAnElem = new DivCreator();
makeAnElem.createDiv(content, "cho1", "cho2", "cho3")


/*     function letItRide(title, other) {
        this.title = title;
        this.other = other;
        //let args = Array.from(arguments);
        console.log(this.other)
    // for(let x = 0; x < other.length; x++){
            //console.log(tilte, other[x])
        //}
        
    }



class DivCreator {
    createDiv(divPosition, divName) {
        
        let singleDiv = document.createElement('div');
        singleDiv.setAttribute("id", divName);
        singleDiv.classList.add(divName);
        divPosition.appendChild(singleDiv)
        
    }
    createBtn(btnPosition, btnName, btnLable) {
        let singleBtn = document.createElement('div');
        singleBtn.setAttribute("id", btnName);
        singleBtn.classList.add(btnName);
        btnPosition.appendChild(singleBtn);
        singleBtn.innerHTML = btnLable;
    }

    letItRide(...run) {
        let runner = Array.from(run);
       
        let conversion = toString(runner[0])

        let placement = document.getElementsByClassName(conversion);

        let divNames = runner.slice(1);

        //console.log(typeof placement)
        for(let x = 0; x < divNames.length; x++){
            let singleDiv = document.createElement('div')
            singleDiv.setAttribute('id', divNames[x])
            singleDiv.classList.add(divNames[x])
            placement.appendChild(singleDiv)
        }     
    }
};

let makeAnElem = new DivCreator();

makeAnElem.letItRide("content", 'cho2', 'cho3', 'cho4')


//base divs
makeAnElem.createDiv(document.body, "content")
makeAnElem.createDiv(content, "left_side_bar")
makeAnElem.createDiv(content, "top_section")
makeAnElem.createDiv(content, "main_section")

//left bar btns
makeAnElem.createBtn(left_side_bar, "dashboard", "Dashboard")
makeAnElem.createBtn(left_side_bar, "home", "Home")
makeAnElem.createBtn(left_side_bar, "profile", "Profile")
makeAnElem.createBtn(left_side_bar, "message", "Message")
makeAnElem.createBtn(left_side_bar, "history", "History")
makeAnElem.createBtn(left_side_bar, "task", "Task")
makeAnElem.createBtn(left_side_bar, "communities", "Communities")
makeAnElem.createBtn(left_side_bar, "setting", "Setting")
makeAnElem.createBtn(left_side_bar, "support", "Support")
makeAnElem.createBtn(left_side_bar, "privacy", "Privacy")

//top bar btns
makeAnElem.createBtn(top_section, "new_task", "New")
makeAnElem.createBtn(top_section, "upload_task", "Upload")
makeAnElem.createBtn(top_section, "share_task", "Share")

//base divs inside main Section
makeAnElem.createDiv(main_section, "your_projects")
makeAnElem.createDiv(main_section, "announcements")
makeAnElem.createDiv(main_section, "trending")

//divs inside your_projects section
makeAnElem.createDiv(your_projects, "project_title")
makeAnElem.createDiv(your_projects, "project_div");
makeAnElem.createDiv(your_projects, "project_div");
makeAnElem.createDiv(your_projects, "project_div");
makeAnElem.createDiv(your_projects, "project_div");
makeAnElem.createDiv(your_projects, "project_div");
makeAnElem.createDiv(your_projects, "project_div");



 */