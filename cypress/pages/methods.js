module.exports = {
    goToForm() {
        cy.visit("https://app.pipefy.com/public/form/6qhKljB1");
    },

    waitFormPresents() {
        cy.get('div.pp-new-public-form-fields').should('be.visible')
    },

    fillName(name) {
        cy.get('[name="customFields.your_name"]').type(name)
    },

    fillWantWorkDescrption(text) {
        cy.get('[name="customFields.why_do_you_want_to_work_at_pipefy"]').type(text)
    },

    checkOptionB() {
        cy.get("div.pp-checkbox:nth-child(3)").click()
    },

    selectUser() {
        cy.get("a.pp-action-add.pp-ico-assignee").click() 
        cy.get("div.pp-item-list a").contains("felipe fantoni").click() 
    },

    fillTodayDate() {
        cy.get("input#fake-pipe-field-publicForm-customFields_select_today_s_date-input.pp-input").click({force: true});
        cy.get(".pp-date-picker-actions button.pp-btn:nth-child(2)").click();
    },

    selectOptionB() {
        cy.get('[name="customFields.select_option_b"]').select('B')
    },

    fillTimeAtNow(hour, minute) {
        cy.get('[name="customFields.what_time_is_it_now"]').type(hour)
        cy.get('[name="customFields.what_time_is_it_now"]').type(minute)
    },

    submitForm() { 
        cy.get('[data-pp-button="submit-fields"]').click();
    },

    fillEmail(email) {
        cy.get('[data-testid="#email-input"]').type(email)
    },

    sendForm() { 
        cy.get("button.pp-btn:nth-child(3)").click();
    },

    verifyThanksMessage() {
        cy.get('[data-testid="default-success-footer"]').contains("Obrigado por preencher este formulário!").should('be.visible')
    }
}