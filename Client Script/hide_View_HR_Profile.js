function onLoad() {
   //view_HR_Profile_Action	
	var gr = new GlideRecord('u_hr_sys_user');
	gr.addQuery('u_user.sys_id', g_form.getUniqueValue());
	gr.query();
	if(gr.next()){
		if( g_user.userID == g_form.getUniqueValue() || g_user.hasRoleExactly('u_hr_admin')){
			
		}else{
			hideHRProfile();
		}
	}else{
		hideHRProfile();
	}
}
function hideHRProfile(){
	g_form.hideRelatedList('u_hr_sys_user.u_user');
	var items = $$('a').each(function(item){
		if(item.innerHTML.indexOf('View HR Profile') > -1){
			item.hide();  
		}
	});
}
