var userHRProfile = new GlideRecord('u_hr_sys_user');  
//Search for the users name using the user reference variable on the catalog form.  
userHRProfile.addQuery('email',current.email);  
userHRProfile.query();  
if (userHRProfile.next()) {  
    action.setRedirectURL(userHRProfile);
}
