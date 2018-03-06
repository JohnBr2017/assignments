







// var blogContainer = document.getElementById("blog-container")

// function BlogTemplate(title, author, content){
//         var wrapper = document.createElement("div");
//         var h1 = document.createElement("h1");
//         var h4 = document.createElement("h4");
//         var p = document.createElement("p");

//         h1.innerHTML = title;
//         h4.innerHTML = author;
//         p.innerHTML = content;

//         wrapper.appendChild(h1);
//         wrapper.appendChild(h4);
//         wrapper.appendChild(p);

//         return wrapper;
// }

// function addBlogPost(titel, author, content){
//     var blogPost = new BlogTemplate(title, author,content);
//     blogContainer.appendChild(blogPost);
// }

// function handleSubmit(event){
//     event.preventDefault();
//     var form = document.myForm;
//     var title = form.title.value;
//     var author = form.author.value;
//     var content = form.content.value;
//     addBlogPost(title, author,content)
// }

// document.myForm.onsubmit = handleSubmit;
// // addBlogPost("My Blog", "lesa", "I am learning how to code...")























// // function TickyTackTemplate() {
// //     this.sqrFt = 3000;
// //     this.bedrooms = 4;
// //     this.bathrooms = 3.5
// //     this.garage = 3;
// //     this.redRum = true;
// // }

// // function CustomTemplate(sqrFt, bedrooms, bathrooms, garage, redRum, underwaterObservatory, pool, color, additionalConcrete) {
// //     // CustomTemplateWithAddons.call(this, underwaterObservatory, pool, color, additionalConcrete)        
// //     this.sqrFt = sqrFt;
// //     this.bedrooms = bedrooms;
// //     this.bathrooms = bathrooms;
// //     this.garage = garage;
// //     this.redRum = redRum;
// //     CustomTemplateWithAddons.call(this, underwaterObservatory, pool, color, additionalConcrete)        
// // }

// // function CustomTemplateWithAddons(underwaterObservatory, pool, color, additionalConcrete){
// //     this.underwaterObservatory = underwaterObservatory;
// //     this.pool = pool;
// //     this.color = color;
// //     this.additionalConcrete = additionalConcrete;
// // }

// // CustomTemplateWithAddons.prototype = new Object(CustomTemplate.prototype);

// // var samanthasNewHouse = new TickyTackTemplate();
// // var tylersNewHouse = new CustomTemplate(500, .5, 0, 0, true);
// // var ericasNewHouse = new CustomTemplate(4000, 4, 5, 2, false, true, false, "red", false);

// // console.log(ericasNewHouse);
