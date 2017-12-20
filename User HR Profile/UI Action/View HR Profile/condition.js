(current.getTableName() != 'u_hr_sys_user')&& ( gs.getUserID() == current.sys_id || (gs.getSession().getRoles().indexOf('u_hr_admin') >-1))
