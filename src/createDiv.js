

class DivCreator {
    createDiv(divPosition, divName) {
        
       //console.log('fff')
        
        let singleDiv = document.createElement('div');
        singleDiv.setAttribute("id", divName);
        singleDiv.classList.add(divName);
        divPosition.appendChild(singleDiv)
    }

};
let makeTheDiv = new DivCreator();

makeTheDiv.createDiv(document.body, "content")
makeTheDiv.createDiv(content, "left_side_bar")
makeTheDiv.createDiv(content, "top_section")

makeTheDiv.createDiv(content, "main_section")



