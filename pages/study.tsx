import CardView, { Card } from "@/components/card";
import Layout from "@/components/layout";
import { useState } from "react";

interface StudyProps {

}

const Study = (props: StudyProps) => {
    let [currentCard, setCurrentCard] = useState({ front: "front", back: "back" } as Card)

    const onSuccess = () => {
        setCurrentCard({ front: "success", back: "success back" } as Card)
    }

    const onFailure = () => {
        setCurrentCard({ front: "failure", back: "failure back" } as Card)
    }


    return (
        <Layout>
            <div className="flex flex-col h-screen items-center justify-center">
                <CardView card={currentCard} onSuccess={onSuccess} onFailure={onFailure} />
            </div>
        </Layout>
    );
}

export default Study;