var app = new Vue({
    el: "article",
    data: {
        products: [{
                id: 1,
                title: "TAG 2000 (TAG 675)",
                short_text: 'Grapefruit Ruby Red',
                image: 'TAG2000.png',
                desc: "Full desc"
            },
            {
                id: 2,
                title: "TAG 2001 (TAG 567)",
                short_text: 'Grapefruit White',
                image: 'TAG2001.png',
                desc: "Full desc"
            },
            {
                id: 3,
                title: "TAG 2002 (TAG 098)",
                short_text: 'Grapefruit Oro Blanco',
                image: 'TAG2002.png',
                desc: "Full desc"
            },
            {
                id: 4,
                title: "TAG 2003 (TAG 236)",
                short_text: 'Grapefruit Marsh',
                image: 'TAG2003.png',
                desc: "Full desc"
            },
            {
                id: 5,
                title: "TAG 2004 (TAG 734)",
                short_text: 'Grapefruit Rio Red',
                image: 'TAG2004.png',
                desc: "Full desc"
            }
        ]
    },
    mounted: function () {
        console.log(window.localStorage.getItem('prod'));
    },
    methods: {
        addItem: function (id) {
            window.localStorage.setItem('prod', id);
        }
    }
});