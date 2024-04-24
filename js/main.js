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
        ], 

        product: {},
        btnVisible: 0,
        cart:[],
        contactFields:[],
        orderPlaced: false,
    },
    mounted: function () {
        console.log(window.localStorage.getItem('prod'));
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods: {
        addItem: function (id) {
            window.localStorage.setItem('prod', id);
        },

        getProduct: function () {
            if (window.location.hash) {
              var id = window.location.hash.replace("#", "");
              if (this.products && this.products.length > 0) {
                for (i in this.products) {
                  if (
                    this.products[i] && this.products[i].id && id == this.products[i].id
                  )
                    this.product = this.products[i];
                }
              }
            }
          },

          addToCart: function (id) {
            var cart = [];
            if (window.localStorage.getItem("cart")) {
              cart = window.localStorage.getItem("cart").split(",");
            }
            if (cart.indexOf(String(id)) == -1) {
              cart.push(id);
              window.localStorage.setItem("cart", cart.join());
              this.btnVisible = 1;
            }

            console
          },

          checkInCart: function () {
            if (
              this.product &&
              this.product.id &&
              window.localStorage
                .getItem("cart")
                .split(",")
                .indexOf(String(this.product.id)) != -1
            )
              this.btnVisible = 1;
          },

          getCart: function () {
            var cart = [];
            if (window.localStorage.getItem("cart")) {
              console.log("localStorage", window.localStorage.getItem("cart"));
                var cartsId = window.localStorage.getItem("cart").split(",");
                console.log("getCart: function", cartsId);
                
                cartsId.forEach(id => {
                    var foundProduct = this.products.find(product => product.id.toString() === id);
                    if (foundProduct) {
                        cart.push(foundProduct);
                    }
                });
            }
            this.cart = cart;
            console.log(this.cart, "this.cart");
        },

        removeFromCart: function (id) {
          for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id === id) {
                this.cart.splice(i, 1);
                break; 
            }
        }
        var cartsId = [];
        for (var j = 0; j < this.cart.length; j++) {
            cartsId.push(this.cart[j].id); 
        }
          window.localStorage.setItem("cart", cartsId.join());
          console.log("delete cart", this.cart);
      },
        
      makeOrder: function () {
        window.localStorage.removeItem("cart");
        this.cart = [];
        this.orderPlaced = true;
      },
    },
    
});