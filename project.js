header {
	/*margin-bottom: 5%;*/
}
body {
	margin: 2% 2%;
	margin-bottom: 0%;
	overflow: auto;
}
html {
	height: 100%;
}
/*.footer {
	height: 100%;
	width: 100%;
	position: fixed;
	bottom: -500px;
	overflow: auto;
	margin-top: 20%;

}*/
.navbar-light .navbar-brand {
    color: white;
}
.nav-link:hover{
	background-color: Gray; 
}

.navbar-light .navbar-nav .active>.nav-link{
	color: white;
}
.img-thumbnail{
	width: 500px;
}
.resise {
    height: 300px;
}
#break{
	margin-bottom: 100px;
}
.adjust{
	margin-right: 10px;
    text-align: center;
    height: 70px;
}
#view {
	margin:  50px 205px  20px 205px;
	padding: 0px;
	  }
.navHeight{
	margin-top: 7%;
}
.description{
	margin-top: 5%;
	margin-bottom: 10%;
}
.p-image { float: left; width: 20%; text-align: center;}
    .image {
      width: 100px;
      }
.p-description { float: left; width: 37%;} 
.p-title{
	margin-right: 20px;
}
.p-desc{
 margin: 5px 20px 5px 0;
      line-height: 1.4em;}

.p-price { float: left; width: 12%;}

.p-quantity {float: left; width: 10%;}
.p-quantity input {
      width: 40px;
    }  
    
 
.p-remove { float: left; width: 9%;}
.remove-p {
    border: 0;
    padding: 4px 8px;
    background-color: #c66;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
  }
.p-total { float: left; width: 12%; text-align: right; }

.totals 
  .totals-item {
		float: right;
		clear: both;
		width: 100%;
		margin-bottom: 10px;}
		.totals-item label{ 
			float: left;
			clear: both;
			width: 79%;
			text-align: right;
		}
		.totals-value{
			float: right;
			width: 21%;
			text-align: right;
		}
	


.checkout {
  float: right;
  border: 0;
  margin-top: 20px;
  padding: 6px 25px;
  background-color: #6b6;
  color: #fff;
  font-size: 25px;
  border-radius: 3px;
}

.checkout:hover {
  background-color: #494;
}
/*Dollar sign on prices*/
.product .p-price:before, .product .p-total:before, .totals-value:before {
  content: '$';
}

/* Make adjustments for tablet */
@media screen and (max-width: 650px) {
  
  .description {
    margin: 0;
    padding-top: 20px;
    border-top: 1px solid $color-border;
  }
  
  .row {
    display: none;
  }
  
  .p-image {
    float: right;
    width: auto;
    img {
      margin: 0 0 10px 10px;
    }
  }
  
  .p-description {
    float: none;
    margin-bottom: 10px;
    width: auto;
  }
  
  .p-price {
    clear: both;
    width: 70px;
  }
  
  .p-quantity {
    width: 100px;
    input {
      margin-left: 20px;
    }
  }
  
  .p-quantity:before {
    content: 'x';
  }
  
  .p-remove {
    width: auto;
  }
  
  .p-total {
    float: right;
    width: 70px;
  }
  
}


/* Make more adjustments for phone */
@media screen and (max-width: 350px) {
  
  .p-remove {
    float: right;
  }
  
  .p-total {
    float: right;
    clear: left;
    width: auto;
    margin-top: 10px;
  }
  
  .product .p-total:before {
    content: 'Item Total: $';
  }
  
  .totals {
    .totals-item {
      label {
        width: 60%;
      }
      
      .totals-value {
        width: 40%;
      }
    }
  }
}
