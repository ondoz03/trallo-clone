import { db } from "@/lib/db";
import { Board } from "./board";
import { Form } from "./form";

const OrganizationIdPage = async () => {
    const boards = await db.board.findMany();

    return (
        <div className="flex flex-col space-y-4">
           <Form/>

            <div className="space-y-2">
                {boards.map((board) => (
                    // <div key={board.id}>{board.title}</div>

                    <Board key={board.id} title={board.title} id={board.id} />
                ))}
            </div>

        </div>

    );
}

export default OrganizationIdPage;