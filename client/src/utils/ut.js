// // function loadScript(src) {
// //   return new Promise(function (resolve, reject) {
// //     const s = document.createElement("script");
// //     let r = false;

// //     // s.type = "text/javascript";
// //     ///singleProduct
// //     s.src = src.replace(/singleProduct/g, "");
// //     // s.async = true;
// //     s.onerror = function (err) {
// //       reject(err, s);
// //     };
// //     s.onload = s.onreadystatechange = function (e) {
// //       //console.log(this.readyState); // uncomment this line to see which ready states are called.
// //       if (!r && (!this.readyState || this.readyState === "complete")) {
// //         r = true;
// //         console.log("DONE");
// //         resolve();
// //       }
// //     };
// //     const t = document.getElementsByTagName("script")[0];
// //     t.parentElement.insertBefore(s, t);
// //   });
// // }

// // export async function loadAllScripts() {
// //   const bodyScripts = document.body.getElementsByTagName("script");
// //   let scriptsName = [];
// //   let i = 0;
// //   for (let script of bodyScripts) {
// //     i++;
// //     if (script.src.indexOf(/static/) !== -1) {
// //       continue;
// //     }
// //     scriptsName.push(script.getAttribute("src"));
// //     if (i === bodyScripts.length) {
// //     }
// //   }
// //   for (let i = 0; i < scriptsName.length; i++) {
// //     !!bodyScripts[i] && bodyScripts[i].remove();
// //     !!scriptsName[i] && (await loadScript(scriptsName[i]));
// //   }
// // }

// // var loadScriptCode = function (code) {
// //   var tag = document.createElement("script");
// //   tag.innerHTML = "";
// //   // tag.async = false;
// //   // tag.src = src;
// //   var body = document.getElementsByTagName("body")[0];
// //   body.appendChild(tag);
// // };

// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//     const s = document.createElement("script");
//     let r = false;

//     // s.type = "text/javascript";
//     ///singleProduct
//     s.src = src.replace(/singleProduct/g, "");
//     // s.async = true;
//     s.onerror = function (err) {
//       reject(err, s);
//     };
//     s.onload = s.onreadystatechange = function (e) {
//       //console.log(this.readyState); // uncomment this line to see which ready states are called.
//       if (!r && (!this.readyState || this.readyState === "complete")) {
//         r = true;
//         console.log("DONE");
//         resolve();
//       }
//     };
//     const t = document.getElementsByTagName("script")[0];
//     t.parentElement.insertBefore(s, t);
//   });
// }

// const myScripts = [
//   "vendor/jquery/jquery-3.2.1.min.js",
//   "vendor/animsition/js/animsition.js",
//   "vendor/bootstrap/js/popper.js",
//   "vendor/bootstrap/js/bootstrap.min.js",
//   "vendor/select2/select2.js",
//   "vendor/daterangepicker/moment.js",
//   "vendor/daterangepicker/daterangepicker.js",
//   "vendor/slick/slick.js",
//   "js/slick-custom.js",
//   "vendor/parallax100/parallax100.js",
//   "vendor/MagnificPopup/jquery.magnific-popup.js",
//   "vendor/isotope/isotope.pkgd.min.js",
//   "vendor/sweetalert/sweetalert.min.js",
//   "vendor/perfect-scrollbar/perfect-scrollbar.min.js",
//   "js/main.js",
//   "/static/js/bundle.js",
//   "/static/js/0.chunk.js",
//   "/static/js/main.chunk.js",
// ];
// const my = [
//   "js/main.js",
//   "vendor/perfect-scrollbar/perfect-scrollbar.min.js",
//   "vendor/sweetalert/sweetalert.min.js",
//   "vendor/isotope/isotope.pkgd.min.js",
//   "vendor/MagnificPopup/jquery.magnific-popup.js",
//   "vendor/parallax100/parallax100.js",
//   "js/slick-custom.js",
//   "vendor/slick/slick.js",
//   "vendor/daterangepicker/daterangepicker.js",
//   "vendor/daterangepicker/moment.js",
//   "vendor/select2/select2.js",
//   "vendor/bootstrap/js/bootstrap.min.js",
//   "vendor/bootstrap/js/popper.js",
//   "vendor/animsition/js/animsition.js",
//   "vendor/jquery/jquery-3.2.1.min.js",
//   "/static/js/bundle.js",
//   "/static/js/0.chunk.js",
//   "/static/js/main.chunk.js",
// ];

// export async function loadAllScripts() {
//   // const bodyScripts = document.body.getElementsByTagName("script");
//   // let scriptsName = [];
//   // let i = 0;
//   // for (let script of bodyScripts) {
//   //   i++;
//   //   if (script.src.indexOf(/static/) !== -1) {
//   //     continue;
//   //   }
//   //   scriptsName.push(script.getAttribute("src"));
//   //   if (i === bodyScripts.length) {
//   //   }
//   // }
//   // for (let i = 0; i <= scriptsName.length; i++) {
//   //   !!bodyScripts[i] && bodyScripts[i].remove();
//   //   !!scriptsName[i] && (await loadScript(scriptsName[i]));
//   // }
// }

// var loadScriptCode = function (code) {
//   var tag = document.createElement("script");
//   tag.innerHTML = "";
//   // tag.async = false;
//   // tag.src = src;
//   var body = document.getElementsByTagName("body")[0];
//   body.appendChild(tag);
// };
