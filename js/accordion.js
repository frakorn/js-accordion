class Accordion {
    constructor(options) {
        this.init(options)
    }

    init(options) {
        // init accordion and bind click event on arrows 
        if (options){
            this.buildAccordion(options);
            this.bindClickEvent();
        }   
    }

    bindClickEvent(){
        // bind the click event in order to show/hide panel and change arrow order
        var self = this;
        const arrows = document.getElementsByClassName('arrow-btn');
        for(var i=0; i < arrows.length; i++){
            arrows[i].onclick = function () {
                self.showHidePanel(this)
            };
        }
    }

    showHidePanel(panel){
        // toggle className 
        const isClosed = panel.innerHTML.split('_')[2] == 'down';
        let item = panel.closest(".item");
        panel.innerHTML = isClosed ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
        item.classList.toggle('open');
     }

    buildAccordion(options) {
        // build accordion starting from the root element
        const root = document.getElementById(options.container);
        root.innerHTML = this.buildPanels(options);
    }

    buildPanels(options) {
        // starting create HTML accordion from the input JSON options
        let accordionHTML = '';
        accordionHTML = options.mainTitle ? this.buildTitle(options.mainTitle) : '';
        if (options.panels.length) {
            options.panels.forEach(panel => {
                accordionHTML += `<div class="item ${panel.subtitle ? 'description' : ''}">
                <div class="header-block">
                    <div class="container">
                        <div class="title">
                        ${panel.title || ''}
                        </div>
                        <div class="description">
                        ${panel.subtitle || ''}
                        </div>
                    </div>
                    <div class="arrow-block">
                        <i class="material-icons dp48 arrow-btn">keyboard_arrow_down</i>
                    </div>
                </div>
                <div class="content">
                ${panel.content || ''}
                </div>
            </div>`;
            });
        }
        return accordionHTML;
    }

    buildTitle(title) {
        // return title block
        return `<div class="item global-title">
        ${title}
        </div>`;
    }
}