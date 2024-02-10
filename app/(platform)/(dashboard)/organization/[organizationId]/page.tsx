import { auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {

    const {userId, orgId} = auth();

    return (
        <div>
        <h1>OrganizationIdPage {orgId}</h1>
        </div>
    );
}

export default OrganizationIdPage;