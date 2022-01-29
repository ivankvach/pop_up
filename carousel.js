function myFunction() {
    var x, y, z, a, sr;
    x = document.getElementById("imag1").src;
   // document.getElementById("testcarousel").innerHTML = "Paragraph changed!";
    sr = "";
    y = "";
    z = "";
    a = "";
    if (x == "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-354904609.jpg?v=1641376468") {
    sr = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1434056154.jpg?v=1641376520";        
    y = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1250884701.jpg?v=1641376553";        
    z = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-877140709.jpg?v=1641376632";        
    a = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-354904609.jpg?v=1641376468";
    }else if(x == "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1434056154.jpg?v=1641376520") {
    sr = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1250884701.jpg?v=1641376553";
    y = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-877140709.jpg?v=1641376632";
    z = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-354904609.jpg?v=1641376468";
    a = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1434056154.jpg?v=1641376520";
    }else if(x == "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1250884701.jpg?v=1641376553") {
    sr = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-877140709.jpg?v=1641376632";
    y = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-354904609.jpg?v=1641376468";
    z = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1434056154.jpg?v=1641376520";
    a = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1250884701.jpg?v=1641376553";
    }else {
    sr = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-354904609.jpg?v=1641376468";
    y = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1434056154.jpg?v=1641376520";
    z = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1250884701.jpg?v=1641376553";
    a = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-877140709.jpg?v=1641376632";
    }
    document.getElementById("imag1").src = sr;
    document.getElementById("imag2").src = y;
    document.getElementById("imag3").src = z;
    document.getElementById("imag4").src = a;
}
function myFunction1() {
    var x, y, z, a, sr;
    x = document.getElementById("imag4").src;
    sr = "";
    y = "";
    z = "";
    a = "";
    if (x == "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-877140709.jpg?v=1641376632") {
    sr = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1250884701.jpg?v=1641376553";
    y = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1434056154.jpg?v=1641376520";
    z = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-354904609.jpg?v=1641376468";
    a = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-877140709.jpg?v=1641376632";
    }else if(x == "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1250884701.jpg?v=1641376553") {
    sr = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1434056154.jpg?v=1641376520";
    y = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-354904609.jpg?v=1641376468";
    z = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-877140709.jpg?v=1641376632";
    a = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1250884701.jpg?v=1641376553";
    }else if(x == "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1434056154.jpg?v=1641376520") {
    sr = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-354904609.jpg?v=1641376468";
    y = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-877140709.jpg?v=1641376632";
    z = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1250884701.jpg?v=1641376553";
    a = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1434056154.jpg?v=1641376520";
    }else {
    sr = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-877140709.jpg?v=1641376632";
    y = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1250884701.jpg?v=1641376553";
    z = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-1434056154.jpg?v=1641376520";
    a = "https://cdn.shopify.com/s/files/1/0551/1820/0941/products/product-image-354904609.jpg?v=1641376468";
    }
    document.getElementById("imag4").src = sr;
    document.getElementById("imag3").src = y;
    document.getElementById("imag2").src = z;
    document.getElementById("imag1").src = a;
    //console.log(sr);
}
   