import React from 'react'
import { Outlet } from 'react-router'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { Navitems,MobileSidebar } from 'Components'

const AdminLayout = () => {
  return (
    <div className='admin-layout '>
       <MobileSidebar/>
       <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
             <Navitems/>
        </SidebarComponent>
       </aside>
       <aside className="children">
             <Outlet />
       </aside>
      <main>
      
      </main>
    </div>
  )
}

export default AdminLayout
