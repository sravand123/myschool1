(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin-login/admin-login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin-login/admin-login.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Admin LogIn</h2>\n    <form class=\"form-horizontal\"  (ngSubmit)='onSubmit()' novalidate #myForm=\"ngForm\" method=\"POST\" role=\"form\">\n     <strong [class.d-none]='!errorMsg' class='text-danger'>admin already exists</strong>\n     <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"username\">username:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" [class.is-invalid]=\"username.invalid && username.touched\" class=\"form-control\" id=\"username_name\" placeholder=\"Enter username \" name=\"username\" [(ngModel)]='admin.username' #username =\"ngModel\" required>\n          <small class=\"text-danger\" [class.d-none]='username.valid || username.untouched'>username  is required</small>\n  \n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"password\">Password:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"password\" class=\"form-control\" id=\"password\" [class.is-invalid]='password.touched && password.invalid' placeholder=\"Enter Password\" name=\"password\" [(ngModel)]='admin.password' #password=\"ngModel\" required>\n          <small class=\"text-danger\" [class.d-none]='password.valid || password.untouched '>password is required</small>\n  \n        </div>\n      </div><div class=\"form-group\">        \n          <div class=\"col-sm-offset-2 col-sm-10\">\n            <button  [disabled]=\"myForm.invalid  || clicked\" type=\"submit\" class=\"btn btn-primary\">Login<span [class.d-none]=\"!clicked\" class=\"spinner-border spinner-border-sm text-light ml-1\" role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n            </span></button>\n          </div>\n        </div>\n\n      </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin-signup/admin-signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin-signup/admin-signup.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Admin Signup</h2>\n    <form class=\"form-horizontal\"  (ngSubmit)='onSubmit()' novalidate #myForm=\"ngForm\" method=\"POST\" role=\"form\">\n     <strong [class.d-none]='!errorMsg' class='text-danger'>admin already exists</strong>\n     <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"username\">username:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" [class.is-invalid]=\"username.invalid && username.touched\" class=\"form-control\" id=\"username_name\" placeholder=\"Enter username \" name=\"username\" [(ngModel)]='admin.username' #username =\"ngModel\" required>\n          <small class=\"text-danger\" [class.d-none]='username.valid || username.untouched'>username  is required</small>\n  \n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"password\">Password:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"password\" class=\"form-control\" id=\"password\" [class.is-invalid]='password.touched && password.invalid' placeholder=\"Enter Password\" name=\"password\" [(ngModel)]='admin.password' #password=\"ngModel\" required>\n          <small class=\"text-danger\" [class.d-none]='password.valid || password.untouched '>password is required</small>\n  \n        </div>\n      </div><div class=\"form-group\">        \n          <div class=\"col-sm-offset-2 col-sm-10\">\n            <button  [disabled]=\"myForm.invalid  || clicked\" type=\"submit\" class=\"btn btn-primary\">SignUp<span [class.d-none]=\"!clicked\" class=\"spinner-border spinner-border-sm text-light ml-1\" role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n            </span></button>\n          </div>\n        </div>\n\n      </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar></ng2-slim-loading-bar>  \n\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/class-details/class-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/class-details/class-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n        <mat-tab label=\"Students\" >\n                <mat-form-field>\n                        <input matInput (keyup)=\"applyFilter1($event.target.value)\" placeholder=\"Filter\">\n                        </mat-form-field>\n                        <table mat-table [dataSource]=\"dataSource1\" class=\"mat-elevation-z8\">\n                \n                        <ng-container matColumnDef=\"position\">\n                                <th mat-header-cell *matHeaderCellDef> No. </th>\n                                <td mat-cell *matCellDef=\"let element;let i = index\"> {{i+1}} </td>\n                        </ng-container>\n                        \n                        <ng-container matColumnDef=\"name\">\n                                <th mat-header-cell *matHeaderCellDef> Name </th>\n                                <td mat-cell *matCellDef=\"let element \"><a href=\"students/{{element._id}}\">{{element.name}}</a></td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"roll\">\n                                <th mat-header-cell *matHeaderCellDef> Roll </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.roll}} </td>\n                        </ng-container>\n                        \n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\"></tr>\n                        </table>\n                                              \n         </mat-tab>\n        <mat-tab label=\"Teachers\">\n        <mat-form-field>\n                <input matInput (keyup)=\"applyFilter2($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <table mat-table [dataSource]=\"dataSource2\" class=\"mat-elevation-z8\">\n\n                <!--- Note that these columns can be defined in any order.\n                        The actual rendered columns are set as a property on the row definition\" -->\n                \n                <!-- Position Column -->\n                <ng-container matColumnDef=\"position\">\n                <th mat-header-cell *matHeaderCellDef> No. </th>\n                <td mat-cell *matCellDef=\"let element;let i = index\"> {{i+1}} </td>\n                </ng-container>\n                \n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                <th mat-header-cell *matHeaderCellDef> Name </th>\n                <td mat-cell *matCellDef=\"let element\"><a href=\"teachers/{{element._id}}\">{{element.name}}</a></td>\n                </ng-container>\n                \n                <!-- Weight Column -->\n                <ng-container matColumnDef=\"subject\">\n                        <th mat-header-cell *matHeaderCellDef> subject </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.subject.subject}} </td>\n                </ng-container>\n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"phone\">\n                <th mat-header-cell *matHeaderCellDef> phone </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n                </ng-container>\n                \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\"></tr>\n                </table>\n        </mat-tab>\n        <mat-tab label=\"Mark List\">\n                <ul class='list-group'>\n                  <li class='list-group-item' *ngFor='let test of Information.test'><a href=\"tests/{{test._id}}\">{{test.test}}</a></li>\n                </ul><br>\n                <a href=\"tests/create\"><button class='btn btn-primary'>Add test</button></a>\n        </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/class-form/class-form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/class-form/class-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\"  (ngSubmit)='onSubmit()' novalidate #myForm=\"ngForm\" method=\"POST\" role=\"form\">\n    \n    <strong [class.d-none]='!errorMsg' class='text-danger'>Class already exists</strong>\n     <div class=\"form-group\">\n       <label class=\"control-label col-sm-2\" for=\"Class\">Class:</label>\n       <div class=\"col-sm-10\">\n         <input type=\"number\" class=\"form-control\" [class.is-invalid]='Class.touched && Class.invalid' id=\"Class\" #Class=\"ngModel\" placeholder=\"Enter class\" name=\"Class\" [(ngModel)]='class_.Class' required>\n         <small class=\"text-danger\" [class.d-none]='Class.valid || Class.untouched'>class is required</small>\n       </div>\n     </div>\n     <div class=\"form-group\">        \n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button  [disabled]=\"myForm.invalid  || clicked\" type=\"submit\" class=\"btn btn-primary\">Add Class<span [class.d-none]=\"!clicked\" class=\"spinner-border spinner-border-sm text-light m-1\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n          </span></button>\n        </div>\n      </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/index/index.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab label=\"students\" >  \n      <div class=\"container\" style=\"padding: 20px;\">\n          <mat-form-field>\n              <input matInput (keyup)=\"applyFilter1($event.target.value)\" placeholder=\"Filter\">\n            </mat-form-field>\n              <table mat-table [dataSource]=\"dataSource1\" class=\"mat-elevation-z8\">\n          \n                  <ng-container matColumnDef=\"position\">\n                    <th mat-header-cell *matHeaderCellDef> No. </th>\n                    <td mat-cell *matCellDef=\"let element;let i = index\"> {{i+1}} </td>\n                  </ng-container>\n                \n                  <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef> Name </th>\n                    <td mat-cell *matCellDef=\"let element \"><a href=\"students/{{element._id}}\">{{element.name}}</a></td>\n                  </ng-container>\n                \n                  <ng-container matColumnDef=\"class\">\n                    <th mat-header-cell *matHeaderCellDef> Class </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.class.class}} </td>\n                  </ng-container>\n                \n                  <ng-container matColumnDef=\"roll\">\n                    <th mat-header-cell *matHeaderCellDef> Roll </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.roll}} </td>\n                  </ng-container>\n                \n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\"></tr>\n                </table>\n      </div>\n      <div  style=\"padding: 10px;\">\n        <a href=\"students/create\"><button class=\"btn btn-primary\">Add student</button></a>\n      </div>\n       \n              \n     </mat-tab>\n    <mat-tab label=\"Teachers\">\n      <div *ngIf=\"show\" class=\"container\" style=\"padding: 20px;\">\n          <mat-form-field>\n              <input matInput (keyup)=\"applyFilter2($event.target.value)\" placeholder=\"Filter\">\n      </mat-form-field>\n      <table mat-table [dataSource]=\"dataSource2\" class=\"mat-elevation-z8\">\n\n          <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n        \n          <!-- Position Column -->\n          <ng-container matColumnDef=\"position\">\n            <th mat-header-cell *matHeaderCellDef> No. </th>\n            <td mat-cell *matCellDef=\"let element;let i = index\"> {{i+1}} </td>\n          </ng-container>\n        \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\"><a href=\"teachers/{{element._id}}\">{{element.name}}</a></td>\n          </ng-container>\n        \n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"subject\">\n                  <th mat-header-cell *matHeaderCellDef> subject </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.subject.subject}} </td>\n          </ng-container>\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"phone\">\n            <th mat-header-cell *matHeaderCellDef> phone </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n          </ng-container>\n        \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\"></tr>\n        </table>\n      </div>\n      <div  *ngIf=\"show\" style=\"padding: 10px;\">\n          <a href=\"teachers/create\"><button class=\"btn btn-primary\">Add Teacher</button></a>\n     </div>\n     <div *ngIf=\"!show\" style = \"padding-top:15%;padding-left:35%;\">\n        <i class=\"fas fa-spinner fa-pulse fa-6x\"></i>\n     </div>\n\n       \n    </mat-tab>\n    <mat-tab label =\"Classes\">\n      <div *ngIf=\"show\">\n          <ul class=\"list-group\">\n              <li class=\"list-group-item\" *ngFor='let item of classes'><a href=\"classes/{{item._id}}\">{{item.class}}th class</a></li>\n          </ul>\n          <div  style=\"padding: 10px;\">\n              <a href=\"classes/create\"><button class=\"btn btn-primary\">Add Class</button></a>\n         </div>\n      </div>  \n      <div *ngIf=\"!show\" style = \"padding-top:15%;padding-left:35%;\">\n          <i class=\"fas fa-spinner fa-pulse fa-6x\"></i>\n      </div>\n    </mat-tab>\n    <mat-tab label =\"Subjects\">\n      <div *ngIf=\"show\">\n          <ul class=\"list-group\">\n              <li class=\"list-group-item\" *ngFor='let item of subjects'><a href=\"subjects/{{item._id}}\">{{item.subject}}</a></li>\n           </ul>\n           <div  style=\"padding: 10px;\">\n              <a href=\"subjects/create\"><button class=\"btn btn-primary\">Add subject</button></a>\n         </div>\n      </div>\n      <div *ngIf=\"!show\" style = \"padding-top:15%;padding-left:35%;\">\n          <i class=\"fas fa-spinner fa-pulse fa-6x\"></i>\n      </div>\n        \n    </mat-tab>\n    \n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary sticky-top\">\n    <a class=\"navbar-brand\" href=\"#\">SCHOOL</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"admin/login\">Login <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li *ngIf='isLoggedIn()' class=\"nav-item active\">\n            <a class=\"nav-link \" href=\"index\">Index</a>\n          </li>\n       <li class=\"nav-item active\">\n          <a class=\"nav-link \" href=\"admin/signup\">Create new Account</a>\n        </li>\n        <li *ngIf='isLoggedIn()' class=\"nav-item dropdown active\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fa fa-user\"></i>\n          </a>\n          <div  class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">profile</a>\n            <a class=\"dropdown-item\"  (click)='logOut()'  >Logout</a>\n          </div>\n         \n        </li>\n\n      </ul>  \n    </div>\n</nav>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student-details/student-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student-details/student-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label='Details'>\n      <div class='container' style=\"padding-left: 20%;padding-top: 10%;\" >\n          <mat-card class=\"example-card\" style=\"width:80%;\">\n                  <mat-card-content>\n                     <h6>Name : {{student.name}}</h6> \n                     <h6>Class :{{student.class.class}}</h6>\n                     <h6>Roll : {{student.roll}}</h6>\n                     <h6>Father Name : {{student.father_name}}</h6>\n                     <h6>Mother Nmae : {{student.mother_name}}</h6>\n                     <h6>Date of Birth : {{student.dob | date:'mediumDate'}}</h6>\n                     <h6>Aadhar Number : {{student.aadhar}}</h6>\n                  </mat-card-content>\n                  <mat-card-actions>\n                    <a href=\"students/update/{{student._id}}\"><button mat-raised-button color=\"primary\" >Update</button></a>\n                  </mat-card-actions>\n                </mat-card>\n     \n</div>\n  </mat-tab>\n  <mat-tab label=\"Marks\">\n   \n  </mat-tab>\n\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student-form/student-form.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student-form/student-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2> student details</h2>\n  <form class=\"form-horizontal\"  (ngSubmit)='onSubmit()' novalidate #myForm=\"ngForm\" method=\"POST\" role=\"form\">\n   <strong [class.d-none]='!errorMsg' class='text-danger'>Sudent already exists</strong>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"name\">Full name:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" [class.is-invalid]='name.touched && name.invalid' id=\"name\" #name=\"ngModel\" placeholder=\"Enter student name\" name=\"name\" [(ngModel)]='student.name' required>\n        <small class=\"text-danger\" [class.d-none]='name.valid || name.untouched'>Name is required</small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"class\">class:</label>\n      <div class=\"col-sm-10\">\n       <select (blur)=\"validateClass(Class.value)\" (change)=\"validateClass(Class.value)\" #Class=\"ngModel\" class=\"form-control\" name=\"class\" placeholder=\"select class\" [class.is-invalid]=\"classEroor && Class.touched\" [(ngModel)]='student.Class'>\n            <option value=\"default\">Select class</option>\n            <option *ngFor='let class of classes' value= {{class._id}} >{{class.class}}</option>\n        </select>\n        <small class=\"text-danger\" [class.d-none]='!classEroor || Class.untouched '>Please select a class</small>\n\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"roll\">roll no:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"number\" class=\"form-control\" [class.is-invalid]='roll.touched && roll.invalid ' id=\"roll\" #roll=\"ngModel\" placeholder=\"Enter student roll number\" name=\"roll\" [(ngModel)]='student.roll' required>\n        <small class=\"text-danger\" [class.d-none]='roll.valid || roll.untouched'>Roll number is required</small>\n\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"dob\">dob:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"date\" class=\"form-control\" id=\"dob\" placeholder=\"Enter dob\" name=\"dob\" [(ngModel)]='student.dob'  required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"father_name\">Father name:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [class.is-invalid]=\"father.invalid && father.touched\" class=\"form-control\" id=\"father_name\" placeholder=\"Enter Father name\" name=\"father_name\" [(ngModel)]='student.father_name' #father =\"ngModel\" required>\n        <small class=\"text-danger\" [class.d-none]='father.valid || father.untouched'>Father name is required</small>\n\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"mother_name\">Mother name:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"mother_name\" [class.is-invalid]='mother.touched && mother.invalid' placeholder=\"Enter Mother name\" name=\"mother_name\" [(ngModel)]='student.mother_name' #mother=\"ngModel\" required>\n        <small class=\"text-danger\" [class.d-none]='mother.valid || mother.untouched'>Mother name is required</small>\n\n      </div>\n    </div>\n      <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"aadhar\">Aadhar number:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"number\" class=\"form-control\" id=\"aadhar\" [class.is-invalid]='aadhar.touched && aadhar.invalid' placeholder=\"Enter Aadhar\" name=\"aadhar\" [(ngModel)]='student.aadhar' pattern=\"^\\d{12}$\" #aadhar='ngModel' required>\n       <div *ngIf=\"aadhar.errors && (aadhar.touched && aadhar.invalid)\">\n          <small class=\"text-danger\" *ngIf=\"aadhar.errors.required\">aadhar number is required</small>\n          <small class=\"text-danger\" *ngIf=\"aadhar.errors.pattern\">aadhar number must be 12 digit</small>\n       </div>\n\n      </div>\n    </div>\n \n    <div class=\"form-group\">        \n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button  [disabled]=\"myForm.invalid ||classEroor || clicked\" type=\"submit\" class=\"btn btn-primary\">Add student<span [class.d-none]=\"!clicked\" class=\"spinner-border spinner-border-sm text-light m-1\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n        </span></button>\n      </div>\n    </div>\n  </form>\n  \n  \n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student-update/student-update.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student-update/student-update.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2> student details</h2>\n    <form class=\"form-horizontal\"  (ngSubmit)='onSubmit()' novalidate #myForm=\"ngForm\" method=\"POST\" role=\"form\">\n     <strong [class.d-none]='!errorMsg' class='text-danger'>Sudent already exists</strong>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"name\">Full name:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [class.is-invalid]='name.touched && name.invalid' id=\"name\" #name=\"ngModel\" placeholder=\"Enter student name\" name=\"name\" [(ngModel)]='student.name' required>\n          <small class=\"text-danger\" [class.d-none]='name.valid || name.untouched'>Name is required</small>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"class\">class:</label>\n        <div class=\"col-sm-10\">\n         <select (blur)=\"validateClass(Class.value)\" (change)=\"validateClass(Class.value)\" #Class=\"ngModel\" class=\"form-control\" name=\"class\" placeholder=\"select class\" [class.is-invalid]=\"classEroor && Class.touched\" [(ngModel)]='student.Class'>\n              <option value=\"default\">Select class</option>\n              <option *ngFor='let class of classes' value= {{class._id}} >{{class.class}}</option>\n          </select>\n          <small class=\"text-danger\" [class.d-none]='!classEroor || Class.untouched '>Please select a class</small>\n  \n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"roll\">roll no:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"number\" class=\"form-control\" [class.is-invalid]='roll.touched && roll.invalid ' id=\"roll\" #roll=\"ngModel\" placeholder=\"Enter student roll number\" name=\"roll\" [(ngModel)]='student.roll' required>\n          <small class=\"text-danger\" [class.d-none]='roll.valid || roll.untouched'>Roll number is required</small>\n  \n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"dob\">dob:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"date\" class=\"form-control\" id=\"dob\" placeholder=\"Enter dob\" name=\"dob\" [(ngModel)]='student.dob'  required>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"father_name\">Father name:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" [class.is-invalid]=\"father.invalid && father.touched\" class=\"form-control\" id=\"father_name\" placeholder=\"Enter Father name\" name=\"father_name\" [(ngModel)]='student.father_name' #father =\"ngModel\" required>\n          <small class=\"text-danger\" [class.d-none]='father.valid || father.untouched'>Father name is required</small>\n  \n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"mother_name\">Mother name:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"mother_name\" [class.is-invalid]='mother.touched && mother.invalid' placeholder=\"Enter Mother name\" name=\"mother_name\" [(ngModel)]='student.mother_name' #mother=\"ngModel\" required>\n          <small class=\"text-danger\" [class.d-none]='mother.valid || mother.untouched'>Mother name is required</small>\n  \n        </div>\n      </div>\n        <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"aadhar\">Aadhar number:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"number\" class=\"form-control\" id=\"aadhar\" [class.is-invalid]='aadhar.touched && aadhar.invalid' placeholder=\"Enter Aadhar\" name=\"aadhar\" [(ngModel)]='student.aadhar' pattern=\"^\\d{12}$\" #aadhar='ngModel' required>\n         <div *ngIf=\"aadhar.errors && (aadhar.touched && aadhar.invalid)\">\n            <small class=\"text-danger\" *ngIf=\"aadhar.errors.required\">aadhar number is required</small>\n            <small class=\"text-danger\" *ngIf=\"aadhar.errors.pattern\">aadhar number must be 12 digit</small>\n         </div>\n  \n        </div>\n      </div>\n   \n      <div class=\"form-group\">        \n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button  [disabled]=\"myForm.invalid  ||classEroor || clicked\" type=\"submit\" class=\"btn btn-primary\">Update Details<span [class.d-none]=\"!clicked\" class=\"spinner-border spinner-border-sm text-light m-1\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n          </span></button>\n        </div>\n      </div>\n    </form>\n   \n    \n  </div>\n  \n\n\n\n  \n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/subject-details/subject-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subject-details/subject-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\">\n    <mat-list-item role=\"listitem\" *ngFor='let item of teachers'><a href=\"teachers/{{item._id}}\">{{item.name}}</a></mat-list-item>\n</mat-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/subject-form/subject-form.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subject-form/subject-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  subject-form works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/teacher-details/teacher-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/teacher-details/teacher-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container\" style=\"padding-left: 15%;padding-top: 10%;text-align:center;\" *ngIf=\"teacher\">\n        <table class=\"table table-borderless\">\n          <thead>\n            <tr>\n              <th colspan=\"3\" >{{teacher.name.toUpperCase()}}</th>\n            </tr>\n          </thead>\n          <tbody>\n        <tr>\n              <td>NAME</td>\n              <td>{{teacher.name}}</td>\n        </tr>\n        <tr>\n              <td>CLASS</td>\n             \n              <td>\n                <a *ngFor=\"let cl of teacher.class\">\n                    {{cl.class}}th\n                </a> Class\n                \n              </td>\n        </tr>\n        <tr>\n              <td>SUBJECT</td>\n                <td>{{teacher.subject.subject}}</td>\n        </tr>\n        <tr>\n              <td>PHONE</td>\n              <td>{{teacher.phone}}</td>\n        </tr>\n        <tr>\n              <td>EMAIL</td>\n              <td>{{teacher.email}}</td>\n        </tr>\n       \n            \n          </tbody>\n        </table>\n        <br>\n        \n        <a href=\"teachers/update/{{teacher._id}}\"><button type=\"button\" class=\"btn btn-primary\">Update Details</button></a>\n        \n        </div>\n               \n          "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/teacher-form/teacher-form.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/teacher-form/teacher-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2> Teacher Details</h2>\n    <form class=\"form-horizontal\"  (ngSubmit)='onSubmit()' novalidate #myForm=\"ngForm\" method=\"POST\" role=\"form\">\n     <strong [class.d-none]='!errorMsg' class='text-danger'>Teacher already exists</strong>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"name\">Full name:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [class.is-invalid]='name.touched && name.invalid' id=\"name\" #name=\"ngModel\" placeholder=\"Enter teacher name\" name=\"name\" [(ngModel)]='teacher.name' required>\n          <small class=\"text-danger\" [class.d-none]='name.valid || name.untouched'>Name is required</small>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"class\">Select Subject:</label>\n        <div class=\"col-sm-10\">\n         <select (blur)=\"validateClass(subject.value)\" (change)=\"validateClass(subject.value)\" #subject=\"ngModel\" class=\"form-control\" name=\"subject\" placeholder=\"select subject\" [class.is-invalid]=\"subjectError && subject.touched\" [(ngModel)]='teacher.subject'>\n              <option value=\"default\">Select subject</option>\n              <option *ngFor='let subject of subjects' value= {{subject._id}} >{{subject.subject}}</option>\n          </select>\n          <small class=\"text-danger\" [class.d-none]='!subjectError || subject.untouched '>Please select a subject</small>\n  \n        </div>\n      </div>\n      \n      <div class=\"form-group\">\n          <mat-form-field>\n              <mat-label>Select Classes</mat-label>\n              <mat-select  multiple #Class =\"ngModel\"  name=\"Class\" [(ngModel)]=\"teacher.Class\">\n                <mat-option *ngFor=\"let class of classes\" value={{class._id}}>{{class.class}}</mat-option>\n              </mat-select>\n          </mat-form-field>\n      \n        </div>\n      \n\n      \n      <div class=\"form-group \" >\n        <label class=\"control-label col-sm-2\" for=\"phone\">phone number:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"number\" class=\"form-control\" id=\"phone\" [class.is-invalid]='phone.touched && phone.invalid' placeholder=\"Enter phone\" name=\"phone\" [(ngModel)]='teacher.phone' pattern=\"^\\d{10}$\" #phone='ngModel' required>\n         <div *ngIf=\"phone.errors && (phone.touched && phone.invalid)\">\n            <small class=\"text-danger\" *ngIf=\"phone.errors.required\">phone number is required</small>\n            <small class=\"text-danger\" *ngIf=\"phone.errors.pattern\">phone number must be 10 digit</small>\n         </div>\n  \n        </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\" for=\"email\">Email</label>\n          <div class=\"col-sm-10\">\n            <input type=\"email\" class=\"form-control\" [class.is-invalid]='email.touched && email.invalid' id=\"email\" #email=\"ngModel\" placeholder=\"Enter  email\" name=\"email\" [(ngModel)]='teacher.email' [email]=\"true\" required>\n            <div *ngIf=\"email.errors && (email.touched && email.invalid)\">\n                <small class=\"text-danger\" *ngIf=\"email.errors.required\">email is required</small>\n                <small class=\"text-danger\" *ngIf=\"email.errors.email\">Invalid email address</small>\n             </div>           </div>\n        </div>\n\n   \n      <div class=\"form-group\">        \n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button  [disabled]=\"myForm.invalid || subjectError || clicked\" type=\"submit\" class=\"btn btn-primary\">Add Teacher<span [class.d-none]=\"!clicked\" class=\"spinner-border spinner-border-sm text-light m-1\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n          </span></button>\n        </div>\n      </div>\n    </form>\n    \n    \n  </div>\n  \n  \n\n\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/teacher-update/teacher-update.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/teacher-update/teacher-update.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2> Teacher Details</h2>\n    <form class=\"form-horizontal\"  (ngSubmit)='onSubmit()' novalidate #myForm=\"ngForm\" method=\"POST\" role=\"form\">\n     <strong [class.d-none]='!errorMsg' class='text-danger'>Try submitting the form again</strong>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"name\">Full name:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [class.is-invalid]='name.touched && name.invalid' id=\"name\" #name=\"ngModel\" placeholder=\"Enter teacher name\" name=\"name\" [(ngModel)]='teacher.name' required>\n          <small class=\"text-danger\" [class.d-none]='name.valid || name.untouched'>Name is required</small>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"class\">Select Subject:</label>\n        <div class=\"col-sm-10\">\n         <select (blur)=\"validateClass(subject.value)\" (change)=\"validateClass(subject.value)\" #subject=\"ngModel\" class=\"form-control\" name=\"subject\" placeholder=\"select subject\" [class.is-invalid]=\"subjectError && subject.touched\" [(ngModel)]='teacher.subject'>\n              <option value=\"default\">Select subject</option>\n              <option *ngFor='let subject of subjects' value= {{subject._id}} >{{subject.subject}}</option>\n          </select>\n          <small class=\"text-danger\" [class.d-none]='!subjectError || subject.untouched '>Please select a subject</small>\n  \n        </div>\n      </div>\n     \n    <div class=\"form-group\">\n      <mat-form-field>\n          <mat-label>Select Classes</mat-label>\n          <mat-select  multiple #Class =\"ngModel\"  name=\"Class\" [(ngModel)]=\"teacher.Class\">\n            <mat-option *ngFor=\"let class of classes\" value={{class._id}}>{{class.class}}</mat-option>\n          </mat-select>\n      </mat-form-field>\n  \n    </div>\n    \n      <div class=\"form-group \" >\n        <label class=\"control-label col-sm-2\" for=\"phone\">phone number:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"number\" class=\"form-control\" id=\"phone\" [class.is-invalid]='phone.touched && phone.invalid' placeholder=\"Enter phone\" name=\"phone\" [(ngModel)]='teacher.phone' pattern=\"^\\d{10}$\" #phone='ngModel' required>\n         <div *ngIf=\"phone.errors && (phone.touched && phone.invalid)\">\n            <small class=\"text-danger\" *ngIf=\"phone.errors.required\">phone number is required</small>\n            <small class=\"text-danger\" *ngIf=\"phone.errors.pattern\">phone number must be 10 digit</small>\n         </div>\n  \n        </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\" for=\"email\">Email</label>\n          <div class=\"col-sm-10\">\n            <input type=\"email\" class=\"form-control\" [class.is-invalid]='email.touched && email.invalid' id=\"email\" #email=\"ngModel\" placeholder=\"Enter  email\" name=\"email\" [(ngModel)]='teacher.email' [email]=\"true\" required>\n            <div *ngIf=\"email.errors && (email.touched && email.invalid)\">\n                <small class=\"text-danger\" *ngIf=\"email.errors.required\">email is required</small>\n                <small class=\"text-danger\" *ngIf=\"email.errors.email\">Invalid email address</small>\n             </div>          </div>\n        </div>\n\n   \n      <div class=\"form-group\">        \n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button  [disabled]=\"myForm.invalid || subjectError || clicked\" type=\"submit\" class=\"btn btn-primary\">Update Details<span [class.d-none]=\"!clicked\" class=\"spinner-border spinner-border-sm text-light m-1\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n          </span></button>\n        </div>\n      </div>\n    </form>\n    \n    \n  </div>\n\n \n\n\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test-form/test-form.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test-form/test-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\"  (ngSubmit)='onSubmit()' novalidate #myForm=\"ngForm\" method=\"POST\" role=\"form\">\n    \n        <strong [class.d-none]='!errorMsg' class='text-danger'>Test name already exists</strong>\n         <div class=\"form-group\">\n           <label class=\"control-label col-sm-2\" for=\"test\">Test:</label>\n           <div class=\"col-sm-10\">\n             <input type=\"text\" class=\"form-control\" [class.is-invalid]='Test.touched && Test.invalid' id=\"test\" #Test=\"ngModel\" placeholder=\"Enter Test\" name=\"test\" [(ngModel)]='test.name' required>\n             <small class=\"text-danger\" [class.d-none]='Test.valid || Test.untouched'>Test name is required</small>\n           </div>\n         </div>\n         <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"class\">class:</label>\n                <div class=\"col-sm-10\">\n                 <select (blur)=\"validateClass(Class.value)\" (change)=\"validateClass(Class.value)\" #Class=\"ngModel\" class=\"form-control\" name=\"class\" placeholder=\"select class\" [class.is-invalid]=\"classError && Class.touched\" [(ngModel)]='test.Class'>\n                      <option value=\"default\">Select class</option>\n                      <option *ngFor='let class of classes' value= {{class._id}} >{{class.class}}</option>\n                  </select>\n                  <small class=\"text-danger\" [class.d-none]='!classError || Class.untouched '>Please select a class</small>\n          \n                </div>\n              </div>\n         <div class=\"form-group\">        \n            <div class=\"col-sm-offset-2 col-sm-10\">\n              <button  [disabled]=\"myForm.invalid  || clicked || classError\" type=\"submit\" class=\"btn btn-primary\">Add Test<span [class.d-none]=\"!clicked\" class=\"spinner-border spinner-border-sm text-light m-1\" role=\"status\">\n                  <span class=\"sr-only\">Loading...</span>\n              </span></button>\n            </div>\n          </div>\n    </form>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test-marks/test-marks.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test-marks/test-marks.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <ag-grid-angular #ag [class.d-none]='clicked'\n        style=\"width: 100%; height: 50%;\" \n        class=\"ag-theme-balham\"\n        [rowData]=\"rowData\" \n        [columnDefs]=\"columnDefs\"\n      \n        >\n      </ag-grid-angular>\n      <button class= 'btn btn-primary' [class.d-none]=\"clicked\" [disabled]='clicked'  (click)=\"onSubmit()\">submit<span [class.d-none]=\"!clicked\" class=\"spinner-border spinner-border-sm text-light m-1\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </span></button>\n\n<div [class.d-none]='!clicked' class='container' style =\"padding-top: 15%;padding-left: 40%\">\n    <i style='color: silver' class=\"fas fa-sync fa-10x fa-spin\"></i>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin-login/admin-login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-login/admin-login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.ts ***!
  \******************************************************/
/*! exports provided: AdminLogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLogInComponent", function() { return AdminLogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _student_form_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../student-form/form.service */ "./src/app/student-form/form.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_signup_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-signup/admin */ "./src/app/admin-signup/admin.ts");





let AdminLogInComponent = class AdminLogInComponent {
    constructor(formService, router) {
        this.formService = formService;
        this.router = router;
    }
    ngOnInit() {
        this.admin = new _admin_signup_admin__WEBPACK_IMPORTED_MODULE_4__["Admin"]('', '');
        this.clicked = false;
        this.errorMsg = false;
    }
    onSubmit() {
        this.clicked = true;
        this.formService.loginAdmin(this.admin).subscribe((data) => { this.router.navigate(['index']); }, (err) => { this.clicked = false; this.errorMsg = true; });
    }
};
AdminLogInComponent.ctorParameters = () => [
    { type: _student_form_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AdminLogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-login',
        template: __webpack_require__(/*! raw-loader!./admin-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin-login/admin-login.component.html"),
        styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/admin-login/admin-login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_student_form_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AdminLogInComponent);



/***/ }),

/***/ "./src/app/admin-signup/admin-signup.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin-signup/admin-signup.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXNpZ251cC9hZG1pbi1zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-signup/admin-signup.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-signup/admin-signup.component.ts ***!
  \********************************************************/
/*! exports provided: AdminSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSignupComponent", function() { return AdminSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _student_form_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../student-form/form.service */ "./src/app/student-form/form.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin */ "./src/app/admin-signup/admin.ts");





let AdminSignupComponent = class AdminSignupComponent {
    constructor(formService, router) {
        this.formService = formService;
        this.router = router;
    }
    ngOnInit() {
        this.admin = new _admin__WEBPACK_IMPORTED_MODULE_4__["Admin"]("", "");
        this.clicked = false;
        this.errorMsg = false;
    }
    onSubmit() {
        this.clicked = true;
        this.formService.signupAdmin(this.admin).subscribe(res => console.log('HTTP response', res), err => { this.clicked = false; this.errorMsg = true; }, () => { this.router.navigate(['admin', 'login']); });
    }
};
AdminSignupComponent.ctorParameters = () => [
    { type: _student_form_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AdminSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-signup',
        template: __webpack_require__(/*! raw-loader!./admin-signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin-signup/admin-signup.component.html"),
        styles: [__webpack_require__(/*! ./admin-signup.component.css */ "./src/app/admin-signup/admin-signup.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_student_form_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AdminSignupComponent);



/***/ }),

/***/ "./src/app/admin-signup/admin.ts":
/*!***************************************!*\
  !*** ./src/app/admin-signup/admin.ts ***!
  \***************************************/
/*! exports provided: Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return Admin; });
class Admin {
    constructor(username, password) { }
}
Admin.ctorParameters = () => [
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/all-in-one.service.ts":
/*!***************************************!*\
  !*** ./src/app/all-in-one.service.ts ***!
  \***************************************/
/*! exports provided: AllInOneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllInOneService", function() { return AllInOneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let AllInOneService = class AllInOneService {
    constructor(http, auth, router) {
        this.http = http;
        this.auth = auth;
        this.router = router;
        this.studentUrl = 'api/student/list';
        this.teacherUrl = 'api/teacher/list';
        this.subjectUrl = 'api/subject/list';
        this.classUrl = 'api/class/list';
        this.marksurl = 'api/marks';
        this.classDetailsUrl = 'api/class/';
        this.subjectDetailsUrl = 'api/subject/';
    }
    get_students() {
        if (this.auth.isLoggedIn()) {
            return this.http.get(this.studentUrl, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        else {
            this.router.navigate(['']);
        }
    }
    get_Classes() {
        if (this.auth.isLoggedIn()) {
            return this.http.get(this.classUrl, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        else {
            this.router.navigate(['']);
        }
    }
    get_Subjects() {
        if (this.auth.isLoggedIn()) {
            return this.http.get(this.subjectUrl, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        else {
            this.router.navigate(['']);
        }
    }
    get_Teachers() {
        if (this.auth.isLoggedIn()) {
            return this.http.get(this.teacherUrl, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        else {
            this.router.navigate(['']);
        }
    }
    get_Marks() {
        if (this.auth.isLoggedIn()) {
            return this.http.get(this.marksurl, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        else {
            this.router.navigate(['']);
        }
    }
    get_Class_Details(id) {
        if (this.auth.isLoggedIn()) {
            return this.http.get(this.classDetailsUrl + id, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        else {
            this.router.navigate(['']);
        }
    }
    get_Subject_Details(id) {
        if (this.auth.isLoggedIn()) {
            return this.http.get(this.subjectDetailsUrl + id, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        else {
            this.router.navigate(['']);
        }
    }
    get_Index_Details() {
        if (this.auth.isLoggedIn()) {
            // const students = this.http.get<IStudent[]>(this.studentUrl,
            //   { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.handleError));
            const classes = this.http.get(this.classUrl, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
            const teachers = this.http.get(this.teacherUrl, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
            const subjects = this.http.get(this.subjectUrl, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([classes, teachers, subjects]);
        }
        else {
            this.router.navigate(['']);
        }
    }
    handleError(errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error(`client side error : ${errorResponse.status}`);
        }
        else {
            console.error(`server side error : ${errorResponse.status}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(errorResponse.statusText);
    }
};
AllInOneService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AllInOneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AllInOneService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _test_marks_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-marks-resolver.service */ "./src/app/test-marks-resolver.service.ts");
/* harmony import */ var _test_marks_test_marks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-marks/test-marks.component */ "./src/app/test-marks/test-marks.component.ts");
/* harmony import */ var _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-form/test-form.component */ "./src/app/test-form/test-form.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _subject_details_subject_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject-details/subject-details.component */ "./src/app/subject-details/subject-details.component.ts");
/* harmony import */ var _subject_details_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subject-details-resolver.service */ "./src/app/subject-details-resolver.service.ts");
/* harmony import */ var _teacher_update_teacher_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teacher-update/teacher-update.component */ "./src/app/teacher-update/teacher-update.component.ts");
/* harmony import */ var _teacher_form_teacher_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teacher-form/teacher-form.component */ "./src/app/teacher-form/teacher-form.component.ts");
/* harmony import */ var _resolvers_subject_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/subject-resolver.service */ "./src/app/resolvers/subject-resolver.service.ts");
/* harmony import */ var _student_update_student_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student-update/student-update.component */ "./src/app/student-update/student-update.component.ts");
/* harmony import */ var _class_details_class_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./class-details/class-details.component */ "./src/app/class-details/class-details.component.ts");
/* harmony import */ var _class_details_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./class-details-resolver.service */ "./src/app/class-details-resolver.service.ts");
/* harmony import */ var _teacher_details_teacher_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./teacher-details/teacher-details.component */ "./src/app/teacher-details/teacher-details.component.ts");
/* harmony import */ var _resolvers_teacher_resolver_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resolvers/teacher-resolver.service */ "./src/app/resolvers/teacher-resolver.service.ts");
/* harmony import */ var _resolvers_class_resolver_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resolvers/class-resolver.service */ "./src/app/resolvers/class-resolver.service.ts");
/* harmony import */ var _resolvers_student_resolver_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resolvers/student-resolver.service */ "./src/app/resolvers/student-resolver.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./student-details/student-details.component */ "./src/app/student-details/student-details.component.ts");
/* harmony import */ var _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./student-form/student-form.component */ "./src/app/student-form/student-form.component.ts");
/* harmony import */ var _class_form_class_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./class-form/class-form.component */ "./src/app/class-form/class-form.component.ts");
/* harmony import */ var _admin_signup_admin_signup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin-signup/admin-signup.component */ "./src/app/admin-signup/admin-signup.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
























const routes = [
    { path: 'index', resolve: { student: _resolvers_student_resolver_service__WEBPACK_IMPORTED_MODULE_16__["StudentResolverService"] }, component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"] },
    { path: 'students/create', resolve: { class_: _resolvers_class_resolver_service__WEBPACK_IMPORTED_MODULE_15__["ClassResolverService"] }, component: _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_20__["StudentFormComponent"] },
    { path: 'teachers/create', resolve: { class_: _resolvers_class_resolver_service__WEBPACK_IMPORTED_MODULE_15__["ClassResolverService"], subject: _resolvers_subject_resolver_service__WEBPACK_IMPORTED_MODULE_9__["SubjectResolverService"] }, component: _teacher_form_teacher_form_component__WEBPACK_IMPORTED_MODULE_8__["TeacherFormComponent"] },
    { path: 'classes/create', component: _class_form_class_form_component__WEBPACK_IMPORTED_MODULE_21__["ClassFormComponent"] },
    { path: 'teachers/update/:id', resolve: { class_: _resolvers_class_resolver_service__WEBPACK_IMPORTED_MODULE_15__["ClassResolverService"], subject: _resolvers_subject_resolver_service__WEBPACK_IMPORTED_MODULE_9__["SubjectResolverService"],
            teacher: _resolvers_teacher_resolver_service__WEBPACK_IMPORTED_MODULE_14__["TeacherResolverService"] }, component: _teacher_update_teacher_update_component__WEBPACK_IMPORTED_MODULE_7__["TeacherUpdateComponent"] },
    { path: 'students/update/:id', resolve: { class: _resolvers_class_resolver_service__WEBPACK_IMPORTED_MODULE_15__["ClassResolverService"], student: _resolvers_student_resolver_service__WEBPACK_IMPORTED_MODULE_16__["StudentResolverService"] },
        component: _student_update_student_update_component__WEBPACK_IMPORTED_MODULE_10__["StudentUpdateComponent"] },
    { path: 'students/:id', resolve: { student: _resolvers_student_resolver_service__WEBPACK_IMPORTED_MODULE_16__["StudentResolverService"] }, component: _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_19__["StudentDetailsComponent"] },
    { path: 'teachers/:id', resolve: { teacher: _resolvers_teacher_resolver_service__WEBPACK_IMPORTED_MODULE_14__["TeacherResolverService"] }, component: _teacher_details_teacher_details_component__WEBPACK_IMPORTED_MODULE_13__["TeacherDetailsComponent"] },
    { path: 'classes/:id', resolve: { classDetails: _class_details_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ClassDetailsResolverService"] }, component: _class_details_class_details_component__WEBPACK_IMPORTED_MODULE_11__["ClassDetailsComponent"] },
    { path: 'subjects/:id', resolve: { subjectDetails: _subject_details_resolver_service__WEBPACK_IMPORTED_MODULE_6__["SubjectDetailsResolverService"] }, component: _subject_details_subject_details_component__WEBPACK_IMPORTED_MODULE_5__["SubjectDetailsComponent"] },
    { path: 'tests/create', resolve: { class: _resolvers_class_resolver_service__WEBPACK_IMPORTED_MODULE_15__["ClassResolverService"] }, component: _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_3__["TestFormComponent"] },
    { path: 'admin/signup', component: _admin_signup_admin_signup_component__WEBPACK_IMPORTED_MODULE_22__["AdminSignupComponent"] },
    { path: 'admin/login', component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_23__["AdminLogInComponent"] },
    { path: 'tests/:id', resolve: { marks: _test_marks_resolver_service__WEBPACK_IMPORTED_MODULE_1__["TestMarksResolverService"] }, component: _test_marks_test_marks_component__WEBPACK_IMPORTED_MODULE_2__["TestMarksComponent"] },
    { path: '**', component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_23__["AdminLogInComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_17__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");




let AppComponent = class AppComponent {
    constructor(lBar, router) {
        this.lBar = lBar;
        this.router = router;
        this.title = 'myschool-website';
        this.router.events.subscribe((event) => {
            console.log(event);
            this.loadingBarInterceptor(event);
        });
    }
    loadingBarInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this.lBar.start();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            this.lBar.complete();
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _test_marks_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-marks-resolver.service */ "./src/app/test-marks-resolver.service.ts");
/* harmony import */ var _index_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-resolver.service */ "./src/app/index-resolver.service.ts");
/* harmony import */ var _admin_signup_admin_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-signup/admin-signup.component */ "./src/app/admin-signup/admin-signup.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _student_form_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-form/form.service */ "./src/app/student-form/form.service.ts");
/* harmony import */ var _class_form_class_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./class-form/class-form.component */ "./src/app/class-form/class-form.component.ts");
/* harmony import */ var _teacher_update_teacher_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teacher-update/teacher-update.component */ "./src/app/teacher-update/teacher-update.component.ts");
/* harmony import */ var _teacher_form_teacher_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teacher-form/teacher-form.component */ "./src/app/teacher-form/teacher-form.component.ts");
/* harmony import */ var _student_update_student_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student-update/student-update.component */ "./src/app/student-update/student-update.component.ts");
/* harmony import */ var _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./student-form/student-form.component */ "./src/app/student-form/student-form.component.ts");
/* harmony import */ var _class_details_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./class-details-resolver.service */ "./src/app/class-details-resolver.service.ts");
/* harmony import */ var _resolvers_teacher_resolver_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resolvers/teacher-resolver.service */ "./src/app/resolvers/teacher-resolver.service.ts");
/* harmony import */ var _resolvers_subject_resolver_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resolvers/subject-resolver.service */ "./src/app/resolvers/subject-resolver.service.ts");
/* harmony import */ var _resolvers_class_resolver_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resolvers/class-resolver.service */ "./src/app/resolvers/class-resolver.service.ts");
/* harmony import */ var _resolvers_student_resolver_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resolvers/student-resolver.service */ "./src/app/resolvers/student-resolver.service.ts");
/* harmony import */ var _all_in_one_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./all-in-one.service */ "./src/app/all-in-one.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./student-details/student-details.component */ "./src/app/student-details/student-details.component.ts");
/* harmony import */ var _class_details_class_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./class-details/class-details.component */ "./src/app/class-details/class-details.component.ts");
/* harmony import */ var _subject_details_subject_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./subject-details/subject-details.component */ "./src/app/subject-details/subject-details.component.ts");
/* harmony import */ var _teacher_details_teacher_details_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./teacher-details/teacher-details.component */ "./src/app/teacher-details/teacher-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _subject_form_subject_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./subject-form/subject-form.component */ "./src/app/subject-form/subject-form.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./test-form/test-form.component */ "./src/app/test-form/test-form.component.ts");
/* harmony import */ var _test_marks_test_marks_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./test-marks/test-marks.component */ "./src/app/test-marks/test-marks.component.ts");





































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_19__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__["NavbarComponent"],
            _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_28__["StudentDetailsComponent"],
            _class_details_class_details_component__WEBPACK_IMPORTED_MODULE_29__["ClassDetailsComponent"],
            _subject_details_subject_details_component__WEBPACK_IMPORTED_MODULE_30__["SubjectDetailsComponent"],
            _teacher_details_teacher_details_component__WEBPACK_IMPORTED_MODULE_31__["TeacherDetailsComponent"],
            _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_11__["StudentFormComponent"],
            _student_update_student_update_component__WEBPACK_IMPORTED_MODULE_10__["StudentUpdateComponent"],
            _teacher_form_teacher_form_component__WEBPACK_IMPORTED_MODULE_9__["TeacherFormComponent"],
            _teacher_update_teacher_update_component__WEBPACK_IMPORTED_MODULE_8__["TeacherUpdateComponent"],
            _class_form_class_form_component__WEBPACK_IMPORTED_MODULE_7__["ClassFormComponent"],
            _subject_form_subject_form_component__WEBPACK_IMPORTED_MODULE_33__["SubjectFormComponent"],
            _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_4__["AdminLogInComponent"],
            _admin_signup_admin_signup_component__WEBPACK_IMPORTED_MODULE_3__["AdminSignupComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_34__["IndexComponent"],
            _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_35__["TestFormComponent"],
            _test_marks_test_marks_component__WEBPACK_IMPORTED_MODULE_36__["TestMarksComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
            ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_27__["SlimLoadingBarModule"].forRoot(),
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__["AgGridModule"].withComponents([]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
        ],
        providers: [_all_in_one_service__WEBPACK_IMPORTED_MODULE_17__["AllInOneService"],
            _resolvers_student_resolver_service__WEBPACK_IMPORTED_MODULE_16__["StudentResolverService"],
            _resolvers_class_resolver_service__WEBPACK_IMPORTED_MODULE_15__["ClassResolverService"],
            _resolvers_subject_resolver_service__WEBPACK_IMPORTED_MODULE_14__["SubjectResolverService"],
            _resolvers_teacher_resolver_service__WEBPACK_IMPORTED_MODULE_13__["TeacherResolverService"],
            _class_details_resolver_service__WEBPACK_IMPORTED_MODULE_12__["ClassDetailsResolverService"],
            _student_form_form_service__WEBPACK_IMPORTED_MODULE_6__["FormService"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _index_resolver_service__WEBPACK_IMPORTED_MODULE_2__["IndexResolverService"],
            _test_marks_resolver_service__WEBPACK_IMPORTED_MODULE_1__["TestMarksResolverService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthenticationService = class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    saveToken(token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    }
    getUserDetails() {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    }
    isLoggedIn() {
        const user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    }
    logout() {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/class-details-resolver.service.ts":
/*!***************************************************!*\
  !*** ./src/app/class-details-resolver.service.ts ***!
  \***************************************************/
/*! exports provided: ClassDetailsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDetailsResolverService", function() { return ClassDetailsResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var _all_in_one_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-in-one.service */ "./src/app/all-in-one.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let ClassDetailsResolverService = class ClassDetailsResolverService {
    constructor(classDetailService) {
        this.classDetailService = classDetailService;
    }
    resolve(route, state) {
        return this.classDetailService.get_Class_Details(route.params.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(err);
        }));
    }
};
ClassDetailsResolverService.ctorParameters = () => [
    { type: _all_in_one_service__WEBPACK_IMPORTED_MODULE_3__["AllInOneService"] }
];
ClassDetailsResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_all_in_one_service__WEBPACK_IMPORTED_MODULE_3__["AllInOneService"]])
], ClassDetailsResolverService);



/***/ }),

/***/ "./src/app/class-details/class-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/class-details/class-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 50%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xhc3MtZGV0YWlscy9jbGFzcy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jbGFzcy1kZXRhaWxzL2NsYXNzLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/class-details/class-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/class-details/class-details.component.ts ***!
  \**********************************************************/
/*! exports provided: ClassDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDetailsComponent", function() { return ClassDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _all_in_one_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../all-in-one.service */ "./src/app/all-in-one.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let ClassDetailsComponent = class ClassDetailsComponent {
    constructor(classService, route) {
        this.classService = classService;
        this.route = route;
    }
    ngOnInit() {
        this.Information = this.route.snapshot.data.classDetails;
        this.displayedColumns1 = ['position', 'name', 'roll'];
        this.displayedColumns2 = ['position', 'name', 'subject', 'phone'];
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.Information.student);
        this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.Information.teacher);
    }
    applyFilter1(filterValue) {
        this.dataSource1.filter = filterValue.trim().toLowerCase();
    }
    applyFilter2(filterValue) {
        this.dataSource2.filter = filterValue.trim().toLowerCase();
    }
};
ClassDetailsComponent.ctorParameters = () => [
    { type: _all_in_one_service__WEBPACK_IMPORTED_MODULE_1__["AllInOneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ClassDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-class-details',
        template: __webpack_require__(/*! raw-loader!./class-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/class-details/class-details.component.html"),
        styles: [__webpack_require__(/*! ./class-details.component.css */ "./src/app/class-details/class-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_all_in_one_service__WEBPACK_IMPORTED_MODULE_1__["AllInOneService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ClassDetailsComponent);



/***/ }),

/***/ "./src/app/class-form/class-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/class-form/class-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYXNzLWZvcm0vY2xhc3MtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/class-form/class-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/class-form/class-form.component.ts ***!
  \****************************************************/
/*! exports provided: ClassFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassFormComponent", function() { return ClassFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _student_form_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../student-form/form.service */ "./src/app/student-form/form.service.ts");
/* harmony import */ var _teacher_form_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../teacher-form/class */ "./src/app/teacher-form/class.ts");





let ClassFormComponent = class ClassFormComponent {
    constructor(formService, router) {
        this.formService = formService;
        this.router = router;
    }
    ngOnInit() {
        this.class_ = new _teacher_form_class__WEBPACK_IMPORTED_MODULE_4__["Class"](1);
        this.errorMsg = false;
        this.clicked = false;
    }
    onSubmit() {
        this.clicked = true;
        this.formService.submitClass(this.class_).subscribe(res => console.log('HTTP response', res), err => { this.clicked = false; this.errorMsg = true; }, () => { this.router.navigate(['classes']); });
    }
};
ClassFormComponent.ctorParameters = () => [
    { type: _student_form_form_service__WEBPACK_IMPORTED_MODULE_3__["FormService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ClassFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-class-form',
        template: __webpack_require__(/*! raw-loader!./class-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/class-form/class-form.component.html"),
        styles: [__webpack_require__(/*! ./class-form.component.css */ "./src/app/class-form/class-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_student_form_form_service__WEBPACK_IMPORTED_MODULE_3__["FormService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], ClassFormComponent);



/***/ }),

/***/ "./src/app/index-resolver.service.ts":
/*!*******************************************!*\
  !*** ./src/app/index-resolver.service.ts ***!
  \*******************************************/
/*! exports provided: IndexResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexResolverService", function() { return IndexResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _all_in_one_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-in-one.service */ "./src/app/all-in-one.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let IndexResolverService = class IndexResolverService {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        return this.service.get_Index_Details();
    }
};
IndexResolverService.ctorParameters = () => [
    { type: _all_in_one_service__WEBPACK_IMPORTED_MODULE_1__["AllInOneService"] }
];
IndexResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_all_in_one_service__WEBPACK_IMPORTED_MODULE_1__["AllInOneService"]])
], IndexResolverService);



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 70%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _all_in_one_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../all-in-one.service */ "./src/app/all-in-one.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let IndexComponent = class IndexComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
        this.information = [];
    }
    ngOnInit() {
        this.show = false;
        this.students = this.route.snapshot.data.student;
        this.service.get_Index_Details().subscribe((data) => {
            this.information = data;
            this.classes = this.information[0];
            this.teachers = this.information[1];
            this.subjects = this.information[2];
            this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.teachers);
            this.show = true;
        });
        this.displayedColumns1 = ['position', 'name', 'class', 'roll'];
        this.displayedColumns2 = ['position', 'name', 'subject', 'phone'];
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.students);
    }
    applyFilter1(filterValue) {
        this.dataSource1.filter = filterValue.trim().toLowerCase();
    }
    applyFilter2(filterValue) {
        this.dataSource2.filter = filterValue.trim().toLowerCase();
    }
};
IndexComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _all_in_one_service__WEBPACK_IMPORTED_MODULE_1__["AllInOneService"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html"),
        styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _all_in_one_service__WEBPACK_IMPORTED_MODULE_1__["AllInOneService"]])
], IndexComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let NavbarComponent = class NavbarComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
    logOut() {
        this.auth.logout();
    }
    isLoggedIn() {
        return this.auth.isLoggedIn();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/resolvers/class-resolver.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/resolvers/class-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: ClassResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassResolverService", function() { return ClassResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _all_in_one_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../all-in-one.service */ "./src/app/all-in-one.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ClassResolverService = class ClassResolverService {
    constructor(classService, router) {
        this.classService = classService;
        this.router = router;
    }
    resolve(route, state) {
        return this.classService.get_Classes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].of(err);
        }));
    }
};
ClassResolverService.ctorParameters = () => [
    { type: _all_in_one_service__WEBPACK_IMPORTED_MODULE_1__["AllInOneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ClassResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_all_in_one_service__WEBPACK_IMPORTED_MODULE_1__["AllInOneService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ClassResolverService);



/***/ }),

/***/ "./src/app/resolvers/student-resolver.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/resolvers/student-resolver.service.ts ***!
  \*******************************************************/
/*! exports provided: StudentResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentResolverService", function() { return StudentResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var _all_in_one_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-in-one.service */ "./src/app/all-in-one.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");







let StudentResolverService = class StudentResolverService {
    constructor(studentService, router) {
        this.studentService = studentService;
        this.router = router;
    }
    resolve(route, state) {
        return (this.studentService.get_students())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(err);
        }));
    }
};
StudentResolverService.ctorParameters = () => [
    { type: _all_in_one_service__WEBPACK_IMPORTED_MODULE_2__["AllInOneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
StudentResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_all_in_one_service__WEBPACK_IMPORTED_MODULE_2__["AllInOneService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], StudentResolverService);



/***/ }),

/***/ "./src/app/resolvers/subject-resolver.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/resolvers/subject-resolver.service.ts ***!
  \*******************************************************/
/*! exports provided: SubjectResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectResolverService", function() { return SubjectResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _all_in_one_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-in-one.service */ "./src/app/all-in-one.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let SubjectResolverService = class SubjectResolverService {
    constructor(subjectService, router) {
        this.subjectService = subjectService;
        this.router = router;
    }
    resolve(route, state) {
        return this.subjectService.get_Subjects()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].of(err);
        }));
    }
};
SubjectResolverService.ctorParameters = () => [
    { type: _all_in_one_service__WEBPACK_IMPORTED_MODULE_2__["AllInOneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SubjectResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_all_in_one_service__WEBPACK_IMPORTED_MODULE_2__["AllInOneService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SubjectResolverService);



/***/ }),

/***/ "./src/app/resolvers/teacher-resolver.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/resolvers/teacher-resolver.service.ts ***!
  \*******************************************************/
/*! exports provided: TeacherResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherResolverService", function() { return TeacherResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _all_in_one_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-in-one.service */ "./src/app/all-in-one.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let TeacherResolverService = class TeacherResolverService {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
    }
    resolve(route, state) {
        return this.teacherService.get_Teachers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].of(err);
        }));
    }
};
TeacherResolverService.ctorParameters = () => [
    { type: _all_in_one_service__WEBPACK_IMPORTED_MODULE_2__["AllInOneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TeacherResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_all_in_one_service__WEBPACK_IMPORTED_MODULE_2__["AllInOneService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], TeacherResolverService);



/***/ }),

/***/ "./src/app/student-details/student-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/student-details/student-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n    text-align: center;\n}\n\n.container {\n    padding-left: 30%;\n    padding-top: 10%;\n}\n\nh6 {\n    padding-bottom: 10px;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1kZXRhaWxzL3N0dWRlbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtZGV0YWlscy9zdHVkZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG5oNiB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/student-details/student-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/student-details/student-details.component.ts ***!
  \**************************************************************/
/*! exports provided: StudentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailsComponent", function() { return StudentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let StudentDetailsComponent = class StudentDetailsComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.students = this.route.snapshot.data.student;
        this.students.forEach(element => {
            if (element._id === this.route.snapshot.params.id) {
                this.student = element;
                console.log(this.student);
            }
        });
    }
};
StudentDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
StudentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-student-details',
        template: __webpack_require__(/*! raw-loader!./student-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/student-details/student-details.component.html"),
        styles: [__webpack_require__(/*! ./student-details.component.css */ "./src/app/student-details/student-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
], StudentDetailsComponent);



/***/ }),

/***/ "./src/app/student-form/form.service.ts":
/*!**********************************************!*\
  !*** ./src/app/student-form/form.service.ts ***!
  \**********************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");







let FormService = class FormService {
    constructor(Http, auth, router) {
        this.Http = Http;
        this.auth = auth;
        this.router = router;
        this.baseurl = 'api/student/';
        this.turl = 'api/teacher/';
        this.curl = 'api/class/';
        this.adurl = 'api/admin/signup';
        this.logurl = 'api/admin/login';
        this.murl = 'api/marks/';
        this.testUrl = 'api/test/create';
        this.testMarksUrl = 'api/test/';
        this.testStudents = 'api/student/test/';
    }
    submitStudent(form) {
        if (this.auth.isLoggedIn()) {
            return this.Http.post(this.baseurl + 'create', form, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
        }
        else {
            this.router.navigate(['']);
        }
    }
    submitTeacher(form) {
        if (this.auth.isLoggedIn()) {
            return this.Http.post(this.turl + 'create', form, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
        }
        else {
            this.router.navigate(['']);
        }
    }
    updateTeacher(form, id) {
        if (this.auth.isLoggedIn()) {
            return this.Http.post(this.turl + id + '/update', form, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
        }
        else {
            this.router.navigate(['']);
        }
    }
    updateStudent(form, id) {
        if (this.auth.isLoggedIn()) {
            return this.Http.post(this.baseurl + id + '/update', form, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
        }
        else {
            this.router.navigate(['']);
        }
    }
    submitClass(form) {
        if (this.auth.isLoggedIn()) {
            return this.Http.post(this.curl + 'create', form, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
        }
        else {
            this.router.navigate(['']);
        }
    }
    submitMarks(id, value) {
        if (this.auth.isLoggedIn()) {
            return this.Http.post(this.murl + id, value, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
        }
        else {
            this.router.navigate(['']);
        }
    }
    signupAdmin(form) {
        return this.Http.post(this.adurl, form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    }
    loginAdmin(form) {
        const base = this.Http.post(this.logurl, form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            if (data.token) {
                this.auth.saveToken(data.token);
            }
            return data;
        }));
        return request;
    }
    getMarks(id) {
        if (this.auth.isLoggedIn()) {
            return this.Http.get(this.testMarksUrl + id, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
        }
        else {
            this.router.navigate(['']);
        }
    }
    updateMarks(value) {
        if (this.auth.isLoggedIn()) {
            return this.Http.post(this.murl + '/update', value, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
        }
        else {
            this.router.navigate(['']);
        }
    }
    submitTest(value) {
        if (this.auth.isLoggedIn()) {
            return this.Http.post(this.testUrl, value, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
        }
        else {
            this.router.navigate(['']);
        }
    }
    // get_Students_Test(id) {
    //   if (this.auth.isLoggedIn()) {
    //     return this.Http.get<any>(this.testStudents + id,
    //       { headers: { Authorization: `Bearer ${this.auth.getToken()}` }}).pipe(catchError(this.errorHandler));
    //   } else {
    //     this.router.navigate(['']);
    //   }
    // }
    errorHandler(errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error(`client side error : ${errorResponse.status}`);
        }
        else {
            console.error(`server side error : ${errorResponse.status}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorResponse.statusText);
    }
};
FormService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
FormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], FormService);



/***/ }),

/***/ "./src/app/student-form/student-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/student-form/student-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtZm9ybS9zdHVkZW50LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/student-form/student-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-form/student-form.component.ts ***!
  \********************************************************/
/*! exports provided: StudentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentFormComponent", function() { return StudentFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student */ "./src/app/student-form/student.ts");
/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.service */ "./src/app/student-form/form.service.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");






let StudentFormComponent = class StudentFormComponent {
    constructor(router, route, formService) {
        this.router = router;
        this.route = route;
        this.formService = formService;
    }
    ngOnInit() {
        this.classEroor = true;
        this.clicked = false;
        this.errorMsg = false;
        this.classes = this.route.snapshot.data.class_;
        this.student = new _student__WEBPACK_IMPORTED_MODULE_3__["Student"]('', 'default', null, null, '', '', null);
    }
    validateClass(value) {
        if (value === 'default') {
            this.classEroor = true;
        }
        else {
            this.classEroor = false;
        }
    }
    onSubmit() {
        this.clicked = true;
        this.formService.submitStudent(this.student).subscribe(res => console.log('HTTP response', res), err => { this.clicked = false; this.errorMsg = true; }, () => { this.router.navigate(['index']); });
    }
};
StudentFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"] }
];
StudentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-student-form',
        template: __webpack_require__(/*! raw-loader!./student-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/student-form/student-form.component.html"),
        styles: [__webpack_require__(/*! ./student-form.component.css */ "./src/app/student-form/student-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"]])
], StudentFormComponent);



/***/ }),

/***/ "./src/app/student-form/student.ts":
/*!*****************************************!*\
  !*** ./src/app/student-form/student.ts ***!
  \*****************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
class Student {
    constructor(name, Class, roll, dob, father_name, mother_name, aadhar) {
        this.name = name;
        this.Class = Class;
        this.roll = roll;
        this.dob = dob;
        this.father_name = father_name;
        this.mother_name = mother_name;
        this.aadhar = aadhar;
    }
}
Student.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: Number },
    { type: Date },
    { type: String },
    { type: String },
    { type: Number }
];


/***/ }),

/***/ "./src/app/student-update/student-update.component.css":
/*!*************************************************************!*\
  !*** ./src/app/student-update/student-update.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtdXBkYXRlL3N0dWRlbnQtdXBkYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/student-update/student-update.component.ts":
/*!************************************************************!*\
  !*** ./src/app/student-update/student-update.component.ts ***!
  \************************************************************/
/*! exports provided: StudentUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentUpdateComponent", function() { return StudentUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _student_form_student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../student-form/student */ "./src/app/student-form/student.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var _student_form_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../student-form/form.service */ "./src/app/student-form/form.service.ts");






let StudentUpdateComponent = class StudentUpdateComponent {
    constructor(router, route, formService) {
        this.router = router;
        this.route = route;
        this.formService = formService;
    }
    ngOnInit() {
        this.classEroor = false;
        this.clicked = false;
        this.errorMsg = false;
        const d = new Date();
        this.classes = this.route.snapshot.data.class;
        this.selectedId = this.route.snapshot.paramMap.get('id');
        this.students = this.route.snapshot.data.student;
        this.students.filter((user) => {
            if (user._id === this.selectedId) {
                this.selectedStudent = user;
            }
        });
        console.log(this.selectedStudent);
        this.student = new _student_form_student__WEBPACK_IMPORTED_MODULE_1__["Student"](this.selectedStudent.name, this.selectedStudent.class._id, this.selectedStudent.roll, this.selectedStudent.dob, this.selectedStudent.father_name, this.selectedStudent.mother_name, this.selectedStudent.aadhar);
    }
    validateClass(value) {
        if (value === 'default') {
            this.classEroor = true;
        }
        else {
            this.classEroor = false;
        }
    }
    onSubmit() {
        this.clicked = true;
        console.log(this.student);
        this.formService.updateStudent(this.student, this.selectedId).subscribe(res => console.log('HTTP response', res), err => { this.clicked = false; this.errorMsg = true; }, () => { this.router.navigate(['students', this.selectedId]); });
    }
};
StudentUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _student_form_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"] }
];
StudentUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-student-update',
        template: __webpack_require__(/*! raw-loader!./student-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/student-update/student-update.component.html"),
        styles: [__webpack_require__(/*! ./student-update.component.css */ "./src/app/student-update/student-update.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _student_form_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"]])
], StudentUpdateComponent);



/***/ }),

/***/ "./src/app/subject-details-resolver.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/subject-details-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: SubjectDetailsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDetailsResolverService", function() { return SubjectDetailsResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _all_in_one_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-in-one.service */ "./src/app/all-in-one.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SubjectDetailsResolverService = class SubjectDetailsResolverService {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        return this.service.get_Subject_Details(route.params.id);
    }
};
SubjectDetailsResolverService.ctorParameters = () => [
    { type: _all_in_one_service__WEBPACK_IMPORTED_MODULE_1__["AllInOneService"] }
];
SubjectDetailsResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_all_in_one_service__WEBPACK_IMPORTED_MODULE_1__["AllInOneService"]])
], SubjectDetailsResolverService);



/***/ }),

/***/ "./src/app/subject-details/subject-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/subject-details/subject-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3QtZGV0YWlscy9zdWJqZWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/subject-details/subject-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/subject-details/subject-details.component.ts ***!
  \**************************************************************/
/*! exports provided: SubjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDetailsComponent", function() { return SubjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SubjectDetailsComponent = class SubjectDetailsComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.teachers = this.route.snapshot.data.subjectDetails.teacher;
    }
};
SubjectDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
SubjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-subject-details',
        template: __webpack_require__(/*! raw-loader!./subject-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/subject-details/subject-details.component.html"),
        styles: [__webpack_require__(/*! ./subject-details.component.css */ "./src/app/subject-details/subject-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
], SubjectDetailsComponent);



/***/ }),

/***/ "./src/app/subject-form/subject-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/subject-form/subject-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3QtZm9ybS9zdWJqZWN0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/subject-form/subject-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/subject-form/subject-form.component.ts ***!
  \********************************************************/
/*! exports provided: SubjectFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectFormComponent", function() { return SubjectFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubjectFormComponent = class SubjectFormComponent {
    constructor() { }
    ngOnInit() {
    }
};
SubjectFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subject-form',
        template: __webpack_require__(/*! raw-loader!./subject-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/subject-form/subject-form.component.html"),
        styles: [__webpack_require__(/*! ./subject-form.component.css */ "./src/app/subject-form/subject-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SubjectFormComponent);



/***/ }),

/***/ "./src/app/teacher-details/teacher-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/teacher-details/teacher-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItZGV0YWlscy90ZWFjaGVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/teacher-details/teacher-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/teacher-details/teacher-details.component.ts ***!
  \**************************************************************/
/*! exports provided: TeacherDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherDetailsComponent", function() { return TeacherDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TeacherDetailsComponent = class TeacherDetailsComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.teachers = this.route.snapshot.data.teacher;
        this.teachers.forEach(element => {
            if (element._id === this.route.snapshot.params.id) {
                this.teacher = element;
                console.log(this.teacher);
            }
        });
    }
};
TeacherDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
TeacherDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-teacher-details',
        template: __webpack_require__(/*! raw-loader!./teacher-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/teacher-details/teacher-details.component.html"),
        styles: [__webpack_require__(/*! ./teacher-details.component.css */ "./src/app/teacher-details/teacher-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
], TeacherDetailsComponent);



/***/ }),

/***/ "./src/app/teacher-form/class.ts":
/*!***************************************!*\
  !*** ./src/app/teacher-form/class.ts ***!
  \***************************************/
/*! exports provided: Class */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class", function() { return Class; });
class Class {
    constructor(Class) { }
}
Class.ctorParameters = () => [
    { type: Number }
];


/***/ }),

/***/ "./src/app/teacher-form/teacher-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/teacher-form/teacher-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItZm9ybS90ZWFjaGVyLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/teacher-form/teacher-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/teacher-form/teacher-form.component.ts ***!
  \********************************************************/
/*! exports provided: TeacherFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherFormComponent", function() { return TeacherFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _teacher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher */ "./src/app/teacher-form/teacher.ts");
/* harmony import */ var _student_form_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../student-form/form.service */ "./src/app/student-form/form.service.ts");





let TeacherFormComponent = class TeacherFormComponent {
    constructor(formService, route, router) {
        this.formService = formService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.clicked = false;
        this.classError = false;
        this.errorMsg = false;
        this.teacher = new _teacher__WEBPACK_IMPORTED_MODULE_3__["Teacher"]('', ['default'], 'default', null, '');
        this.teacher.subject = 'default';
        this.subjectError = false;
        this.classes = this.route.snapshot.data.class_;
        this.subjects = this.route.snapshot.data.subject;
    }
    validateClass(value) {
        if (value === 'default') {
            this.subjectError = true;
        }
        else {
            this.subjectError = false;
        }
    }
    onSubmit() {
        this.clicked = true;
        this.formService.submitTeacher(this.teacher).subscribe(res => console.log('HTTP response', res), err => { this.clicked = false; this.errorMsg = true; }, () => { this.router.navigate(['index']); });
    }
};
TeacherFormComponent.ctorParameters = () => [
    { type: _student_form_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
TeacherFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-teacher-form',
        template: __webpack_require__(/*! raw-loader!./teacher-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/teacher-form/teacher-form.component.html"),
        styles: [__webpack_require__(/*! ./teacher-form.component.css */ "./src/app/teacher-form/teacher-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_student_form_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], TeacherFormComponent);



/***/ }),

/***/ "./src/app/teacher-form/teacher.ts":
/*!*****************************************!*\
  !*** ./src/app/teacher-form/teacher.ts ***!
  \*****************************************/
/*! exports provided: Teacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teacher", function() { return Teacher; });
class Teacher {
    constructor(name, Class, subject, phone, email) { }
}
Teacher.ctorParameters = () => [
    { type: String },
    { type: Array },
    { type: String },
    { type: Number },
    { type: String }
];


/***/ }),

/***/ "./src/app/teacher-update/teacher-update.component.css":
/*!*************************************************************!*\
  !*** ./src/app/teacher-update/teacher-update.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItdXBkYXRlL3RlYWNoZXItdXBkYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/teacher-update/teacher-update.component.ts":
/*!************************************************************!*\
  !*** ./src/app/teacher-update/teacher-update.component.ts ***!
  \************************************************************/
/*! exports provided: TeacherUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherUpdateComponent", function() { return TeacherUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _teacher_form_teacher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../teacher-form/teacher */ "./src/app/teacher-form/teacher.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _student_form_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../student-form/form.service */ "./src/app/student-form/form.service.ts");





let TeacherUpdateComponent = class TeacherUpdateComponent {
    constructor(route, formService, router) {
        this.route = route;
        this.formService = formService;
        this.router = router;
    }
    ngOnInit() {
        this.subjectError = false;
        this.errorMsg = false;
        this.clicked = false;
        this.teachers = this.route.snapshot.data.teacher;
        this.classes = this.route.snapshot.data.class_;
        this.subjects = this.route.snapshot.data.subject;
        const id = this.route.snapshot.paramMap.get('id');
        this.selectedId = id;
        this.teachers.forEach(element => {
            if (this.selectedId === element._id) {
                this.selectedTeacher = element;
            }
        });
        this.teacher = new _teacher_form_teacher__WEBPACK_IMPORTED_MODULE_1__["Teacher"](this.selectedTeacher.name, this.selectedTeacher.class._id, this.selectedTeacher.subject._id, this.selectedTeacher.phone, this.selectedTeacher.email);
        this.teacher.Class = [];
        this.selectedTeacher.class.forEach(element => {
            this.teacher.Class.push(element._id);
        });
        this.teacher.name = this.selectedTeacher.name;
        this.teacher.subject = this.selectedTeacher.subject._id;
        this.teacher.phone = this.selectedTeacher.phone;
        this.teacher.email = this.selectedTeacher.email;
        console.log(this.teacher);
    }
    validateClass(value) {
        if (value === 'default') {
            this.subjectError = true;
        }
        else {
            this.subjectError = false;
        }
    }
    onSubmit() {
        this.clicked = true;
        console.log(this.teacher);
        this.formService.updateTeacher(this.teacher, this.selectedId).subscribe(res => console.log('HTTP response', res), err => { this.clicked = false; this.errorMsg = true; }, () => { this.router.navigate(['teachers', this.selectedId]); });
    }
};
TeacherUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _student_form_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TeacherUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-teacher-update',
        template: __webpack_require__(/*! raw-loader!./teacher-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/teacher-update/teacher-update.component.html"),
        styles: [__webpack_require__(/*! ./teacher-update.component.css */ "./src/app/teacher-update/teacher-update.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _student_form_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], TeacherUpdateComponent);



/***/ }),

/***/ "./src/app/test-form/test-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/test-form/test-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtZm9ybS90ZXN0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test-form/test-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/test-form/test-form.component.ts ***!
  \**************************************************/
/*! exports provided: TestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFormComponent", function() { return TestFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _student_form_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student-form/form.service */ "./src/app/student-form/form.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test */ "./src/app/test-form/test.ts");





let TestFormComponent = class TestFormComponent {
    constructor(formService, router, route) {
        this.formService = formService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.errorMsg = false;
        this.clicked = false;
        this.test = new _test__WEBPACK_IMPORTED_MODULE_4__["Test"]('', 'default');
        this.classError = true;
        this.classes = this.route.snapshot.data.class;
    }
    validateClass(value) {
        if (value === 'default') {
            this.classError = true;
        }
        else {
            this.classError = false;
        }
    }
    onSubmit() {
        this.clicked = true;
        console.log(this.test);
        this.formService.submitTest(this.test).subscribe((data) => { this.router.navigateByUrl('tests/' + data._id); }, (err) => { this.clicked = false; this.errorMsg = true; });
    }
};
TestFormComponent.ctorParameters = () => [
    { type: _student_form_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
TestFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-form',
        template: __webpack_require__(/*! raw-loader!./test-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/test-form/test-form.component.html"),
        styles: [__webpack_require__(/*! ./test-form.component.css */ "./src/app/test-form/test-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_student_form_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], TestFormComponent);



/***/ }),

/***/ "./src/app/test-form/test.ts":
/*!***********************************!*\
  !*** ./src/app/test-form/test.ts ***!
  \***********************************/
/*! exports provided: Test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test", function() { return Test; });
class Test {
    constructor(name, Class) {
        this.name = name;
        this.Class = Class;
    }
}
Test.ctorParameters = () => [
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/test-marks-resolver.service.ts":
/*!************************************************!*\
  !*** ./src/app/test-marks-resolver.service.ts ***!
  \************************************************/
/*! exports provided: TestMarksResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestMarksResolverService", function() { return TestMarksResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _student_form_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-form/form.service */ "./src/app/student-form/form.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TestMarksResolverService = class TestMarksResolverService {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        return this.service.getMarks(route.params.id);
    }
};
TestMarksResolverService.ctorParameters = () => [
    { type: _student_form_form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"] }
];
TestMarksResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_student_form_form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"]])
], TestMarksResolverService);



/***/ }),

/***/ "./src/app/test-marks/test-marks.component.css":
/*!*****************************************************!*\
  !*** ./src/app/test-marks/test-marks.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtbWFya3MvdGVzdC1tYXJrcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test-marks/test-marks.component.ts":
/*!****************************************************!*\
  !*** ./src/app/test-marks/test-marks.component.ts ***!
  \****************************************************/
/*! exports provided: TestMarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestMarksComponent", function() { return TestMarksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _student_form_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../student-form/form.service */ "./src/app/student-form/form.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let TestMarksComponent = class TestMarksComponent {
    constructor(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
        this.Information = [];
    }
    ngOnInit() {
        this.clicked = false;
        this.errorMsg = false;
        this.id = this.route.snapshot.params.id;
        this.Information = this.route.snapshot.data.marks.marks;
        this.columnDefs = [
            { headerName: 'name', field: 'name', hide: true },
            { headerName: 'class', field: 'class', hide: true },
            { headerName: 'test', field: 'test', hide: true },
            { headerName: 'Name', field: 'Name' },
            { headerName: 'Class', field: 'Class', width: 70, },
            { headerName: 'Telugu', field: 'telugu', editable: true, width: 70, cellClass: 'number-cell' },
            { headerName: 'Hindi', field: 'hindi', editable: true, width: 70, cellClass: 'number-cell' },
            { headerName: 'English', field: 'english', editable: true, width: 70, cellClass: 'number-cell' },
            { headerName: 'Maths', field: 'maths', editable: true, width: 70, cellClass: 'number-cell' },
            { headerName: 'Natural science', field: 'natural_science', width: 120, editable: true, cellClass: 'number-cell' },
            { headerName: 'Physics', field: 'physics', editable: true, width: 70, cellClass: 'number-cell' },
            { headerName: 'Social', field: 'social', editable: true, width: 70, cellClass: 'number-cell' },
            { headerName: 'Total', field: 'total', editable: true, width: 70, cellClass: 'number-cell',
                valueGetter: function aPlusBValueGetter(params) {
                    return (parseInt(params.data.telugu, 10) + parseInt(params.data.hindi, 10) +
                        parseInt(params.data.english, 10) + parseInt(params.data.maths, 10) + parseInt(params.data.natural_science, 10)
                        + parseInt(params.data.physics, 10) + parseInt(params.data.social, 10));
                } }
        ];
        this.rowData = [];
        console.log(this.Information);
        if (this.Information.length === 0) {
            this.Information = this.route.snapshot.data.marks.student;
            console.log(this.Information);
            this.Information.forEach(element2 => {
                this.rowData.push({ test: this.id, name: element2._id,
                    class: element2.class._id, Name: element2.name, Class: element2.class.class
                });
            });
        }
        else {
            this.Information.forEach(element => {
                this.rowData.push({ test: element.test, Name: element.name.name,
                    Class: element.class.class, name: element.name._id, class: element.class._id,
                    telugu: element.telugu, hindi: element.hindi, english: element.english, maths: element.maths,
                    natural_science: element.natural_science, physics: element.physics, social: element.social });
            });
        }
    }
    onSubmit() {
        this.clicked = true;
        this.service.submitMarks(this.id, this.rowData).subscribe(res => console.log('HTTP response', res), err => { this.clicked = false; this.errorMsg = true; }, () => { this.clicked = false; });
    }
};
TestMarksComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _student_form_form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TestMarksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-test-marks',
        template: __webpack_require__(/*! raw-loader!./test-marks.component.html */ "./node_modules/raw-loader/index.js!./src/app/test-marks/test-marks.component.html"),
        styles: [__webpack_require__(/*! ./test-marks.component.css */ "./src/app/test-marks/test-marks.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _student_form_form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TestMarksComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sravan/Desktop/web_dev/myapp/myschool-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map