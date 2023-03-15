

class DivCreator {
    createDiv(divPosition, divName) {
        
       //console.log('fff')
        
        let singleDiv = document.createElement('div');
        singleDiv.setAttribute("id", divName);
        singleDiv.classList.add(divName);
        divPosition.appendChild(singleDiv)
    }
    createBtn(btnPosition, btnName, btnLable) {
        let singleBtn = document.createElement('button');
        singleBtn.setAttribute("id", btnName);
        singleBtn.classList.add(btnName);
        btnPosition.appendChild(singleBtn);
        singleBtn.innerHTML = btnLable;
    }

};
let makeAnElem = new DivCreator();

//divs
makeAnElem.createDiv(document.body, "content")
makeAnElem.createDiv(content, "left_side_bar")
makeAnElem.createDiv(content, "top_section")
makeAnElem.createDiv(content, "main_section")

//buttons
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


makeAnElem.createBtn(top_section, "new_task", "New")
makeAnElem.createBtn(top_section, "upload_task", "Upload")
makeAnElem.createBtn(top_section, "share_task", "Share")



