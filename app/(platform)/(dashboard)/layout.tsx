import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "./_components/navbar";

const DashboardOrganizationLayout = ({
        children
    }:{
        children : React.ReactNode
    }) => {
    return(
        <div className="h-full">
            <Navbar/>
            {children}
        </div>
    )
}

export default DashboardOrganizationLayout;