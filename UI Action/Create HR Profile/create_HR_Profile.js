var userHRProfile = new GlideRecord('u_hr_sys_user');  
  
//Search for the users name using the user reference variable on the catalog form.  
userHRProfile.addQuery('email',current.email);  
userHRProfile.query();  
if (userHRProfile.next()) {  
    action.setRedirectURL(userHRProfile);
}else{
	var createHRProfile = new GlideRecord('u_hr_sys_user');
	createHRProfile.initialize(); 
	createHRProfile.first_name = current.first_name;
	createHRProfile.u_user = current.sys_id;
	createHRProfile.last_name = current.last_name; 
	createHRProfile.title = current.title; 
	createHRProfile.manager = current.manager;
	createHRProfile.email = current.email; 
	createHRProfile.department = current.department; 
	createHRProfile.phone = current.phone; 
	createHRProfile.mobile_phone = current.mobile_phone; 
	createHRProfile.time_zone = current.time_zone;

	createHRProfile.insert();
	action.setRedirectURL(createHRProfile);
}
