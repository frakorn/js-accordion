var options = {
    container: 'my-accordion',
    mainTitle: 'Main accordion title', // optional field
    panels: [{
        title: 'My profile',
        subtitle: 'Update your profile information Update your profile information Update your profile information Update your profile information Update your profile information Update your profile information Update your profile information Update your profile information', //Optional subtitle
        content: '<p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.</p>', // HTML to inject as panel content (e.g. a form)
    }, {
        title: 'Change password',
        subtitle: 'Change your login password',
        content: '<p>HTML content for this panel, HTML content for this panel, HTML content for this panel, HTML content for this panel, HTML content for this panel</p>'
    },
    {
        title: 'Preferences',
        subtitle: 'This is your preferences',
        content: '<p>HTML content for this panel</p>'
    },
    {
        title: 'No description title',
        subtitle: '',
        content: '<p>HTML content for this panel</p>'
    }
    ]
}