import React from 'react';
import { Redirect } from 'react-router-dom';

const Admin = () => { //보통 어드민 페이지는 권한이 있어야 하니까 검사후 리다이렉트하게 만들자
    const isAdmin = false;
    return isAdmin
      ? <h3>Admin</h3>
      : <Redirect to="/"/>
}

export default Admin;