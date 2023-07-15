export default {
  route: {
    dashboard: 'Dashboard',
    systemManage: 'System Management',
    userManage: 'User Management',
    roleManage: 'Role Management',
    menuManage: 'Menu Management',
    permissionManage: 'Directive Permission',
    systemMonitor: 'System Monitor',
    operationLog: 'Operation Log',
    apiDoc: 'API Document',
    druidMonitor: 'Druid Monitor',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    i18n: 'I18n',
    externalLink: 'External Link',
    profile: 'Profile'
  },
  navbar: {
    dashboard: 'Dashboard',
    github: 'Github',
    logOut: 'Log Out',
    profile: 'Profile',
    theme: 'Theme',
    size: 'Global Size'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    tagsView: 'Open Tags-View',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Sidebar Logo'
  },
  common: {
    ok: 'OK',
    cancel: 'Cancel',
    search: 'Search',
    title: 'Prompt',
    add: 'Add',
    delete: 'Delete',
    edit: 'Edit',
    pChoose: 'Please choose',
    enabled: 'Enabled',
    disabled: 'Disabled',
    success: 'Success',
    empty: 'Empty',
    sort: 'Sort',
    save: 'Save',
    close: 'Close',
    operate: 'Operate'
  },
  login: {
    title: 'Login Form',
    logIn: 'Login',
    username: 'Username',
    password: 'Password',
    any: 'any'
  },
  profile: {
    personalInfo: 'Information',
    account: 'Account',
    modifyPass: 'Password',
    nickname: 'Nickname',
    userType: 'UserType',
    phone: 'Phone',
    email: 'Email',
    roles: 'Roles',
    createTime: 'CreateTime',
    confirmPwd: 'Confirm Password',
    phoneRuleMsg: 'Please enter the correct phone number',
    emailRuleMsg: 'Please input the correct email address',
    accountSaveSucceed: 'Account information saved successfully',
    passwordSaveSucceed: 'Change password saved successfully',
    equalToPassMsg: 'The two entered passwords do not match',
    passLimitMsg: 'The recommended password length is 6 to 20 characters'
  },
  system: {
    // User Management Page
    username: 'Username',
    userType: 'Type',
    userRank: 'Rank',
    password: 'Password',
    nickname: 'Nickname',
    sex: 'Gender',
    man: 'Man',
    woman: 'Woman',
    status: 'Status',
    phone: 'Phone',
    email: 'Email',
    createTime: 'CreateTime',
    resetPass: 'Reset Password',
    editRole: 'Edit Role',
    addUser: 'Add User',
    oldPwd: 'Old Password',
    newPwd: 'New Password',
    roleScope: 'Role Scope',
    addUserSucceed: 'User added successfully',
    updateSucceed: 'Update successful',
    resetPassSucceed: 'Password reset successful',
    deleteSucceed: 'Deletion successful',
    resetPassMsg: 'Please enter the reset password',
    searchUserPlaceholder: 'Enter username or nickname to search',
    updateUserRoleMessage: 'User role updated successfully. Do you want to refresh immediately?',
    handleDeleteMessage: 'This operation will permanently delete the data. Do you want to continue?',
    // Role Management Page
    roleName: 'Role Name',
    roleCode: 'Role Code',
    roleDesc: 'Role Description',
    menu: 'Menu',
    viewPermission: 'View Permission',
    editMenu: 'Edit Menu',
    addRole: 'Add Role',
    roleDelStartMsg: 'Confirm deleting ',
    roleDelEndMsg: ' role?',
    confirmRoleMsg: 'Role permissions updated successfully. Do you want to refresh immediately?',
    addRoleSucceed: 'Role added successfully',
    // Menu Management Page
    menuTitle: 'Menu Title',
    menuName: 'Menu Name',
    menuPath: 'Menu Path',
    menuRedirect: 'Redirect',
    component: 'Component',
    hidden: 'Hidden',
    menuLevel: 'Menu Level',
    childPosition: 'Child Position',
    menuIcon: 'Menu Icon',
    menuHidden: 'Menu Hidden',
    menuSort: 'Menu Sort',
    addMenu: 'Add Menu',
    topLevel: 'Top Level',
    childLevel: 'Child Level',
    addMenuSucceed: 'Menu added successfully. Do you want to refresh immediately?',
    updateMenuSucceed: 'Menu updated successfully. Do you want to refresh immediately?',
    deleteClickMsg: 'This action will delete the menu. Do you want to continue?',
    delChildNode: 'Please delete the child nodes',
    editSucceed: 'Edit successful',
    enterMenuPath: 'Please enter menu path',
    enterComponent: 'Please enter component',
    enterMenuTitle: 'Please enter menu title',
    enterMenuIcon: 'Please enter menu icon',
    enterMenuRedirect: 'Required when the node is a menu directory',
    chooseLevel: 'Please choose the level',
    chooseChildPosition: 'Please choose the child position',
    // Permission Management Page
    permissionNum: 'ID',
    permissionName: 'Permission Name',
    permissionCode: 'Permission Code',
    description: 'Description',
    resourcesId: 'Resource ID',
    resourcesType: 'Resource Type',
    source: 'Permission Source',
    operationScope: 'Operation Scope',
    permissionPlaceholder: 'Enter permission name or operation scope to search'
  },
  monitor: {
    // Log Page
    logNum: 'ID',
    identity: 'Operator',
    remoteAddress: 'Address',
    actionType: 'Action Type',
    statusCode: 'Status',
    operatingTime: 'Operation Time',
    elapsedTime: 'Elapsed Time',
    content: 'Operation Content',
    exceptionInfo: 'Exception Information',
    handleClearMsg: 'This operation will permanently clear log data. Do you want to continue?',
    emptySucceed: 'Successfully cleared',
    searchLogPlaceholder: 'Enter log or ip to search'
  }
}
